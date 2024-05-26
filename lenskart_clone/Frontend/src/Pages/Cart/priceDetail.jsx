import { Box, Flex, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function PriceDetail({ totalPrice = 0, discountPrice = 0 }) {
  console.log(`Total price and discount price `, totalPrice, discountPrice);
  
  const { coupon } = useSelector((state) => state.cartManager);

  const totalDiscount = totalPrice - discountPrice;
  const tax = (totalPrice * 0.18).toFixed(2);
  const totalAfterTax = (totalPrice + parseFloat(tax)).toFixed(2);
  const totalPayable = (totalAfterTax - (coupon || 0)).toFixed(2);

  return (
    <Flex
      flexDirection={"column"}
      boxShadow="xl"
      border="1px solid grey"
      borderRadius={"10px"}
      gap="3"
      padding={"5px"}
      cursor={"pointer"}
    >
      <Flex
        gap={"4"}
        flexDirection="column"
        padding={"10px"}
        border="0px solid red"
      >
        <Flex
          gap="50px"
          border="0px solid green"
          justifyContent="space-between"
        >
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Total Price
          </Heading>
          <Heading
            as="p"
            fontSize={"15px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
          >
            ₹ {totalPrice.toFixed(2)}
          </Heading>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        {/* <Flex gap="50px" border="0px solid blue" justifyContent="space-between">
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Total Discount
          </Heading>
          <Heading
            as="p"
            fontSize={"15px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
          >
            - ₹ {totalDiscount.toFixed(2)}
          </Heading>
        </Flex> */}
        {/* <Box border={"1px dashed #CECEDF"}></Box> */}
        <Flex gap="50px" border="0px solid blue" justifyContent="space-between">
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Total{" "}
            <span style={{ fontSize: "14px", fontWeight: "500" }} color="gray">
              (Before Tax)
            </span>
          </Heading>
          <Heading
            as="p"
            fontSize={"15px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
          >
            ₹ {discountPrice.toFixed(2)}
          </Heading>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        <Flex gap="50px" border="0px solid blue" justifyContent="space-between">
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Tax Collected{" "}
            <span style={{ fontSize: "14px", fontWeight: "500" }} color="gray">
              (18%)
            </span>
          </Heading>
          <Heading
            as="p"
            fontSize={"15px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
          >
            + ₹ {tax}
          </Heading>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        <Flex gap="50px" border="0px solid blue" justifyContent="space-between">
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Total{" "}
            <span style={{ fontSize: "14px", fontWeight: "500" }} color="gray">
              (After Tax)
            </span>
          </Heading>
          <Heading
            as="p"
            fontSize={"15px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
          >
            ₹ {totalAfterTax}
          </Heading>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        <Flex
          gap="50px"
          border="0px solid grey"
          justifyContent={"space-between"}
        >
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Coupon
          </Heading>
          <Heading
            as="p"
            fontSize={"15px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
            color="green.900"
          >
            ₹{(coupon || 0).toFixed(2)}
          </Heading>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        <Flex
          gap="50px"
          border="0px solid grey"
          justifyContent={"space-between"}
        >
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
          >
            Convenience Fees
          </Heading>
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="500"
            fontFamily={"Inter"}
            justifyContent="flex-end"
            color="#0FBD95"
          >
            Free
          </Heading>
        </Flex>
        <Box border={"1px dashed #CECEDF"}></Box>
        <Flex
          gap="50px"
          border="0px solid grey"
          justifyContent={"space-between"}
        >
          <Heading
            as="p"
            fontSize={"17px"}
            fontWeight="600"
            fontFamily={"Inter"}
          >
            Total payable
          </Heading>
          <Heading
            as="p"
            fontSize={"16px"}
            fontWeight="600"
            fontFamily={"Inter"}
            justifyContent="flex-end"
          >
            ₹ {totalPayable}
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default PriceDetail;
