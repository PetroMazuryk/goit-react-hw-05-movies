import axios from 'axios';

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
console.log(REACT_APP_API_KEY);
console.log(REACT_APP_BASE_URL);
// список найпопулярніших фільмів на тижні
export const getTrendMovies = async () => {
  try {
    const response = await axios.get(
      `${REACT_APP_BASE_URL}/trending/movie/week?api_key=${REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching trend movies:', error);
    throw error; // передаємо помилку далі
  }
};

// пошук фільму за ключовим словом
export const getMovieByName = async query => {
  try {
    const response = await axios.get(
      `${REACT_APP_BASE_URL}/search/movie?api_key=${REACT_APP_API_KEY}&query=${query}&page=1`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie by name:', error);
    throw error;
  }
};

// запит повної інформації про фільм
export const getMovieDetailsById = async movieId => {
  try {
    const response = await axios.get(
      `${REACT_APP_BASE_URL}/movie/${movieId}?api_key=${REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// запит інформації про акторський склад
export const getMovieCreditsById = async movieId => {
  try {
    const response = await axios.get(
      `${REACT_APP_BASE_URL}/movie/${movieId}/credits?api_key=${REACT_APP_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};

// запит оглядів фільму
export const getMovieReviewsById = async movieId => {
  try {
    const response = await axios.get(
      `${REACT_APP_BASE_URL}/movie/${movieId}/reviews?api_key=${REACT_APP_API_KEY}&page=1`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};

// запит трейлера фільму
export const getMovieTrailerById = async movieId => {
  try {
    const response = await axios.get(
      `${REACT_APP_BASE_URL}/movie/${movieId}/videos?api_key=${REACT_APP_API_KEY}`
    );
    const trailers = response.data.results.filter(
      video => video.type === 'Trailer' && video.site === 'YouTube'
    );

    if (trailers.length > 0) {
      return trailers[0];
    } else {
      throw new Error('Trailer not found');
    }
  } catch (error) {
    console.error('Error fetching movie trailer:', error);
    throw error;
  }
};
