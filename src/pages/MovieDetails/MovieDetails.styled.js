import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieInfoWrapper = styled.div`
  display: flex;

  justify-content: center;
  padding: 10px;
  margin: 10px auto 20px;
  max-width: 1200px;
`;

export const MovieTextWrapper = styled.div`
  gap: 20px;
  padding: 0 50px;
  width: 500px;
`;

export const SubMenuList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
`;

export const SubNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  display: block;
  width: 100px;
  background-color: lightblue;
  border-radius: 10px;
  padding: 6px 10px;
  &.active {
    color: red;
  }
  &:hover {
    color: green;
    transform: scale(1.05);
  }
`;

export const SubMenuItem = styled.li`
  padding: 10px;
`;

export const DetailsStyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  margin: 20px auto;

  font-size: 20px;
  background-color: lightblue;
  color: red;
  font-weight: 600;
  width: 160px;
  padding: 10px 20px;
  border-radius: 12px;
  opacity: 0.6;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;
export const DetailsStyledLinkArrow = styled.span`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;
