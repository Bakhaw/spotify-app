import { Track } from '../../types';

import Cover from '../../components/Cover';

interface TrackListProps {
  tracks: Track[];
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <div className='TrackList'>
      <h1>Favorite tracks</h1>

      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <Cover rounded src={track.album.images[0].url} />
            <div>{track.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
