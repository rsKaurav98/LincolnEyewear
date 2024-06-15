import React, { useEffect, useState, useContext } from "react";
import Loading from "./Loading";
import Pagination from "../../Components/Pagination";
import ProductCard from "./ProductCard";
import ProdFilter from "./ProdFilter";
import { TbArrowsUpDown } from "react-icons/tb";
import { Box, Flex, Text, Button, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaFilter } from "react-icons/fa";
import { CategoryContext } from "../../Context/CategoryContext";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useSearch } from "../../Context/SearchContext";
import base64 from 'base-64';

const consumerKey = process.env.REACT_APP_CONSUMER_KEY;
const consumerSecret = process.env.REACT_APP_CONSUMER_SECRET;

const NewProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const { searchValue, setSearchValue } = useSearch();

  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fetchProduct = async () => {
    setIsLoaded(true);
    try {
      let categoryFilter = selectedCategory ? `&category=${selectedCategory}` : "";
      let tagFilter = selectedTag ? `&tag=${selectedTag}` : "";
      let sortQuery = "";

      if (sort === "lowtohigh") {
        sortQuery = "&orderby=price&order=asc";
      } else if (sort === "hightolow") {
        sortQuery = "&orderby=price&order=desc";
      }

      if (searchValue) {
        setSelectedCategory("");
        setSelectedTag("");
        categoryFilter = "";
        tagFilter = "";
      }

      const response = await fetch(
        `https://lincolneyewear.com/wp-json/wc/v3/products?per_page=15&page=${page}${categoryFilter}${tagFilter}${sortQuery}&search=${encodeURIComponent(searchValue)}&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`
      );
      

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setTotalPages(data.totalPages);
      setTotalProducts(data.totalProducts);
      setProducts(data);
      setIsLoaded(false);
    } catch (error) {
      console.error('Fetch Error:', error);
      setIsLoaded(false);
    }
  };
  
  

  useEffect(() => {
    fetchProduct();
  }, [page, sort, selectedCategory, selectedTag, searchValue]);

  const handleSortChange = (value) => {
    setSort(value);
    setPage(1);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setSearchValue("");
    setPage(1);
  };

  const handleTagChange = (value) => {
    setSelectedTag(value);
    setSearchValue("");
    setPage(1);
  };

  return (
    <>
      <Navbar />
      <Box>
        <Flex m="0" px="2%" gap="4" cursor="pointer">
          <Flex
            w="17%"
            m={0}
            display={{ base: "none", xl: "inherit" }}
            pos="sticky"
            top="0"
            alignSelf="start"
            flexDirection="column"
          >
            <ProdFilter
              handleCategoryChange={(value) => {
                handleCategoryChange(value);
                setSearchValue("");
              }}
              handleTagChange={(value) => {
                handleTagChange(value);
                setSearchValue("");
              }}
              selectedCategory={selectedCategory}
              selectedTag={selectedTag}
            />
            <hr />
          </Flex>

          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Filter Options</DrawerHeader>
                <DrawerBody>
                  <ProdFilter
                    handleCategoryChange={(value) => {
                      handleCategoryChange(value);
                      setSearchValue("");
                      onClose();
                    }}
                    handleTagChange={(value) => {
                      handleTagChange(value);
                      setSearchValue("");
                      onClose();
                    }}
                    selectedCategory={selectedCategory}
                    selectedTag={selectedTag}
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
            pos="sticky"
            top="0"
            minH="600"
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              p="10px"
              bg="#f7fafc"
              borderBottomWidth="1px"
              borderColor="#cbd5e0"
              flexWrap="wrap"
            >
              <Flex alignItems="center" flex="1" flexWrap="wrap" justify="space-between">
                <Text fontSize="18px" color="#2d3748" fontWeight="600" mr="10px">
                  EYEGLASSES & SUNGLASSES
                </Text>
                <Flex alignItems="center">
                  <TbArrowsUpDown color="green" fontWeight="bold" />
                  <Text fontWeight="bold" color="green" fontSize="15px" ml="5px" mr="5px">
                    SortBy
                  </Text>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      p="0px"
                      fontSize="16px"
                      bg=""
                      textAlign="left"
                    >
                      {sort ? (sort === "lowtohigh" ? "Price: low to high" : "Price: high to low") : "Select"}
                    </MenuButton>
                    <MenuList placement="bottom" zIndex="10">
                      <MenuItem onClick={() => handleSortChange("")}>Select</MenuItem>
                      <MenuItem onClick={() => handleSortChange("lowtohigh")}>Price: low to high</MenuItem>
                      <MenuItem onClick={() => handleSortChange("hightolow")}>Price: high to low</MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              </Flex>
              <IconButton
                aria-label="Open filter menu"
                icon={<FaFilter />}
                onClick={onOpen}
                fontSize={{ base: "30px", md: "26px" }}
                bg=""
                ml={{ base: "0", md: "8px" }}
                display={{base:"inherit",xl:"none"}}
              />
            </Flex>

            {products.length !== 0 && (
              <>
                <Text mt="5px" textAlign="center" fontSize="15px">
                  Showing {products.length} Results of {totalProducts} Products
                </Text>
                <Text mt="5px" textAlign="center" fontSize="15px" fontWeight="600" display={{ base: "inherit", md: "none" }}>
                  Page: {page}
                </Text>
              </>
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
        <Pagination current={page} totalPages={totalPages} onChange={(value) => setPage(value)} />
      </Box>
      <Footer />
    </>
  );
};

export default NewProduct;
