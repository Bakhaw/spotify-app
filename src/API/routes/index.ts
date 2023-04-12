import { fetchArtistAlbums, fetchArtistInfos } from './artists';
import { refreshAccessToken } from './authorize';
import { search } from './search';
import { fetchTopArtists } from './top';
export { fetchAlbum } from './albums';

const routes = {
  fetchArtistInfos,
  fetchArtistAlbums,
  search,
  refreshAccessToken,
  fetchTopArtists,
};

export default routes;
