import styled, { keyframes } from 'styled-components';
// import { theme } from '../../../styles/theme';

const arrow = keyframes`
  50% {
    transform: scale(2);
  }
`;

const slide = keyframes`
  0% {
    transform: translateX(40%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);

  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 5%;
`;

export const ArrowArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  height: 10%;

  cursor: pointer;
  &:hover {
    animation: ${arrow} 1s infinite;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  opacity: 1;
  animation: ${slide} 1s 1;
`;
