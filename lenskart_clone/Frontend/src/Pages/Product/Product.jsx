import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Pagination from "../../Components/Pagination";
import ProductCard from "./ProductCard";
import ProdFilter from "./ProdFilter";
import { TbArrowsUpDown } from "react-icons/tb";
import { Box, Flex, Text, Button, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaFilter } from "react-icons/fa";
import {
  Gender,
  ProductTypes,
  FrameColor,
  Frame1,
  Frame2
} from "./FilterDetails";

const NewProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [types, setTypes] = useState("");
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("");
  const [frame, setFrame] = useState("");
  const [shape, setShape] = useState("");
  const [gender, setGender] = useState("");
  const [productRef, setProductRef] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchproduct = async () => {
    setIsLoaded(true);
    try {
      const response = await fetch(
        `http://localhost:8000/products?page=${page}&sort=${sort}&gender=${gender}&types=${types}&productRef=${productRef}`
      );
      const postData = await response.json();
      setProducts(postData.data);
      setIsLoaded(false);
    } catch (error) {
      console.log(error);
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    fetchproduct();
  }, [page, sort, gender, types, productRef]);

  return (
    <>
      <Navbar />
      <Box>
        <Flex m="0" px="2%" gap="4" cursor="pointer">
          <Flex
            w="17%"
            m={0}
            display={{ base: "none", xl: "inherit" }}
            flexDirection="column"
          >
            <ProdFilter
              frameheading={"FRAME TYPE"}
              frametype={Frame1}
              handleframe={setFrame}
              valframe={frame}
              shapeheading={"FRAME SHAPE"}
              shapetype={Frame2}
              handleshape={setShape}
              valshape={shape}
              type={Gender}
              heading={"GENDER"}
              handlechange={setGender}
              val={gender}
              type1={ProductTypes}
              heading1={"PRODUCT TYPE"}
              handlechange1={setTypes}
              val1={types}
              type2={FrameColor}
              heading2={"FRAME COLOR"}
              handlechange2={setProductRef}
              val2={productRef}
            />
            <hr />
          </Flex>
          
          <IconButton
            aria-label="Open filter menu"
            icon={<FaFilter />}
            display={{ base: "inherit", xl: "none" }}
            onClick={onOpen}
          />
          
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Filter Options</DrawerHeader>
                <DrawerBody>
                  <ProdFilter
                    frameheading={"FRAME TYPE"}
                    frametype={Frame1}
                    handleframe={setFrame}
                    valframe={frame}
                    shapeheading={"FRAME SHAPE"}
                    shapetype={Frame2}
                    handleshape={setShape}
                    valshape={shape}
                    type={Gender}
                    heading={"GENDER"}
                    handlechange={setGender}
                    val={gender}
                    type1={ProductTypes}
                    heading1={"PRODUCT TYPE"}
                    handlechange1={setTypes}
                    val1={types}
                    type2={FrameColor}
                    heading2={"FRAME COLOR"}
                    handlechange2={setProductRef}
                    val2={productRef}
                  />
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>

          <Box
            overflowY="scroll"
            w={{ xl: "82%", base: "100%" }}
            borderLeft="1px solid"
            borderColor="gray.300"
            m={0}
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              p="7px"
              bg="#e2e8f0"
              borderColor="#ededed"
              flexWrap="wrap"
            >
              <Text fontSize="15px" color="gray.600" fontWeight="500">
                EYEGLASSES & SUNGLASSES
              </Text>
              <Flex alignItems="center" display={{ md: "inherit", base: "none" }}>
              </Flex>
              <Flex>
                <Flex alignItems="center" mr={{ base: "8px", md: "0" }}>
                  <TbArrowsUpDown color="green" fontWeight="bold" />
                  <Text fontWeight="bold" color="green" fontSize="15px" mr="2%">
                    SortBy
                  </Text>
                </Flex>

                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    ml={{ base: "2px", md: "4px" }}
                    mt={{ base: "8px", md: "0" }}
                    p="0px"
                    fontSize="16px"
                    bg="whiteAlpha.900"
                    w={{ base: "100%", sm: "auto" }}
                  >
                    {sort ? (sort === "lowtohigh" ? "Price: low to high" : "Price: high to low") : "Select"}
                  </MenuButton>
                  <MenuList placement="bottom" zIndex="10" w={{ base: "100%", sm: "auto" }}>
                    <MenuItem onClick={() => setSort("")}>Select</MenuItem>
                    <MenuItem onClick={() => setSort("lowtohigh")}>Price: low to high</MenuItem>
                    <MenuItem onClick={() => setSort("hightolow")}>Price: high to low</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Flex>
            {products.length !== 0 && (
              <Text mt="5px" textAlign="center" fontSize="15px">
                Showing {products.length} Results of all available frames
              </Text>
            )}
            {isLoaded ? (
              <Loading />
            ) : products.length !== 0 ? (
              <ProductCard type={products} />
            ) : (
              <Text
                fontSize="28px"
                fontWeight="bolder"
                textAlign="center"
                color="gray"
                mt="5"
              >
                No Glasses Found
              </Text>
            )}
          </Box>
        </Flex>
        <Pagination current={page} onChange={(value) => setPage(value)} />
      </Box>
      <Footer />
    </>
  );
};

export default NewProduct;
