import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '_slices/userSlice';
import axios from 'axios';

import Withdrawal from 'Components/Withdrawal/Withdrawal';
import Modal from 'Components/_Modal/Modal';
import Check from './_Check';
import PreImage from './_PreImage';
import Nickname from './_NickName';
import NewPassword from './_NewPassword';
import CheckPassword from './_CheckPassword';

import {
  Container,
  TitleWrapper,
  Title,
  ContentWrapper,
  ButtonArea,
  Button,
  WithdrawalButton,
} from './UpdateUser.style';

const UpdateUser = function UpdateUser() {
  document.body.style.overflow = 'hidden'; //* 모달 열 때 body 스크롤 제어

  const persistUser: any = useSelector(userData);
  const [userInfo, setUserInfo] = useState({
    nickname: persistUser.data.nickname,
    image: persistUser.data.image,
    checkPassword: '',
    newPassword: '',
  });

  const [isChecked, setIsChecked] = useState(false);

  const [isWithdrawal, setIsWithdrawal] = useState(false);

  const submitHandler = () => {
    console.log(userInfo);
    //! 유효성 검사 통과여부 확인 후 전송
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>회원 정보 수정</Title>
      </TitleWrapper>

      <ContentWrapper>
        {isChecked ? (
          <>
            <PreImage userInfo={userInfo} setUserInfo={setUserInfo} />

            <Nickname userInfo={userInfo} setUserInfo={setUserInfo} />

            <NewPassword userInfo={userInfo} setUserInfo={setUserInfo} />

            <CheckPassword userInfo={userInfo} setUserInfo={setUserInfo} />

            <ButtonArea>
              <Button onClick={submitHandler}>회원 정보 수정</Button>
              <WithdrawalButton
                onClick={() => {
                  setIsWithdrawal(true);
                }}
                aria-hidden="true"
              >
                회원 탈퇴
              </WithdrawalButton>
              {isWithdrawal && (
                <Modal data={<Withdrawal />} close={setIsWithdrawal} />
              )}
            </ButtonArea>
          </>
        ) : (
          <Check email={persistUser.data.email} setIsChecked={setIsChecked} />
        )}
      </ContentWrapper>
    </Container>
  );
};

export default UpdateUser;
