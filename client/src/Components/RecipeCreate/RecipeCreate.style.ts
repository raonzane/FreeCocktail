import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #000;
  border-radius: 0.3rem;
  padding: 0.5rem;
  transition: all 0.5s;

  @media ${theme.mobile} {
    flex-direction: column;
    transition: all 0.5s;
  }
  @media ${theme.tablet} {
    flex-direction: column;
    transition: all 0.5s;
  }
`;

export const CreateImg = styled.div`
  width: 400px;
  height: 500px;
  cursor: pointer;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${theme.desktop} {
    margin-right: 0.5rem;
  }

  @media ${theme.mobile} {
    transition: all 0.5s;
    width: 200px;
    height: 250px;
    margin-bottom: 0.5rem;
  }
  @media ${theme.tablet} {
    transition: all 0.5s;
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

export const CreateDetails = styled.div`
  height: 500px;
`;

export const CreateTitle = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-weight: 300;
  margin-bottom: 0.5rem;
`;

export const CreateInput = styled.input`
  outline: none;
  background-color: #fdfbfe;
  border: 1px solid #e0dde1;
  border-radius: 0.313rem;
  padding-left: 0.5rem;
  font-family: 'Gmarket Sans TTF';
  font-weight: 100;
  font-size: 1rem;
  color: #2d2d2d;
  height: 2.313rem;
  width: 100%;
  margin-bottom: 1.4rem;
  transition: 0.5s all;
  :focus {
    border: 1px solid #2d2d2d;
  }
  @media ${theme.mobile} {
    font-size: 0.8rem;
    transition: 0.5s all;
  }
  @media ${theme.tablet} {
    font-size: 0.9rem;
    transition: 0.5s all;
  }
`;

export const CreateTextarea = styled.textarea`
  outline: none;
  background-color: #fdfbfe;
  border: 1px solid #e0dde1;
  border-radius: 0.313rem;
  padding: 0.5rem;
  font-family: 'Gmarket Sans TTF';
  font-weight: 100;
  font-size: 1rem;
  color: #2d2d2d;
  width: 100%;
  height: 5rem;
  margin-bottom: 1.4rem;
  resize: none;
  transition: 0.5s all;
  :focus {
    border: 1px solid #2d2d2d;
  }
  @media ${theme.mobile} {
    font-size: 0.8rem;
    transition: 0.5s all;
  }
  @media ${theme.tablet} {
    font-size: 0.9rem;
    transition: 0.5s all;
  }
`;
