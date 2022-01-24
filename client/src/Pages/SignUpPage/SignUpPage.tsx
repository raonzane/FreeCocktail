import React from 'react';
import Waves from 'Components/Waves';

import {
  Body,
  MainArea,
  Container,
  ContentContainer,
  TitleWrapper,
  Title,
  InputTitle,
  InputField,
  InvalidMessage,
  SignupBtn,
  LoginBtn,
  ImgContainer,
  MsgContainer,
} from './SignUpPage.style';

const SignUpPage = function SignUpPage() {
  return (
    <>
      <Waves />
      <Body>
        <MainArea>
          <Container>
            {/* 회원가입 Form */}
            <ContentContainer>
              <TitleWrapper>
                <Title>회원가입</Title>
              </TitleWrapper>
              <InputTitle>닉네임</InputTitle>
              <InputField type="text" />
              <MsgContainer>error message</MsgContainer>
              <InputTitle>이메일</InputTitle>
              <InputField type="email" />
              <MsgContainer />
              <InputTitle>비밀번호</InputTitle>
              <InputField type="password" />
              <MsgContainer />
              <InputTitle>비밀번호 확인</InputTitle>
              <InputField type="password" />
              <MsgContainer />
              <InvalidMessage>모든 항목을 바르게 입력해 주세요.</InvalidMessage>
              <SignupBtn>회원가입</SignupBtn>
              <LoginBtn>
                이미 가입하셨나요? <p>로그인 하기</p>
              </LoginBtn>
            </ContentContainer>
            <ImgContainer>이미지 자리</ImgContainer>
          </Container>
        </MainArea>
      </Body>
    </>
  );
};

export default SignUpPage;
