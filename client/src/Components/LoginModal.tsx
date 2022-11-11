import React from 'react';
import { LoginModalBackground } from './LoginModal.style';

export const LoginModal = function ({ setIsModalOpen, isModalOpen }: any) {
  // console.log(setModalOpen);
  console.log(isModalOpen);
  return (
    <LoginModalBackground>
      <button
        type="button"
        onClick={() => {
          setIsModalOpen(false);
        }}
      >
        &times;
      </button>
      {isModalOpen === 1 ? (
        <div>
          회원만 이용 가능한 서비스 입니다. <br />
          로그인 후에 자신만의 레시피를 작성하세요!
        </div>
      ) : (
        <div>
          회원만 이용 가능한 서비스 입니다. <br />
          로그인 후에 관심있는 레시피를 북마크 하세요!
        </div>
      )}
      <a href="/loginPage"> 로그인 하기 </a>
    </LoginModalBackground>
  );
};
