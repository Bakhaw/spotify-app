import { Track } from '../../types';

import TrackListItem from '../TrackListItem';

interface TrackListProps {
  showCover?: boolean; // default false
  showOrder?: boolean; // default false
  title?: string;
  tracks: Track[];
}

const TrackList: React.FC<TrackListProps> = ({
  showCover = false,
  showOrder = false,
  title,
  tracks,
}) => {
  return (
    <div className='TrackList'>
      <h1 className='TrackList__title'>{title}</h1>
      <ul>
        {tracks.map((track, index) => (
          <li key={track.id}>
            <TrackListItem
              order={showOrder ? index + 1 : null}
              showCover={showCover}
              track={track}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
