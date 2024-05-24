import React from "react";
import { Box } from "@chakra-ui/react";

const HomeCard7 = () => {
  return (
    <Box
      w="100%"
      m="auto"
      bgColor="#455666"
      color="whiteAlpha.900"
      pt={9}
      pl={9}
    >
      <Box fontSize="35px" w="97%" margin="auto">
        Buy The Best Eyewear From Lincoln
      </Box>
      <br />
      <Box fontSize="15px" w="97%" margin="auto" pb="5" textAlign="justify">
        <Box w="95%">
        At Lincoln Eyewear, we believe in providing exceptional quality and style without compromise. Whether you're looking for the latest trends or timeless classics, our curated selection ensures there's something for everyone. Elevate your look and protect your eyes with eyewear that reflects your unique personality and lifestyle. Shop confidently with our commitment to superior customer service and satisfaction.
        </Box>
        <br />
        <Box w="95%" textAlign="justify">
        Discover your perfect pair at Lincoln Eyewear. From stylish eyeglasses to protective sunglasses and computer glasses, find your ideal blend of fashion and function. Explore our collection today!
        </Box>
      </Box>
    </Box>
  );
};

export default HomeCard7;
