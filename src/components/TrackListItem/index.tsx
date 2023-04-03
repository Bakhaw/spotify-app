import { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { isTrackSaved, removeTrack, saveTrack } from '../../API/routes/tracks';
import { Track } from '../../types';
import { millisToMinutesAndSeconds } from '../../helpers';

import Cover from '../Cover';
import { currentlyPlaying, playSong } from '../../API/routes/player';

interface TrackListItemProps {
  track: Track;
}

const TrackListItem: React.FC<TrackListItemProps> = ({ track }) => {
  const [trackSaved, setTrackSaved] = useState<boolean>(false);

  async function checkIfTrackIsSaved() {
    if (!track) return;

    const newTrackSaved = await isTrackSaved([track.id]);
    setTrackSaved(newTrackSaved.data[0]);
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

  // todo remove this
  async function handleTrackListItemClick() {
    const data = await playSong({
      contextUri: track.album.uri,
      uris: track.uri,
    });
  }

  return (
    <div className='TrackListItem' onClick={handleTrackListItemClick}>
      <div className='TrackListItem__details'>
        <Cover size='small' square src={track.album.images[0].url} />

        <div className='TrackListItem__details__text'>
          <div className='TrackListItem__details__text__song-name'>
            {track.name}
          </div>
          <div>{track.artists[0].name}</div>
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
