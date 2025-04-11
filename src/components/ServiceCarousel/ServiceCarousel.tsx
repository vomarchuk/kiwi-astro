import React, { useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { BREAKPOINTS } from "src/constants/BREAKPOINTS";
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
      img: "/images/manicure.webp",
      services: [
        {
          name: "Komplet manicure + pedicure hybrydowy",
          price: "280 płn",
        },
        {
          name: "Komplet manicure + pedicure z lakierem klasycznym",
          price: "230 płn",
        },
        {
          name: "Komplet manicure + pedicure z odżywką",
          price: "210 płn",
        },
        {
          name: "Komplet Manicure + Pedicure Japoński",
          price: "210 płn",
        },
      ],
    },
    {
      name: "manicure",
      img: "/images/manicure.webp",
    },
    {
      name: "pedicure",
      img: "/images/pedicure.webp",
    },
    {
      name: "zabiegi na twarz",
      img: "/images/zabiegi-na-twarz.webp",
    },
    {
      name: "manicure",
      img: "/images/manicure.webp",
    },
    {
      name: "pedicure",
      img: "/images/pedicure.webp",
    },
    {
      name: "zabiegi na twarz",
      img: "/images/zabiegi-na-twarz.webp",
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
        {topService.map(({ name, img, services }, index) => (
          <SwiperSlideStyled key={index}>
            <Description>
              {/* <Logo variant="black" styles="swiperSlide" /> */}
              <Title>{name}</Title>
              {services?.map((service) => (
                <ListService>
                  <ItemService>
                    <ServiceName>{service.name}</ServiceName>
                    <ServicePrice>{service.price}</ServicePrice>
                  </ItemService>
                </ListService>
              ))}
              <ActionButton title="więcej usług" href="#" />
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
`;
const ServiceName = styled.h3`
  font-size: 16px;
`;
const ListService = styled.ul`
  margin-top: 20px;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
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
  margin-left: 5px;
`;
const Image = styled.img`
  height: 50%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
