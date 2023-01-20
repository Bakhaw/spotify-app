import axios from 'axios';

import config from '../config';
import { AccessToken, TimeRange } from '../../types';

export async function fetchTopArtists(
  timeRange: TimeRange,
  accessToken: AccessToken
) {
  const url = `${config.PROXY_BASE_URL}/top/artists/?time_range=${timeRange}&access_token=${accessToken}`;

  const { data } = await axios.get(url);

  // console.log('Top Artists:', data);

  return data.items;
}

export async function fetchTopTracks(
  timeRange: TimeRange,
  accessToken: AccessToken
) {
  const url = `${config.PROXY_BASE_URL}/top/tracks/?time_range=${timeRange}&access_token=${accessToken}`;

  const { data } = await axios.get(url);

  // console.log('Top Tracks:', data);

  return data.items;
}
