import React, { useState } from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { BREAKPOINTS } from 'src/constants/BREAKPOINTS'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import styled from '@emotion/styled'
export const ServiceCarousel = () => {
  const { mobile, tablet, desktop, desktopL, desktop4k } = BREAKPOINTS
  return (
    <>
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          [tablet]: { slidesPerView: 2, spaceBetween: 40 },
          [desktop]: { slidesPerView: 3, spaceBetween: 60 },
          [desktopL]: { slidesPerView: 4, spaceBetween: 80 },
          [desktop4k]: { slidesPerView: 5, spaceBetween: 100 },
        }}
      >
        <SwiperSlide>
          <h2>service</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <button>wiecej uslug</button>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <h2>service</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <button>wiecej uslug</button>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <h2>service</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <button>wiecej uslug</button>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <h2>service</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <button>wiecej uslug</button>
          </ul>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
