import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { isTrackSaved, removeTrack, saveTrack } from '../../API/routes/tracks';
import { Track } from '../../types';
import { millisToMinutesAndSeconds } from '../../helpers';
import { SpotifyContext } from '../../context';

import Cover from '../Cover';

interface TrackListItemProps {
  order?: number | null;
  showCover?: boolean; // default false;
  track: Track;
}

const TrackListItem: React.FC<TrackListItemProps> = ({
  order,
  showCover = false,
  track,
}) => {
  const [trackSaved, setTrackSaved] = useState<boolean>(false);

  async function checkIfTrackIsSaved() {
    if (!track) return;

    const newTrackSaved = await isTrackSaved([track.id]);
    setTrackSaved(newTrackSaved.data?.[0]);
  }

  async function onFavoriteButtonClick() {
    if (!track) return;

    if (trackSaved) {
      await removeTrack([track.id]);
      setTrackSaved(false);
    } else {
      await saveTrack([track.id]);
      setTrackSaved(true);
    }
  }

  useEffect(() => {
    if (track) {
      checkIfTrackIsSaved();
    }
  }, []);

  const { handlePlaySong } = useContext(SpotifyContext);
  function handleTrackListItemClick() {
    if (!handlePlaySong) return;

    handlePlaySong(track);
  }

  return (
    <div className='TrackListItem' onDoubleClick={handleTrackListItemClick}>
      <div className='TrackListItem__details'>
        {order && <span>{order}</span>}

        {showCover && (
          <Cover size='small' square src={track.album?.images?.[0]?.url} />
        )}

        <div className='TrackListItem__details__text'>
          <div className='TrackListItem__details__text__song-name'>
            {track.name}
          </div>
          <Link
            className='TrackListItem__details__text__artist-name'
            to={`/artist/${track.artists[0].id}`}
          >
            {track.artists[0].name}
          </Link>
        </div>
      </div>

      <div className='TrackListItem__actions'>
        <IconButton aria-label='favorite' onClick={onFavoriteButtonClick}>
          {trackSaved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>

        <div>{millisToMinutesAndSeconds(track.duration_ms)}</div>

        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TrackListItem;
