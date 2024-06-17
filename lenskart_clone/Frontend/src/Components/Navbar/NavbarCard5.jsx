import { React, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Image,
  Heading,
  Box,
  Button,
  Flex,
  Text,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider
} from "@chakra-ui/react";
import { CategoryContext } from "../../Context/CategoryContext";
import { useSearch } from "../../Context/SearchContext";

const NavbarCard5 = () => {
  const { setSelectedCategory, findCategoryIdBySlug, selectedCategory ,categories} = useContext(CategoryContext);
  const { setSearchValue } = useSearch();

  const handleCategoryClick = (slug) => {
    const categoryId = findCategoryIdBySlug(slug);
    if (categoryId) {
      setSelectedCategory(categoryId);
      setSearchValue(""); // Clear the search value
    }
  };
  const menuButtonStyles = {
    bg: "secondary",
    fontSize: "15px",
    fontWeight: "600",
    fontFamily: "sans-serif",
    color: "white",
    _hover: {
      borderBottom: "2px solid white",
    },
    px: "4",
  };

  return (
    <Flex bg="secondary" cursor="pointer" gap="8" h="7" justifyContent="space-between">
      <Menu>
        <MenuButton {...menuButtonStyles}>
          EYEGLASSES
        </MenuButton>
        <Link to="/products">
          <MenuList
            color="blackAlpha.900"
            bg="whiteAlpha.900"
            w="600px"
            p="4"
            borderRadius="md"
            boxShadow="lg"
            maxH="600px"
            overflowY="auto"
            css={{
              '&::-webkit-scrollbar': { display: 'none' },
              '-ms-overflow-style': 'none',
              scrollbarWidth: 'none',
            }}
            display="flex"
          >
            <div style={{ flex: 1 }}>
              <MenuItem
                fontSize="lg"
                mb="3"
                w="100%"
                bg={selectedCategory === findCategoryIdBySlug("acetate-eyeglasses") ? "gray.200" : "transparent"}
                _hover={{ bg: "gray.200" }}
                onClick={() => handleCategoryClick("acetate-eyeglasses")}
              >
                ACETATE EYEGLASSES
              </MenuItem>
              {[
                "hawk", "chariot", "poseidon", "eagle", "king", "leo", "oliver", "august",
                "carter", "zeus", "alexa", "frank", "hogan", "samantha", "austin"
              ].map((slug) => (
                <MenuItem
                  key={slug}
                  bg={selectedCategory === findCategoryIdBySlug(slug) ? "gray.200" : "transparent"}
                  _hover={{ bg: "gray.200" }}
                  onClick={() => handleCategoryClick(slug)}
                  w="100%"
                >
                  {slug.replace(/-/g, " ").toUpperCase()}
                </MenuItem>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <MenuItem
                fontSize="lg"
                mb="3"
                w="100%"
                bg={selectedCategory === findCategoryIdBySlug("tr-eyeglases") ? "gray.200" : "transparent"}
                _hover={{ bg: "gray.200" }}
                onClick={() => handleCategoryClick("tr-eyeglases")}
              >
                TR EYEGLASSES
              </MenuItem>
              {[
                "urban-edge-series", "lens-luxury-eyewear", "trufocus-tr-frames", "techtrend-tr-series",
                "vintage-charm-collection"
              ].map((slug) => (
                <MenuItem
                  key={slug}
                  bg={selectedCategory === findCategoryIdBySlug(slug) ? "gray.200" : "transparent"}
                  _hover={{ bg: "gray.200" }}
                  onClick={() => handleCategoryClick(slug)}
                  w="100%"
                >
                  {slug.replace(/-/g, " ").toUpperCase()}
                </MenuItem>
              ))}
            </div>
          </MenuList>
        </Link>
      </Menu>

      <Menu>
        <Link to="/products">
          <MenuButton {...menuButtonStyles} onClick={() => handleCategoryClick("eyeglasses")}>
            COMPUTER GLASSES
          </MenuButton>
        </Link>
      </Menu>

      <Menu>
        <MenuButton {...menuButtonStyles}>
          SUNGLASSES
        </MenuButton>
        <Link to="/products">
          <MenuList
            color="blackAlpha.900"
            bg="whiteAlpha.900"
            w="100%"
            p="4"
            borderRadius="md"
            BoxShadow="lg"
            maxH="700px"
            overflowY="auto"
            css={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '-ms-overflow-style': 'none',
              scrollbarWidth: 'none',
            }}
          >
            {categories.map((category) => (
              (category.slug === "acetate-sunglasses" ||
                category.slug === "metal-sunglasses" ||
                category.slug === "tr-sunglasses") && (
                <MenuItem
                  key={category.id}
                  onClick={() => handleCategoryClick(category.slug)}
                  bg={selectedCategory === category.id.toString() ? "gray.200" : "transparent"}
                  _hover={{ bg: "gray.200" }}
                >
                  {category.name}
                </MenuItem>
              )
            ))}
          </MenuList>
        </Link>
      </Menu>

      <Menu>
        <Link to="/products">
          <MenuButton {...menuButtonStyles} onClick={() => handleCategoryClick("eyeglasses")}>
            PROGRESSIVE GLASSES
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
export default NavbarCard5;
