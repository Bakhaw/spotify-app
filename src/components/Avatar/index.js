import React from 'react';

function Avatar({ artist }) {
  const isImageNull = artist.image === null;

  return isImageNull ? (
    <div className='Avatar--no-image' />
  ) : (
    <img alt={artist.name} className='Avatar' src={artist.image} />
  );
}

export default Avatar;
