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
  const colors = acfData.colors;

  return (
    <div className='w-full md:w-[90%] flex justify-center items-center flex-col'>
      <div className='w-full'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
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
        <p className='text-gray-400'>Optional Accessories</p>

        {/* Thumbnails Swiper - Loop removed and responsive fixes */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper mt-3'
          breakpoints={{
            320: {
              // Mobile breakpoint
              slidesPerView: 3,
              spaceBetween: 8,
            },
            768: {
              // Tablet breakpoint
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {acfData?.product_images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='relative w-full pt-[100%] group border-b-2  '>
                {' '}
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className='absolute top-0 left-0 w-full h-full object-contain rounded-md p-1 border'
                />
                <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md cursor-pointer'>
                  <span className='text-white text-xs sm:text-sm text-center font-semibold p-1'>
                    {/* Responsive text sizing */}
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
