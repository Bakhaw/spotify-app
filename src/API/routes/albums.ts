import axios from 'axios';
import { AccessToken, Album } from '../../types';

import config from '../config';

export async function fetchAlbum(
  albumID: Album['id'],
  accessToken: AccessToken
) {
  const url = `${config.PROXY_BASE_URL}/albums/${albumID}/?access_token=${accessToken}`;

  const { data } = await axios.get(url);

  // console.log('Album Infos:', data);

  return data;
}
