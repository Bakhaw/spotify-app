import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { fetchArtistInfos } from '../../API/routes/artists';
import { Artist } from '../../types';

import Cover from '../../components/Cover';

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
    setArtist(artist);

    console.log('Artist:', artist);
  }

  if (!artist) return null;

  return (
    <div>
      <Cover url={artist.images[0].url} radius='[30px]' width='200px' />
    </div>
  );
};

export default ArtistDetails;
