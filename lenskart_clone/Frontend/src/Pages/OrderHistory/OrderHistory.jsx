import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Stack,
  Heading,
  Grid,
  Collapse,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Loadingimg from "../SingleProduct/loadingimg";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [error, setError] = useState(null);

  const customerData = JSON.parse(localStorage.getItem("customerData"));
  const customerId = customerData?.id;

  useEffect(() => {
    if (!customerId) {
      setError("Customer ID not found.");
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        const consumerKey = 'ck_a5217f627b385dde1c5d2392aae81f5244ce0af5';
        const consumerSecret = 'cs_70ed7d3b65ccb71cf9cbf49f6bd064cd25402bca';
    
        const response = await fetch(
          `https://lincolneyewear.com/wp-json/wc/v3/orders?customer=${customerId}&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`
        );
    
        if (!response.ok) {
          throw new Error(`Error fetching orders: ${response.statusText}`);
        }
    
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(`Error fetching orders: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    

    fetchOrders();
  }, [customerId]);

  const toggleOrderDetails = (index) => {
    setExpandedOrder(expandedOrder === index ? null : index);
  };

  const calculateTotalPrice = (order) => {
    return order.line_items.reduce((total, product) => {
      const productPrice = Number(product.price);
      return total + productPrice * 1.18;
    }, 0);
  };

  return (
    <Box>
      <Navbar />
      {loading ? (
        <Loadingimg />
      ) : (
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
          {error ? (
            <Text
              textAlign="center"
              fontSize="28px"
              color="red.500"
              mt="1%"
              fontWeight="bolder"
            >
              {error}
            </Text>
          ) : orders.length === 0 ? (
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
              {orders
                .sort((a, b) => new Date(b.date_created) - new Date(a.date_created))
                .map((order, index) => {
                  const totalPrice = calculateTotalPrice(order).toFixed(2);
                  const orderDate = new Date(order.date_created).toLocaleDateString();
                  const statusColor = order.status === "pending" ? "yellow.500" : "green.500";
                  return (
                    <Box
                      key={order.id}
                      borderRadius="20px"
                      boxShadow="lg"
                      p={4}
                      bg="whiteAlpha.900"
                    >
                      <Box onClick={() => toggleOrderDetails(index)} cursor="pointer">
                        <Flex flexDirection={{ base: "column", md: "row" }} justify="space-between">
                          <Box>
                            <Text fontWeight="bold">Order Date: {orderDate}</Text>
                            <Text>Number of Products: {order.line_items.length}</Text>
                            <Text>Total Price: ₹{Math.round(totalPrice)}.00</Text>
                            <Text>Payment Method: {order.payment_method_title}</Text>
                            {order.payment_method !== "cod" && (
                              <Text fontWeight="bold">
                                Transaction ID:{" "}
                                {order.transaction_id
                                  ? order.transaction_id
                                  : (
                                    <Text as="span" color="red.500">Payment not completed</Text>
                                  )}
                              </Text>
                            )}
                          </Box>
                          <Box>
                            <Text color={statusColor} fontWeight="bold">
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </Text>
                            <Text mt="0.5rem" mr="1rem" color="blue.500">
                              click for more...
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                      <Collapse in={expandedOrder === index} animateOpacity>
                        <Box mt={4}>
                          {order.line_items.map((product) => (
                            <Link
                              to={`/products/${product.product_id}`}
                              key={product.id}
                              style={{ textDecoration: "none" }}
                            >
                              <Grid
                                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                                gap={4}
                                p={4}
                                border="1px"
                                borderColor="gray.200"
                                borderRadius="10px"
                                mb={2}
                              >
                                {product?.image?.src ? (
                                  <Image
                                    src={product.image.src}
                                    w="100px"
                                    h="100px"
                                    objectFit="cover"
                                    borderRadius="10px"
                                  />
                                ) : (
                                  <Text fontWeight="bold" fontSize="18px">
                                    {product.name}
                                     (Lens)
                                  </Text>
                                )}
                                <Box>
                                  <Text fontWeight="bold">Product ID: {product.product_id}</Text>
                                  <Text fontSize="18px" fontWeight="bold">
                                    {product.name}
                                  </Text>
                                  <Text fontWeight="bold" fontSize="18px">
                                    Price: ₹{Math.round(Number(product.price) * 1.18)}.00
                                  </Text>
                                </Box>
                              </Grid>
                            </Link>
                          ))}
                          <Box>
                            <Text fontWeight="bold" mt={4}>
                              Shipping Address:
                            </Text>
                            <Text>
                              {order.shipping.first_name} {order.shipping.last_name}
                            </Text>
                            <Text>{order.shipping.address_1}</Text>
                            <Text>
                              {order.shipping.city}, {order.shipping.state} - {order.shipping.postcode}
                            </Text>
                            <Text>{order.shipping.country}</Text>
                            <Text>Phone: {order.shipping.phone}</Text>
                          </Box>
                        </Box>
                      </Collapse>
                    </Box>
                  );
                })}
            </Stack>
          )}
        </Box>
      )}
      <Footer />
    </Box>
  );
};

export default OrderHistory;
