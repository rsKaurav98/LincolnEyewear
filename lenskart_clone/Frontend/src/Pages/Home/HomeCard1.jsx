import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

const HomeCard1 = ({ type }) => {
  return (
    <Box cursor="pointer" p="-1">
      <Box>
        <Slide>
          {type.map((i) => (
            <Box key={i}>
              <a href="/products">
              <Image src={`${i.img}`} alt={i.caption} w="100%"  />
              </a>
            </Box>
          ))}
        </Slide>
      </Box>
    </Box>
  );
};

export default HomeCard1;
