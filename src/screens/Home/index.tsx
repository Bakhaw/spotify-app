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
    <div className='Home'>
      {isUserLogged ? (
        <Container>
          <div className='Home__container'>
            <TopArtists timeRange={TimeRange.shortTerm} />
            <div className='Mostly-Played'>
              <TopTracks timeRange={TimeRange.shortTerm} />
            </div>
          </div>
        </Container>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Home;
