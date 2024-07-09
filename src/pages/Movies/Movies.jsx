import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'services/themoviedb.api';

import imgDefault from '../../imgDefault.jpg';

import { SearchForm } from 'components/SearchForm/SearchForm';

import {
  ImgGalleryItem,
  ImgGallery,
  ImgGalleryTitle,
  ImgGalleryList,
  Title,
  ImgGalleryVote,
  ImgThumb,
} from 'pages/Home/Home.styled';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';
  const location = useLocation();

  const handleFormSubmit = inputName => {
    setSearchQuery(inputName !== '' ? { query: inputName } : {});
  };

  useEffect(() => {
    if (query) {
      try {
        getMovieByName(query).then(response => {
          setSearchMovies([...response.results]);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit}></SearchForm>

      {searchMovies.length === 0 && query !== '' && (
        <Title
          style={{
            textAlign: 'center',
            fontSize: '30px',
            fontWeight: '600',
          }}
        >
          The search <span style={{ color: 'tomato' }}>{query} </span>
          did not give results
        </Title>
      )}

      {searchMovies.length > 0 && (
        <Title style={{ textAlign: 'center' }}>
          Search results for keyword{' '}
          <span style={{ color: 'red' }}>{query} </span>!
        </Title>
      )}

      <ImgGalleryList>
        {searchMovies.map(({ id, poster_path, title, vote_average }) => {
          return (
            <ImgGalleryItem key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <ImgThumb>
                  <ImgGallery
                    src={
                      !poster_path
                        ? imgDefault
                        : `https://image.tmdb.org/t/p/w500/${poster_path}`
                    }
                    alt={title}
                    width="360"
                    height="530"
                  />
                </ImgThumb>

                <ImgGalleryTitle>{title}</ImgGalleryTitle>
                <ImgGalleryVote>{vote_average.toFixed(1)}</ImgGalleryVote>
              </Link>
            </ImgGalleryItem>
          );
        })}
      </ImgGalleryList>
    </>
  );
};

export default Movies;
