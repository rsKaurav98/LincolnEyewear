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
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { lensData } from "./data";

const SelectLens = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("Single Vision");

  const renderLensContent = (category) => (
    <Box mt="10px">
      {lensData[category].map((item, idx) => (
        <Box
          key={idx}
          mb="20px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bg="white"
          color="#333"
          pl="20px"
          borderRadius="10px"
          // _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
          transition="0.3s"
          boxShadow="md"
          cursor="pointer"
          
        >
          <Box w="80%">
            <Text fontWeight="600" fontSize={{ base: "3vw", md: "25px" }}>{item.name}</Text>
            <Box pl={{ base: "10px", md: "20px" }}>
              {item.features.map((feature, fidx) => (
                <Text key={fidx} fontSize={{ base: "2.5vw", md: "20px" }}>• {feature}</Text>
              ))}
            </Box>
            <Text mt="10px" fontWeight="600" fontSize={{ base: "3vw", md: "25px" }}>{item.price}</Text>
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
        mt={{ base: "5%", md: "0" }}
        boxShadow="2xl"
        bg="aliceblue"
        
      >
        <Flex justify="center" fontWeight="bold" fontSize={{ base: "6vw", md: "2.2vw" }} color="#333" m="10px">
          Choose Lens Package
        </Flex>
        <ModalCloseButton
          borderRadius="50%"
          bg="white"
          m="10px 10px 0px 0px"
          color="#333"
          boxShadow="md"
        />
        <ModalBody p="0px 0px" borderRadius="15px">
          <Box m={{ base: "20px", md: "34px 45px 50px 45px" }}>
            <Flex flexDirection={{ base: "column", md: "row" }} width="100%">
              <Flex
                flexDirection="column"
                width={{ base: "100%", md: "23%" }}
                p={{ base: "0", md: "2px" }}
                overflowX="hidden"
                sx={{ "&::-webkit-scrollbar": { display: "none" }, msOverflowStyle: "none", scrollbarWidth: "none" }}
                display="flex"
                justify="space-between"
                
              >
                {Object.keys(lensData).map((category, index) => (
                  <Box key={index}>

                    <Button
                      w={{base:"98%" ,md:"90%"}}
                      p="10px"
                      h="100px"
                      color={selectedCategory === category ? "black" : "white"}
                      bg={selectedCategory === category ? "white" : "#00bac6"}
                      fontWeight="400"
                      fontSize={{ base: "5vw", md: "23px" }}
                      textAlign="left"
                      _hover={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.4)"}}
                      mt={index > 0 ? "20px" : "0"}
                      onClick={() => setSelectedCategory(category)}
                      transform={selectedCategory === category ? "scale(1.02)" : "scale(1)"}
                      ml="10px"
                      display="flex"
                      alignItems="center"
                      transition="all 0.3s ease"
                      borderRadius="8px"
                      overflowX="hidden"
                      boxShadow={selectedCategory === category ? "0 4px 8px 0 rgba(0, 0, 0, 0.4)" : "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}
                    >
                        {category}
                     
                      
                    </Button>

                    <br/>

                    {selectedCategory === category && (
                      <Box display={{ base: "block", md: "none" }} >
                        {renderLensContent(category)}
                      </Box>
                    )}
                    {/* {index < Object.keys(lensData).length - 1 && (
                      <Divider borderColor="gray.200" my="20px" />
                    )} */}
                  </Box>
                ))}
              </Flex>
              {/* <Divider
                orientation="vertical"
                borderColor="gray.200"
                height="auto"
                display={{ base: "none", md: "block" }}
              /> */}
              <Flex
                width={{ base: "100%", md: "77%" }}
                p={{ base: "0", md: "10px" }}
                maxH={{ base: "63vh", lg: "63vh", md: "55vh", sm: "43vh" }}
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
