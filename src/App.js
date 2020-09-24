import React, { useEffect, useState } from 'react';

import API from './API';
import { authorizeAuthURL } from './API/config';

import Button from './components/Button';
import UpdateApp from './components/UpdateApp';

export default function App() {
  const [token, setToken] = useState(null);

  function setupAuth() {
    const hash = API.routes.authorize();
    const _token = localStorage.SPOTIFY_HASH || hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }

  function requestDems() {
    API.routes.search(token, 'damso', 'artist');
  }

  useEffect(() => {
    setupAuth();
  }, []);

  return (
    <header>
      {!token && (
        <Button onClick={() => (window.location.href = authorizeAuthURL)}>
          <a href={authorizeAuthURL}>Spotify</a>
        </Button>
      )}
      {token && <p onClick={requestDems}>Request Dems</p>}
      <UpdateApp />
    </header>
  );
}
