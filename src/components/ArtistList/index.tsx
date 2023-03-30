import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Artist } from '../../types';

import Cover from '../../components/Cover';

interface ArtistListProps {
  artists: Artist[];
}

const ArtistList: React.FC<ArtistListProps> = ({ artists }) => {
  return (
    <div className='ArtistList'>
      <Swiper
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        slidesPerView='auto'
        spaceBetween={20}
        speed={700}
      >
        {artists.map((artist) => (
          <li key={artist.id}>
            <SwiperSlide>
              <Link to={`/artist/${artist.id}`}>
                <Cover src={artist.images[0].url} />
                <div>{artist.name}</div>
              </Link>
            </SwiperSlide>
          </li>
        ))}
      </Swiper>
    </div>
  );
};

export default ArtistList;
