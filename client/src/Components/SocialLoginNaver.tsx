import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { socialUserAsnyc } from '../_slices/userSlice';

axios.defaults.withCredentials = true;

const SocialLoginNaver = function () {
  useEffect(() => {
    naverButton();
  }, []);

  const { naver } = window;
  interface NaverDispatchArg {
    snsName: string;
    accessToken: string;
  }

  function naverButton() {
    const { REACT_APP_NAVER_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: REACT_APP_NAVER_CLIENT_ID,
      callbackUrl: REACT_APP_REDIRECT_URI,
      callbackHandle: true,
      loginButton: {
        color: 'white',
        type: 1,
        height: 40,
      },
    });
    naverLogin.init();
  }

  if (window.location.href.includes('#')) {
    const location = window.location.href.split('=')[1];
    const accessToken = location.split('&')[0];
    const dispatch = useDispatch();
    const NAVER_DISPATCH_ARG: NaverDispatchArg = {
      snsName: 'Naver',
      accessToken,
    };
    dispatch(socialUserAsnyc(NAVER_DISPATCH_ARG));
  }

  return <div id="naverIdLogin" />;
};

export default SocialLoginNaver;
