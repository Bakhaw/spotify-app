import axios from 'axios';

import config from '../config';

const accessToken = localStorage.getItem('SPOTIFY_ACCESS_TOKEN');

export async function fetchUserProfile() {
  const { data } = await axios.get(
    `${config.PROXY_BASE_URL}/me?access_token=${accessToken}`
  );

  // console.log('User Infos:', data);

  return data;
}
