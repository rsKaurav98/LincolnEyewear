import { useSelector,useDispatch} from "react-redux";
import { Box, Text, Stack, Heading, Image, Grid, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { removeFromOrders } from "../../redux/order/order.actions"; 

const OrderHistory = () => {
  const orders = useSelector((store) => store.orderManager.order);
  console.log(orders)
  const dispatch = useDispatch();
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const currentDate = `${day}-${month}-${year}`;
  

  const handleDeleteOrder = (orders) => {
    console.log(orders)
    dispatch(removeFromOrders(orders));
  };

  return (
    <Box>
      <Navbar />
      <br />
      <Box
        minHeight="635"
        p={8}
        w={{ lg: "70%", md: "70%", sm: "98%", base: "98%" }}
        m="auto"
      >
        <Heading
          fontSize="25px"
          mt="1%"
          textAlign="left"
          p="2"
          bg="teal.400"
          color="whiteAlpha.900"
        >
          Order History
        </Heading>
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
            {orders.map((order, i) => (
              <Grid
                key={order[0].id}
                borderRadius="20px"
                fontSize="16px"
                textAlign="center"
                templateColumns="1fr auto"
                gap={4}
              >
                <Link to={`/products/${order[0].id}`} style={{ textDecoration: 'none' }}>
                  <Grid
                    m="auto"
                    templateColumns={{
                      base: "repeat(1,1fr)",
                      md: "30% 60%",
                      lg: "30% 60%",
                      xl: "20% 60%"
                    }}
                    key={order.id + i}
                    bg="whiteAlpha.900"
                    p={4}
                    boxShadow="dark-lg"
                    gap="5"
                    color="gray.600"
                  >
                    <Box>
                      <Image
                        src={order[0]?.image?.thumbnail}
                        w={{
                          base: "60%",
                          sm: "50%",
                          md: "100%",
                          lg: "100%",
                          xl: "100%",
                          "2xl": "100%"
                        }}
                        m="auto"
                      />
                    </Box>
                    <Box
                      textAlign={{
                        lg: "left",
                        md: "left",
                        sm: "center",
                        base: "center"
                      }}
                    >
                      <Text fontWeight="bold">
                        Product ID: {order[0].id}
                      </Text>
                      <Text fontWeight="600">
                        Order Date : {currentDate}
                      </Text>
                      <Text
                        fontSize="18px"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        {order.productRefLink}
                      </Text>
                      <Text
                        textTransform="capitalize"
                        fontWeight="500"
                        fontSize="17px"
                      >
                        {order.productType}
                      </Text>
                      <Text fontWeight="bold" fontSize="18px">
                        Price: ₹ {Math.round(order[0].price + order[0].price * 0.18)}.00 /-
                      </Text>
                      <Text fontWeight="500" fontSize="15px">
                        Colors : {order.colors}
                      </Text>
                      <Text fontWeight="500" fontSize="15px">
                        Dimension : {order.dimension}
                      </Text>
                      <Text fontWeight="500" fontSize="15px">
                        Status : Completed
                      </Text>
                    </Box>
                  </Grid>
                </Link>
                <Button
                  colorScheme="red"
                  onClick={() => handleDeleteOrder(order[0].id)}
                  alignSelf="center"
                >
                  Delete Order
                </Button>
              </Grid>
            ))}
          </Stack>
        )}
      </Box>
      <br />
      <br />
      <Footer />
    </Box>
  );
};

export default OrderHistory;
