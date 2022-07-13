import styled, { keyframes } from 'styled-components';
import Main from '../../images/Main.png';
import { theme } from '../../styles/theme';

const move = keyframes`
  0% {
    opacity: 0;
    top: 15rem;
  }
  100% {
    opacity: 1;
    top:0rem;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Section = styled.div`
  height: 80vh;
  margin: 50px 0;
  border: 1px solid blue;
`;

export const LadingModal = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 10%);
  width: 50rem;
  height: 30rem;
  border-radius: 50px;
  background-image: url(${Main});
  background-size: 95% 90%;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${move} 3s 1s 1;

  @media ${theme.tablet} {
    width: 30rem;
    height: 15rem;
    top: 5%;
    left: 66%;
    transform: translate(-50%, 35%);
    background-size: 100% 113%;
  }

  @media ${theme.mobile} {
    width: 23rem;
    height: 13rem;
    transform: translate(-50%, 90%);
    background-size: 100% 113%;
  }
`;

export const LandingNotice = styled.div`
  width: 100%;
  height: 5rem;
  margin: 13rem auto 1.5rem auto;
  font-size: 1.3rem;
  text-align: center;
  line-height: 2;

  @media ${theme.tablet} {
    margin: 6.5rem auto -0.7rem 1rem;
    font-size: 1.1rem;
    line-height: 1.5;
  }

  @media ${theme.mobile} {
    margin: 6.5rem auto -1.5rem 0.5rem;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export const LandingBtnSection = styled.div`
  width: 60%;
  height: 5rem;
  margin: 0px auto;
  display: flex;
`;

export const AgeCheckButton = styled.button`
  width: 7rem;
  height: 3rem;
  margin: 0px auto;
  flex: 1 1 1;
  font-family: Gmarket Sans TTF;
  background-color: #f8ffb5;
  border-radius: 50px;

  &:hover {
    cursor: pointer;
    background-color: #afe0e1;
  }

  @media ${theme.tablet} {
    width: 4rem;
    height: 1.8rem;
    font-size: 0.5rem;
    margin: 0px auto;
  }

  @media ${theme.mobile} {
    width: 3rem;
    height: 1.2rem;
    font-size: 0.5rem;
    margin: 0px auto;
  }
`;

export const PointingHand = styled.img`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 35rem;
  height: 50rem;
  animation: ${move} 3s 1s 1;

  @media ${theme.tablet} {
    width: 15rem;
    height: 25rem;
    top: 5rem;
    left: -2rem;
    transform: rotate(90deg);
  }

  @media ${theme.mobile} {
    width: 13rem;
    height: 20rem;
    transform: translate(-50%, 115%);
  }
`;
