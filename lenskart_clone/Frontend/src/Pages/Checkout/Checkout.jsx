import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { cartReset } from "../../redux/CartPage/action";
import { addToOrder } from "../../redux/order/order.actions";
import { ShippingContext } from '../../Context/shippingContext';
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import {
  Box, Button, Flex, HStack, Image, Text, Grid
} from "@chakra-ui/react";

const Orders = () => {
  const { shippingDetails } = useContext(ShippingContext);
  const [Razorpay, isLoaded] = useRazorpay();
  const navigate = useNavigate();
  const { cart, coupon } = useSelector((state) => state.cartManager);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((acc, item) => {
      let itemPrice = item.sale_price * item.quantity;
      if (item.selectedLens) {
        itemPrice += item.selectedLens.price == "Free" ? 0 : item.selectedLens.price * item.quantity;
      }
      return acc + itemPrice;
    }, 0);
    return totalPrice;
  };

  const handlePayment = useCallback(async (orderData) => {
    const token = localStorage.getItem("token");
    console.log(orderData);
    try {
      const paymentResponse = await fetch(`https://lincolneyewear.com/wp-json/custom/v1/paymentOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
      });

      if (!paymentResponse.ok) {
        throw new Error('Failed to initiate payment');
      }

      const paymentData = await paymentResponse.json();
      console.log(paymentData)

      const options = {
        key: "rzp_test_oxZqK1EarM2jYY",
        amount: paymentData.amount,
        currency: "INR",
        name: "Lincoln Eyewear",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: paymentData.order_id,
        handler: (res) => {
          console.log("Razorpay payment response:", res);
        },
        prefill: {
          name: `${shippingDetails?.first_name} ${shippingDetails?.last_name}`,
          email: shippingDetails?.email,
          contact: shippingDetails.phone,
        },
        notes: {
          address: shippingDetails.address,
        },
        theme: {
          color: "#3399cc",
        },
      };

      console.log(options);

      const rzpay = new Razorpay(options);
      rzpay.open();
    } catch (error) {
      console.error("Error in payment processing:", error);
    }
  }, [Razorpay, shippingDetails]);

  const handleOrderCreation = async (paymentMethod) => {
    const orderData = {
      billing_address: {
        first_name: shippingDetails?.first_name,
        last_name: shippingDetails?.last_name,
        company: "",
        email: shippingDetails?.email,
        phone: shippingDetails.phone,
        address_1: shippingDetails.address,
        address_2: "",
        city: shippingDetails.city,
        state: shippingDetails.state,
        postcode: shippingDetails.pincode,
        country: shippingDetails.country
      },
      shipping_address: {
        first_name: shippingDetails?.first_name,
        last_name: shippingDetails?.last_name,
        company: "",
        email: shippingDetails?.email,
        phone: shippingDetails.phone,
        address_1: shippingDetails.address,
        address_2: "",
        city: shippingDetails.city,
        state: shippingDetails.state,
        postcode: shippingDetails.pincode,
        country: shippingDetails.country
      },
      products: cart.map(item => ({
        id: item.id,
        quantity: item.quantity,
        meta_data: {
          LensData: item.selectedLens ? item.selectedLens.name : "No Lens",
          LensPrice: item.selectedLens ? (item.selectedLens.price === "Free" ? 0 : item.selectedLens.price) : 0
        }
      })),
      customer_id: "",
      shipping_method: {
        title: "Free shipping",
        id: "free_shipping:1",
        total: 0
      },
      payment_method: paymentMethod,
      order_status: "wc-completed",
      meta_data: {
        my_custom_key: "value-1",
        another_key: "another value"
      }
    };
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`https://lincolneyewear.com/wp-json/custom/v1/createOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
      });
      const data = await response.json();
      console.log("Order created successfully:", data);
      return data; 

    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  };

  const handleOrderCreationCOD = async (paymentMethod) => {
    const orderData = {
      billing_address: {
        first_name: shippingDetails?.first_name,
        last_name: shippingDetails?.last_name,
        company: "",
        email: shippingDetails?.email,
        phone: shippingDetails.phone,
        address_1: shippingDetails.address,
        address_2: "",
        city: shippingDetails.city,
        state: shippingDetails.state,
        postcode: shippingDetails.pincode,
        country: shippingDetails.country
      },
      shipping_address: {
        first_name: shippingDetails?.first_name,
        last_name: shippingDetails?.last_name,
        company: "",
        email: shippingDetails?.email,
        phone: shippingDetails.phone,
        address_1: shippingDetails.address,
        address_2: "",
        city: shippingDetails.city,
        state: shippingDetails.state,
        postcode: shippingDetails.pincode,
        country: shippingDetails.country
      },
      products: cart.map(item => ({
        id: item.id,
        quantity: item.quantity,
        meta_data: {
          LensData: item.selectedLens ? item.selectedLens.name : "No Lens",
          LensPrice: item.selectedLens ? (item.selectedLens.price === "Free" ? 0 : item.selectedLens.price) : 0
        }
      })),
      customer_id: "",
      shipping_method: {
        title: "Free shipping",
        id: "free_shipping:1",
        total: 0
      },
      payment_method: paymentMethod,
      order_status: "wc-completed",
      meta_data: {
        my_custom_key: "value-1",
        another_key: "another value"
      }
    };
    const token = localStorage.getItem("token");
    

    try {
      const response = await fetch(`https://lincolneyewear.com/wp-json/custom/v1/createOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
      });
      const data = await response.json();
      console.log("Order created successfully:", data);

    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handlePayNow = async () => {
    try {
      const orderData = await handleOrderCreation({
        id: "razorpay",
        title: "Credit/Debit card"
      });
      handlePayment(orderData); // pass the order data to handlePayment
    } catch (error) {
      console.error("Error during Pay Now process:", error);
    }
  };

  const handleCashOnDelivery = () => {
    handleOrderCreationCOD({
      id: "cod",
      title: "Cash on delivery"
    });
    dispatch(addToOrder(cart));
    navigate("/confirm");
    dispatch(cartReset());
  };

  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const currentDate = `${day}-${month}-${year}`;

  return (
    <Box m="auto">
      <Navbar />
      <Box w="90%" m="auto">
        <HStack spacing={"100px"} mt="15px" mb="20px" w="100%" gap="2">
        </HStack>
        <Box border={"1px"} borderColor="gray.300">
          <Box p={"10px 10px 10px 10px "} m="15px 0px 0px 15px" w="97%">
            <Grid
              templateColumns={{
                base: "repeat(1,1fr)",
                sm: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(2,1fr)",
                xl: "repeat(2,1fr)"
              }}
              w="100%"
            >
              <Grid
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(1,1fr)",
                  md: "repeat(1,1fr)",
                  lg: "repeat(2,1fr)",
                  xl: "repeat(2,1fr)"
                }}
                gap={{ lg: "5", sm: "0", base: "0" }}
              >
                <Flex>
                  <Box fontSize={"15px"} fontWeight="400">
                    Order ID :
                  </Box>
                  <Box
                    fontSize={"14px"}
                    ml="3px"
                    letterSpacing="1.5px"
                    fontWeight={"500"}
                  >
                    {Math.round(Math.random() * 1125452 + Math.random())}
                  </Box>
                </Flex>
                <Flex>
                  <Box fontSize={"15px"} fontWeight="400">
                    Order Date :
                  </Box>
                  <Box
                    fontSize={"14px"}
                    ml="3px"
                    letterSpacing="1.5px"
                    fontWeight={"500"}
                  >
                    {currentDate}
                  </Box>
                </Flex>
              </Grid>
              {coupon > 0 ? (
                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    sm: "repeat(1,1fr)",
                    md: "60% 40%",
                    lg: "60% 40%",
                    xl: "70% 30%"
                  }}
                  gap="2"
                  justifyContent={{
                    lg: "right",
                    md: "right",
                    sm: "left",
                    base: "left"
                  }}
                >
                  <Box
                    fontSize={"15px"}
                    fontWeight="400"
                    textAlign={{
                      xl: "right",
                      lg: "right",
                      md: "right",
                      base: "left"
                    }}
                  >
                    Total Price :{" "}
                    <strong>
                      ₹
                      {Math.round(getTotalPrice() + getTotalPrice() * 0.18) -
                        (coupon || 0)}
                      .00
                    </strong>
                  </Box>
                  <Flex
                    justifyContent={{
                      lg: "left",
                      md: "left",
                      sm: "left",
                      base: "left"
                    }}
                    flexWrap="wrap"
                  >
                    <Box
                      fontSize="14px"
                      p="1"
                      bg="red.500"
                      color="whiteAlpha.900"
                      ml="3px"
                      letterSpacing="1.5px"
                      fontWeight="bold"
                    >
                      Coupon Applied
                    </Box>
                  </Flex>
                </Grid>
              ) : (
                <Flex
                  justifyContent={{
                    lg: "right",
                    md: "right",
                    sm: "left",
                    base: "left"
                  }}
                >
                  <Box fontSize={"16px"} fontWeight="400" textAlign="right">
                    Total Price :
                  </Box>
                  <Box
                    fontSize={"17px"}
                    ml="3px"
                    letterSpacing="1.5px"
                    fontWeight={"500"}
                  >
                    ₹{Math.round(getTotalPrice() + getTotalPrice() * 0.18)}.00
                  </Box>
                </Flex>
              )}
            </Grid>
            <Grid
              mt={"20px"}
              p="10px"
              spacing={""}
              w="100%"
              templateColumns={{
                base: "repeat(1,1fr)",
                sm: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
                lg: "60% 40%",
                xl: "60% 30%"
              }}
              gap={{ sm: "4", base: "4" }}
              justifyContent={"space-between"}
            >
              <Box>
                <Box fontWeight={"500"} fontSize="15px">
                  Complete Your Payment
                </Box>
                <Box
                  fontWeight={"350"}
                  fontSize="15px"
                  flexWrap={"nowrap"}
                  display="flex"
                >
                  Order will be processed after payment
                </Box>
              </Box>
              <Grid
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(2,1fr)",
                  xl: "repeat(2,1fr)"
                }}
                justifyContent="space-between"
                gap="4"
                w="100%"
                m="auto"
              >
                <Button
                  fontSize={"15px"}
                  bg="#3bb3a9"
                  color={"white"}
                  borderRadius="4px"
                  p="15px 35px"
                  _hover={{ backgroundColor: "teal" }}
                  onClick={handlePayNow}
                >
                  PAY NOW
                </Button>
                <Button
                  fontSize={"15px"}
                  bg="#3bb3a9"
                  color={"white"}
                  borderRadius="4px"
                  p="15px 35px"
                  _hover={{ backgroundColor: "teal" }}
                  onClick={handleCashOnDelivery}
                >
                  CASH ON DELIVERY
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <HStack border={"1px"} p="10px 10px 10px 25px" borderColor="gray.300">
          <Image
            mr="10px"
            src="https://static.lenskart.com/media/mobile/universal/assets/status-pending.png"
            alt="warning"
          />
          <Box>
            <Box color={"red"} fontWeight="500" fontSize={"15px"}>
              Payment Pending
            </Box>
            <Box color={"gray"} fontSize="15px">
              Complete your payment to process order
            </Box>
          </Box>
        </HStack>
        {cart.map((el) => {
          return (
            <Box border={"1px"} borderColor="gray.300">
              <Grid
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(1,1fr)",
                  md: "35% 60%",
                  lg: "25% 70%",
                  xl: "20% 80%"
                }}
                color="gray.600"
                p="2"
                m={{ sm: "auto", base: "auto" }}
                textAlign={{ md: "left", sm: "center", base: "center" }}
              >
                <Image
                  src={el?.images?.[0]?.src}
                  w={"200px"}
                  h="100px"
                  m={{
                    lg: "10px 0px 10px 10px",
                    md: "10px 0px 10px 10px",
                    sm: "auto",
                    base: "auto"
                  }}
                />
                <Box>
                  <Box
                    m="10px 5px 5px 0px"
                    fontSize="17px"
                    textTransform="capitalize"
                    color="gray.500"
                    fontWeight="bold"
                  >
                    {el?.name || "Vincent Chase Eyeglasses"}
                  </Box>
                  <Box
                    m="10px 5px 5px 0px"
                    fontSize="17px"
                    textTransform="capitalize"
                    color="gray.500"
                    fontWeight="bold"
                  >
                    {el.selectedLens ? el.selectedLens.name : "No Lens"}
                  </Box>
                  <Box fontSize="15px" mb="4px" fontWeight="500">

                  </Box>
                  <Box
                    fontSize="14px"
                    mb={"6px"}
                    color={"gray"}
                    fontWeight={"500"}
                  >
                    Sold by Lincoln Eyewear.
                  </Box>
                  <Flex
                    fontWeight={"500"}
                    gap="1"
                    justifyContent={{
                      md: "left",
                      sm: "center",
                      base: "center"
                    }}
                  >
                    <Text fontSize="18px">
                     ₹{Math.round((Number(el.sale_price)+Number(el.selectedLens?(el.selectedLens.price==="Free"?0:el.selectedLens.price):0))*1.18)}.00
                    </Text>

                    <Text fontSize="sm" mt="1">
                      (Included all Taxes)
                    </Text>
                  </Flex>
                  <Box fontWeight={"500"} fontSize="16px" mb="5">
                    {" "}
                    Qty : {el.quantity < 10 ? `0${el.quantity}` : el.quantity}
                  </Box>
                </Box>
              </Grid>
            </Box>
          );
        })}

        <br />
        <br />
        <br />
        <br />
      </Box>
      <Footer />
    </Box>
  );
};

export default Orders;
