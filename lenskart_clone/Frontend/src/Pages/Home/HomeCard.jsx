import React, { useContext } from "react";
import { Box, Grid, Text, Image, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../Context/CategoryContext";
import { useSearch } from "../../Context/SearchContext";

const HomeCard = ({ type }) => {
  const { setSelectedCategory, findCategoryIdBySlug } = useContext(CategoryContext);
  const { setSearchValue } = useSearch();

  const handleCategoryClick = (slug) => {
    const categoryId = findCategoryIdBySlug(slug);
    if (categoryId) {
      setSelectedCategory(categoryId);
      setSearchValue("");
    }
  };

  return (
    <Box mb="2" cursor="pointer" bgColor="aliceblue" p="4" w="100%" className="glasses">
      <Grid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(4,1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        gap={6}
        w="99%"
        m="auto"
      >
        {type.map((i) => (
          <Box
            key={i.slug}
            border="1px"
            borderColor="white"
            flexDirection="column"
            borderRadius="md"
            bgColor="white"
            p="1"
            pb="2.5"
            _hover={{ bg: "#455666", color: "white" }}
            transition={"0.3s"}
            onClick={() => handleCategoryClick(i.slug)}
          >
            <Center>
              <Link to="/products">
                <Image src={i.img} alt={i.name} w="100%" />
              </Link>
            </Center>
            <Center>
              <Text fontSize="16px" fontWeight="500" p="1">
                {i.title}
              </Text>
            </Center>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeCard;
