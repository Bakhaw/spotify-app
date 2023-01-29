import axios from 'axios';

import config from '../config';
import { refreshAccessToken } from './authorize';

export async function fetchUserProfile() {
  const { data } = await axios.get(
    `${config.PROXY_BASE_URL}/me?access_token=${config.ACCESS_TOKEN}`
  );

  console.log('fetchUserProfile()', data);

  if (data.error?.status === 401) {
    refreshAccessToken(config.REFRESH_TOKEN);
  }

  return data;
}
