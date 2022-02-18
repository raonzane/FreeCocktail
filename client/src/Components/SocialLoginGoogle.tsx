import React, { useEffect } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

//! 참조 https://bit.ly/3Gf0IS4
const SocialLoginGoogle = function SocialLoginGoogle() {
  useEffect(() => {
    googleSDK();
  }, []);

  const { REACT_APP_GOOGLE_CLIENTID, REACT_APP_REDIRECT_URI } = process.env;
  const { google } = window;

  function handleCredentialResponse(response: any) {
    // console.log('ID 토큰 ', response.credential); //* ID 토큰
    const idToken = response.credential;
    axios
      .post('http://localhost:3001/oauth/google', { idToken })
      .then(function (res: any) {
        console.log('응답', res);
      })
      .catch(function (err: any) {
        console.log('에러', err);
      });
  }

  function googleSDK() {
    google.accounts.id.initialize({
      client_id: REACT_APP_GOOGLE_CLIENTID,
      login_uri: REACT_APP_REDIRECT_URI,
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(document.getElementById('buttonDiv'), {
      type: 'icon',
      theme: 'outline',
      size: 'large',
      text: 'signin_with',
      shape: 'rectangular',
    });
    google.accounts.id.prompt();
  }

  return <div id="buttonDiv">Google Login</div>;
};

export default SocialLoginGoogle;
