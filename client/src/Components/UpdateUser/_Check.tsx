import React, { useState } from 'react';
import axios from 'axios';

import {
  ContentMessage,
  InputArea,
  InputTitle,
  InputField,
  ErrMsg,
  Br,
  Button,
} from './UpdateUser.style';

type Props = {
  email: string;
  setIsChecked(data: boolean): void;
};

const Check: React.FC<Props> = function ({ email, setIsChecked }) {
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const PasswordCheck = () => {
    const body = {
      email,
      password,
    };

    axios
      .post(`http://localhost:3001/user/login`, body)
      .then((res) => {
        if (res.status === 200) {
          setIsChecked(true);
        }
      })
      .catch((err) => {
        if (err.response.status) {
          setErrMsg('');
          setErrMsg('비밀번호가 일치하지 않습니다.');
        }
      });
  };

  return (
    <>
      {/* <ContentMessage>
        회원정보 수정을 위해 비밀번호를 입력해주세요.
      </ContentMessage> */}
      <InputArea>
        <InputTitle>현재 비밀번호</InputTitle>
        <InputField
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errMsg ? <ErrMsg>{errMsg}</ErrMsg> : <Br />}
      </InputArea>
      <Button onClick={PasswordCheck}>확인</Button>
    </>
  );
};

export default Check;
