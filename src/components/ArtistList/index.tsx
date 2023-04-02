import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Artist } from '../../types';

import Cover from '../../components/Cover';

interface ArtistListProps {
  artists: Artist[];
  title?: string;
}

const ArtistList: React.FC<ArtistListProps> = ({ artists, title }) => {
  return (
    <div className='ArtistList'>
      <h1 className='ArtistList__title'>{title}</h1>
      <Swiper slidesPerView='auto' spaceBetween={20} speed={700}>
        {artists.map((artist) => (
          <SwiperSlide key={artist.id}>
            <Link to={`/artist/${artist.id}`}>
              <Cover src={artist.images[0].url} />
              <div>{artist.name}</div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ArtistList;
