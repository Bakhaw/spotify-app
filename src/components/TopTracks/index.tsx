import { useEffect, useState } from 'react';

import { fetchTopTracks } from '../../API/routes/top';
import { ApiListResponse, TimeRange, Track } from '../../types';

import TrackList from '../../components/TrackList';

interface TopTracksProps {
  timeRange: TimeRange;
}

const TopTracks: React.FC<TopTracksProps> = ({ timeRange }) => {
  const [topTracks, setTopTracks] = useState<ApiListResponse<Track> | null>(
    null
  );

  useEffect(() => {
    getTopTracks();
  }, []);

  async function getTopTracks() {
    const topTracks = await fetchTopTracks(timeRange);
    setTopTracks(topTracks);
  }

  if (!topTracks) return null;

  return (
    <div className='TopTracks'>
      <TrackList
        showCover
        title='Mostly Played'
        tracks={topTracks.data.items}
      />
    </div>
  );
};

export default TopTracks;
