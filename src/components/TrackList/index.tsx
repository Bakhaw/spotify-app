import { Swiper, SwiperSlide } from 'swiper/react';

import { Track } from '../../types';

import Cover from '../../components/Cover';

interface TrackListProps {
  tracks: Track[];
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <div className='TrackList'>
      <h1>Favorite tracks</h1>

      <Swiper
        spaceBetween={20}
        slidesPerView={Math.round(window.innerWidth / 200)}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {tracks.map((track) => (
          <li key={track.id}>
            <SwiperSlide>
              <Cover rounded src={track.album.images[0].url} />
              <div>{track.name}</div>
            </SwiperSlide>
          </li>
        ))}
      </Swiper>

      {/* <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <Cover rounded src={track.album.images[0].url} />
            <div>{track.name}</div>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default TrackList;
