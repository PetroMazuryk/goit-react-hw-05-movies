import styled from 'styled-components';

export const Title = styled.h2`
  display: block;
  justify-content: center;
  text-align: center;
  font-size: 28px;
  margin: 20px auto;
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

export const ImgGalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: calc(100vw - 260px);
  margin: 0 auto;
`;

export const ImgGalleryItem = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding: 6px;
  border-radius: 16px;
  border: 2px solid green;
`;
export const ImgThumb = styled.div`
  height: 460px;
  border: 2px solid green;
  border-radius: 16px;
  overflow: hidden;
`;

export const ImgGallery = styled.img`
  width: 310px;

  transition: transform 250ms linear;

  :hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 480px) {
    width: 360px;
    height: 516px;
  }
`;
export const ImgGalleryTitle = styled.h3`
  font-size: 18px;
  text-align: center;
  margin-top: 10px;
`;
export const ImgGalleryVote = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  border: 2px solid;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a191f;
  background-color: grey;
  color: #fff;
  font-size: 14px;

  border-color: ${props => {
    if (props.children > 7) {
      return 'green';
    } else if (props.children > 6) {
      return 'orange';
    } else {
      return 'tomato';
    }
  }};
`;
