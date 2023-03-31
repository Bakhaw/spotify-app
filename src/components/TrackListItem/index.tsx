import { useEffect, useState } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import { isTrackSaved } from '../../API/routes/user';

import { Track } from '../../types';

import Cover from '../Cover';

interface TrackListItemProps {
  index: number;
  track: Track;
}

const TrackListItem: React.FC<TrackListItemProps> = ({ index, track }) => {
  const [trackSaved, setTrackSaved] = useState<boolean | null>(null);

  async function checkIfTrackIsSaved() {
    const newTrackSaved = await isTrackSaved([track.id]);
    setTrackSaved(newTrackSaved.data[0]);
  }

  useEffect(() => {
    if (track) {
      checkIfTrackIsSaved();
    }
  }, []);

  return (
    <div className='TrackListItem'>
      <div className='TrackListItem__details'>
        <h3>{index}</h3>
        <Cover size='small' src={track.album.images[0].url} />
        <div>{track.name}</div>
      </div>

      <IconButton aria-label='favorite'>
        {trackSaved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </div>
  );
};

export default TrackListItem;
