import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../_slices/userSlice';
import { socialUserAsnyc } from '../_slices/userSlice';

axios.defaults.withCredentials = true;

const SocialLoginNaver = function () {
  useEffect(() => {
    makeNaverButton();
  }, []);

  interface NaverDispatchArg {
    snsName: string;
    accessToken: string;
  }

  const { naver } = window;
  const userInfo: any = useSelector(userData);
  const dispatch = useDispatch();
  const [isDispatch, setIsDispatch] = useState(false);

  function makeNaverButton() {
    const { REACT_APP_NAVER_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: REACT_APP_NAVER_CLIENT_ID,
      callbackUrl: REACT_APP_REDIRECT_URI,
      callbackHandle: true,
      loginStatus: true,
      loginButton: {
        color: 'white',
        type: 1,
        height: 40,
      },
    });
    naverLogin.init();

    if (naverLogin) {
      setIsDispatch(true);
    } else {
      naverLogin.reprompt();
    }
  }

  if (window.location.href.includes('#') && isDispatch) {
    const location = window.location.href.split('=')[1];
    const accessToken = location.split('&')[0];
    const NAVER_DISPATCH_ARG: NaverDispatchArg = {
      snsName: 'naver',
      accessToken,
    };
    dispatch(socialUserAsnyc(NAVER_DISPATCH_ARG));
    setIsDispatch(false);
  }

  if (userInfo.type === '네이버') {
    window.location.href = '/';
  }

  return <div id="naverIdLogin" />;
};

export default SocialLoginNaver;
