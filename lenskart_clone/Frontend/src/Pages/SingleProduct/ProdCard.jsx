import React from "react";
import ProdDetails from "./ProdDetails";
import { ProdImage1 } from "./ProdImage";
import { Button, Image, Text, Flex, Box, useDisclosure } from "@chakra-ui/react";
import SelectLens from "../Lenses/SelectLens"; // Import the SelectLens component

const ProdCard = ({ type, handleCart, handleWishlist }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Text
        color="gray.500"
        fontSize="md"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
      >
        {type.name}
      </Text>
      <Text
        my="10px"
        fontWeight={"700"}
        fontSize="lg"
        textTransform="capitalize"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
      >
        {type.productRefLink}
      </Text>
      <Text
        my="10px"
        fontWeight="600"
        color="gray.400"
        fontSize="15px"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
      >
        Size : Medium
      </Text>
      <Text
        my="10px"
        fontWeight="500"
        fontSize="18px"
        color="teal.500"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
      >
        ₹{type.max_price - ((10/100)*type.max_price)}{" "}
        <span
          style={{
            fontSize: "18px",
            fontWeight: "lighter",
            color: "#727297",
            textDecoration: "line-through",
            marginRight: "2%"
          }}
        >
          {"  "}₹{type.max_price }{" "}
        </span>
        <span
          style={{
            fontSize: "14px",
            fontWeight: "lighter",
            color: "black"
          }}
        >
          {"  "}(₹{type.max_price - ((10/100)*type.max_price)} with GST)
        </span>
      </Text>
      <Text
        mt="-4"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
      >
      
      </Text>
      <br />

      <Button
        p={{ lg: 7, base: 0 }}
        m={{ lg: "10px 20px", base: "10px auto" }}
        w={{ lg: "90%", base: "100%" }}
        color="white"
        bgColor="#00bac6"
        onClick={onOpen}
        
        _hover= {{ bg: "#455666"}}
        transition= "0.3s"
      >
        <Flex
          flexDir="column"
          flexWrap="wrap"
          justifyContent="center"
          gap="1"
          w={{ lg: "100%", sm: "50%", base: "50%" }}
          textAlign="center"
        >
            Click To Choose Lens
        </Flex>
      </Button>
      <Button
        p={{ lg: 7, base: 0 }}
        m={{ lg: "10px 20px", base: "10px auto" }}
        w={{ lg: "90%", base: "100%" }}
        color="white"
        bgColor="#00bac6"
        onClick={handleWishlist}
        fontSize={{ lg: "md", md: "md", base: "sm" }}
        _hover= {{ bg: "#455666"}}
        transition= "0.3s"
      >
        Add to Wishlist
      </Button>
      <Button
        p={{ lg: 7, base: 0 }}
        m={{ lg: "10px 20px", base: "10px auto" }}
        w={{ lg: "90%", base: "100%" }}
        bg="whiteAlpha.900"
        border="1px"
        borderColor="gray.400"
        onClick={handleCart}
        textAlign="center"
      >
          Purchase without lens
      </Button>
      <br />
      <br />

      <ProdDetails type={type} />

      {ProdImage1.map((ele, i) => (
        <Image src={ele.src} key={i} />
      ))}

      {/* Modal Integration */}
      <SelectLens isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default ProdCard;
