import axios from 'axios';

import config from '../config';
import { Album, CurrentlyPlaying, Track } from '../../types';

export async function recentlyPlayed() {
  const url = `${config.PROXY_BASE_URL}/player/recent?access_token=${config.ACCESS_TOKEN}`;

  const { data } = await axios.get(url);

  //   console.log('Recently Played:', data);

  return data;
}

export async function currentlyPlaying() {
  const url = `${config.PROXY_BASE_URL}/player/currently-playing?access_token=${config.ACCESS_TOKEN}`;

  const { data } = await axios.get(url);

  // console.log('Currently Playing:', data);

  return data;
}

type PlaySongParams = {
  contextUri?: Album['uri'];
  positionMs?: CurrentlyPlaying['progress_ms'];
  uris?: Track['uri'];
};
export async function playSong(options?: PlaySongParams) {
  if (options) {
    console.log('options????', options);
    const { contextUri, positionMs, uris } = options;
    const url = `${config.PROXY_BASE_URL}/player/play?context_uri=${contextUri}&position_ms=${positionMs}&uris=${uris}&access_token=${config.ACCESS_TOKEN}`;

    const { data } = await axios.put(url);

    //   console.log('Play song with options:', data);

    return data;
  } else {
    const url = `${config.PROXY_BASE_URL}/player/play?access_token=${config.ACCESS_TOKEN}`;

    const { data } = await axios.put(url);

    //   console.log('Resume song:', data);

    return data;
  }
}

export async function pauseSong() {
  const url = `${config.PROXY_BASE_URL}/player/pause?access_token=${config.ACCESS_TOKEN}`;

  const { data } = await axios.put(url);

  //   console.log('Pause song:', data);

  return data;
}
