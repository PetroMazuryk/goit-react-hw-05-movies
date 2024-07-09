import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getTrendMovies } from 'services/themoviedb.api';

import imgDefault from '../../imgDefault.jpg';

import {
  Title,
  ImgGalleryList,
  ImgGalleryItem,
  ImgGallery,
  ImgGalleryTitle,
  ImgGalleryVote,
  ImgThumb,
} from './Home.styled';

const Home = () => {
  const [trendMovies, setTrendmovies] = useState([]);
  const location = useLocation;

  useEffect(() => {
    try {
      getTrendMovies().then(response => {
        setTrendmovies([...response.results]);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Title>Trending films today</Title>
      <ImgGalleryList>
        {trendMovies.map(({ poster_path, title, id, vote_average }) => {
          return (
            <ImgGalleryItem key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                <ImgThumb>
                  <ImgGallery
                    src={
                      !poster_path
                        ? imgDefault
                        : `https://image.tmdb.org/t/p/w500/${poster_path}`
                    }
                    alt={title}
                    width="360"
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
export default Home;
