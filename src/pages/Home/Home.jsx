import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getTrendMovies } from 'services/themoviedb.api';

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
      <h2>Trending films today</h2>
      <ul style={{ display: 'flex', gap: 10, width: 1200 }}>
        {trendMovies.map(({ poster_path, title, id }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                  width="360"
                />
                <h3>{title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Home;
