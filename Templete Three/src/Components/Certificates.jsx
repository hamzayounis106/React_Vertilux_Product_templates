import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AcfContext } from '../Page/Home';
import { Pagination } from 'swiper/modules';

export default function Certificates() {
  const acfData = useContext(AcfContext);

  return (
    <div className='mt-[20px] w-full flex flex-col justify-between items-start gap-[10px]'>
      <div className='w-full mt-[10px]'>
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
          {acfData?.certificates.map((certificates_icon, index) => (
            <SwiperSlide key={index} className='swiper-slide pb-14'>
              <a
                href='https://aep.tdd.mybluehost.me'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='swiper-slide-container cursor-grab flex justify-center'>
                  <img
                    src={certificates_icon}
                    alt={`Certificate ${index + 1}`}
                    className='swiper-slide-img w-[90px] h-[90px] border-2'
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='w-full mt-[20px]'>
          <p className='text-[#7a7a7a] IBM text-[16px] pl-[10px]'>
            {acfData?.certificate_text}
          </p>
        </div>
      </div>
    </div>
  );
}
