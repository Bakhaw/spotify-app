import { useEffect, useState } from 'react';
import Login from './Login';
import TopArtists from './TopArtists';

function Home() {
  const [isUserLogged, setIsUserLogged] = useState(
    localStorage.getItem('SPOTIFY_ACCESS_TOKEN')
  );

  useEffect(() => {
    const accessToken = localStorage.getItem('SPOTIFY_ACCESS_TOKEN');
    setIsUserLogged(accessToken);
  }, []);

  return (
    <div className='Home'>{isUserLogged ? <TopArtists /> : <Login />}</div>
  );
}

export default Home;
