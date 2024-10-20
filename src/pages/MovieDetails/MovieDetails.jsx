import { useState, useEffect, useRef, Suspense } from 'react';
import { getMovieDetailsById, getMovieTrailerById } from 'services/themoviedb.api';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Modal from '../../components/Modal/Modal'
import { isEmpty } from 'lodash';

import imgDefault from '../../imgDefault.jpg';
import { ImArrowLeft } from 'react-icons/im';

import {
  DetailsStyledLink,
  MovieInfoWrapper,
  MovieTextWrapper,
  ImageContainer,
  Image,
  SubMenuItem,
  SubMenuList,
  SubNavLink,
  DetailsStyledLinkArrow,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [trailerUrl, setTrailerUrl] = useState('');
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackHref = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetailsById(movieId);
        setMovieInfo(response);
      } catch (error) {
        setErrorMessage('Error fetching movie details');
      }
    };

    fetchMovieDetails();
    setTrailerUrl('');
    setIsTrailerOpen(false);
  }, [movieId]);

  const handleImageClick = async () => {
    try {
      const trailer = await getMovieTrailerById(movieId);
      setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
      setIsTrailerOpen(true);
    } catch (error) {
      setErrorMessage('Error fetching trailer');
    }
  };

  const closeTrailer = () => {
    setIsTrailerOpen(false);
    setTrailerUrl('');
  };

  const { poster_path, title, release_date, vote_average, overview, genres } = movieInfo;

  return (
    <>
      {errorMessage && <div>{errorMessage}</div>}
      {!isEmpty(movieInfo) && (
        <>
          <MovieInfoWrapper>
            <MovieTextWrapper>
              <h1>
                {title}
                {release_date && (
                  <span style={{ padding: '0px 10px', color: 'tomato' }}>
                    ({release_date.slice(0, 4)})
                  </span>
                )}
              </h1>
              <p>User score: {Math.round(vote_average * 10) + '%'}</p>
              <p><b>Overview: </b>{overview}</p>
              <p><b>Genres: </b>{genres.length > 0 ? genres.map(genre => genre.name).join('; ') : 'No genre info'}</p>
            </MovieTextWrapper>
            <ImageContainer>
            <Image
              src={!poster_path ? imgDefault : `https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
              width="360"
              onClick={handleImageClick}
              style={{ cursor: 'pointer' }}
            />
            </ImageContainer>
          
          </MovieInfoWrapper>

          <div>
            <h2 style={{ textAlign: 'center', fontSize: 34 }}>Additional information</h2>
            <SubMenuList>
              <SubMenuItem><SubNavLink to="cast">Cast</SubNavLink></SubMenuItem>
              <SubMenuItem><SubNavLink to="reviews">Review</SubNavLink></SubMenuItem>
            </SubMenuList>

            <Suspense fallback={<div>LOADING...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}

<Modal isOpen={isTrailerOpen} onClose={closeTrailer}>
<div style={{ borderRadius: '12px', overflow: 'hidden' }}>
  <iframe
    width="100%"
    height="400"
    src={trailerUrl}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Trailer"
  ></iframe>
</div>
      </Modal>

      <DetailsStyledLink to={goBackHref.current}>
        <DetailsStyledLinkArrow>
          <ImArrowLeft />
        </DetailsStyledLinkArrow>
        Go back
      </DetailsStyledLink>
    </>
  );
};

export default MovieDetails;