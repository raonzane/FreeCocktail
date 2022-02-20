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
  align-items: center;
  border: 1px solid #000;
  border-radius: 0.3rem;
  padding: 0.5rem;
  transition: all 0.5s;

  @media ${theme.mobile} {
    flex-direction: column;
    transition: all 0.5s;
    width: 218px;
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
`;

export const CreateDetails = styled.div``;

export const CreateTitle = styled.div`
  font-family: 'Gmarket Sans TTF';
  font-weight: 300;
  margin-bottom: 0.5rem;
  width: 100%;

  @media ${theme.mobile} {
    font-size: 0.9rem;
  }
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
  height: 2rem;
  width: 100%;
  transition: 0.5s all;
  :focus {
    border: 1px solid #2d2d2d;
  }

  @media ${theme.mobile} {
    transition: 0.5s all;
    font-size: 0.8rem;
    height: 1.6rem;
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
  height: 8rem;
  width: 100%;
  resize: none;
  transition: 0.5s all;
  :focus {
    border: 1px solid #2d2d2d;
  }
  @media ${theme.mobile} {
    transition: 0.5s all;
    font-size: 0.8rem;
    height: 6.4rem;
  }
`;

export const Br = styled.div`
  height: 1.4rem;
`;

export const CenterArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
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

export const SubmitBtn = styled.button`
  outline: none;
  border: 1px solid #f876de;
  background: transparent;
  border-radius: 0.313rem;
  padding-left: 0.5rem;
  font-family: 'Gmarket Sans TTF';
  font-weight: 300;
  font-size: 1rem;
  color: #f876de;
  height: 2.6rem;
  width: 100%;
  margin-top: 10px;
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

  @media ${theme.mobile} {
    transition: 0.5s all;
    font-size: 0.8rem;
    height: 2.08rem;
  }
`;
