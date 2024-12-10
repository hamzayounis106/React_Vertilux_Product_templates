import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; 

import { AcfContext } from "../Page/Home";

// Import required Swiper modules
import { Navigation, Autoplay } from "swiper/modules";

export default function CareAndMaintenance() {
  const acfData = useContext(AcfContext);

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
          {acfData?.care_maintenance_icons.map(
            (care_maintenance_icon, index) => (
              <SwiperSlide key={index} className="swiper-slide ">
                <div className="swiper-slide-container cursor-grab flex justify-center">
                  <img
                    src={care_maintenance_icon}
                    alt={`Icon ${index + 1}`}
                    className="swiper-slide-img w-[70px] h-[50px]"
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
        <div className="w-full mt-[20px]">
        <ul className="text-[#7a7a7a] IBM text-[17px] pl-[10px]">
                {acfData?.text
                  .match(/\d+\..+?(?=\d+\.|$)/gs)
                  ?.map((item, index) => (
                    <li key={index}>{item.trim()}</li>
                  ))}
              </ul>
        </div>
      </div>
    </div>
  );
}
