import { fetchAlbum } from './albums';
import { fetchArtistAlbums, fetchArtistInfos } from './artists';
import { refreshAccessToken } from './authorize';
import { search } from './search';
import { fetchTopArtists } from './top';

const routes = {
  fetchAlbum,
  fetchArtistInfos,
  fetchArtistAlbums,
  search,
  refreshAccessToken,
  fetchTopArtists,
};

export default routes;
