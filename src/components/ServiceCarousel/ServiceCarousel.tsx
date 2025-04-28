import React, { useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { BREAKPOINTS, mediaQueries } from "src/constants/BREAKPOINTS";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { ActionButton } from "../Buttons/ActionButton";
const { mobile, tablet, desktop, desktopL, desktop4k } = BREAKPOINTS;
export const ServiceCarousel = () => {
  const topService = [
    {
      name: "Zestawy promocyjne",
      categoryId: "r7YDRd3CuVlsVLA2VOl7",
      img: "/images/promo_sets.webp",
      services: [
        {
          name: "Manicure + pedicure hybrydowy",
          price: "280 płn",
        },
        {
          name: "Manicure + pedicure z lakierem klasycznym",
          price: "230 płn",
        },
        {
          name: "Manicure + pedicure z odżywką",
          price: "210 płn",
        },
      ],
    },
    {
      name: "Manicure",
      categoryId: "W154NGGXXF3kHwwtgyY7",
      img: "/images/manicure.webp",
      services: [
        {
          name: "Manicure hybrydowy z nadbudową(z zdjęciem)",
          price: "140 płn",
        },
        {
          name: "Manicure hybrydowy z nadbudową (bez zdjęcia)",
          price: "120 płn",
        },
        {
          name: "Manicure klasyczny (z odżywką)",
          price: "90 płn",
        },
      ],
    },
    {
      name: "Pedicure",
      categoryId: "48AGR5DdAwE7mcElvWXg",
      img: "/images/pedicure.webp",
      services: [
        {
          name: "Pedicure hybrydowy (ze zdjęciem)",
          price: "160 płn",
        },
        {
          name: "Pedicure klasyczny (z odżywką)",
          price: "130 płn",
        },
        {
          name: "Pedicure z lakierem klasycznym Vinylux",
          price: "140 płn",
        },
      ],
    },
    {
      name: "Zabiegi na twarz",
      categoryId: "4UeXBlIEcT2PvQMzOsdt",
      img: "/images/face.webp",
      services: [
        {
          name: "Konsultacja kosmetyczna",
          price: "50 płn",
        },
        {
          name: "Oczyszczanie Wodorowe 6 etapów twarz",
          price: "260 płn",
        },
        {
          name: "Zabieg eksfoliacji kwasami + maska",
          price: "170 płn",
        },
      ],
    },
  ];
  return (
    <>
      <SwiperStyled
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {topService.map(({ name, img, services, categoryId }, index) => (
          <SwiperSlideStyled key={index}>
            <Description>
              {/* <Logo variant="black" styles="swiperSlide" /> */}
              <Title>{name}</Title>
              {services?.map((service) => (
                <ListService key={service.name}>
                  <ItemService>
                    <ServiceName>{service.name}</ServiceName>
                    <ServicePrice>{service.price}</ServicePrice>
                  </ItemService>
                </ListService>
              ))}
              <ActionButton
                title="więcej usług"
                href={`/services?id=${categoryId}`}
              />
            </Description>

            <Image src={img} alt={name} />
          </SwiperSlideStyled>
        ))}
      </SwiperStyled>
    </>
  );
};
const SwiperStyled = styled(Swiper)`
  min-width: ${mobile};
`;
const SwiperSlideStyled = styled(SwiperSlide)`

  height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  &:nth-of-type(2n) {
    flex-direction: column-reverse;
  }
`;
const Description = styled.div`
  height: 50%;
  text-align: center;
  background-color: #66c7cd;
`;
const Title = styled.h2`
  margin-top: 40px;
  text-transform: uppercase;
    ${mediaQueries.down("tablet")} {
    margin-top: 15px;
  }
`;
const ServiceName = styled.h3`
  font-size: 16px;
`;
const ListService = styled.ul`
  margin-top: 20px;
  padding: 0;
  text-decoration: none;
  list-style-type: none;

  ${mediaQueries.down("tablet")} {
    margin-top: 15px;
  }
`;
const ItemService = styled.li`
  padding: 5px 0;
  margin-left: 15px;
  margin-right: 15px;

  font-size: 14px;

  &:not(:first-of-type) {
    border-top: rgba(#fff, 0.1) 1px solid;
  }
`;
const ServicePrice = styled.span`
  color: #4a4a4a;
  font-weight: bold;
  font-size: 16px;
`;
const Image = styled.img`
  height: 50%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
