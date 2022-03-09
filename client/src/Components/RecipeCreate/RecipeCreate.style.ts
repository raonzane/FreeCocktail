import styled from 'styled-components';
import { theme } from '../../styles/theme';

/*
  input height: font-size * 2
  textarea height: font-size * 8

  mobile
    title font-size: 0.9rem
    content font-size: 0.8rem
*/

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #000;
  border-radius: 0.3rem;
  padding: 0.5rem;
  transition: all 0.5s;

  @media ${theme.tablet} {
    flex-direction: column;
    transition: all 0.5s;
  }

  @media ${theme.mobile} {
    flex-direction: column;
    transition: all 0.5s;
  }
`;

export const RecipeData = styled.div`
  @media ${theme.desktop} {
    transition: 0.5s all;
    width: 400px;
  }

  @media ${theme.tablet} {
    transition: 0.5s all;
    width: 300px;
  }

  @media ${theme.mobile} {
    transition: 0.5s all;
    width: 200px;
  }
`;

export const InvalidMessage = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 100;
  font-size: 1rem;
  color: #f44336;
  margin: 10px 0 20px 0;
  transition: 0.5s all;
  @media ${theme.mobile} {
    font-size: 0.8rem;
    transition: 0.5s all;
    margin: 5px 0 10px 0;
  }
  @media ${theme.tablet} {
    font-size: 0.9rem;
    transition: 0.5s all;
    margin: 5px 0 10px 0;
  }
`;

export const Br = styled.div`
  height: 27.8px;
`;

export const SubmitBtn = styled.button`
  outline: none;
  border: 1px solid #f876de;
  background: transparent;
  border-radius: 0.313rem;
  padding-left: 0.5rem;
  font-family: 'Gmarket Sans TTF';
  font-weight: 300;
  font-size: 1rem;
  color: #f876de;
  height: 2.6rem;
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

  @media ${theme.mobile} {
    transition: 0.5s all;
    font-size: 0.8rem;
    height: 2.08rem;
  }
`;
