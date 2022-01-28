import React, { useEffect } from 'react';

const SocialLoginGoogle = function SocialLoginGoogle() {
  useEffect(() => {
    // console.log(1);
  }, []);

  const { gapi } = window;
  const { google } = window;
  console.log(window.google);
  const { REACT_APP_GOOGLE_CLIENTID, REACT_APP_GOOGLE_API_KEY } = process.env;

  function callbackHandler() {
    const location = window.location.href;
    console.log(location);
  }

  return (
    <button id="buttonDiv" type="submit">
      Google login
    </button>
  );
};

export default SocialLoginGoogle;
