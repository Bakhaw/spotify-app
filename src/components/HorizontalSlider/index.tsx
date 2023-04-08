import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cover from '../Cover';
import { Album, Artist } from '../../types';

interface HorizontalSliderProps {
  items: Artist[] | Album[];
  type: 'artist' | 'album';
  title: string;
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({
  items,
  type,
  title,
}) => {
  return (
    <div className='HorizontalSlider'>
      <h1 className='HorizontalSlider__title'>{title}</h1>
      <Swiper slidesPerView='auto' spaceBetween={20} speed={700}>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/${type}/${item.id}`}>
              <Cover src={item.images[0].url} />
              <div>{item.name}</div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalSlider;
