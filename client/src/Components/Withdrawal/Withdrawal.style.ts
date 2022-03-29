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

export const ContentTitle = styled.div`
  font-weight: 300;
  font-size: 1rem;
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

export const Ul = styled.ul`
  transition: 0.5s all;
  font-family: 'Gmarket Sans TTF';
  font-weight: 100;
  font-size: 1rem;
  color: #2d2d2d;

  @media ${theme.tablet} {
    font-size: 0.9rem;
    transition: 0.5s all;
  }
  @media ${theme.mobile} {
    font-size: 0.8rem;
    transition: 0.5s all;
  }
`;

export const Li = styled.li`
  transition: 0.5s all;
  font-family: 'Gmarket Sans TTF';
  font-weight: 100;
  font-size: 1rem;
  color: #2d2d2d;
  margin: 0.5rem 0.5rem;
  @media ${theme.tablet} {
    font-size: 0.9rem;
    transition: 0.5s all;
  }
  @media ${theme.mobile} {
    font-size: 0.8rem;
    transition: 0.5s all;
  }
`;
