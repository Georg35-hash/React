"use client"
import { SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import StyledSwiper, { Image } from "./News.styles" // <-- ПРАВИЛЬНЫЙ ИМПОРТ
import Banner1 from "../../assets/images/banner1.png"
import Banner2 from "../../assets/images/banner2.jpg"

export default function News() {
  return (
    <section>
      <StyledSwiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        <SwiperSlide>
          <Image src={Banner1} alt="News 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Banner2} alt="News 2" />
        </SwiperSlide>
      </StyledSwiper>
    </section>
  )
}
