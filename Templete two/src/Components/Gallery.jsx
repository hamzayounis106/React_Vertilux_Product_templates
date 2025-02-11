import { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';
import { AcfContext } from '../Page/Home';

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const acfData = useContext(AcfContext);

  const colors = [
    { name: 'SNOWFLAKES' },
    { name: 'OFF WHITE' },
    { name: 'BISQUE' },
    { name: 'BLACK' },
  ];

  return (
    <div className='w-full flex justify-center items-center flex-col'>
      {/* Main Swiper */}
      <div className='w-[95%] mx-auto md:w-[90%] lg:w-[65%]'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className='mySwiper2 rounded-sm p-3'
        >
          {acfData?.product_images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image} // Use image.url from your data structure
                alt={`Slide ${index + 1}`}
                className='w-full h-auto max-h-[500px] object-contain rounded-md cursor-grab'
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper mt-3'
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {acfData?.product_images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='relative w-full pt-[100%] group'>
                <img
                  src={image} // Use image.url from your data structure
                  alt={`Thumbnail ${index + 1}`}
                  className='absolute top-0 left-0 w-full h-full object-cover rounded-md border'
                />
                <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md cursor-pointer'>
                  <span className='text-white text-xs sm:text-sm md:text-base font-semibold text-center px-1'>
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
