import React, { useEffect, useState } from 'react';

import { fetchTopArtists, fetchTopTracks } from '../../API/routes/top';
import { ApiListResponse, Artist, TimeRange, Track } from '../../types';

import ArtistList from '../../components/ArtistList';
import TrackList from '../../components/TrackList';

const Top: React.FC = () => {
  const [topArtists, setTopArtists] = useState<ApiListResponse<Artist> | null>(
    null
  );
  const [topTracks, setTopTracks] = useState<ApiListResponse<Track> | null>(
    null
  );
  const timeRange = TimeRange.longTerm;

  useEffect(() => {
    getTopArtists();
    getTopTracks();
  }, []);

  async function getTopArtists() {
    const topArtists = await fetchTopArtists(timeRange);
    setTopArtists(topArtists);
  }

  async function getTopTracks() {
    const topTracks = await fetchTopTracks(timeRange);
    setTopTracks(topTracks);
  }

  if (!topArtists || !topTracks) return null;

  return (
    <div>
      <h1 className='text-center'>Time range: {timeRange}</h1>

      <ArtistList artists={topArtists.data.items} />
      <TrackList tracks={topTracks.data.items} />
    </div>
  );
};

export default Top;
