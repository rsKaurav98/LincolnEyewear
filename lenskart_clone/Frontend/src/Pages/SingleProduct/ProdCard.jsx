import { Box, Button, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import SelectLens from "../Lenses/SelectLens";

const ProdCard = ({
  type,
  handleCart,
  handleWishlist,
  handleLensCart,
  selectedLens,
  totalPrice,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedLensName, setSelectedLensName] = React.useState("Select Lens");

  const handleLensClick = (lens) => {
    handleLensCart(lens);
    setSelectedLensName(lens.name);
    onClose();
  };

  const buttonStyles = {
    mt: 2,
    p: { lg: 7, base: 0 },
    m: { lg: "10px 20px", base: "10px auto" },
    w: { lg: "90%", base: "100%" },
    color: "white",
    _hover: { boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)" },
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
        ₹{type.price}{" "}
        <span
          style={{
            fontSize: "18px",
            fontWeight: "lighter",
            color: "#727297",
            textDecoration: "line-through",
            marginRight: "2%",
          }}
        >
          {"  "}₹{type.regular_price}{" "}
        </span>
        <span
          style={{
            fontSize: "14px",
            fontWeight: "lighter",
            color: "black",
          }}
        >
          {" "}(₹{(type.price * 1.18).toFixed(2)} with GST)
        </span>
      </Text>
      <br />

      <Button sx={buttonStyles} onClick={onOpen} bgColor= "#00bac6">
        {selectedLensName}
      </Button>
      <SelectLens isOpen={isOpen} onClose={onClose} handleLensCart={handleLensClick} />

      {selectedLens && (
        <Button
          sx={buttonStyles}
          mt={2}
          onClick={() => handleCart(type)}
          p={{ lg: 7, base: 0 }}
          m={{ lg: "10px 20px", base: "10px auto" }}
          w={{ lg: "90%", base: "100%" }}
          color="white"
          bg="#455666"
          _hover={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)" }}
        >
          Add to Cart - ₹{totalPrice}
        </Button>
      )}

      {!selectedLens &&(<Button sx={buttonStyles} onClick={() => handleCart(type)} bgColor= "#00bac6">
        Purchase without Lenses
      </Button>)}

      <Button sx={buttonStyles} onClick={() => handleWishlist(type)} bgColor= "#00bac6">
        Add to Wishlist
      </Button>
    </Box>
  );
};

export default ProdCard;
