import * as React from 'react';

import config from '../../API/config';
import { getAccessTokenFromURL, getRefreshTokenFromURL } from '../../helpers';

const Login: React.FC = () => {
  React.useEffect(() => {
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
    <div className='Login'>
      <button>
        <a href={`${config.PROXY_BASE_URL}/auth/login`}>Log in with Spotify</a>
      </button>
    </div>
  );
};

export default Login;
