import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';
import { AcfContext } from '../Page/Home';

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const acfData = useContext(AcfContext);

  console.log('Gallery', acfData?.product_images);

  const colors = [
    { name: 'SNOWFLAKES' },
    { name: 'OFF WHITE' },
    { name: 'BISQUE' },
    { name: 'BLACK' },
  ];

  return (
    <div className='w-full flex justify-center items-center flex-col'>
      {/* Main Swiper */}
      <div className='w-[70%]'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto sliding
          modules={[FreeMode, Navigation, Thumbs, Autoplay]} // Add Autoplay module
          className='mySwiper2 rounded-sm p-3'
        >
          {acfData?.product_images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className='w-full h-auto rounded-md cursor-grab'
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper mt-3'
        >
          {acfData?.product_images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='relative w-full h-auto group'>
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className='w-full h-auto rounded-md cursor-pointer'
                />
                <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md'>
                  <span className='text-white text-lg font-semibold'>
                    {colors[index]?.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
