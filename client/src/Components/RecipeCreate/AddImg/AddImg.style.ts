import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0.3rem;
  position: relative;

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

export const DefaultImg = styled.img`
  position: relative;
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.2s;
  z-index: 9998;
`;

export const HoverArea = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  cursor: pointer;

  &:hover .DefaultImg {
    opacity: 0.1;
  }

  &:hover .HoveredArea {
    opacity: 1;
  }
`;

export const HoveredArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: absolute;
  opacity: 0;
  transition: opacity 0.2s;
`;

export const HoverIcon = styled.img`
  width: 20%;
  height: 20%;
`;
