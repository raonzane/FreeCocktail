import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);

  }
`;
const slideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0%);

  }

  100% {
    opacity: 0;
    transform: translateY(-50%);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;

  @media ${theme.tablet} {
    transition: 0.5s all;
    width: 325px;
  }
  @media ${theme.mobile} {
    transition: 0.5s all;
    width: 300px;
  }
`;
/* ------------ Title ------------ */
export const TitleWrapper = styled.span`
  margin-bottom: 40px;

  @media ${theme.tablet} {
    margin-bottom: 30px;
  }
  @media ${theme.mobile} {
    margin-bottom: 20px;
  }
`;
export const Title = styled.span`
  font-weight: 300;
  font-size: 1.4rem;
  border-bottom: 5px solid #f876de;
  transition: 0.5s all;

  @media ${theme.tablet} {
    transition: 0.5s all;
    font-size: 1.3rem;
  }
  @media ${theme.mobile} {
    transition: 0.5s all;
    font-size: 1.2rem;
  }
`;

/* ------------ Content ------------ */
export const ContentWrapper = styled.div`
  transition: 0.5s all;
  background: #fdfbfe;
  border: 1px solid #e0dde1;
  border-radius: 0.313rem;
  padding: 1rem 0.5rem;
  font-family: 'Gmarket Sans TTF';
  font-weight: 100;
  font-size: 1rem;
  color: #2d2d2d;
  width: 100%;

  @media ${theme.tablet} {
    font-size: 0.9rem;
    transition: 0.5s all;
  }
  @media ${theme.mobile} {
    font-size: 0.8rem;
    transition: 0.5s all;
  }
`;
export const ContentMessage = styled.div`
  margin-bottom: 1rem;
  word-break: keep-all;
  font-weight: 300;
`;

/* ------------ Image ------------ */
export const ImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;

  @media ${theme.tablet} {
    transition: 0.5s all;
    margin: 0.9rem 0;
  }
  @media ${theme.mobile} {
    transition: 0.5s all;
    margin: 0.8rem 0;
  }
`;
export const Image = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  position: relative;
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.2s;
  z-index: 9998;

  @media ${theme.tablet} {
    transition: 0.5s all;
    width: 9rem;
    height: 9rem;
  }
  @media ${theme.mobile} {
    transition: 0.5s all;
    width: 8rem;
    height: 8rem;
  }
`;
export const HoverArea = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  cursor: pointer;

  &:hover .DefaultImg {
    opacity: 0.3;
  }

  &:hover .HoveredArea {
    opacity: 1;
  }
`;
export const HoveredArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  font-weight: bold;
  position: absolute;
  left: 50;
  top: 50;
  opacity: 0;
  transition: opacity 0.2s;

  @media ${theme.tablet} {
    transition: 0.5s all;
    width: 9rem;
    height: 9rem;
  }
  @media ${theme.mobile} {
    transition: 0.5s all;
    width: 8rem;
    height: 8rem;
  }
`;
export const HoverIcon = styled.img`
  width: 35%;
  height: 35%;
  margin-bottom: 10px;
`;

/* ------------ Input ------------ */
export const InputArea = styled.div`
  margin-bottom: 1rem;
`;
export const InputTitle = styled.div`
  font-weight: 200;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  transition: 0.5s all;

  @media ${theme.tablet} {
    font-size: 0.9rem;
    transition: 0.5s all;
    margin-bottom: 0.3rem;
  }
  @media ${theme.mobile} {
    font-size: 0.8rem;
    transition: 0.5s all;
    margin-bottom: 0.2rem;
  }
`;
export const InputField = styled.input`
  outline: none;
  background: #fdfbfe;
  border: 1px solid #e0dde1;
  border-radius: 0.313rem;
  padding-left: 0.5rem;
  padding-right: 6rem;
  font-family: 'Gmarket Sans TTF';
  font-weight: 100;
  font-size: 1rem;
  color: #2d2d2d;
  height: 2.5rem;
  width: 100%;
  max-len :focus {
    border: 1px solid #2d2d2d;
    /* box-shadow: 0 0 5px #cacaca; */
  }

  @media ${theme.tablet} {
    transition: 0.5s all;
    font-size: 0.9rem;
    height: 2.25rem;
    padding-right: 5rem;
  }
  @media ${theme.mobile} {
    transition: 0.5s all;
    font-size: 0.8rem;
    height: 2rem;
    padding-right: 4.5rem;
  }
`;

