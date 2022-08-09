import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const LoginModalBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  height: 15rem;
  background: #ffffff;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
  border-radius: 12px;
  z-index: 9;

  &&& {
    button {
      /* border: 1px solid red; */
      position: absolute;
      top: 1rem;
      left: 49%;
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1rem;
      font-weight: 600;
      color: #fb7d30;
      border-radius: 100px;
      &: hover {
        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem;
        border: 1.5px solid #fb7d30;
      }
    }
    div {
      margin: 5rem auto 2.5rem auto;
      background: linear-gradient(to right top, #f22fb0, #ff9b00);
      color: transparent;
      -webkit-background-clip: text;
      font-size: 1.1rem;
      line-height: 1.6rem;
      text-align: center;
      white-space: pre-wrap;
    }
    a {
      display: block;
      width: 8rem;
      height: 2.5rem;
      margin: auto;
      color: #cb77ff;
      line-height: 2.5rem;
      text-align: center;
      border-radius: 50px;
      &: hover {
        color: #ffffff;
        background: #cb77ff;
      }
    }

    @media ${theme.mobile} {
      width: 22rem;
      height: 13rem;

      > div {
        font-size: 1rem;
      }

      > a {
        width: 6rem;
        height: 1.6rem;
        padding-top: 0.3rem;
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
  }
`;

export { LoginModalBackground };
