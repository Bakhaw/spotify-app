import axios from 'axios';
import { AlbumType, ApiResponse, Artist } from '../../types';

import config from '../config';

export async function fetchArtistInfos(
  artistID: Artist['id']
): Promise<ApiResponse<Artist> | null> {
  if (!artistID) {
    console.log('Missing Artist ID');
    return null;
  }

  const url = `${config.PROXY_BASE_URL}/artists/${artistID}/?access_token=${config.ACCESS_TOKEN}`;

  const { data } = await axios.get(url);

  // console.log('Artist Infos:', data);

  return data;
}

export async function fetchArtistAlbums(
  artistID: Artist['id'],
  albumType: string
) {
  const url = `${config.PROXY_BASE_URL}/artists/${artistID}/albums/?album_type=${albumType}&access_token=${config.ACCESS_TOKEN}`;

  const { data } = await axios.get(url);

  console.log('Artist Albums:', data);

  return data;
}
