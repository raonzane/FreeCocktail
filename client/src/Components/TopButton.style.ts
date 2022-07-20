import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const TopBtnSection = styled.div`
  position: fixed;
  width: 5rem;
  height: 5rem;
  top: 80rem;
  right: 8rem;
  text-align: right;

  @media ${theme.tablet} {
    right: 0.5rem;
    top: 80rem;
  }
  @media ${theme.mobile} {
    width: 5rem;
    height: 5rem;
    top: 50rem;
    right: 9.7rem;
    font-size: 10px;
  }
`;

const TopBtn = styled.button`
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  border: none;
  border-radius: 100px;
  background-image: linear-gradient(
    to top,
    #f800ad,
    #ff2f7c,
    #ff7449,
    #ffb20e,
    #ffe800
  );
  font-size: 20px;
  font-family: Gmarket Sans TTF;
  color: #ffffff;
  -webkit-text-stroke: 0.4px black;

  &:hover {
    cursor: pointer;
  }
`;

export { TopBtnSection, TopBtn };
