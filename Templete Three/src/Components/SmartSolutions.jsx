import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { AcfContext } from '../Page/Home';
import { Pagination } from 'swiper/modules';

export default function SmartSolutions() {
  const acfData = useContext(AcfContext);

  return (
    <div className='mt-[20px] w-full flex flex-col justify-between items-start gap-[10px]'>
      <div className='w-full  mt-[10px]'>
        <Swiper
          spaceBetween={10}
          loop={true}
          slidesPerView={3}
          breakpoints={{
            500: {
              slidesPerView: 2,
            },
            800: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          {acfData?.smartSolution.map((care_maintenance_icon, index) => (
            <SwiperSlide key={index} className='swiper-slide pb-14 '>
              <div className='swiper-slide-container cursor-grab flex justify-center'>
                <img
                  src={care_maintenance_icon.icon}
                  alt={`Icon ${index + 1}`}
                  className='swiper-slide-img w-[90px] h-[90px] border-2'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
