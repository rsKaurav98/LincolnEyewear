import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Text,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Box,
} from "@chakra-ui/react";
import { CategoryContext } from "../../Context/CategoryContext";
import { useSearch } from "../../Context/SearchContext";

const NavbarCard5 = () => {
  const { setSelectedCategory, findCategoryIdBySlug, selectedCategory, categories } = useContext(CategoryContext);
  const { setSearchValue } = useSearch();

  const handleCategoryClick = (slug) => {
    const categoryId = findCategoryIdBySlug(slug);
    if (categoryId) {
      setSelectedCategory(categoryId);
      setSearchValue("");
    }
  };

  const menuButtonStyles = {
    fontSize: "15px",
    fontWeight: "600",
    fontFamily: "sans-serif",
    color: "white",
    _hover: { borderBottom: "2px solid white" },
    display: "flex",
    alignItems: "center"
  };

  return (
    <Flex bg="secondary" cursor="pointer" gap="100" h="7" justifyContent="space-between" align>
      <Popover trigger="hover" placement="bottom-start">
        <PopoverTrigger>
          <Text
            as={Link}
            to="/products"
            {...menuButtonStyles}
            onClick={() => handleCategoryClick("eyeglasses")}
          >
            EYEGLASSES
          </Text>
        </PopoverTrigger>
        <PopoverContent bg="whiteAlpha.800" w="600px" p="4" borderRadius="md" boxShadow="lg" maxH="600px" overflowY="auto" css={{
          '&::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none',
          scrollbarWidth: 'none',
        }}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody display="flex">
            <div style={{ flex: 1 }}>
              <Link to="/products">
                <Box
                  fontSize="lg"
                  mb="3"
                  w="100%"
                  bg={selectedCategory === findCategoryIdBySlug("acetate-eyeglasses") ? "secondary" : "transparent"}
                  color={selectedCategory === findCategoryIdBySlug("acetate-eyeglasses") ? "white" : ""}
                  _hover={{ bg: "secondary", color: "white" }}
                  onClick={() => handleCategoryClick("acetate-eyeglasses")}
                  rounded={10}
                  paddingX={3}
                >
                  ACETATE EYEGLASSES
                </Box>
              </Link>
              {[
                "hawk", "chariot", "poseidon", "eagle", "king", "leo", "oliver", "august",
                "carter", "zeus", "alexa", "frank", "hogan", "samantha", "austin"
              ].map((slug) => (
                <Link to="/products">
                  <Box
                    key={slug}
                    bg={selectedCategory === findCategoryIdBySlug(slug) ? "secondary" : "transparent"}
                    color={selectedCategory === findCategoryIdBySlug(slug) ? "white" : ""}
                    _hover={{ bg: "secondary", color: "white" }}
                    onClick={() => handleCategoryClick(slug)}
                    w="100%"
                    rounded={10}
                    paddingX={3}
                  >
                    {slug.replace(/-/g, " ").toUpperCase()}
                  </Box>
                </Link>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <Link to="/products">
                <Box
                  fontSize="lg"
                  mb="3"
                  w="100%"
                  bg={selectedCategory === findCategoryIdBySlug("tr-eyeglases") ? "secondary" : "transparent"}
                  color={selectedCategory === findCategoryIdBySlug("tr-eyeglases") ? "white" : ""}
                  _hover={{ bg: "secondary", color: "white" }}
                  onClick={() => handleCategoryClick("tr-eyeglases")}
                  rounded={10}
                  paddingX={3}
                >
                  TR EYEGLASSES
                </Box>
              </Link>
              {[
                "urban-edge-series", "lens-luxury-eyewear", "trufocus-tr-frames", "techtrend-tr-series",
                "vintage-charm-collection"
              ].map((slug) => (
                <Link to="/products">
                  <Box
                    key={slug}
                    bg={selectedCategory === findCategoryIdBySlug(slug) ? "secondary" : "transparent"}
                    color={selectedCategory === findCategoryIdBySlug(slug) ? "white" : ""}
                    _hover={{ bg: "secondary", color: "white" }}
                    onClick={() => handleCategoryClick(slug)}
                    w="100%"
                    rounded={10}
                    paddingX={3}
                  >
                    {slug.replace(/-/g, " ").toUpperCase()}
                  </Box>
                </Link>
              ))}

              <Link to="/products">
                <Box
                  fontSize="lg"
                  mt="3"
                  w="100%"
                  bg={selectedCategory === findCategoryIdBySlug("metal-eyeglases") ? "secondary" : "transparent"}
                  color={selectedCategory === findCategoryIdBySlug("metal-eyeglases") ? "white" : ""}
                  _hover={{ bg: "secondary", color: "white" }}
                  onClick={() => handleCategoryClick("metal-eyeglases")}
                  rounded={10}
                  paddingX={3}
                >
                  METAL EYEGLASSES
                </Box>
              </Link>
            </div>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      {/* Computer Glasses Popover */}
      <Popover trigger="hover" placement="bottom-start">
        <PopoverTrigger>
          <Text
            as={Link}
            to="/products"
            {...menuButtonStyles}
            onClick={() => handleCategoryClick("computer-glasses")}
          >
            COMPUTER GLASSES
          </Text>
        </PopoverTrigger>
      </Popover>

      {/* Sunglasses Popover */}
      <Popover trigger="hover" placement="bottom-start">
        <PopoverTrigger>
          <Text
            as={Link}
            to="/products"
            {...menuButtonStyles}
            onClick={() => handleCategoryClick("sunglasses")}
          >
            SUNGLASSES
          </Text>
        </PopoverTrigger>
        <PopoverContent bg="whiteAlpha.800" w="100%" p="4" borderRadius="md" boxShadow="lg" maxH="700px" overflowY="auto" css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          scrollbarWidth: 'none',
        }}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            {categories.map((category) => (
              (category.slug === "acetate-sunglasses" ||
                category.slug === "metal-sunglasses" ||
                category.slug === "tr-sunglasses") && (
                <Link to="/products">
                  <Box
                    key={category.id}
                    onClick={() => handleCategoryClick(category.slug)}
                    bg={selectedCategory === category.id.toString() ? "secondary" : "transparent"}
                    color={selectedCategory === category.id.toString() ? "white" : ""}
                    _hover={{ bg: "secondary", color: "white" }}
                    rounded={10}
                    paddingX={3}
                  >
                    {category.name}
                  </Box>
                </Link>
              )
            ))}
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Popover trigger="hover" placement="bottom-start">
        <PopoverTrigger>
          <Text
            as={Link}
            to="/products"
            {...menuButtonStyles}
            onClick={() => handleCategoryClick("progressive-glasses")}
          >
            PROGRESSIVE GLASSES
          </Text>
        </PopoverTrigger>
      </Popover>
    </Flex>
  );
};

export default NavbarCard5;
