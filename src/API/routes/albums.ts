import axios from 'axios';
import { Album } from '../../types';

import config from '../config';

export async function fetchAlbum(albumID: Album['id']): Promise<Album> {
  const url = `${config.PROXY_BASE_URL}/albums/${albumID}?access_token=${config.ACCESS_TOKEN}`;

  const { data } = await axios.get(url);

  // console.log('Album Infos:', data);

  return data;
}
