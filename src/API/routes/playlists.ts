import axios from 'axios';

import config from '../config';
import { Playlist } from '../../types';

export async function fetchUserPlaylists() {
  const url = `${config.PROXY_BASE_URL}/playlists?access_token=${config.ACCESS_TOKEN}`;

  const { data } = await axios.get(url);

  // console.log('User Playlists:', data);

  return data;
}

export async function fetchPlaylistById(playlistId?: Playlist['id']) {
  if (!playlistId) return console.log('Missing Playlist ID');

  const url = `${config.PROXY_BASE_URL}/playlists/${playlistId}?access_token=${config.ACCESS_TOKEN}`;

  const { data } = await axios.get(url);

  console.log('Playlist by ID:', data);

  return data;
}
