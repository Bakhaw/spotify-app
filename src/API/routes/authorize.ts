import axios from 'axios';

import config from '../config';

// TODO Check all typing in this file
function getHashFromURL(windowHash: string) {
  const hash = windowHash
    .substring(1)
    .split('&')
    .reduce((initial: any, item) => {
      if (item) {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }

      return initial;
    }, {});

  return hash;
}

export function getAccessTokenFromURL(windowHash: string) {
  const hash = getHashFromURL(windowHash);
  return hash.access_token;
}

export function getRefreshTokenFromURL(windowHash: string) {
  const hash = getHashFromURL(windowHash);
  return hash.refresh_token;
}

export async function refreshAccessToken(refreshToken: string) {
  const url = `${config.PROXY_BASE_URL}/auth/refresh_token?refresh_token=${refreshToken}`;

  const { data } = await axios.get(url);
  return data;
}
