import * as React from 'react';

import { TimeRange } from '../../types';

import Container from '../../components/Container';
import TopArtists from '../../components/TopArtists';
import TopTracks from '../../components/TopTracks';

const Top: React.FC = () => {
  const timeRange = TimeRange.shortTerm;

  return (
    <Container>
      <h1 className='text-center'>Time range: {timeRange}</h1>

      <TopArtists timeRange={timeRange} />
      <TopTracks timeRange={timeRange} />
    </Container>
  );
};

export default Top;
