import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.div``;

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
