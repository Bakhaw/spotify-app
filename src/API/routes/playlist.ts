import axios from 'axios';

import config from '../config';

export async function fetchRecentlyPlayed() {
  const url = `${config.PROXY_BASE_URL}/recent?access_token=${config.ACCESS_TOKEN}`;

  const { data } = await axios.get(url);

  //   console.log('Recently Played:', data);

  return data;
}
