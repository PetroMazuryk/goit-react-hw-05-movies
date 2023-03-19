import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        height: '100vh',

        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Домашня </div>} />
          <Route path="dogs" element={<div>Собаки</div>} />
          <Route path="dogs/:dogId" element={<div>Елемент колекції</div>} />
        </Route>
      </Routes>
    </div>
  );
};