/* ------------ ErrMsg ------------ */
export const ErrMsg = styled.div`
  font-weight: 100;
  font-size: 0.8rem;
  color: #f44336;
  padding: 5px 5px 0;
  animation: ${slideIn} 0.5s 1;

  @media ${theme.tablet} {
    font-size: 0.7rem;
    transition: 0.5s all;
  }
  @media ${theme.mobile} {
    font-size: 0.6rem;
    transition: 0.5s all;
  }
`;
export const SucMsg = styled.div`
  font-weight: 100;
  font-size: 0.8rem;
  color: #008000;
  padding: 5px 5px 0;
  animation: ${slideIn} 0.5s 1;

  @media ${theme.tablet} {
    font-size: 0.7rem;
    transition: 0.5s all;
  }
  @media ${theme.mobile} {
    font-size: 0.6rem;
    transition: 0.5s all;
  }
`;
export const Br = styled.div`
  height: 17.8px;

  @media ${theme.tablet} {
    transition: 0.5s all;
    height: 16.2px;
  }
  @media ${theme.mobile} {
    transition: 0.5s all;
    height: 15px;
  }
`;

/* ------------ Button ------------ */
export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5%;
`;

export const Button = styled.button`
  outline: none;
  border: 1px solid #f876de;
  background: transparent;
  border-radius: 0.313rem;
  font-family: 'Gmarket Sans TTF';
  font-weight: 300;
  font-size: 1rem;
  color: #f876de;
  height: 2.5rem;
  width: 100%;
  cursor: pointer;
  transition: 0.5s all;
  &:hover {
    background: #f876de;
    color: #ffffff;
  }
  &:active {
    background: #f876de;
    color: #ffffff;
    box-shadow: 0 0 10px #3d3d3d;
  }

  @media ${theme.tablet} {
    transition: 0.5s all;
    font-size: 0.9rem;
    height: 2.25rem;
  }
  @media ${theme.mobile} {
    transition: 0.5s all;
    font-size: 0.8rem;
    height: 2rem;
  }
`;
export const WithdrawalButton = styled.button`
  outline: none;
  border: 1px solid red;
  background: transparent;
  border-radius: 0.313rem;
  font-family: 'Gmarket Sans TTF';
  font-weight: 300;
  font-size: 1rem;
  color: red;
  height: 2.5rem;
  width: 45%;
  cursor: pointer;
  transition: 0.5s all;
  &:hover {
    background: red;
    color: #ffffff;
  }
  &:active {
    background: red;
    color: #ffffff;
    box-shadow: 0 0 10px #3d3d3d;
  }

  @media ${theme.tablet} {
    transition: 0.5s all;
    font-size: 0.9rem;
    height: 2.25rem;
  }
  @media ${theme.mobile} {
    transition: 0.5s all;
    font-size: 0.8rem;
    height: 2rem;
  }
`;
export const CheckButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 71%;
  width: 5rem;
  height: 2rem;
  outline: none;
  border: 1px solid #f876de;
  background: transparent;
  border-radius: 0.313rem;
  font-family: 'Gmarket Sans TTF';
  font-weight: 300;
  font-size: 0.8rem;
  color: #f876de;
  cursor: pointer;
  transition: 0.5s all;
  &:hover {
    background: #f876de;
    color: #ffffff;
  }
  &:active {
    background: #f876de;
    color: #ffffff;
    box-shadow: 0 0 10px #3d3d3d;
  }

  @media ${theme.tablet} {
    transition: 0.5s all;
    font-size: 0.7rem;
    width: 4rem;
    height: 1.75rem;
    top: 49.7%;
    left: 73.5%;
  }
  @media ${theme.mobile} {
    transition: 0.5s all;
    font-size: 0.6rem;
    width: 3.5rem;
    height: 1.5rem;
    top: 48.9%;
    left: 73.7%;
  }
`;
