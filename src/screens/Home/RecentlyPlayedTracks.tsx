import { useEffect, useState } from 'react';

import { fetchRecentlyPlayed } from '../../API/routes/playlist';
import Cover from '../../components/Cover';
import { ApiListResponse, RecentlyPlayed } from '../../types';

function RecentlyPlayedTracks() {
  const [recentlyPlayedTracks, setRecentlyPlayedTracks] =
    useState<ApiListResponse<RecentlyPlayed> | null>(null);

  useEffect(() => {
    getRecentlyPlayed();
  }, []);

  async function getRecentlyPlayed() {
    const recentlyPlayedTracks = await fetchRecentlyPlayed();
    setRecentlyPlayedTracks(recentlyPlayedTracks);
  }

  return (
    <div>
      <ul>
        {recentlyPlayedTracks &&
          recentlyPlayedTracks.data.items.map((item, index) => (
            <li key={`${item.track.id}-${index}`}>
              <p>
                {item.track.name} - {item.track.album.name}
              </p>
              <Cover rounded src={item.track.album.images[0].url} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default RecentlyPlayedTracks;
