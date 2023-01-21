import { useEffect, useState } from 'react';

import config from '../../API/config';
import { getAccessTokenFromURL, getRefreshTokenFromURL } from '../../helpers';

function AuthorizeUser() {
  useEffect(() => {
    if (window.location.hash.includes('#access_token')) {
      loadToken();
    }
  }, []);

  function loadToken() {
    const accessToken = getAccessTokenFromURL(window.location.hash);
    localStorage.setItem('SPOTIFY_ACCESS_TOKEN', accessToken);

    const refreshToken = getRefreshTokenFromURL(window.location.hash);
    localStorage.setItem('SPOTIFY_REFRESH_TOKEN', refreshToken);

    window.location.hash = '';
  }

  return (
    <div className='h-full flex justify-center items-center'>
      <button
        style={{
          backgroundColor: '#1cdf63',
          color: '#000000',
        }}
      >
        <a href={`${config.PROXY_BASE_URL}/auth/login`}>Log in with Spotify</a>
      </button>
    </div>
  );
}

export default AuthorizeUser;
