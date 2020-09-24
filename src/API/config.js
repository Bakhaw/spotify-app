const config = {
  authEndpoint: 'https://accounts.spotify.com/authorize',
  clientID: 'dc890f54ef724b33b294884126768d55',
  clientSecret: 'a2557600c557428e97cc3f0cce7cdf1c',
  redirectUri: 'http://localhost:3000',
  scopes: ['user-read-currently-playing', 'user-read-playback-state'],
};

export const authorizeAuthURL =
  config.authEndpoint +
  '?client_id=' +
  config.clientID +
  '&redirect_uri=' +
  config.redirectUri +
  '&scope=' +
  config.scopes.join('%20') +
  '&response_type=token';

export default config;
