import React from "react";
import StoryItem from "./StoryItem";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function StoryWrapper() {
  return (
    <div className="flex gap-[10px] overflow-hidden">
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <StoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <StoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <StoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <StoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <StoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <StoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <StoryItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default StoryWrapper;
