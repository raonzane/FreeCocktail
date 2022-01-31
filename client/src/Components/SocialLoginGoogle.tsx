import React, { useEffect } from 'react';

//* 참조 https://bit.ly/3Gf0IS4
const SocialLoginGoogle = function SocialLoginGoogle() {
  useEffect(() => {
    googleSDK();
  }, []);

  const { REACT_APP_GOOGLE_CLIENTID } = process.env;
  const { google } = window;

  function handleCredentialResponse(response: any) {
    console.log('ID 토큰 === ', response.credential); // ID 토큰
    const responsePayload = response.credential;
    console.log(responsePayload.sub);
    console.log(responsePayload.name);
    console.log(responsePayload.given_name);
    console.log(responsePayload.family_name);
    console.log(responsePayload.picture);
    console.log(responsePayload.email);
  }

  function googleSDK() {
    google.accounts.id.initialize({
      client_id: REACT_APP_GOOGLE_CLIENTID,
      login_uri: 'http://localhost:3000/loginPage',
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(document.getElementById('buttonDiv'), {
      theme: 'outline',
      size: 'large',
    });
    google.accounts.id.prompt();
  }

  return (
    <button type="button" id="buttonDiv">
      Google Login
    </button>
  );
};

export default SocialLoginGoogle;
