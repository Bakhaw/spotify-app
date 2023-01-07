import React from 'react';

import Banner from '../Banner';

function HeaderWithBanner({ bannerAlt, bannerSrc, subtitle, title }) {
  return (
    <div className='HeaderWithBanner'>
      <Banner alt={bannerAlt} src={bannerSrc} />

      <span>{title}</span>
      <span>{subtitle}</span>
    </div>
  );
}

export default HeaderWithBanner;
