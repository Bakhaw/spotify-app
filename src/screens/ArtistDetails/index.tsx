import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { fetchArtistAlbums, fetchArtistInfos } from '../../API/routes/artists';
import { Album, AlbumType, Artist } from '../../types';
import Container from '../../components/Container';
import HorizontalSlider from '../../components/HorizontalSlider';

const ArtistDetails: React.FC = () => {
  const { artistId } = useParams();

  const [artist, setArtist] = useState<Artist | null>(null);
  const [albums, setAlbums] = useState<Album[] | null>(null);
  const [singles, setSingles] = useState<Album[] | null>(null);

  useEffect(() => {
    getArtist();
  }, []);

  async function getArtist() {
    if (!artistId) return;

    const artist = await fetchArtistInfos(artistId);
    if (artist) {
      setArtist(artist.data);
    }

    const albumType = Object.values(AlbumType).join(','); // 'album,single,...'
    const projects = await fetchArtistAlbums(artistId, albumType);

    const albums: Album[] = projects.filter(
      (project: Album) => project.album_type === AlbumType.album
    );
    const singles: Album[] = projects.filter(
      (project: Album) => project.album_type === AlbumType.single
    );

    setAlbums(albums);
    setSingles(singles);
  }

  if (!artist || !albums || !singles) return null;

  return (
    <Container>
      <div className='ArtistDetails'>
        <div className='ArtistDetails__header'>
          <img
            alt={artist.name}
            className='ArtistDetails__header__avatar'
            src={artist.images[0].url}
          />
          <h2>{artist.name}</h2>
          <h2>{artist.followers.total.toLocaleString()} followers</h2>
        </div>

        <HorizontalSlider items={albums} type='album' title='Albums' />
        <HorizontalSlider items={singles} type='album' title='Singles & EP' />
      </div>
    </Container>
  );
};

export default ArtistDetails;
