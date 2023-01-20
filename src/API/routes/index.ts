import { fetchAlbum } from './albums';
import { fetchArtistAlbums, fetchArtistInfos } from './artists';
import {
  getAccessTokenFromURL,
  getRefreshTokenFromURL,
  refreshAccessToken,
} from './authorize';
import { search } from './search';
import { fetchTopArtists } from './top';

const routes = {
  fetchAlbum,
  fetchArtistInfos,
  fetchArtistAlbums,
  search,
  getAccessTokenFromURL,
  getRefreshTokenFromURL,
  refreshAccessToken,
  fetchTopArtists,
};

export default routes;
