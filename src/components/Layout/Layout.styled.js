import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  // padding: 0px 30px;
  // margin: 0 auto;
  background-color: rgb(255, 250, 250);
  min-height: 100vh;
`;

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: center;
  background-color: lavender;

  box-shadow: 0 2.4px 2px red, 0 6.7px 4px blue, 0 12.5px 6px green,
    0 8px 17.9px purple, 0 4px 3px orange, 0 10px 8px teal;
`;

export const MenuItem = styled.li`
  padding: 10px;
  margin: 6px auto;
  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  min-width: 90px;
  text-align: center;
  font-size: 28px;
  font-weight: 800;
  color: #000;
  padding: 0px 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px #2163f3;
  transition: box-shadow 0.5s ease, transform 0.5s ease;

  &:hover {
    box-shadow: 0 0 10px #2163f3, 0 0 20px #2163f3;
  }
  &.active {
    color: red;
  }
`;
