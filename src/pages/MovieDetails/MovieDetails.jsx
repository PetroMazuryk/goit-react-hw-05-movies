import { useState, useEffect, useRef, Suspense } from 'react';
import { getMovieDetailsById } from 'services/themoviedb.api';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

import imgDefault from '../../imgDefault.jpg';
import { ImArrowLeft } from 'react-icons/im';

import {
  DetailsStyledLink,
  MovieInfoWrapper,
  MovieTextWrapper,
  SubMenuItem,
  SubMenuList,
  SubNavLink,
  DetailsStyledLinkArrow,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const goBackHref = useRef(location.state?.from || '/');

  useEffect(() => {
    try {
      getMovieDetailsById(movieId).then(response => {
        setMovieInfo(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieInfo;

  return (
    <>
      {!isEmpty(movieInfo) && (
        <>
          <MovieInfoWrapper>
            <MovieTextWrapper>
              <h1>
                {title}
                {release_date && (
                  <span
                    style={{
                      padding: '0px 10px',
                      color: 'tomato',
                    }}
                  >
                    ({release_date.slice(0, 4)})
                  </span>
                )}
              </h1>

              <p>User score: {Math.round(vote_average * 10) + '%'}</p>

              <p>
                <b>Overview: </b> {overview}
              </p>

              <p>
                <b>Genres: </b>{' '}
                {genres.length > 0
                  ? genres.map(genre => genre.name).join('; ')
                  : 'There is no information about genres.'}
              </p>
            </MovieTextWrapper>
            <img
              src={
                !poster_path
                  ? imgDefault
                  : `https://image.tmdb.org/t/p/w500/${poster_path}`
              }
              alt={title}
              width="360"
            />
          </MovieInfoWrapper>

          <div>
            <h2 style={{ textAlign: 'center', fontSize: 34 }}>
              Additional information
            </h2>
            <SubMenuList>
              <SubMenuItem>
                <SubNavLink to="cast">Cast</SubNavLink>
              </SubMenuItem>

              <SubMenuItem>
                <SubNavLink to="reviews">Review</SubNavLink>
              </SubMenuItem>
            </SubMenuList>

            <Suspense fallback={<div>LOADING...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}

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
