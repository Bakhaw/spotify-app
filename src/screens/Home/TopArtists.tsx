import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchTopArtists, fetchTopTracks } from '../../API/routes/top';
import { Artist, TimeRange, Track } from '../../types';

import Cover from '../../components/Cover';

const TopArtists: React.FC = () => {
  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const timeRange = TimeRange.longTerm;
  const accessToken = localStorage.getItem('SPOTIFY_ACCESS_TOKEN');

  useEffect(() => {
    getTopArtists();
    getTopTracks();
  }, []);

  async function getTopArtists() {
    if (accessToken) {
      const topArtists = await fetchTopArtists(timeRange, accessToken);
      setTopArtists(topArtists);
    } else {
      console.log('Access Token caused an error.');
    }
  }

  async function getTopTracks() {
    if (accessToken) {
      const topTracks = await fetchTopTracks(timeRange, accessToken);
      setTopTracks(topTracks);
    } else {
      console.log('Access Token caused an error.');
    }
  }

  // console.log('top artists:', topArtists);
  // console.log('top tracks:', topTracks);

  return (
    <div>
      <h1 className='text-center'>Time range: {timeRange}</h1>

      <h1>Favorite artists</h1>

      <ul className='flex gap-4 h-[300px] w-screen overflow-x-scroll my-4'>
        {topArtists.map((artist: Artist) => (
          <li key={artist.id} className='h-[200px]'>
            <Link to={`/artist/${artist.id}`}>
              <Cover url={artist.images[0].url} radius='[30px]' width='200px' />
              <div>{artist.name}</div>
            </Link>
          </li>
        ))}
      </ul>

      <h1>Favorite tracks</h1>

      <ul className='flex gap-4 h-[300px] w-screen overflow-x-scroll my-4'>
        {topTracks.map((track: Track) => (
          <li key={track.id} className='h-[200px]'>
            <Cover
              url={track.album.images[0].url}
              radius='full'
              width='200px'
            />
            <div>{track.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopArtists;
