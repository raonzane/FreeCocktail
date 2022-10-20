//! 닉네임 중복일 경우 errMsg
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { userData } from '_slices/userSlice';

import {
  InputArea,
  InputTitle,
  InputField,
  CheckButton,
  ErrMsg,
  SucMsg,
  Br,
} from './UpdateUser.style';

type UserInfo = {
  nickname: string;
  image: string;
  newPassword: string;
  checkPassword: string;
};

type Props = {
  userInfo: UserInfo;
  setUserInfo(data: UserInfo): void;
};

const Nickname: React.FC<Props> = function Nickname({ userInfo, setUserInfo }) {
  const persistUser: any = useSelector(userData);
  const [errMsg, setErrMsg] = useState('');
  const [sucMsg, setSucMsg] = useState('');

  const CheckNickname = () => {
    //* 닉네임 중복 = true, 사용가능 false
    axios
      .get(`http://localhost:3001/user/check-name/${userInfo.nickname}`)
      .then((res) => {
        if (res.data === true) setErrMsg(`이미 사용 중인 닉네임입니다.`);
        else {
          setErrMsg('');
          setSucMsg('사용 가능한 닉네임입니다.');
          setTimeout(() => setSucMsg(''), 2000);
        }
      });
  };

  return (
    <InputArea>
      <InputTitle>닉네임</InputTitle>
      <InputField
        type="text"
        placeholder={persistUser.nickname}
        onChange={(e) => setUserInfo({ ...userInfo, nickname: e.target.value })}
      />
      <CheckButton onClick={CheckNickname}>중복확인</CheckButton>
      {errMsg ? (
        <ErrMsg>{errMsg}</ErrMsg>
      ) : sucMsg ? (
        <SucMsg>{sucMsg}</SucMsg>
      ) : (
        <Br />
      )}
    </InputArea>
  );
};

export default Nickname;
