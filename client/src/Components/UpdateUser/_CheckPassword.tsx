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

const CheckPassword: React.FC<Props> = function CheckPassword({
  userInfo,
  setUserInfo,
}) {
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (userInfo.newPassword !== userInfo.checkPassword) {
      setErrMsg('새로운 비밀번호와 일치하지 않습니다.');
    } else {
      setErrMsg('');
    }
  }, [userInfo.newPassword, userInfo.checkPassword]);

  return (
    <InputArea>
      <InputTitle>새로운 비밀번호 확인</InputTitle>
      <InputField
        type="password"
        onChange={(e) =>
          setUserInfo({ ...userInfo, checkPassword: e.target.value })
        }
      />
      {errMsg ? <ErrMsg>{errMsg}</ErrMsg> : <Br />}
    </InputArea>
  );
};

export default CheckPassword;
