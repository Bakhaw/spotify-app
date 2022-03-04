import React from 'react';

function Avatar({ artist, size = 'default' }) {
  const isImageNull = artist.image === null;

  return isImageNull ? (
    <div className='Avatar--no-image' />
  ) : (
    <img
      alt={artist.name}
      className={`Avatar Avatar--${size}`}
      src={artist.image}
    />
  );
}

export default Avatar;
