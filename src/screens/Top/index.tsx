import { useState } from 'react';

import { TimeRange } from '../../types';

import Container from '../../components/Container';
import TopArtists from '../../components/TopArtists';
import TopTracks from '../../components/TopTracks';

const Top: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>(TimeRange.mediumTerm);

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newTimeRange = e.target.value as TimeRange;
    setTimeRange(newTimeRange);
  }

  return (
    <Container>
      <div>
        <select onChange={handleSelectChange}>
          <option value={TimeRange.shortTerm}>Last month</option>
          <option value={TimeRange.mediumTerm}>Last 6 months</option>
          <option value={TimeRange.longTerm}>All time</option>
        </select>
      </div>

      <TopArtists timeRange={timeRange} />
      <TopTracks timeRange={timeRange} />
    </Container>
  );
};

export default Top;
