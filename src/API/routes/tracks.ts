import axios from 'axios';

import { Track } from '../../types';

import config from '../config';

export async function isTrackSaved(ids: Track['id'][]) {
  const { data } = await axios.get(
    `${config.PROXY_BASE_URL}/tracks/is-saved?ids=${ids}&access_token=${config.ACCESS_TOKEN}`
  );

  if (data.error?.status === 401) {
    console.log('AuthorizationError');
  }

  return data;
}

export async function saveTrack(ids: Track['id'][]) {
  const { data } = await axios.put(
    `${config.PROXY_BASE_URL}/tracks/save-track?ids=${ids}&access_token=${config.ACCESS_TOKEN}`
  );

  if (data.error?.status === 401) {
    console.log('AuthorizationError');
  }

  console.log('Save Track:', data);

  return data;
}

export async function removeTrack(ids: Track['id'][]) {
  const { data } = await axios.delete(
    `${config.PROXY_BASE_URL}/tracks/remove-track?ids=${ids}&access_token=${config.ACCESS_TOKEN}`
  );

  if (data.error?.status === 401) {
    console.log('AuthorizationError');
  }

  console.log('Remove Track:', data);

  return data;
}
