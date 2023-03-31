import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { fetchArtistInfos } from '../../API/routes/artists';
import { Artist } from '../../types';
import Container from '../../components/Container';

const ArtistDetails: React.FC = () => {
  const { artistId } = useParams();
  const accessToken = localStorage.getItem('SPOTIFY_ACCESS_TOKEN');

  const [artist, setArtist] = useState<Artist | null>(null);

  useEffect(() => {
    getArtist();
  }, []);

  async function getArtist() {
    if (!artistId || !accessToken) return;

    const artist = await fetchArtistInfos(artistId, accessToken);

    if (artist) {
      setArtist(artist.data);
    }
  }

  if (!artist) return null;

  return (
    <Container>
      <div className='ArtistDetails'>
        <img alt={artist.name} src={artist.images[0].url} />
        <h1>{artist.name}</h1>
        <h1>{artist.followers.total.toLocaleString()} followers</h1>
      </div>
    </Container>
  );
};

export default ArtistDetails;
