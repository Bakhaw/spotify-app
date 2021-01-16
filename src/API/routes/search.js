import axios from 'axios';

import config from '../config';

export async function search(query, type, accessToken) {
  const url = `${config.PROXY_BASE_URL}/search/?query=${query}&type=${type}&access_token=${accessToken}`;

  const { data } = await axios.get(url);

  return data;
}
