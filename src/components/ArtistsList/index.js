import React from 'react';
import { Link } from 'react-router-dom';

import HeartInactiveIcon from '../../icons/heart-inactive.svg';

import Avatar from '../Avatar';

function ArtistsList({ data }) {
  if (!data) return null;

  return (
    <ul className='ArtistsList'>
      {data.map((artist, i) => (
        <li key={i}>
          <Link to={`/artist/${artist.id}`} className='ArtistsList__ListItem'>
            <Avatar artist={artist} size='small' />
            <p>{artist.name}</p>
          </Link>
          <img alt='Like button' role='button' src={HeartInactiveIcon} />
        </li>
      ))}
    </ul>
  );
}

export default ArtistsList;
