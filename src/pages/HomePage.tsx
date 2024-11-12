// import React from 'react'
// import { Card, CardMedia, Grid2 } from '@mui/material'
import PromotionBanner from 'src/components/Banner/PromotionBanner'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { EffectCards } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/effect-cards'
// import styled from '@emotion/styled'
const HomePage = () => {
  // const images = [
  //   { id: 1, src: 'src/assets/images/DSC00197.webp', title: 'Image 1' },
  //   { id: 2, src: 'src/assets/images/DSC_2631.webp', title: 'Image 2' },
  //   { id: 3, src: 'src/assets/images/DSC_2781.webp', title: 'Image 3' },
  //   { id: 4, src: 'https://via.placeholder.com/150', title: 'Image 4' },
  //   { id: 5, src: 'https://via.placeholder.com/150', title: 'Image 4' },
  //   { id: 6, src: 'https://via.placeholder.com/150', title: 'Image 4' },
  //   { id: 7, src: 'https://via.placeholder.com/150', title: 'Image 4' },
  //   { id: 8, src: 'https://via.placeholder.com/150', title: 'Image 4' },
  //   { id: 9, src: 'https://via.placeholder.com/150', title: 'Image 4' },
  //   { id: 10, src: 'https://via.placeholder.com/150', title: 'Image 4' },
  //   { id: 11, src: 'https://via.placeholder.com/150', title: 'Image 4' },
  // ]
  return (
    <div>
      {/* <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <SwiperContainer
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
      </SwiperContainer> */}
      <PromotionBanner />
      {/* <Grid2 container spacing={2}>
        {images.map((image) => (
          <Grid2 key={image.id}>
            <Card>
              <CardMedia component="img" image={image.src} alt={image.title} />
            </Card>
          </Grid2>
        ))}
      </Grid2> */}
    </div>
  )
}

export default HomePage

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
