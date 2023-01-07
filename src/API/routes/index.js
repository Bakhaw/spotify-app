import { fetchAlbum } from './albums';
import { fetchArtistAlbums, fetchArtistInfos } from './artists';
import {
  getAccessTokenFromURL,
  getRefreshTokenFromURL,
  refreshAccessToken,
} from './authorize';
import { search } from './search';
import { fetchWrappedArtists } from './wrapped';

const routes = {
  fetchAlbum,
  fetchArtistInfos,
  fetchArtistAlbums,
  search,
  getAccessTokenFromURL,
  getRefreshTokenFromURL,
  refreshAccessToken,
  fetchWrappedArtists,
};

export default routes;
