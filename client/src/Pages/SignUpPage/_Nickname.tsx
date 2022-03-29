import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userData, signup } from '../../_slices/userSlice';
import { InputTitle, InputField, MsgContainer, Br } from './SignUpPage.style';

const Nickname = function Nickname() {
  const user = useSelector(userData);
  const dispatch = useDispatch();
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
          dispatch(
            signup({
              ...user,
              nickname: e.target.value,
            })
          );
        }}
      />
      {user.submit ? <MsgContainer>{errMsg}</MsgContainer> : <Br />}
    </>
  );
};

export default Nickname;
