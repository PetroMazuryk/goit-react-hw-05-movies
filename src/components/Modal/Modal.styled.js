import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 30px;
  cursor: pointer;
  color: #333;


  &:hover {
    color: red;
  }
`;
