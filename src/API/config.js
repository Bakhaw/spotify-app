require('dotenv').config();

const {
  REACT_APP_APP_URL_DEV,
  REACT_APP_APP_URL_PROD,
  REACT_APP_PROXY_URL_DEV,
  REACT_APP_SPOTIFY_API_AUTH_ENDPOINT,
  REACT_APP_SPOTIFY_CLIENT_ID,
  NODE_ENV,
} = process.env;

const authQueryParams = {
  redirectUri:
    NODE_ENV === 'development' ? REACT_APP_APP_URL_DEV : REACT_APP_APP_URL_PROD,
  scopes: ['user-read-recently-played', 'user-read-currently-playing', 'user-read-playback-state'],
};

const authorizeAuthURL =
  REACT_APP_SPOTIFY_API_AUTH_ENDPOINT +
  `?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}` +
  `&redirect_uri=${authQueryParams.redirectUri}` +
  `&scope=${authQueryParams.scopes.join('%20')}` +
  '&response_type=token' +
  '&show_dialog=true';

const config = {
  AUTHORIZE_AUTH_URL: authorizeAuthURL,
  PROXY_BASE_URL: REACT_APP_PROXY_URL_DEV, // todo change URL in production mode
};

export default config;
