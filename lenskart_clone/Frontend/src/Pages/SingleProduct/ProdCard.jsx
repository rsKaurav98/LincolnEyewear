import React from "react";
import { Button, Box, Text, useDisclosure } from "@chakra-ui/react";
import SelectLens from "../Lenses/SelectLens"; // Import the SelectLens component

const ProdCard = ({ type, handleCart, handleWishlist }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLensCart = (lens) => {
    // Adding a flag to indicate this is a lens
    handleCart({ ...lens, isLens: true, productId: type.id });
    onClose();
  };

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
        ₹{type.max_price - (10 / 100) * type.max_price}{" "}
        <span
          style={{
            fontSize: "18px",
            fontWeight: "lighter",
            color: "#727297",
            textDecoration: "line-through",
            marginRight: "2%",
          }}
        >
          {"  "}₹{type.max_price}{" "}
        </span>
        <span
          style={{
            fontSize: "14px",
            fontWeight: "lighter",
            color: "black",
          }}
        >
          {"  "}(₹{type.max_price - (10 / 100) * type.max_price} with GST)
        </span>
      </Text>
      <Text
        mt="-4"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
      ></Text>
      <br />

      <Button
        p={{ lg: 7, base: 0 }}
        m={{ lg: "10px 20px", base: "10px auto" }}
        w={{ lg: "90%", base: "100%" }}
        color="white"
        bgColor="#00bac6"
        onClick={onOpen}
      >
        Select Lenses
      </Button>
      <Button
        p={{ lg: 7, base: 0 }}
        m={{ lg: "10px 20px", base: "10px auto" }}
        w={{ lg: "90%", base: "100%" }}
        color="white"
        bgColor="#00bac6"
        onClick={() => handleCart(type)}
      >
        Purchase without Lenses
      </Button>
      <Button
        p={{ lg: 7, base: 0 }}
        m={{ lg: "10px 20px", base: "10px auto" }}
        w={{ lg: "90%", base: "100%" }}
        color="white"
        bgColor="#00bac6"
        onClick={() => handleWishlist(type)}
      >
        Add to Wishlist
      </Button>
      <SelectLens isOpen={isOpen} onClose={onClose} handleLensCart={handleLensCart} />
    </Box>
  );
};

export default ProdCard;
