import React, { useEffect, useState } from 'react';

import API from '../../API';
import HeaderWithBanner from '../../components/HeaderWithBanner';

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

  if (!artist || !album) return <p>Loading...</p>;

  return (
    <div>
      <HeaderWithBanner
        bannerAlt={album.name}
        bannerSrc={album.image}
        subtitle={album.release_date}
        title={album.name}
      />
    </div>
  );
}

export default Album;
