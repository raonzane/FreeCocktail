import styled from 'styled-components';
// import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
  background-color: black;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 20px 0px;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  margin: 0 20px 0 80px;
`;

export const Content = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;

export const Copyright = styled.div`
  font-size: 13px;
  margin: 20px 0px;
`;
