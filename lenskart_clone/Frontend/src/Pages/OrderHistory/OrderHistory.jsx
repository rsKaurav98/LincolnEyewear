import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Text, Stack, Heading, Grid, Button, Collapse,Image,Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { removeFromOrders } from "../../redux/order/order.actions";

const OrderHistory = () => {
  const orders = useSelector((store) => store.orderManager.order);
  const dispatch = useDispatch();
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const currentDate = `${day}-${month}-${year}`;

  const [expandedOrder, setExpandedOrder] = useState(null);

  const handleDeleteOrder = (orderId) => {
    dispatch(removeFromOrders(orderId));
  };

  const toggleOrderDetails = (index) => {
    setExpandedOrder(expandedOrder === index ? null : index);
  };

  const calculateTotalPrice = (order) => {
    return order.reduce((total, product) => {
      const productPrice = Number(product.sale_price);
      const lensPrice = product.selectedLens ? (product.selectedLens.price === "Free" ? 0 : Number(product.selectedLens.price)) : 0;
      return total + (productPrice + lensPrice) * 1.18;
    }, 0);
  };

  return (
    <Box>
      <Navbar />
      <Box
        minHeight="635px"
        p={8}
        w={{ lg: "70%", md: "70%", sm: "98%", base: "98%" }}
        m="auto"
      >
        <Heading
          fontSize="25px"
          mt="1%"
          textAlign="center"
          p="2"
          bg="#455666"
          color="whiteAlpha.900"
          borderRadius="8px"
        >
          Order History
        </Heading>
        <br />
        {orders.length === 0 ? (
          <Text
            textAlign="center"
            fontSize="28px"
            color="gray"
            mt="1%"
            fontWeight="bolder"
          >
            No Order History Found
          </Text>
        ) : (
          <Stack spacing={4}>
            {orders.map((order, index) => {
              const totalPrice = calculateTotalPrice(order).toFixed(2);
              return (
                <Box key={index} borderRadius="20px" boxShadow="lg" p={4} bg="whiteAlpha.900">
                  <Box onClick={() => toggleOrderDetails(index)} cursor="pointer">
                    <Flex flexDirection={{base:"column",md:"row"}} justify="space-between">
                      <Box>
                        <Text fontWeight="bold">Order Date: {currentDate}</Text>
                        <Text>Number of Products: {order.length}</Text>
                        <Text>Total Price: ₹{Math.round(totalPrice)}.00</Text>
                      </Box>
                      <Box>
                        <Text color="blue.500" fontWeight="bold">Click To See Details</Text>
                      </Box>
                    </Flex>
                  </Box>
                  <Collapse in={expandedOrder === index} animateOpacity>
                    <Box mt={4}>
                      {order.map((product) => (
                        <Link to={`/products/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
                          <Grid
                            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                            gap={4}
                            p={4}
                            border="1px"
                            borderColor="gray.200"
                            borderRadius="10px"
                            mb={2}
                          >
                            <Image
                              src={product?.images[0]?.src}
                              w="100px"
                              h="100px"
                              objectFit="cover"
                              borderRadius="10px"
                            />
                            <Box>
                              <Text fontWeight="bold">Product ID: {product.id}</Text>
                              <Text fontSize="18px" fontWeight="bold">
                                {product.name}
                              </Text>
                              <Text fontWeight="500" fontSize="17px">
                                {product.selectedLens ? product.selectedLens.name : "No Lens"}
                              </Text>
                              <Text fontWeight="bold" fontSize="18px">
                                Price: ₹{Math.round((Number(product.sale_price) + Number(product.selectedLens ? (product.selectedLens.price === "Free" ? 0 : product.selectedLens.price) : 0)) * 1.18)}.00
                              </Text>
                              <Text fontWeight="500" fontSize="15px">
                                Status : Completed
                              </Text>
                            </Box>
                          </Grid>
                        </Link>
                      ))}
                      <Button
                        colorScheme="red"
                        onClick={() => handleDeleteOrder(order[0].id)}
                        alignSelf="center"
                      >
                        Delete Order
                      </Button>
                    </Box>
                  </Collapse>
                </Box>
              );
            })}
          </Stack>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default OrderHistory;
