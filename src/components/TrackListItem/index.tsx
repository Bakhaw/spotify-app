import { Track } from '../../types';

import Cover from '../Cover';

interface TrackListItemProps {
  track: Track;
}

const TrackListItem: React.FC<TrackListItemProps> = ({ track }) => {
  console.log('here', track);

  return (
    <div className='TrackListItem'>
      <Cover size='small' src={track.album.images[0].url} />
      <div>{track.name}</div>
    </div>
  );
};

export default TrackListItem;
