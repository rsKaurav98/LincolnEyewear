import { Spinner, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Loadingfilter = () => {
  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Text fontSize="2xl" mb="8" color="gray.700">
        Getting Filters...
      </Text>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
};

export default Loadingfilter;
