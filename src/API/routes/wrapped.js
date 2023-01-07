import axios from 'axios';

import config from '../config';

export async function fetchWrappedArtists(timeRange, accessToken) {
  const url = `${config.PROXY_BASE_URL}/wrapped/artists/?time_range=${timeRange}&access_token=${accessToken}`;

  const { data } = await axios.get(url);

  console.log('Wrapped Artists:', data);

  return data;
}
