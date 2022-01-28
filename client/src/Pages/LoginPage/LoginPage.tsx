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
  SocialLoginBtn,
  SignupBtn,
} from './LoginPage.style';

const LoginPage = function LoginPage() {
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
              {/* <SocialLoginBtn> */}
              <Naver />
              {/* </SocialLoginBtn> */}
              {/* <SocialLoginBtn> */}
              <Google />
              {/* </SocialLoginBtn> */}
              <SignupBtn>
                아직 회원이 아니신가요? <p>회원가입 하러가기</p>
              </SignupBtn>
            </ContentContainer>
          </Container>
        </MainArea>
      </Body>
    </>
  );
};

export default LoginPage;
