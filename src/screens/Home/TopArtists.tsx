import React, { useEffect, useState } from 'react';

import { fetchTopArtists, fetchTopTracks } from '../../API/routes/top';
import { ApiResponse, Artist, TimeRange, Track } from '../../types';

import ArtistList from '../../components/ArtistList';
import TrackList from '../../components/TrackList';

const TopArtists: React.FC = () => {
  const [topArtists, setTopArtists] = useState<ApiResponse<Artist> | null>(
    null
  );
  const [topTracks, setTopTracks] = useState<ApiResponse<Track> | null>(null);
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

      <ArtistList artists={topArtists.items} />
      <TrackList tracks={topTracks.items} />
    </div>
  );
};

export default TopArtists;
