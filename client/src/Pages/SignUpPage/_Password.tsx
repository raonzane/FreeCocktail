import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userData, signup } from '../../_slices/userSlice';
import { InputTitle, InputField, MsgContainer, Br } from './SignUpPage.style';

const Password = function Password() {
  const user = useSelector(userData);
  const dispatch = useDispatch();
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
          dispatch(
            signup({
              ...user,
              password: e.target.value,
            })
          );
        }}
      />
      {user.submit ? <MsgContainer>{errMsg}</MsgContainer> : <Br />}
    </>
  );
};

export default Password;
