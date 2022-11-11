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

const Password: React.FC<Props> = function Password({ user, setUser }) {
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    const reg = /^.*(?=.{8,16})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
    if (!user.password) {
      //* 비밀번호 미입력
      setErrMsg('비밀번호를 입력해주세요!');
    } else if (!reg.test(user.password)) {
      //* 비밀번호 양식
      setErrMsg('영문과 숫자를 혼용하여 8 ~ 16자 이하 입력해주세요!');
    } else if (user.password) {
      setErrMsg('');
    }
  }, [user.password]);

  return (
    <>
      <InputTitle>비밀번호</InputTitle>
      <InputField
        type="password"
        onChange={(e) => {
          setUser({
            ...user,
            password: e.target.value,
          });
        }}
      />
      {user.submit ? <MsgContainer>{errMsg}</MsgContainer> : <Br />}
    </>
  );
};

export default Password;
