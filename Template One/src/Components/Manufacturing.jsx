import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { AcfContext } from "../Page/Home";
import { Navigation, Autoplay } from "swiper/modules";
export default function Manufacturing() {
  const acfData = useContext(AcfContext);
  console.log("Manufacturing", acfData);
  return (
    <div className="mt-[20px] w-full flex flex-col justify-between items-start gap-[10px]">
      <div className="w-full  mt-[10px]">
        <Swiper
          spaceBetween={10}
          loop={true}
          slidesPerView={4}
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
          //   navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {acfData?.manufacturing_box.map((box, index) => (
            <SwiperSlide key={index} className="swiper-slide ">
              <div className="swiper-slide-container cursor-grab flex flex-col gap-[10px] items-center justify-between h-full">
                <img
                  src={box?.box_image}
                  alt={`Icon ${index + 1}`}
                  className="swiper-slide-img w-[70px] mb-2"
                />
                <p className="text-center IBM  text-[#7a7a7a] text-[17px] font-[400]">
                  {box?.box_name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
