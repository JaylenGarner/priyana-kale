import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarousellCard = ({ cardObj }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      effect="fade"
      style={{
        "--swiper-pagination-color": "#888888",
        "--swiper-navigation-color": "#FFFFFF",
      }}
    >
      {cardObj.images.map((image) => {
        return (
          <SwiperSlide>
            <img src={image.URL} alt={image.alt} />
            <div className="pt-10"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarousellCard;
