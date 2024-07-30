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
    <Box mb="2" cursor="pointer" bgColor="" p="4" w="100%" className="glasses">
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
          <Link key={i.slug} to={`/products?category=${i.slug}`}>
            <Box
              border="1px"
              borderColor="white"
              flexDirection="column"
              borderRadius="md"
              bgColor="white"
              p="1"
              pb="2.5"
              _hover={{ bg: "secondary", color: "white", boxShadow: "2xl" }} // Adding shadow on hover
              transition="0.3s"
              onClick={() => handleCategoryClick(i.slug)}
              boxShadow="md" // Custom premium shadow
            >
              <Center>
                <Image src={i.img} alt={i.name} w="" />
              </Center>
              <Center>
                <Text fontSize={{base:"13px",md:"16px"}} fontWeight="500" p="1" overflowX="hidden">
                  {i.title}
                </Text>
              </Center>
            </Box>
          </Link>
        ))}

      </Grid>
    </Box>
  );
};

export default HomeCard;
