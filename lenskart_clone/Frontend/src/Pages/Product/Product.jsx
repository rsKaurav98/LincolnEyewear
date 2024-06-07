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

const consumerKey = 'ck_a5217f627b385dde1c5d2392aae81f5244ce0af5';
const consumerSecret = 'cs_70ed7d3b65ccb71cf9cbf49f6bd064cd25402bca';

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
      let sortQuery = sort === "lowtohigh" ? "asc" : sort === "hightolow" ? "desc" : "";

      // Reset filters if search value is present
      if (searchValue) {
        setSelectedCategory("");
        setSelectedTag("");
        categoryFilter = "";
        tagFilter = "";
      }

      const response = await fetch(
        `https://lincolneyewear.com/wp-json/wc/v3/products?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}&per_page=15&page=${page}${categoryFilter}${tagFilter}&search=${encodeURIComponent(searchValue)}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const postData = await response.json();
      const totalProductsCount = response.headers.get('X-WP-Total');
      setTotalPages(Math.ceil(totalProductsCount / 15));
      setTotalProducts(totalProductsCount);
      setProducts(postData);
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
                    }}
                    handleTagChange={(value) => {
                      handleTagChange(value);
                      setSearchValue("");
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
                    bg=""
                    w={{ base: "100%", sm: "auto" }}
                  >
                    {sort ? (sort === "lowtohigh" ? "Price: low to high" : "Price: high to low") : "Select"}
                  </MenuButton>
                  <MenuList placement="bottom" zIndex="10" w={{ base: "100%", sm: "auto" }}>
                    <MenuItem onClick={() => handleSortChange("")}>Select</MenuItem>
                    <MenuItem onClick={() => handleSortChange("lowtohigh")}>Price: low to high</MenuItem>
                    <MenuItem onClick={() => handleSortChange("hightolow")}>Price: high to low</MenuItem>
                  </MenuList>
                </Menu>
                <IconButton
                  aria-label="Open filter menu"
                  icon={<FaFilter />}
                  display={{ base: "inherit", xl: "none" }}
                  onClick={onOpen}
                  ml={{ base: "7px", md: "8px" }}
                  mt={{ base: "8px", md: "0" }}
                  fontSize="16px"
                  bg=""
                  w={{ base: "100%", sm: "auto" }}
                />
              </Flex>
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
