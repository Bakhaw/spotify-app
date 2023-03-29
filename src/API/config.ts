const {
  REACT_APP_APP_URL_DEV,
  REACT_APP_APP_URL_PROD,
  REACT_APP_PROXY_URL_DEV,
  REACT_APP_SPOTIFY_CLIENT_ID,
  NODE_ENV,
} = process.env;

const authQueryParams = {
  redirectUri:
    NODE_ENV === 'development' ? REACT_APP_APP_URL_DEV : REACT_APP_APP_URL_PROD,
  scopes:
    'user-read-recently-played user-read-currently-playing user-read-playback-state user-top-read user-follow-read streaming',
};

const authEndpoint = 'https://accounts.spotify.com/authorize';

const authorizeAuthURL =
  authEndpoint +
  `?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}` +
  `&redirect_uri=${authQueryParams.redirectUri}` +
  `&scope=${authQueryParams.scopes}` +
  '&response_type=code' +
  '&show_dialog=true';

const config = {
  AUTHORIZE_AUTH_URL: authorizeAuthURL,
  PROXY_BASE_URL: REACT_APP_PROXY_URL_DEV, // todo change URL in production mode
  ACCESS_TOKEN: localStorage.getItem('SPOTIFY_ACCESS_TOKEN'),
  REFRESH_TOKEN: localStorage.getItem('SPOTIFY_REFRESH_TOKEN'),
};

export default config;
