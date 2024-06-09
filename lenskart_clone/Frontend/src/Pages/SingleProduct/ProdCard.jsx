import {
  Box,
  Button,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
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
    textAlign: "center",
    fontSize: { 
      xs: 14,
      md: 16,
    },
  };

  return (
    <Box>
      <Text
        my="10px"
        fontWeight={"700"}
        fontSize="lg"
        textTransform="capitalize"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
      >
        {type.name}
      </Text>
      <Text
        my="10px"
        fontWeight="600"
        color="gray.400"
        fontSize="15px"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
      >
        Size : Standard
      </Text>
      <Text
        my="10px"
        fontWeight="500"
        fontSize="18px"
        color="teal.500"
        textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
      >
        ₹{type.sale_price}{" "}
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
          {" "}(₹{(type.sale_price * 1.18).toFixed(2)} with GST)
        </span>
      </Text>
      <br />

      <Button sx={buttonStyles} onClick={onOpen} bgColor="#00bac6">
        {selectedLensName}
      </Button>
      <SelectLens isOpen={isOpen} onClose={onClose} handleLensCart={handleLensClick} />

      {selectedLens ? (
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
      ) : (
        <Button sx={buttonStyles} onClick={() => handleCart(type)} bgColor="#00bac6">
          Purchase without Lenses
        </Button>
      )}

      <Button sx={buttonStyles} onClick={() => handleWishlist(type)} bgColor="#00bac6">
        Add to Wishlist
      </Button>

      <Accordion allowMultiple defaultIndex={[0]}>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" my="10px"
        fontWeight={"700"}
        fontSize="lg">
              Short Description
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <div dangerouslySetInnerHTML={{ __html: type.description }} />
          </AccordionPanel>
        </AccordionItem>

        {/* <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" my="10px"
        fontWeight={"700"}
        fontSize="lg">
              Short Description
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <div dangerouslySetInnerHTML={{ __html: type.short_description }} />
          </AccordionPanel>
        </AccordionItem> */}

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" my="10px"
        fontWeight={"700"}
        fontSize="lg">
              Categories
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {type.categories?.map((category) => (
              <Text key={category.id}>{category.name}</Text>
            )) || <Text>No categories available</Text>}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" my="10px"
        fontWeight={"700"}
        fontSize="lg">
              Tags
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {type.tags?.map((tag) => (
              <Text key={tag.id}>{tag.name}</Text>
            )) || <Text>No tags available</Text>}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left" my="10px"
        fontWeight={"700"}
        fontSize="lg">
              In Stock
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text>{type.stock_status === "instock" ? "In Stock" : "Out of Stock"}</Text>
          </AccordionPanel>
        </AccordionItem>

        {/* <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Weight
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text>{type.weight}g</Text>
          </AccordionPanel>
        </AccordionItem> */}
      </Accordion>
    </Box>
  );
};

export default ProdCard;
