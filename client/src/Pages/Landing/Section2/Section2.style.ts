import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 5%;
  background-color: #f8ffb5;

  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
`;

export const Comment = styled.div`
  width: 40rem;
  font-size: 3rem;

  @media ${theme.tablet} {
    width: 40rem;
    font-size: 2.5rem;
  }
  @media ${theme.mobile} {
    width: 30rem;
    font-size: 2rem;
    word-break: keep-all;
  }
`;
