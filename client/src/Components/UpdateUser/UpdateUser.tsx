import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userData, logout } from '_slices/userSlice';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  document.body.style.overflow = 'hidden'; //* 모달 열 때 body 스크롤 제어

  const persistUser: any = useSelector(userData);
  const [userInfo, setUserInfo] = useState({
    nickname: persistUser.nickname,
    image: persistUser.image,
    checkPassword: '',
    newPassword: '',
  });

  const [isChecked, setIsChecked] = useState(false);

  const [isWithdrawal, setIsWithdrawal] = useState(false);

  //! 유효성 검사 및 데이터 전송
  const [nickCheck, setNickCheck] = useState(false);
  const [passCheck, setPassCheck] = useState(false);
  const submitHandler = () => {
    if (nickCheck && passCheck) {
      let body = {};
      if (userInfo.newPassword) {
        body = {
          nickname: userInfo.nickname,
          image: userInfo.image,
          password: userInfo.newPassword,
        };
      } else {
        body = {
          nickname: userInfo.nickname,
          image: userInfo.image,
        };
      }
      axios
        .patch(`${process.env.REACT_APP_SERVER}user/${persistUser.id}`, body)
        .then((res) => {
          if (res.status === 200) {
            alert(`회원정보 수정이 완료되었습니다.
변경된 정보로 다시 로그인해주세요.`);
            dispatch(logout());
            navigate('/');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert(`닉네임과 비밀번호를 확인해주세요.`);
    }
  };

  return (
    <Container>
      <TitleWrapper>
        <Title onClick={() => console.log(persistUser)}>회원 정보 수정</Title>
      </TitleWrapper>

      <ContentWrapper>
        {isChecked ? (
          <>
            <PreImage userInfo={userInfo} setUserInfo={setUserInfo} />

            <Nickname
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              setNickCheck={setNickCheck}
            />

            <NewPassword userInfo={userInfo} setUserInfo={setUserInfo} />

            <CheckPassword
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              setPassCheck={setPassCheck}
            />

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
          <Check email={persistUser.email} setIsChecked={setIsChecked} />
        )}
      </ContentWrapper>
    </Container>
  );
};

export default UpdateUser;
