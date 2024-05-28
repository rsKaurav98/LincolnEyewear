import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  Flex,
  Divider,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { lensData } from "./data";

const SelectLens = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("SINGLE VISION");

  const renderLensContent = (category) => (
    <Box mt="10px">
      {lensData[category].map((item, idx) => (
        <Box key={idx} mb="20px" display="flex" justifyContent="space-between" bg="#455666" color="white" pl={{ base: "10px", md: "20px" }} borderRadius="10px" _hover={{ transform: "scale(1.02)" }} transition="0.3s">
          <div>
            <Text fontWeight="bold" fontSize={{ base: "4vw", md: "30px" }}>{item.name}</Text>
            <Box pl={{ base: "10px", md: "20px" }}>
              {item.features.map((feature, fidx) => (
                <Text key={fidx} fontSize={{ base: "3.5vw", md: "25px" }}>• {feature}</Text>
              ))}
            </Box>
            <Text mt="10px" fontWeight="bold" fontSize={{ base: "4vw", md: "30px" }}>{item.price}</Text>
          </div>
          <div>
            <img width="200px" height="auto" src={item.src}/>
          </div>
        </Box>
      ))}
    </Box>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        rounded="3xl"
        maxWidth={{ base: "95%", md: "80%" }}
        maxHeight={{ base: "95vh", md: "80vh" }}
        overflowY={{ base: "auto", md: "hidden" }}
        mt={{ base: "5%", md: "0" }}
      >
        <Flex justify="center" fontWeight="bold" fontSize={{ base: "6vw", md: "2.7vw" }} color="#455666" m="10px">
          Choose Lens Package
        </Flex>
        <ModalCloseButton
          borderRadius="50%"
          bg="white"
          m="10px 10px 0px 0px"
          color="#455666"
        />
        <ModalBody p="0px 0px" borderRadius="15px">
          <Box m={{ base: "20px", md: "34px 45px 50px 45px" }}>
            <Flex flexDirection={{ base: "column", md: "row" }} width="100%">
              <Flex
                flexDirection="column"
                width={{ base: "100%", md: "23%" }}
                p={{ base: "0", md: "10px" }}
                overflowX="hidden"
                sx={{ "&::-webkit-scrollbar": { display: "none" }, msOverflowStyle: "none", scrollbarWidth: "none" }}
              >
                {Object.keys(lensData).map((category, index) => (
                  <Box key={index}>
                    <Box
                      as="button"
                      color={selectedCategory === category ? "#455666" : "gray.400"}
                      fontWeight={selectedCategory === category ? "700" : "600"}
                      fontSize={{ base: "5vw", md: "35px" }}
                      _hover={{ transform: "scale(1.05)", fontWeight: "700", color: "#455666" }}
                      textAlign="left"
                      mt={index > 0 ? "20px" : "0"}
                      onClick={() => setSelectedCategory(category)}
                      transform={selectedCategory === category ? "scale(1.05)" : "scale(1)"}
                      ml="10px"
                    >
                      {category}
                      <ArrowForwardIcon />
                    </Box>
                    {selectedCategory === category && (
                      <Box display={{ base: "block", md: "none" }}>
                        {renderLensContent(category)}
                      </Box>
                    )}
                    {index < Object.keys(lensData).length - 1 && (
                      <Divider borderColor="gray.200" my="20px" />
                    )}
                  </Box>
                ))}
              </Flex>
              <Divider
                orientation="vertical"
                borderColor="gray.200"
                height="auto"
                display={{ base: "none", md: "block" }}
              />
              <Flex
                width={{ base: "100%", md: "77%" }}
                p={{ base: "0", md: "10px" }}
                maxH={{ base: "60vh", lg: "60vh", md: "60vh", sm: "40vh" }}
                flexDirection="column"
                overflowY="auto"
                sx={{ "&::-webkit-scrollbar": { display: "none" }, msOverflowStyle: "none", scrollbarWidth: "none" }}
              >
                <Box display={{ base: "none", md: "block" }}>
                  {renderLensContent(selectedCategory)}
                </Box>
              </Flex>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SelectLens;
