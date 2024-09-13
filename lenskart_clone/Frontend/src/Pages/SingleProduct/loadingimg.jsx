import { Flex } from "@chakra-ui/react";
import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loadingimg = () => {
  return (
    <Flex
      width="100%"
      height="100%"
      align="center"
      justify="center"
    >
      <DotLottieReact
        src="https://lottie.host/82095509-3bee-425e-8b2f-511190139d0c/139L8YXIBN.json" 
        loop
        autoplay
        speed={1}
        color="#616569"
      />
    </Flex>
  );
};

export default Loadingimg;
