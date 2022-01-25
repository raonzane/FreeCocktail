import React, { useEffect } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

const SocialLoginNaver = function () {
  useEffect(() => {
    naverButton();
  }, []);

  interface naverUser {
    email: string;
    nickname: string;
    image: string;
  }

  const { naver } = window;

  function naverButton() {
    const { REACT_APP_NAVER_CLIENT_ID } = process.env;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: REACT_APP_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000/loginPage',
      callbackHandle: true,
      loginButton: {
        color: 'white',
        type: 3,
        height: 10,
      },
    });
    naverLogin.init();
  }

  function naverLogin() {
    if (window.location.href.includes('access_token')) {
      const location = window.location.href.split('=')[1];
      const Authorization = location.split('&')[0];
      const header = { Authorization };
      // console.log('왜 안 나오지', location, Authorization);
    }
  }

  return <button type="submit" id="naverIdLogin" onClick={naverLogin} />;
};

export default SocialLoginNaver;
