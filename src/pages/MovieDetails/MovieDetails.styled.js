import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import playIcon from '../../images/icon-play.svg';

export const ErrorMassage = styled.h2`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  display: block;
  justify-content: center;
  text-align: center;
  font-size: 28px;
  background-color: aqua;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  max-width: 600px;
  white-space: pre-wrap;

  animation-name: changeColor;
  animation-duration: 3000ms;
  animation-iteration-count: infinite;

  @keyframes changeColor {
    0% {
      color: green;
    }
    50% {
      color: orange;
    }
    100% {
      color: green;
    }
  }
`;

export const MovieInfoWrapper = styled.div`
  padding: 10px;
  margin: 10px auto 20px;
  max-width: 1200px;

  @media screen and (min-width: 480px) {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;

export const MovieTextWrapper = styled.div`
  text-align: center,
    gap: 20px;

  // @media screen and (min-width: 480px) {
  //   width: 360px;
  //   height: 540px;
  // }

  @media screen and (min-width: 768px) {
    width: 360px;
    height: 540px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  min-width: 310px;
  height: 540px;
  overflow: hidden;
  border-radius: 12px;

  &:hover::after {
    pointer-events: none;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 11;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 220px;
    background: url(${playIcon}) no-repeat center center;
    background-size: contain;
    transition: all 0.5s;
  }

  @media screen and (min-width: 480px) {
    min-width: 260px;
    height: 480px;
  }
  @media screen and (min-width: 768px) {
    min-width: 360px;
    height: 540px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  transition: transform 0.3s ease;
  object-fit: cover;

  &:hover {
    transform: scale(1.05);
  }
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
