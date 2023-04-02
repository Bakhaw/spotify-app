import { Track } from '../../types';

import TrackListItem from '../TrackListItem';

interface TrackListProps {
  title?: string;
  tracks: Track[];
}

const TrackList: React.FC<TrackListProps> = ({ title, tracks }) => {
  return (
    <div className='TrackList'>
      <h1 className='TrackList__title'>{title}</h1>
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
