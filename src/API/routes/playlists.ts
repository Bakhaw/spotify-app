import axios from 'axios';

import config from '../config';

export async function fetchUserPlaylists() {
  const url = `${config.PROXY_BASE_URL}/playlists?access_token=${config.ACCESS_TOKEN}`;

  const { data } = await axios.get(url);

  // console.log('User Playlists:', data);

  return data;
}
