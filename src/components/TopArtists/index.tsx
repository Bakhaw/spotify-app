import React, { useEffect, useState } from 'react';

import { fetchTopArtists } from '../../API/routes/top';
import { ApiListResponse, Artist, TimeRange } from '../../types';

import ArtistList from '../../components/ArtistList';

interface TopArtistsProps {
  timeRange: TimeRange;
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
