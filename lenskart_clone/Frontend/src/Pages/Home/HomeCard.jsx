import React from "react";
import { Box, Grid, Text, Image, Center } from "@chakra-ui/react";
import "./home.css"

const HomeCard = ({ type }) => {
  return (
    <Box mb="2" cursor="pointer" bgColor="aliceblue" p="4" w="100%" className="glasses">
      <Grid 
        templateColumns={{
          base: "none",
          md: "none",
          lg: "repeat(5,1fr)",
          xl: "repeat(5,1fr)",
          "2xl": "repeat(5,1fr)"
        }}
        gap={6}
        w="99%"
        m="auto"

      >
        {type.map((i) => (
          <Box
            key={i}
            border="1px"
            borderColor="white"
            flexDirection="column"
            borderRadius="md"
            bgColor="white"
            p="1"
            pb="2.5"
            _hover={{bg:"#455666", color:"white"}}
            transition={"0.3s"}
          >
            <Center>
            <a href="/products">
              <Image src={`${i.img}`} alt={i.name} w="100%" />
              </a>
            </Center>
            <Center>
              <Text fontSize="16px" fontWeight="500" p="1">
                {i.title}
              </Text>
            </Center>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeCard;
