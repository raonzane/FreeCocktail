import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ModalContainer = styled.div`
  all: unset;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 9998;
`;

export const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 20px;
  transform: translate(-50%, -50%);
  box-shadow: -2px 2px 10px 10px rgba(107, 107, 107, 0.2);
  background-color: #fff;
  z-index: 9999;
  border-radius: 10px;
`;

export const Header = styled.div`
  text-align: right;
  height: 24px;
`;
