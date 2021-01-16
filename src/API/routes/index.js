import { fetchAlbum } from './albums';
import { fetchArtistAlbums, fetchArtistInfos } from './artists';
import { getAccessToken } from './authorize';
import { search } from './search';

const routes = {
  fetchAlbum,
  fetchArtistInfos,
  fetchArtistAlbums,
  search,
  getAccessToken,
};

export default routes;
