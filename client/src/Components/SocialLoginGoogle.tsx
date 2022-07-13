import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { socialUserAsnyc } from '../_slices/userSlice';

axios.defaults.withCredentials = true;

const SocialLoginGoogle = function SocialLoginGoogle() {
  useEffect(() => {
    googleSDK();
  }, []);

  interface GoogleDispatchArg {
    snsName: string;
    accessToken: string;
  }

  const { REACT_APP_GOOGLE_CLIENTID, REACT_APP_REDIRECT_URI } = process.env;
  const { google } = window;
  const dispatch = useDispatch();

  function handleCredentialResponse(response: any) {
    // console.log('ID 토큰 ', response.credential); //* ID 토큰
    const accessToken = response.credential;
    const GOOGLE_DISPATCH_ARG: GoogleDispatchArg = {
      snsName: 'google',
      accessToken,
    };
    dispatch(socialUserAsnyc(GOOGLE_DISPATCH_ARG));
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
