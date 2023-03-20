import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/movies" element={<div>Movies</div>} />

          <Route path="/movies/:movieId" element={<div>MovieDetails</div>}>
            <Route path="cast" element={<div>Coast</div>} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>

          <Route path="*" element={<div>NotFound</div>} />
        </Route>
      </Routes>

      {/* {<div>ToastContainer</div>} */}
    </>
  );
};
