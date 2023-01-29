import axios from 'axios';

import config from '../config';

export async function refreshAccessToken(refreshToken: string | null) {
  if (!refreshToken) {
    return console.log('Missing refresh token');
  }

  const url = `${config.PROXY_BASE_URL}/auth/refresh_token?refresh_token=${refreshToken}`;

  const { data } = await axios.get(url);
  return data;
}
