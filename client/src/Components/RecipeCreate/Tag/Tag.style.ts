import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.div``;

export const TagsInput = styled.input`
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
    font-size: 0.8rem;
    height: 1.6rem;
    transition: 0.5s all;
  }
`;

export const EnteredTags = styled.div`
  width: 100%;
  padding-left: 0.2rem;
`;

export const EnteredTag = styled.span`
  display: inline-block;
  font-size: 0.5rem;
  border: 1px solid #000;
  border-radius: 0.3rem;
  padding: 0.2rem;
  margin: 0.5rem 0.5rem 0rem 0rem;
`;

export const XBtn = styled.span`
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;
