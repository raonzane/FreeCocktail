import React from 'react';
import Waves from 'Components/Waves';
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
  console.log('로그인 페이지에서 확인한 state', store.getState());
  return (
    <>
      <Waves />
      <Body>
        <MainArea>
          <Container>
            <ImgContainer>이미지 자리</ImgContainer>
            <ContentContainer>
              <TitleWrapper>
                <Title>로그인</Title>
              </TitleWrapper>
              <InputTitle>이메일</InputTitle>
              <InputField type="email" />
              <InputTitle>비밀번호</InputTitle>
              <InputField type="password" />
              <InvalidMessage>
                <div>이메일과 비밀번호를 확인해 주세요.</div>
              </InvalidMessage>
              <LoginBtn>로그인</LoginBtn>
              <SignupBtn>
                아직 회원이 아니신가요? <p>회원가입 하러가기</p>
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
        </MainArea>
      </Body>
    </>
  );
};

export default LoginPage;
