import React, { useEffect, useState } from 'react';

import API from '../../API';
import config from '../../API/config';
import { fetchWrappedArtists } from '../../API/routes/wrapped';

import ArtistsList from '../../components/ArtistsList';
import SearchInput from '../../components/SearchInput';

function Home() {
  const [searchResults, setSearchResults] = useState(null);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('SPOTIFY_ACCESS_TOKEN')
  );

  async function searchArtist(query) {
    const searchResults = await API.routes.search(query, 'artist', accessToken);

    // 401 status code means access_token has expired
    if (searchResults.status === 401) {
      refreshToken();
    }

    setSearchResults(searchResults);
  }

  function loadToken() {
    const accessToken = API.routes.getAccessTokenFromURL(window.location.hash);
    localStorage.setItem('SPOTIFY_ACCESS_TOKEN', accessToken);
    setAccessToken(accessToken);

    const refreshToken = API.routes.getRefreshTokenFromURL(
      window.location.hash
    );
    localStorage.setItem('SPOTIFY_REFRESH_TOKEN', refreshToken);

    window.location.hash = '';
  }

  async function refreshToken() {
    const refreshToken = localStorage.getItem('SPOTIFY_REFRESH_TOKEN');
    const newAccessToken = await API.routes.refreshAccessToken(refreshToken);

    localStorage.setItem('SPOTIFY_ACCESS_TOKEN', newAccessToken.access_token);
    setAccessToken(newAccessToken.access_token);
  }

  useEffect(() => {
    if (window.location.hash.includes('#access_token')) {
      loadToken();
    }

    const timeRange = 'long_term';
    fetchWrappedArtists(timeRange, accessToken);
  }, []);

  return (
    <div className='Home'>
      {!accessToken && (
        <a href={`${config.PROXY_BASE_URL}/auth/login`}>LOG IN</a>
      )}

      {accessToken && (
        <div className='Home__search'>
          <SearchInput searchArtist={searchArtist} />

          {searchResults && <ArtistsList data={searchResults} />}
        </div>
      )}
    </div>
  );
}

export default Home;
