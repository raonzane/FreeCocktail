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

const Email: React.FC<Props> = function Email({ user, setUser }) {
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (!user.email) {
      //* 이메일 미입력
      setErrMsg('이메일을 입력해주세요!');
    } else if (!(user.email.includes('@') && user.email.includes('.'))) {
      //* 이메일 양식
      setErrMsg('이메일 양식에 맞게 입력해주세요!');
    } else if (user.email) {
      setErrMsg('');
    }
  }, [user.email]);

  return (
    <>
      <InputTitle>이메일</InputTitle>
      <InputField
        type="email"
        onChange={(e) => {
          setUser({
            ...user,
            email: e.target.value,
          });
        }}
      />
      {user.submit ? <MsgContainer>{errMsg}</MsgContainer> : <Br />}
    </>
  );
};

export default Email;
