import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar';

function ArtistsList({ data }) {
  return (
    <ul className='ArtistsList'>
      {data.map((artist, i) => (
        <li key={i} className='ArtistsList__ListItem'>
          <Link to={`/artist/${artist.id}`}>
            <Avatar artist={artist} />
            <p>{artist.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ArtistsList;
