import { useEffect, useState } from 'react';

import { isTrackSaved, removeTrack, saveTrack } from '../../API/routes/tracks';
import { Track } from '../../types';

import Cover from '../Cover';
import classNames from 'classnames';

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

  return (
    <div className='TrackListItem'>
      <div className='TrackListItem__details'>
        <Cover size='small' src={track.album.images[0].url} />
        <div>{track.name}</div>
      </div>

      <div
        className={classNames('heart', trackSaved && 'animate-heart')}
        onClick={onFavoriteButtonClick}
      ></div>
    </div>
  );
};

export default TrackListItem;
