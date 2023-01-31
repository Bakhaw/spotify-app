import * as React from 'react';

import { TimeRange } from '../../types';

import TopArtists from '../../components/TopArtists';
import TopTracks from '../../components/TopTracks';

const Top: React.FC = () => {
  const timeRange = TimeRange.shortTerm;

  return (
    <div>
      <h1 className='text-center'>Time range: {timeRange}</h1>

      <TopArtists timeRange={timeRange} />
      <TopTracks timeRange={timeRange} />
    </div>
  );
};

export default Top;
