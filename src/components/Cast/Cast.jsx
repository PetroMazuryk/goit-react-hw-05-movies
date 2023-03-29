import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCreditsById } from 'services/themoviedb.api';
import { CastItem, CastWrapper, ImgItem, ImgItemText } from './Cast.styled';
import { ReviewText } from '../Reviews/Reviews.styled';

import imgDefault from '../../imgDefault.jpg';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      getMovieCreditsById(movieId).then(response => {
        setMovieCast(response.cast.splice(0, 8));
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      {!movieCast.length ? (
        <ReviewText>
          Sorry! We do not have information about this movie.
        </ReviewText>
      ) : (
        <CastWrapper>
          {movieCast.map(({ id, profile_path, name, character }) => {
            return (
              <CastItem key={id}>
                <ImgItem
                  src={
                    !profile_path
                      ? imgDefault
                      : `https://image.tmdb.org/t/p/w500/${profile_path}`
                  }
                  alt={`${name}`}
                  width="140px"
                />
                <ImgItemText>{name}</ImgItemText>
                <ImgItemText>{character}</ImgItemText>
              </CastItem>
            );
          })}
        </CastWrapper>
      )}
    </>
  );
};

export default Cast;
