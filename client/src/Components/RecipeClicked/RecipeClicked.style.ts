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
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.5s all;
    width: 400px;
    height: 500px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
    }
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

export const Img = styled.img`
  transition: 0.5s all;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;

  @media ${theme.desktop} {
    transition: all 0.5s;
    margin-right: 0.5rem;
    width: 400px;
    height: 500px;
    background-color: #eee;
  }

  @media ${theme.tablet} {
    transition: all 0.5s;
    margin-bottom: 0.5rem;
    width: 300px;
    height: 375px;
    background-color: #eee;
  }

  @media ${theme.mobile} {
    transition: all 0.5s;
    margin-bottom: 0.5rem;
    width: 200px;
    height: 250px;
    background-color: gray;
  }
`;

export const NameArea = styled.div`
  display: flex;
  margin: 0.5rem 0rem 1rem 0rem;
`;
export const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Gmarket Sans TTF';
  font-weight: 300;
  width: 90%;
  transition: 0.5s all;

  @media ${theme.desktop} {
    transition: 0.5s all;
    font-size: 1.5rem;
  }
  @media ${theme.tablet} {
    transition: 0.5s all;
    font-size: 1.5rem;
  }
  @media ${theme.mobile} {
    transition: 0.5s all;
    font-size: 1.1rem;
  }
`;
export const LikesImgArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
`;
export const LikesImg = styled.img`
  transition: 0.5s all;
  width: 0.8rem;
  height: 0.8rem;
  cursor: pointer;
`;

export const Title = styled.div`
  transition: 0.5s all;
  font-family: 'Gmarket Sans TTF';
  font-weight: 300;
  margin-top: 1.4rem;
  width: 100%;

  @media ${theme.mobile} {
    transition: 0.5s all;
    font-size: 0.9rem;
  }
`;

export const Content = styled.div`
  transition: 0.5s all;
  font-family: 'Gmarket Sans TTF';
  font-weight: 200;
  padding-left: 0.5rem;
  width: 100%;
  transition: 0.5s all;
  margin-top: 0.5rem;

  @media ${theme.mobile} {
    transition: 0.5s all;
    font-size: 0.9rem;
  }
`;

export const Tag = styled.span`
  transition: 0.5s all;
  display: inline-block;
  font-family: 'Gmarket Sans TTF';
  font-weight: 200;
  font-size: 0.7rem;
  border: 1px solid #000;
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  margin: 0.5rem 0rem 0rem 0.5rem;
`;

export const Ingredient = styled.div`
  transition: 0.5s all;
  display: inline-block;
  font-family: 'Gmarket Sans TTF';
  font-weight: 200;
  margin: 0.5rem 0rem 0rem 0.5rem;
  width: 100%;

  @media ${theme.mobile} {
    transition: 0.5s all;
    font-size: 0.9rem;
  }
`;

export const Instruction = styled.div`
  transition: 0.5s all;
  font-family: 'Gmarket Sans TTF';
  font-weight: 200;
  padding-left: 0.5rem;
  width: 100%;
  margin-top: 0.5rem;
  line-height: 150%;

  @media ${theme.mobile} {
    transition: 0.5s all;
    font-size: 0.9rem;
  }
`;
