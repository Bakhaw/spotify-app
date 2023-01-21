import axios from 'axios';
import { AccessToken, Artist } from '../../types';

import config from '../config';

export async function fetchArtistInfos(
  artistID: Artist['id'],
  accessToken: AccessToken
) {
  if (!artistID) return console.log('Missing Artist ID');

  const url = `${config.PROXY_BASE_URL}/artists/${artistID}/?access_token=${accessToken}`;

  const { data } = await axios.get(url);

  // console.log('Artist Infos:', data);

  return data;
}

export async function fetchArtistAlbums(
  artistID: Artist['id'],
  accessToken: AccessToken
) {
  const url = `${config.PROXY_BASE_URL}/artists/${artistID}/albums/?access_token=${accessToken}`;

  const { data } = await axios.get(url);

  // console.log('Artist Albums:', data);

  return data;
}
