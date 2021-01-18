import React, { useEffect, useState } from 'react';

import API from '../../API';
import config from '../../API/config';

import ArtistsList from '../../components/ArtistsList';
import Button from '../../components/Button';

import SearchHeader from './SearchHeader';

function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('SPOTIFY_ACCESS_TOKEN')
  );

  function loadToken() {
    if (window.location.hash.includes('#access_token')) {
      const _token = API.routes.getAccessToken();

      localStorage.setItem('SPOTIFY_ACCESS_TOKEN', _token);
      setAccessToken(_token);
    }
  }

  async function searchArtist(query) {
    const searchResults = await API.routes.search(query, 'artist', accessToken);
    setSearchResults(searchResults);
  }

  useEffect(() => {
    loadToken();
  }, []);

  return (
    <div className='Home'>
      {!accessToken && (
        <Button
          onClick={() => (window.location.href = config.AUTHORIZE_AUTH_URL)}
        >
          LOG IN
        </Button>
      )}
      {accessToken && (
        <div className='Home__search'>
          <SearchHeader searchArtist={searchArtist} />
          {/* <ArtistsList data={searchResults} /> */}
        </div>
      )}
    </div>
  );
}

export default Home;
