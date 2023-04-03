import { useEffect, useState } from 'react';

import { recentlyPlayed } from '../../API/routes/player';
import { ApiListResponse, RecentlyPlayed } from '../../types';

import Cover from '../../components/Cover';

function RecentlyPlayedTracks() {
  const [recentlyPlayedTracks, setRecentlyPlayedTracks] =
    useState<ApiListResponse<RecentlyPlayed> | null>(null);

  useEffect(() => {
    getRecentlyPlayed();
  }, []);

  async function getRecentlyPlayed() {
    const recentlyPlayedTracks = await recentlyPlayed();
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
