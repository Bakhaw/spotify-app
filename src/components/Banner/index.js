import React from 'react';

function Banner({ alt = '', src = '' }) {
  return <img alt={alt} className='Banner' src={src} />;
}

export default Banner;
