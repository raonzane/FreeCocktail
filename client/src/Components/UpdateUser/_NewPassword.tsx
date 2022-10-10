import React, { useState, useEffect } from 'react';

import {
  InputArea,
  InputTitle,
  InputField,
  ErrMsg,
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

const NewPassword: React.FC<Props> = function NewPassword({
  userInfo,
  setUserInfo,
}) {
  const reg = /^.*(?=.{8,100})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (!reg.test(userInfo.newPassword) && userInfo.newPassword) {
      setErrMsg('영문과 숫자를 혼용하여 8자 이상 입력해 주세요.');
    } else {
      setErrMsg('');
    }
  }, [userInfo.newPassword]);

  return (
    <InputArea>
      <InputTitle>새로운 비밀번호</InputTitle>
      <InputField
        type="password"
        onChange={(e) =>
          setUserInfo({ ...userInfo, newPassword: e.target.value })
        }
      />
      {errMsg ? <ErrMsg>{errMsg}</ErrMsg> : <Br />}
    </InputArea>
  );
};

export default NewPassword;
