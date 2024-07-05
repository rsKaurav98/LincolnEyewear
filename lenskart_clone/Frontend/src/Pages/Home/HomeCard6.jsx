import React from "react";
import { Box, Image, Square,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

SwiperCore.use([Navigation, Autoplay]);

const HomeCard6 = ({ type, heading }) => {
  return (
    <Box
      maxW="85%"
      m="auto"
      mt="6"
      cursor="pointer"
      pb="7"
      fontWeight="400"
      border="1px solid #E2E8F0"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Link
        to={
          heading === "SUNGLASSES"
            ? heading === "TR EYEGLASSES"
              ? "/products?category=87"
              : "/products?category=53"
            : "/products?category=80"
        }
      >
        <Text
        fontWeight="600"
          fontSize="2xl"
          textAlign="center"
          py="4"
        >
          {heading}
        </Text>
      </Link>
      <Box mt="1">
        <Swiper
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 15 },
            1280: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {type.map((i) => (
            <Box key={i}>
              <SwiperSlide>
              <Link to={`/products/${i?.id}`}>
                  <Square m="auto">
                    <Image
                      src={`${i.img}`}
                      alt={i.caption}
                      boxSize="160px"
                      w="70%"
                      transition="transform 0.3s ease-in-out"
                      _hover={{ transform: "scale(1.1)" }}
                    />
                  </Square>
                </Link>
              </SwiperSlide>
            </Box>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default HomeCard6;
