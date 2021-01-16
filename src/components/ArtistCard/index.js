import React from 'react';

import Avatar from '../Avatar';

function ArtistCard({ artist }) {
  return (
    <ul className='ArtistCard'>
      <li>
        <Avatar artist={artist} />
      </li>
      <li>{artist.name}</li>
      <li>{artist.followers} followers</li>
    </ul>
  );
}

export default ArtistCard;
