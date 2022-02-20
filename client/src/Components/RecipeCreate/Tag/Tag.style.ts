import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.div``;

export const TagsInput = styled.input`
  outline: none;
  background-color: #fdfbfe;
  border: 1px solid #e0dde1;
  border-radius: 0.313rem;
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Gmarket Sans TTF';
  font-weight: 100;
  font-size: 1rem;
  color: #2d2d2d;
  height: 2.313rem;
  width: 100%;
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

export const EnteredTags = styled.div`
  display: flex;
  padding-left: 0.2rem;
  width: 12rem;
  gap: 0.5rem;
`;

export const EnteredTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5rem;
  border: 1px solid #000;
  border-radius: 0.3rem;
  padding: 0.2rem;
  cursor: pointer;
`;

export const XBtn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.9rem;
  height: 0.9rem;
  margin-left: 0.3rem;
  border: 1px solid #000;
  border-radius: 50rem;
`;
