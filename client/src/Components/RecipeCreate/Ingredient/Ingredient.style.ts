import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.4rem;
`;

export const Title = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-weight: 300;
  margin: 0.1rem 0 0.5rem;
  width: 100%;

  @media ${theme.mobile} {
    font-size: 0.9rem;
  }
`;

export const InputArea = styled.div`
  @media ${theme.desktop} {
    display: flex;
    gap: 5%;
    max-height: 66px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-thumb {
      height: 10%;
      background: #f876de;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(33, 122, 244, 0.1);
    }
  }

  @media ${theme.tablet} {
    display: flex;
    gap: 5%;
  }

  @media ${theme.mobile} {
    display: flex;
    gap: 5%;
  }
`;

export const IngredientArea = styled.div`
  width: 65%;
`;

export const MeasureArea = styled.div`
  width: 30%;
`;

export const Ingredients = styled.input`
  margin-bottom: 0.5rem;
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

export const Measure = styled.input`
  margin-bottom: 0.5rem;
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

export const CenterArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.1rem;
`;

export const PMBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
  font-weight: lighter;
  border: 1px solid #f876de;
  background: transparent;
  border-radius: 50rem;
  font-family: 'Gmarket Sans TTF';
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
`;
