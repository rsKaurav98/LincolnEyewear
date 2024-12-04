import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Box, Heading, Text, List, ListItem } from "@chakra-ui/react";

const CR = () => {
  return (
    <>
      <Navbar />
      <Box p={5} marginX={{base:"0",md:"120px"}}>
        <Heading as="h1" mb={5}>Cancellation, Refund, and Returns Policy</Heading>
        <Text mb={5}>
          At Lincoln Eyewear, we want you to be completely satisfied with your purchase. If for any reason you need to cancel your order, or if you’re not entirely happy with your eyewear, we’ve got you covered with our Cancellation, Refund, and Returns Policy:
        </Text>
        <List spacing={3}>
          <ListItem>
            <Heading as="h2" size="md" mb={2}>1. Cancellation:</Heading>
            <Text>
              If you wish to cancel your order, please contact our customer support team as soon as possible. Orders can only be cancelled before they are processed for shipping.
              Once an order is processed, it cannot be cancelled. However, you may still be eligible for a return or exchange under our Returns Policy (see below).
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" size="md" mb={2}>2. Refund Policy:</Heading>
            <Text>
              We offer a hassle-free refund policy for eligible returns.
              Refunds will be issued to the original payment method used during the purchase.
              Please allow up to 7-10 business days for the refund to reflect in your account, depending on your bank or card issuer’s processing time.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" size="md" mb={2}>3. Returns Policy:</Heading>
            <Text>
              If you’re not completely satisfied with your eyewear, you may return it within 30 days of receipt for a full refund or exchange.
              To initiate a return, please contact our customer support team for further instructions.
              Returned eyewear must be in its original condition, unworn, and with all packaging intact.
              Customers are responsible for return shipping costs, except in cases where the product is defective or damaged upon receipt.
              Once we receive your returned item, we will inspect it and process your refund or exchange accordingly.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" size="md" mb={2}>4. Exchanges:</Heading>
            <Text>
              If you wish to exchange your eyewear for a different style, colour, or size, please contact our customer support team to arrange the exchange.
              Exchanges are subject to availability, and we will do our best to accommodate your request.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" size="md" mb={2}>5. Damaged or Defective Items:</Heading>
            <Text>
              In the rare event that your eyewear arrives damaged or defective, please contact us immediately. We will arrange for a replacement or refund at no additional cost to you.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" size="md" mb={2}>6. Contact Us:</Heading>
            <Text>
              If you have any questions or concerns regarding our Cancellation, Refund, and Returns Policy, please don’t hesitate to contact our friendly customer support team. We’re here to assist you every step of the way.
            </Text>
          </ListItem>
        </List>
        <Text mt={5}>
          At Lincoln Eyewear, your satisfaction is our priority. Shop with confidence, knowing that we’ve got your back with our transparent and customer-friendly Cancellation, Refund, and Returns Policy.
        </Text>
      </Box>
      <Footer />
    </>
  );
};

export default CR;
