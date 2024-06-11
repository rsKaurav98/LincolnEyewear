import { Link } from "react-router-dom";
import { Box, Flex, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ type }) => {
  return (
    <Grid
      m="20px 10px"
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      height="100vh"
      gap={6}
    >
      {type.map((ele) => {
        const regularPrice = parseFloat(ele.regular_price);
        const currentPrice = parseFloat(ele.price);
        const salePrice = parseFloat(ele.sale_price);

        const discountPercentage = Math.round(((regularPrice - currentPrice) / regularPrice) * 100);
        const saleDiscountPercentage = salePrice
          ? Math.round(((regularPrice - salePrice) / regularPrice) * 100)
          : 0;

        return (
          <GridItem key={ele.id}>
            <Link to={`/products/${ele.id}`}>
              <Box
                position="relative"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="3%"
                p="10px"
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                transition="0.3s"
                mb="7"
              >
                <Box>
                  <Image
                    mx="2rem"
                    mt="2rem"
                    width="80%"
                    src={ele.images[0].src}
                    alt="image"
                    _hover={{ transform: "scale(1.1)" }}
                    transition="0.25s"
                    borderRadius="3%"
                    loading="lazy"
                  />
                  <br />

                  <Box p="10px">
                    {/* Rating */}
                    <Flex justifyContent="space-between" alignItems="center">
                      <Flex
                        w={{ base: "50%", md: "25%" }} // Adjust width for mobile screens
                        borderRadius="20px"
                        alignItems="center"
                        gap="5px"
                        p="5px 10px"
                        bgColor="#eeeef5"
                        fontSize="15px"
                        justifyContent="center" // Center content horizontally
                      >
                        <Text>
                          {ele.rating
                            ? ele.rating
                            : (Math.random() * (5 - 1) + 1).toFixed(1)}
                        </Text>
                        <AiFillStar size="15px" color="#0fbd95" />
                        <Text>
                          {ele.userRated
                            ? ele.userRated
                            : Math.floor(Math.random() * 999 + 1)}
                        </Text>
                      </Flex>


                      {/* Percentage off */}
                      <Box
                        position="absolute"
                        top="10px"
                        right="10px"
                        bg="lightgreen"
                        color="white"
                        borderRadius="50%"
                        p="5px"
                        fontSize="14px"
                        fontWeight="bold"
                        zIndex="1"
                      >
                        {ele.sale_price === ele.price
                          ? `${discountPercentage}% OFF`
                          : `${saleDiscountPercentage}% OFF`}
                      </Box>
                    </Flex>

                    {/* Product details */}
                    <Text
                      mt="10px"
                      fontWeight="700"
                      color="#000042"
                      fontSize="15px"
                      textTransform="capitalize"
                    >
                      {ele.name}{" "}
                    </Text>
                    <Text
                      mt="5px"
                      fontWeight="400"
                      color="gray.400"
                      fontSize="14px"
                    >
                      {ele.slug ? ele.slug : "eyewear"}{" "}
                    </Text>
                    <Text
                      mt="5px"
                      fontWeight="400"
                      color={
                        ele.stock_status === "instock" ? "lightgreen" : "crimson"
                      }
                      fontSize="14px"
                    >
                      {ele.stock_status}
                    </Text>
                    <Text
                      mt="5px"
                      fontWeight="bold"
                      color="#gray.700"
                      fontSize="15px"
                    >
                      ₹{ele.price}{" "}
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: "lighter",
                          color: "#727297",
                          textDecoration: "line-through",
                        }}
                      >
                        ₹{ele.regular_price}
                      </span>
                      <span
                        style={{
                          color: "#727297",
                          fontSize: "15px",
                          fontWeight: "lighter",
                        }}
                      >
                        (+tax)
                      </span>
                    </Text>
                  </Box>
                </Box>

                {/* Sale price box */}
                <Box
                  fontSize="15px"
                  color="white"
                  w="100%"
                  padding="2"
                  fontWeight="bold"
                  bgGradient="linear(to-r, lightgreen, white)"
                  display={ele.sale_price === ele.price ? "none" : "inherit"}
                >
                  SALE PRICE: ₹{ele.sale_price}
                </Box>

                {/* Additional info box */}
                <Box
                  fontSize="15px"
                  color="#cbb881"
                  w="100%"
                  padding="2"
                  fontWeight="bold"
                  bgGradient="linear(to-r, #f8f2e0, yellow.50)"
                >
                  FREE LENS AVAILABLE
                </Box>
              </Box>
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ProductCard;
