import styled from 'styled-components';
import { theme } from '../../../styles/theme';

/*
  input height: font-size * 2
  textarea height: font-size * 8

  mobile
    title font-size: 0.9rem
    content font-size: 0.8rem
*/

export const Container = styled.div``;

export const Title = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-weight: 300;
  margin-bottom: 0.5rem;
  width: 100%;

  @media ${theme.mobile} {
    font-size: 0.9rem;
  }
`;

export const Input = styled.input`
  outline: none;
  background-color: #fdfbfe;
  border: 1px solid #e0dde1;
  border-radius: 0.313rem;
  padding-left: 0.5rem;
  font-family: 'Gmarket Sans TTF';
  font-weight: 100;
  font-size: 1rem;
  color: #2d2d2d;
  height: 2rem;
  width: 100%;
  transition: 0.5s all;
  :focus {
    border: 1px solid #2d2d2d;
  }

  @media ${theme.mobile} {
    transition: 0.5s all;
    font-size: 0.8rem;
    height: 1.6rem;
  }
`;
