import { useEffect, useState } from 'react';
import TopArtists from '../../components/TopArtists';
import TopTracks from '../../components/TopTracks';
import { TimeRange } from '../../types';

import Login from './Login';

function Home() {
  const [isUserLogged, setIsUserLogged] = useState(
    localStorage.getItem('SPOTIFY_ACCESS_TOKEN')
  );

  useEffect(() => {
    const accessToken = localStorage.getItem('SPOTIFY_ACCESS_TOKEN');
    setIsUserLogged(accessToken);
  }, []);

  return (
    <div className='Home'>
      {isUserLogged ? (
        <div>
          <h1>Top Artists</h1>
          <TopArtists timeRange={TimeRange.mediumTerm} />

          <h1>Mostly Played</h1>
          <TopTracks timeRange={TimeRange.mediumTerm} />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Home;
