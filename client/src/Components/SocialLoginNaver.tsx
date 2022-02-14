import React, { useEffect } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

//! 참조: https://bit.ly/35ESTsd
const SocialLoginNaver = function () {
  useEffect(() => {
    naverButton();
  }, []);

  const { naver } = window;

  function naverButton() {
    const { REACT_APP_NAVER_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: REACT_APP_NAVER_CLIENT_ID,
      callbackUrl: REACT_APP_REDIRECT_URI,
      callbackHandle: true,
      loginButton: {
        color: 'white',
        type: 3,
        height: 10,
      },
    });
    naverLogin.init();

    if (window.location.href.includes('#')) {
      const location = window.location.href.split('=')[1];
      const accessToken = location.split('&')[0];
      // console.log('토큰', accessToken);
      axios
        .post('http://localhost:3001/oauth/naver', { idToken: accessToken })
        .then(function (res: any) {
          console.log('응답', res);
        })
        .catch(function (err: any) {
          console.log('에러', err);
        });
    }
  }

  return <button type="button" id="naverIdLogin" />;
};

export default SocialLoginNaver;
