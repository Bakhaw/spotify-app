import React, { useEffect, useState } from 'react';

import API from './API';
import UpdateApp from './components/UpdateApp';
import Home from './screens/Home';

function App() {
  const [token, setToken] = useState(null);

  function setupAuth() {
    const hash = API.routes.authorize();
    const _token = localStorage.SPOTIFY_HASH || hash.access_token;

    console.log({ _token });

    if (_token) {
      setToken(_token);
    }
  }

  useEffect(() => {
    setupAuth();
  }, []);

  return (
    <main className='App'>
      <Home token={token} />
      <UpdateApp />
    </main>
  );
}

export default App;
