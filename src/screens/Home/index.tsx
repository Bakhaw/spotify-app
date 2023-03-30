import { useEffect, useState } from 'react';
import Container from '../../components/Container';

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
    <Container>
      <div className='Home'>
        {isUserLogged ? (
          <div>
            <TopArtists timeRange={TimeRange.mediumTerm} />
            <TopTracks timeRange={TimeRange.mediumTerm} />
          </div>
        ) : (
          <Login />
        )}
      </div>
    </Container>
  );
}

export default Home;
