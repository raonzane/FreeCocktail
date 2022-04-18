import React, { useState } from 'react';
import Waves from 'Components/Waves';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, ILoginData } from '_slices/authSlice';
import { Link } from 'react-router-dom';
import Google from '../../Components/SocialLoginGoogle';
import Naver from '../../Components/SocialLoginNaver';
import {
  Body,
  MainArea,
  Container,
  ImgContainer,
  ContentContainer,
  TitleWrapper,
  Title,
  InputTitle,
  InputField,
  InvalidMessage,
  LoginBtn,
  SocialLoginBtn2,
  SignupBtn,
} from './LoginPage.style';
import { store } from '../../_store/store';

const LoginPage = function LoginPage() {
  // console.log('로그인 페이지에서 확인한 state', store.getState());

  const dispatch = useDispatch();

  // 스토어 값 가져오기
  const { isLoggedIn, isInValid } = useSelector(ILoginData);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setEmailData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };
  const setPasswordData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  // dispatch로 setAuth에 서버에 로그인 요청
  const handleLogin = (email: string, password: string) => {
    dispatch(setAuth({ email, password }));
  };

  const handleKeyPress = (
    e: React.KeyboardEvent,
    email: string,
    password: string
  ) => {
    if (e.key === 'Enter') {
      handleLogin(email, password);
    }
  };

  return (
    <>
      <Waves />
      <Body>
        <MainArea>
          {/* {isLoggedIn ? (
            <Redirect to="/" />
          ) : ( */}
          <Container>
            <ImgContainer>이미지 자리</ImgContainer>
            <ContentContainer>
              <TitleWrapper>
                <Title>로그인</Title>
              </TitleWrapper>
              <InputTitle>이메일</InputTitle>
              <InputField
                type="email"
                onChange={(e) => setEmailData(e)}
                onKeyPress={(e) => handleKeyPress(e, email, password)}
              />
              <InputTitle>비밀번호</InputTitle>
              <InputField
                type="password"
                onChange={(e) => setPasswordData(e)}
                onKeyPress={(e) => handleKeyPress(e, email, password)}
              />
              <InvalidMessage>
                {isInValid ? (
                  <div>이메일과 비밀번호를 확인해 주세요.</div>
                ) : null}
              </InvalidMessage>
              <LoginBtn onClick={() => handleLogin(email, password)}>
                로그인
              </LoginBtn>
              <SignupBtn>
                아직 회원이 아니신가요?
                <p>
                  <Link to="/signupPage">회원가입 하러가기</Link>
                </p>
              </SignupBtn>
              <SocialLoginBtn2>
                <div> SNS를 이용한 소셜 로그인 </div>
                <div>
                  <Naver />
                  <Google />
                </div>
              </SocialLoginBtn2>
            </ContentContainer>
          </Container>
          {/* )} */}
        </MainArea>
      </Body>
    </>
  );
};

export default LoginPage;
