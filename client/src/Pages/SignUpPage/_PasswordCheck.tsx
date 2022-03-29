import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userData, signup } from '../../_slices/userSlice';
import { InputTitle, InputField, MsgContainer, Br } from './SignUpPage.style';

const PasswordCheck = function PasswordCheck() {
  const user = useSelector(userData);
  const dispatch = useDispatch();
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
          dispatch(
            signup({
              ...user,
              pwdCheck: e.target.value,
            })
          );
        }}
      />
      {user.submit ? <MsgContainer>{errMsg}</MsgContainer> : <Br />}
    </>
  );
};

export default PasswordCheck;
