import React from "react";
import { Box, Text, Image, Flex, Center, Grid } from "@chakra-ui/react";
import { AiFillFacebook } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { AiOutlineInstagram } from "react-icons/ai";

export const FooterCard1 = ({ type, heading }) => {
  return (
    <Box cursor="pointer">
      <Text fontSize="25px">{heading}</Text>
      <Box lineHeight="8">
        {type.map((i, index) => (
          <Box key={index}>
            <Text
              fontSize="15px"
              _hover={{ color: "whiteAlpha.600" }}
              lineHeight="2"
            >
              {i.labels}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const FooterCard2 = ({ type, heading }) => {
  return (
    <Box cursor="pointer">
      <Text fontSize="25px">{heading}</Text>
      <Box lineHeight="8">
        {type.map((i, index) => (
          <Box key={index}>
            <Text
              fontSize="15px"
              _hover={{ color: "whiteAlpha.600" }}
              lineHeight="2"
            >
              {i.labels}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const FooterCard = () => {
  return (
    <Grid
      templateColumns="repeat(2,1fr)"
      m="auto"
      gap="30%"
    >
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(3,1fr)",
          "2xl": "repeat(3,1fr)"
        }}
        cursor="pointer"
        p="2%"
        pl="6%"
        w="35%"
        lineHeight="10"
        gap="10%"
        pb={{ lg: "2%", sm: "4%", base: "10%" }}
      >
        <Text fontSize="20px">T&C</Text>
        <Text fontSize="20px">Privacy</Text>
        <Text fontSize="20px">Disclaimer</Text>
      </Grid>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)"
        }}
        m="auto"
        color="white"
        gap="2"
        textAlign="left"
      >
        <Text fontSize="20px" fontWeight="500">
          FOLLOWS US AT
        </Text>
        <Flex gap="2">
          <AiFillFacebook size="35px" />
          <AiOutlineInstagram size="35px" />
          <TfiTwitter size="35px" />
        </Flex>
      </Grid>
    </Grid>
  );
};
