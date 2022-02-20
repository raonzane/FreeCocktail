import styled from 'styled-components';

export const Container = styled.div``;

export const Select = styled.select`
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
  transition: 0.5s all;
`;

export const Option = styled.option`
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
  margin-bottom: 1.4rem;
  transition: 0.5s all;
  cursor: pointer;
  :focus {
    border: 1px solid #2d2d2d;
    background-color: #2d2d2d;
  }
`;
