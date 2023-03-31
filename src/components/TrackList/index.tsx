import { Track } from '../../types';

import TrackListItem from '../TrackListItem';

interface TrackListProps {
  tracks: Track[];
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <div className='TrackList'>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <TrackListItem track={track} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
