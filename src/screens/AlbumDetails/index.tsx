import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchAlbum } from '../../API/routes';
import { Album } from '../../types';
import Container from '../../components/Container';
import Cover from '../../components/Cover';
import { millisToMinutesAndSeconds } from '../../helpers';
import TrackList from '../../components/TrackList';

const AlbumDetails: React.FC = () => {
  const params = useParams();
  const [currentAlbum, setCurrentAlbum] = useState<Album | null>(null);

  async function getAlbum() {
    if (!params.albumId) return console.log('Missing album ID');

    const album = await fetchAlbum(params.albumId);
    setCurrentAlbum(album);
  }

  useEffect(() => {
    getAlbum();
  }, []);

  if (!currentAlbum) return null;

  const duration = currentAlbum.tracks.items.reduce(
    (acc, curr) => acc + curr.duration_ms,
    0
  );

  console.log('current album', currentAlbum);

  const albumDuration = millisToMinutesAndSeconds(duration);
  const albumReleaseDate = new Date(currentAlbum.release_date).getFullYear();
  const albumTracks = currentAlbum.tracks.items.map((track) => ({
    ...track,
    album: currentAlbum,
  }));

  return (
    <Container>
      <div>
        <div className='AlbumDetails'>
          <Cover src={currentAlbum.images[0].url} />

          <div className='AlbumDetails__description'>
            <div>
              <span className='AlbumDetails__description--type'>
                {currentAlbum.album_type}
              </span>
              <span className='AlbumDetails__description--album-name'>
                {currentAlbum.name}
              </span>
            </div>

            <div className='AlbumDetails__description--metas'>
              <span>{currentAlbum.artists[0].name}</span>
              <span>{albumReleaseDate}</span>
              <span>
                {currentAlbum.total_tracks}{' '}
                {currentAlbum.total_tracks > 1 ? 'tracks' : 'track'}
              </span>
              <span>{albumDuration}</span>
            </div>
          </div>
        </div>

        <TrackList showOrder tracks={albumTracks} />
      </div>
    </Container>
  );
};

export default AlbumDetails;
