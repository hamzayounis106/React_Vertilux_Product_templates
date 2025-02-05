import { useContext, useState } from 'react';
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
  const [controlThumbs, setControlThumbs] = useState(null);
  const [chargingThumbs, setChargingThumbs] = useState(null);
  const acfData = useContext(AcfContext);
  // const productsIds = acfData.productsIds;

  return (
    <div className='w-full md:w-3/4 flex justify-center items-center flex-col '>
      {/* Main Swiper for Control Solutions */}
      <div className='w-full '>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: controlThumbs }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className='mySwiper2 rounded-sm p-3 '
        >
          {acfData?.product_images.map((product) => (
            <SwiperSlide key={product.id}>
              <img
                src={product.url}
                alt={`Slide with the product id ${product.id}`}
                className='w-full h-auto rounded-md cursor-grab'
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Control Solutions Thumbnails */}
        <p className='text-gray-500'>Control Solutions</p>
        <Swiper
          onSwiper={setControlThumbs}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper mt-3'
        >
          {acfData?.product_images.map((product) => (
            <SwiperSlide key={product.id}>
              <div className='w-full h-auto group flex items-center justify-center flex-col gap-2'>
                <img
                  src={product.url}
                  alt={`Thumbnail with the id of ${product.id}`}
                  className='w-full h-auto rounded-md cursor-pointer'
                />
                <span className='text-gray-500 text-sm text-center font-semibold'>
                  {product.id}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Main Swiper for Charging Solutions */}
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: chargingThumbs }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className='mySwiper2 rounded-sm p-3 '
        >
          {acfData?.charging_Solution.map((product) => (
            <SwiperSlide key={product.id}>
              <img
                src={product.url}
                alt={`Slide with the id of ${product.id}`}
                className='w-full h-auto rounded-md cursor-grab'
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <p className='text-gray-500 '>Charging Solutions</p>

        {/* Charging Solutions Thumbnails */}
        <Swiper
          onSwiper={setChargingThumbs}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper mt-3'
        >
          {acfData?.charging_Solution.map((product) => (
            <SwiperSlide key={product.id}>
              <div className='w-full h-auto group flex items-center justify-center flex-col gap-2'>
                <img
                  src={product.url}
                  alt={`Thumbnail with the id of ${product.id}`}
                  className='w-full h-auto rounded-md cursor-pointer'
                />
                <span className='text-gray-500 text-sm text-center font-semibold'>
                  {/* Add charging solution IDs if needed */}
                  {product.id}{' '}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
