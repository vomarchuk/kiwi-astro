import React, { useState } from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { SALON_IMAGES } from 'src/constants/SALON_IMAGES'
import styled from '@emotion/styled'
export const GalleryCarousel: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)

  return (
    <StyledSwiperContainer>
      <StyledSwiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {SALON_IMAGES.map((image) => (
          <StyledSwiperSlide key={image.id}>
            <StyledImage
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
            />
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>

      <StyledThumbsSwiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {SALON_IMAGES.map((image) => (
          <StyledSwiperSlide key={image.id}>
            <StyledImage
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
            />
          </StyledSwiperSlide>
        ))}
      </StyledThumbsSwiper>
    </StyledSwiperContainer>
  )
}

const StyledSwiperContainer = styled.div`
  width: 100%;
  overflow: hidden;
`

const StyledSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
  }
`
const StyledThumbsSwiper = styled(Swiper)`
  .swiper-slide {
    overflow: hidden;
  }
`
const StyledSwiperSlide = styled(SwiperSlide)`
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`
