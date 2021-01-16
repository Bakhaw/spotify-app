import React, { useEffect, useState } from 'react';

import API from '../../API';
import ArtistCard from '../../components/ArtistCard';

function Album({ match }) {
  const { albumID, artistID } = match.params;
  const [artist, setArtist] = useState(null);
  const [album, setAlbum] = useState(null);
  const accessToken = localStorage.getItem('SPOTIFY_ACCESS_TOKEN');

  async function getArtist() {
    const artist = await API.routes.fetchArtistInfos(artistID, accessToken);
    setArtist(artist);
  }

  async function getAlbum() {
    const album = await API.routes.fetchAlbum(albumID, accessToken);
    setAlbum(album);
  }

  useEffect(() => {
    getArtist();
    getAlbum();
  }, []);

  if (!artist) return <p>Loading...</p>;

  return (
    <div>
      <h1>ALBUM</h1>
      <ArtistCard artist={artist} />
    </div>
  );
}

export default Album;
