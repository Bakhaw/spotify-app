import axios from 'axios';

import config from '../config';

function getHashFromURL(windowHash) {
  const hash = windowHash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      if (item) {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }

      return initial;
    }, {});

  return hash;
}

export function getAccessTokenFromURL(windowHash) {
  const hash = getHashFromURL(windowHash);
  return hash.access_token;
}

export function getRefreshTokenFromURL(windowHash) {
  const hash = getHashFromURL(windowHash);
  return hash.refresh_token;
}

export async function refreshAccessToken(refreshToken) {
  const url = `${config.PROXY_BASE_URL}/auth/refresh_token?refresh_token=${refreshToken}`;

  const { data } = await axios.get(url);
  return data;
}
