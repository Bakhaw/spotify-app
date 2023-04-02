import axios from 'axios';

import config from '../config';
import { Album, Track } from '../../types';

export async function fetchRecentlyPlayed() {
  const url = `${config.PROXY_BASE_URL}/player/recent?access_token=${config.ACCESS_TOKEN}`;

  const { data } = await axios.get(url);

  //   console.log('Recently Played:', data);

  return data;
}

export async function playSong({
  contextUri,
  uris,
}: {
  contextUri: Album['uri'];
  uris: Track['uri'];
}) {
  const url = `${config.PROXY_BASE_URL}/player/play?context_uri=${contextUri}&uris=${uris}&access_token=${config.ACCESS_TOKEN}`;

  const { data } = await axios.put(url);

  //   console.log('Recently Played:', data);

  return data;
}
