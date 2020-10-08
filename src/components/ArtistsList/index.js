import React from 'react';

import Avatar from '../Avatar';

function ArtistsList({ data }) {
  console.log(data);

  return (
    <ul className='ArtistsList'>
      {data.map((artist, i) => (
        <li key={i} className='ArtistsList__ListItem'>
          <Avatar artist={artist} />
          <p>{artist.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default ArtistsList;
