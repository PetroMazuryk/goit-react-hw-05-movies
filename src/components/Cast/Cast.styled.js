import styled from 'styled-components';

export const CastWrapper = styled.ul`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px auto;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 20%; */
`;

export const ImgItem = styled.img`
  width: 200px;
  height: 300px;
`;
export const ImgItemText = styled.p`
  margin: 8px;
`;
