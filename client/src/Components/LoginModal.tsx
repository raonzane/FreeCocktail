import React from 'react';
import { LoginModalBackground } from './LoginModal.style';

export const LoginModal = function ({ setModalOpen }: any) {
  console.log(setModalOpen);
  return (
    <LoginModalBackground>
      <button
        type="button"
        onClick={() => {
          setModalOpen(false);
        }}
      >
        &times;
      </button>
      <div>
        회원만 이용 가능한 서비스 입니다. <br />
        로그인 후에 관심있는 레시피를 북마크 하세요!
      </div>
      <a href="/loginPage"> 로그인 하기 </a>
    </LoginModalBackground>
  );
};
