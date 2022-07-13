import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Gmarket Sans TTF';
`;

export const TitleWrapper = styled.span`
  margin-bottom: 40px;

  @media ${theme.tablet} {
    margin-bottom: 30px;
  }
  @media ${theme.mobile} {
    margin-bottom: 30px;
  }
`;

export const Title = styled.span`
  font-weight: 300;
  font-size: 1.4rem;
  border-bottom: 5px solid #f876de;
  transition: 0.5s all;

  @media ${theme.tablet} {
    font-size: 1.3rem;
    transition: 0.5s all;
  }
  @media ${theme.mobile} {
    font-size: 1.2rem;
    transition: 0.5s all;
  }
`;

export const ContentWrapper = styled.div`
  transition: 0.5s all;
  background: #fdfbfe;
  border: 1px solid #e0dde1;
  border-radius: 0.313rem;
  padding: 0.5rem;
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

export const ContentTitle = styled.div`
  font-weight: 300;
  font-size: 1rem;
  margin-top: 0.5rem;
  transition: 0.5s all;

  @media ${theme.tablet} {
    font-size: 0.9rem;
    transition: 0.5s all;
  }
  @media ${theme.mobile} {
    font-size: 0.8rem;
    transition: 0.5s all;
  }
`;

export const Content = styled.div`
  transition: 0.5s all;
  font-family: 'Gmarket Sans TTF';
  font-weight: 100;
  font-size: 0.9rem;
  color: #2d2d2d;
  margin: 0.5rem 0.5rem;
  line-height: 1.2rem;
  word-break: keep-all;
  @media ${theme.tablet} {
    font-size: 0.8rem;
    transition: 0.5s all;
  }
  @media ${theme.mobile} {
    font-size: 0.7rem;
    transition: 0.5s all;
  }
`;

export const Label = styled.label`
  margin-top: 0.5rem;
  cursor: pointer;
  font-weight: 300;
  font-size: 1rem;
  transition: 0.5s all;
  word-break: keep-all;
  min-width: 285px;

  @media ${theme.tablet} {
    font-size: 0.9rem;
    transition: 0.5s all;
  }
  @media ${theme.mobile} {
    font-size: 0.8rem;
    transition: 0.5s all;
    min-width: 260px;
  }
`;

export const Checkbox = styled.input`
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  vertical-align: -3px;
  transition: 0.5s all;

  @media ${theme.tablet} {
    width: 0.9rem;
    height: 0.9rem;
    vertical-align: -2.5px;
    transition: 0.5s all;
  }
  @media ${theme.mobile} {
    width: 0.8rem;
    height: 0.8rem;
    vertical-align: -2px;
    transition: 0.5s all;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const Button = styled.button`
  outline: none;
  border: 1px solid #f876de;
  background: transparent;
  border-radius: 0.313rem;
  font-family: 'Gmarket Sans TTF';
  font-weight: 300;
  color: #f876de;
  height: 40px;
  width: 160px;
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
    font-size: 0.9rem;
    transition: 0.5s all;
    height: 40px;
    width: 140px;
  }
  @media ${theme.mobile} {
    font-size: 0.8rem;
    transition: 0.5s all;
    height: 40px;
    width: 120px;
  }
`;
