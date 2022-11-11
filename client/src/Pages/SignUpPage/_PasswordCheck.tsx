import React, { useState, useEffect } from 'react';
import { InputTitle, InputField, MsgContainer, Br } from './SignUpPage.style';

type UserData = {
  nickname: string;
  image: string;
  email: string;
  password: string;
  pwdCheck: string;
  submit: boolean;
};

type Props = {
  user: UserData;
  setUser(data: UserData): void;
};

const PasswordCheck: React.FC<Props> = function PasswordCheck({
  user,
  setUser,
}) {
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (!user.pwdCheck) {
      //* 비밀번호 확인 미입력
      setErrMsg('비밀번호 확인을 입력해주세요!');
    } else if (user.pwdCheck !== user.password) {
      //* 비밀번호, 비밀번호 확인 불일치
      setErrMsg('비밀번호가 서로 일치하지 않습니다!');
    } else if (user.pwdCheck) {
      setErrMsg('');
    }
  }, [user.pwdCheck]);

  return (
    <>
      <InputTitle>비밀번호 확인</InputTitle>
      <InputField
        type="password"
        onChange={(e) => {
          setUser({
            ...user,
            pwdCheck: e.target.value,
          });
        }}
      />
      {user.submit ? <MsgContainer>{errMsg}</MsgContainer> : <Br />}
    </>
  );
};

export default PasswordCheck;
