import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const TopBtnSection = styled.div`
  position: sticky;
  width: 60.5rem;
  height: 5rem;
  margin: 1rem auto;
  bottom: 2rem;
  right: 2rem;
  text-align: right;
  z-index: 9999;

  @media ${theme.tablet} {
    width: 45rem;
    bottom: 1rem;
  }
  @media ${theme.mobile} {
    width: 20rem;
    height: 4rem;
    bottom: 1rem;
  }
`;

const TopBtn = styled.button`
  position: relative;
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  white-space: pre;
  font-size: 15px;
  font-family: Gmarket Sans TTF;
  color: #ffffff;
  -webkit-text-stroke: 0.4px black;
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

  @media ${theme.tablet} {
    width: 2.75rem;
    height: 2.75rem;
    font-size: 11px;
  }

  @media ${theme.mobile} {
    width: 2.5rem;
    height: 2.5rem;
    /* margin: 0.25rem; */
    font-size: 12.5px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export { TopBtnSection, TopBtn };
