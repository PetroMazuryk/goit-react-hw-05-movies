import { NavLink, Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Домашня</NavLink>
          </li>
          <li>
            <NavLink to="/dogs">Колекція</NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Outlet />
      </main>
      <footer>Foter</footer>
    </div>
  );
};
