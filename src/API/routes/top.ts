import axios from 'axios';

import config from '../config';
import { TimeRange } from '../../types';

export async function fetchTopArtists(timeRange: TimeRange) {
  const url = `${config.PROXY_BASE_URL}/top/artists/?time_range=${timeRange}&access_token=${config.ACCESS_TOKEN}`;

  const { data } = await axios.get(url);

  // console.log('Top Artists:', data);

  return data;
}

export async function fetchTopTracks(timeRange: TimeRange) {
  const url = `${config.PROXY_BASE_URL}/top/tracks/?time_range=${timeRange}&access_token=${config.ACCESS_TOKEN}`;

  const { data } = await axios.get(url);

  // console.log('Top Tracks:', data);

  return data;
}
