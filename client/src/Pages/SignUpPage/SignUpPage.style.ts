import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Body = styled.div`
  min-height: 90vh;
  margin-top: 6.938rem;
  /* background: linear-gradient(0deg, #fbfafc, #fbfafc); */
  display: flex;
  justify-content: center;
  padding: 0 30px 0 30px;
  @media ${theme.mobile} {
    margin-top: 7.938rem;
    padding: 0 10px 0 10px;
  }
  @media ${theme.tablet} {
    margin-top: 7.938rem;
    padding: 0 20px 0 20px;
  }
`;

export const MainArea = styled.main`
  width: 78.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  z-index: 3;
  display: flex;
  font-family: 'Gmarket Sans TTF';
  color: #333;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  width: 25rem;
  height: 40rem;
  background: transparent;
  border-radius: 0.313rem;
  padding: 2rem;
  transition: 0.5s all;
  @media ${theme.mobile} {
    width: 21rem;
    height: 32rem;
    transition: 0.5s all;
    background: transparent;
  }
  @media ${theme.tablet} {
    width: 23rem;
    height: 35rem;
    transition: 0.5s all;
    background: transparent;
  }
`;

export const TitleWrapper = styled.span`
  margin-bottom: 40px;
  @media ${theme.mobile} {
    margin-bottom: 30px;
  }
  @media ${theme.tablet} {
    margin-bottom: 30px;
  }
`;

export const Title = styled.span`
  font-weight: 300;
  font-size: 1.4rem;
  border-bottom: 5px solid #f876de;
  transition: 0.5s all;
  @media ${theme.mobile} {
    font-size: 1.2rem;
    transition: 0.5s all;
  }
  @media ${theme.tablet} {
    font-size: 1.3rem;
    transition: 0.5s all;
  }
`;

export const InputTitle = styled.div`
  font-weight: 200;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  transition: 0.5s all;
  @media ${theme.mobile} {
    font-size: 0.8rem;
    transition: 0.5s all;
    margin-bottom: 0.2rem;
  }
  @media ${theme.tablet} {
    font-size: 0.9rem;
    transition: 0.5s all;
    margin-bottom: 0.3rem;
  }
`;

export const InputField = styled.input`
  outline: none;
  background: #fdfbfe;
  border: 1px solid #e0dde1;
  border-radius: 0.313rem;
  padding-left: 0.5rem;
  font-family: 'Gmarket Sans TTF';
  font-weight: 100;
  font-size: 1rem;
  color: #2d2d2d;
  height: 2.313rem;
  width: 97%;
  :focus {
    border: 1px solid #2d2d2d;
    /* box-shadow: 0 0 5px #cacaca; */
  }
  @media ${theme.mobile} {
    font-size: 0.8rem;
    transition: 0.5s all;
  }
  @media ${theme.tablet} {
    font-size: 0.9rem;
    transition: 0.5s all;
  }
`;

export const InvalidMessage = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 100;
  font-size: 1rem;
  color: #f44336;
  margin: 10px 0 20px 0;
  transition: 0.5s all;
  @media ${theme.mobile} {
    font-size: 0.8rem;
    transition: 0.5s all;
    margin: 5px 0 10px 0;
  }
  @media ${theme.tablet} {
    font-size: 0.9rem;
    transition: 0.5s all;
    margin: 5px 0 10px 0;
  }
`;

export const ValidMessage = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 100;
  font-size: 1rem;
  color: #008000;
  margin: 10px 0 20px 0;
  transition: 0.5s all;
  @media ${theme.mobile} {
    font-size: 0.8rem;
    transition: 0.5s all;
    margin: 5px 0 10px 0;
  }
  @media ${theme.tablet} {
    font-size: 0.9rem;
    transition: 0.5s all;
    margin: 5px 0 10px 0;
  }
`;

export const SignupBtn = styled.button`
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
    font-size: 0.8rem;
    transition: 0.5s all;
  }
  @media ${theme.tablet} {
    font-size: 0.9rem;
    transition: 0.5s all;
  }
`;

export const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: 100;
  color: #2d2d2d;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: 0.5s all;
  p {
    margin-left: 0.5rem;
    font-weight: 300;
  }
  p:hover {
    text-decoration: underline;
  }
  @media ${theme.mobile} {
    font-size: 0.8rem;
    transition: 0.5s all;
  }
  @media ${theme.tablet} {
    font-size: 0.9rem;
    transition: 0.5s all;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
  width: 25rem;
  height: 40rem;
  transition: 0.5s all;
  border: 1px solid #ddd;
  border-radius: 0.313rem;
  padding: 2rem;
  @media ${theme.mobile} {
    display: none;
  }
  @media ${theme.tablet} {
    display: none;
  }
`;

// styled.div<IMsgProps>
// color: ${(props) => (props.isColor ? "#2d2d2d" : "#f44336")};
export const MsgContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-weight: 100;
  font-size: 0.8rem;
  margin: 5px 0 11px 0;
  padding-left: 3px;
  height: 12px;
  color: #f44336;
  @media ${theme.mobile} {
    font-size: 0.7rem;
    height: 10px;
  }
  @media ${theme.tablet} {
    font-size: 0.8rem;
    height: 10px;
  }
`;

export const Br = styled.div`
  height: 10px;
  margin: 5px 0px 11px 0px;
`;

export const Br2 = styled.div`
  height: 14.4px;
  margin: 5px 0px 10px 0px;
`;
