import React, { useState, useEffect } from 'react';
import { InputTitle, InputField, MsgContainer, Br } from './SignUpPage.style';

type UserData = {
  nickname: string;
  email: string;
  password: string;
  pwdCheck: string;
  submit: boolean;
};

type Props = {
  user: UserData;
  setUser(data: UserData): void;
};

const Nickname: React.FC<Props> = function Nickname({ user, setUser }) {
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    //* 닉네임 미입력
    if (user.nickname) setErrMsg('');
    else setErrMsg('닉네임을 입력해주세요!');
  }, [user.nickname]);

  return (
    <>
      <InputTitle>닉네임</InputTitle>
      <InputField
        type="text"
        onChange={(e) => {
          setUser({
            ...user,
            nickname: e.target.value,
          });
        }}
      />
      {user.submit ? <MsgContainer>{errMsg}</MsgContainer> : <Br />}
    </>
  );
};

export default Nickname;
