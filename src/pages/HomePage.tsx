// import React from 'react'
// import { Card, CardMedia, Grid2 } from '@mui/material'
// import PromotionBanner from 'src/components/Banner/PromotionBanner'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { Header } from 'src/components/Header/Header'
import { Main } from 'src/components/Main/Main'
const HomePage = () => {
  // const images = [
  //   { id: 1, src: 'src/assets/images/DSC00197.webp', title: 'Image 1' },
  //   { id: 2, src: 'src/assets/images/DSC_2631.webp', title: 'Image 2' },
  //   { id: 3, src: 'src/assets/images/DSC_2781.webp', title: 'Image 3' },
  //   { id: 3, src: 'src/assets/images/top_bg.webp', title: 'Image 3' },
  // ]
  return (
    <>
      <Header />
      <Main />
      {/* <SwiperContainer
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlideStyled>
            <img height={300} src={image.src} alt={image.title} />
          </SwiperSlideStyled>
        ))}
      </SwiperContainer>
      <PromotionBanner /> */}
    </>
  )
}

export default HomePage

// const DivStyled = styled.div`
//   background-color: tomato;
//   height: 100vh;
// `

// const SwiperContainer = styled(Swiper)`
//   width: 300px;
//   height: 300px;
// `
// const SwiperSlideStyled = styled(SwiperSlide)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 10px;
//   border: 2px solid white;
// `
