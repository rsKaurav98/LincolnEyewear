import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import { data } from "./data";

const SelectLens = ({ isOpen, onClose, handleLensCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("Single Vision");

  const handleLensClick = (lens) => {
    handleLensCart(lens);
    onClose();
  };

  const renderLensContent = (category) => (
    <Box mt="10px">
      {data[category].map((item, idx) => (
        <Box
          key={idx}
          mb="20px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bg="white"
          color="#333"
          pl="40px"
          py="20px"
          borderRadius="8px"
          transition="0.3s"
          boxShadow="md"
          cursor="pointer"
          _hover={{ bg: "#455666", color: "white" }}
          onClick={() => handleLensClick(item)}
        >
          <Box w="80%">
            <Text fontWeight="400" fontSize={{ base: "17px", md: "24px" }}>
              {item.name}
            </Text>
            <Text fontWeight="400" fontSize={{ base: "15px", md: "20px" }}>
              {item.head}
            </Text>
            <br />
            <Box pl={{ base: "10px", md: "20px" }}>
              {item.features.map((feature, fidx) => (
                <Text key={fidx} fontSize={{ base: "10px", md: "15px" }}>
                  • {feature}
                </Text>
              ))}
            </Box>
            <Text mt="10px" fontWeight="400" fontSize={{ base: "15px", md: "20px" }} color={item.sale_price === "Free" ? "#90EE90" : ""}>
              ₹{item.sale_price}
            </Text>
          </Box>
          <Box width="20%">
            <img width="200px" height="auto" src={item.src} style={{ borderRadius: "10px" }} />
          </Box>
        </Box>
      ))}
    </Box>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        rounded="md"
        maxWidth={{ base: "95%", md: "80%" }}
        maxHeight={{ base: "95vh", md: "80vh" }}
        overflowY={{ base: "auto", md: "hidden" }}
        mt={{ base: "20%", md: "0" }}
        boxShadow="2xl"
        bg="aliceblue"
      >
        <Flex justify="center" fontWeight="400" fontSize={{ base: "6vw", md: "2.2vw" }} color="#333" m="10px">
          Choose Lens Package
        </Flex>
        <ModalCloseButton borderRadius="50%" bg="white" m="10px 10px 0px 0px" color="#333" boxShadow="md" />
        <ModalBody p="0px 0px" borderRadius="15px">
          <Box m={{ base: "20px", md: "34px 45px 50px 45px" }}>
            <Flex flexDirection={{ base: "column", md: "row" }} width="100%">
              <Flex
                flexDirection="column"
                width={{ base: "100%", md: "23%" }}
                p="5px"
                overflowX="hidden"
                sx={{
                  "&::-webkit-scrollbar": { display: "none" },
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}
                justify="space-between"
                h="63vh"
              >
                {Object.keys(data).map((category, index) => (
                  <Box key={index} gap="20px">
                    <Button
                      w={{ base: "98%", md: "90%" }}
                      p="10px"
                      h="11.5vh"
                      color="white"
                      bg={selectedCategory === category ? "#455666" : "#00bac6"}
                      fontWeight="400"
                      fontSize={{ base: "4vw", md: "1.3vw" }}
                      textAlign="left"
                      _hover={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)" }}
                      onClick={() => setSelectedCategory(category)}
                      transform={selectedCategory === category ? "scale(1.02)" : "scale(1.0)"}
                    >
                      {category}
                    </Button>
                  </Box>
                ))}
              </Flex>
              <Box w={{ base: "100%", md: "77%" }} h="62vh" overflowY={{ base: "visible", md: "auto" }}>
                {renderLensContent(selectedCategory)}
              </Box>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SelectLens;
