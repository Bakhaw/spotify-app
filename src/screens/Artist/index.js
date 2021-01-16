import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import API from '../../API';

import ArtistCard from '../../components/ArtistCard';
import Avatar from '../../components/Avatar';

function Artist({ match }) {
  const { artistID } = match.params;
  const [artist, setArtist] = useState(null);
  const accessToken = localStorage.getItem('SPOTIFY_ACCESS_TOKEN');

  async function getArtist() {
    const artistInfos = await API.routes.fetchArtistInfos(
      artistID,
      accessToken
    );
    const artistAlbums = await API.routes.fetchArtistAlbums(
      artistID,
      accessToken
    );

    setArtist({
      artistInfos,
      artistAlbums,
    });
  }

  useEffect(() => {
    getArtist();
  }, []);

  if (!artist) return <p>Loading ...</p>;

  const { artistAlbums, artistInfos } = artist;

  console.log('hey', artist);

  return (
    <div className='Artist'>
      <ArtistCard artist={artistInfos} />

      <ul className='Artist__Albums'>
        {artistAlbums.map((album) => (
          <li key={album.id}>
            <Link to={`/artist/${artistID}/album/${album.id}`}>
              <Avatar artist={album} />
              <span>{album.name}</span>
              <span>{album.release_date}</span>
              <span>{album.total_tracks} tracks</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Artist;
