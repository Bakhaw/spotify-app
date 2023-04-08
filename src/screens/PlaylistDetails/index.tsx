import { useParams } from 'react-router-dom';

import Container from '../../components/Container';
import { fetchPlaylistById } from '../../API/routes/playlists';
import { useEffect, useState } from 'react';
import { Playlist } from '../../types';
import Cover from '../../components/Cover';
import TrackList from '../../components/TrackList';
import { millisToMinutesAndSeconds } from '../../helpers';

const PlaylistDetails: React.FC = () => {
  const params = useParams();
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | null>();

  async function getPlaylist() {
    const data = await fetchPlaylistById(params.playlistId);
    setCurrentPlaylist(data);
  }

  useEffect(() => {
    getPlaylist();
  }, [params.playlistId]);

  if (!currentPlaylist) return null;

  const duration = currentPlaylist.tracks.reduce(
    (acc, curr) => acc + curr.duration_ms,
    0
  );
  const albumDuration = millisToMinutesAndSeconds(duration);

  return (
    <Container>
      <div>
        <div className='AlbumDetails'>
          <Cover src={currentPlaylist.images[0].url} />

          <div className='AlbumDetails__description'>
            <div>
              <span className='AlbumDetails__description--type'>
                {currentPlaylist.type}
              </span>
              <span className='AlbumDetails__description--album-name'>
                {currentPlaylist.name}
              </span>
            </div>

            <div className='AlbumDetails__description--metas'>
              {/* <span>{currentAlbum.artists[0].name}</span> */}
              {/* <span>{albumReleaseDate}</span> */}
              <span>
                {currentPlaylist.total_tracks}{' '}
                {currentPlaylist.total_tracks > 1 ? 'tracks' : 'track'}
              </span>
              <span>{albumDuration}</span>
            </div>
          </div>
        </div>

        <TrackList showOrder tracks={currentPlaylist.tracks} />
      </div>
    </Container>
  );
};

export default PlaylistDetails;
