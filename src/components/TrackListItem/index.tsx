import { useEffect, useState } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

import { isTrackSaved, removeTrack, saveTrack } from '../../API/routes/tracks';
import { Track } from '../../types';

import Cover from '../Cover';

interface TrackListItemProps {
  track: Track;
}

const TrackListItem: React.FC<TrackListItemProps> = ({ track }) => {
  const [trackSaved, setTrackSaved] = useState<boolean | null>(null);

  async function checkIfTrackIsSaved() {
    const newTrackSaved = await isTrackSaved([track.id]);
    setTrackSaved(newTrackSaved.data[0]);
  }

  async function onFavoriteButtonClick() {
    console.log('Clicked on favorite', track.name);

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

  return (
    <div className='TrackListItem'>
      <div className='TrackListItem__details'>
        <Cover size='small' src={track.album.images[0].url} />
        <div>{track.name}</div>
      </div>

      <IconButton aria-label='favorite' onClick={onFavoriteButtonClick}>
        {trackSaved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </div>
  );
};

export default TrackListItem;
