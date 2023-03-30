import React, { useEffect, useState } from 'react';

import { fetchTopArtists } from '../../API/routes/top';
import { ApiListResponse, Artist, TimeRange } from '../../types';

import ArtistList from '../../components/ArtistList';

interface TopArtistsProps {
  timeRange: TimeRange; // long_term (calculated from several years of data and including all new data as it becomes available), medium_term (approximately last 6 months), short_term (approximately last 4 weeks).
}

const TopArtists: React.FC<TopArtistsProps> = ({ timeRange }) => {
  const [topArtists, setTopArtists] = useState<ApiListResponse<Artist> | null>(
    null
  );

  useEffect(() => {
    getTopArtists();
  }, []);

  async function getTopArtists() {
    const topArtists = await fetchTopArtists(timeRange);
    setTopArtists(topArtists);
  }

  if (!topArtists) return null;

  return (
    <div>
      <ArtistList artists={topArtists.data.items} />
    </div>
  );
};

export default TopArtists;
