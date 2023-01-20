import axios from 'axios';

import config from '../config';
import { AccessToken, Search } from '../../types';

export async function search(
  query: Search['query'],
  type: Search['type'],
  accessToken: AccessToken
) {
  const url = `${config.PROXY_BASE_URL}/search/?query=${query}&type=${type}&access_token=${accessToken}`;

  const { data } = await axios.get(url);

  console.log('data', data);

  return data;
}
