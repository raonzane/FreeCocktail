import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userData, signup } from '../../_slices/userSlice';
import { InputTitle, InputField, MsgContainer, Br } from './SignUpPage.style';

const Email = function Email() {
  const user = useSelector(userData);
  const dispatch = useDispatch();
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
          dispatch(
            signup({
              ...user,
              email: e.target.value,
            })
          );
        }}
      />
      {user.submit ? <MsgContainer>{errMsg}</MsgContainer> : <Br />}
    </>
  );
};

export default Email;
