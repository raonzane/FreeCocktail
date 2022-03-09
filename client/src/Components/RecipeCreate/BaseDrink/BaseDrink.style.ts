import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.div`
  margin-top: 1.4rem;
`;

export const Title = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-weight: 300;
  margin-bottom: 0.5rem;
  width: 100%;

  @media ${theme.mobile} {
    font-size: 0.9rem;
  }
`;

export const Select = styled.select`
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

  @media ${theme.mobile} {
    font-size: 0.9rem;
    height: 1.6rem;
  }
`;

export const Option = styled.option`
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
  margin-bottom: 1.4rem;
  transition: 0.5s all;
  cursor: pointer;
  :focus {
    border: 1px solid #2d2d2d;
    background-color: #2d2d2d;
  }

  @media ${theme.mobile} {
    font-size: 0.9rem;
    height: 1.6rem;
  }
`;
