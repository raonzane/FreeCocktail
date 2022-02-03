import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  padding: 0% 10%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchArea = styled.div`
  width: 100%;
  height: 15rem;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardArea = styled.div`
  width: 100%;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CreateArea = styled.div`
  padding-left: 90%;
`;

export const CreateBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  font-size: 2rem;
  font-weight: lighter;
  border: 1px solid #f876de;
  background: transparent;
  border-radius: 50rem;
  font-family: 'Gmarket Sans TTF';
  color: #f876de;
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
`;
