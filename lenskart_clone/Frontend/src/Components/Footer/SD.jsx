import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Box, Heading, Text, List, ListItem } from "@chakra-ui/react";

const SD = () => {
  return (
    <>
      <Navbar />
      <Box p={5} marginX={{base:"0",md:"120px"}}>
        <Heading as="h1" mb={5}>Shipping and Delivery</Heading>
        <Text mb={5}>
          At Lincoln Eyewear, we strive to provide you with a seamless and hassle-free shopping experience from the moment you place your order to the delivery at your doorstep. Here’s what you can expect regarding shipping and delivery:
        </Text>
        <List spacing={3}>
          <ListItem>
            <Heading as="h2" size="md" mb={2}>1. Shipping Options:</Heading>
            <Text>
              We offer a range of shipping options to cater to your needs. Whether you prefer standard shipping for economical delivery or express shipping for faster service, we’ve got you covered.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" size="md" mb={2}>2. Processing Time:</Heading>
            <Text>
              Once your order is placed, our dedicated team works tirelessly to process it promptly. Most orders are processed within 3-7 business days, ensuring minimal delay before your eyewear is on its way to you.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" size="md" mb={2}>3. Tracking Your Order:</Heading>
            <Text>
              We understand the importance of keeping you informed every step of the way. Once your order is shipped, you will receive a tracking number via email, allowing you to monitor the progress of your delivery in real-time.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" size="md" mb={2}>4. Estimated Delivery Times:</Heading>
            <Text>
              Delivery times vary depending on your location and the shipping method chosen. Generally, standard shipping takes between 3-7 business days, while express shipping can deliver your order within 3-7 business days.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" size="md" mb={2}>5. International Shipping:</Heading>
            <Text>
              For our valued customers outside the UK, we offer international shipping options. Please note that delivery times may vary due to customs clearance processes in your country.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" size="md" mb={2}>6. Safe and Secure Packaging:</Heading>
            <Text>
              Your eyewear is precious to us, which is why we take extra care in packaging to ensure it arrives in pristine condition. Our packaging is designed to protect your eyewear from any damage during transit.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as="h2" size="md" mb={2}>7. Customer Support:</Heading>
            <Text>
              Should you have any questions or concerns about your shipping or delivery, our dedicated customer support team is here to assist you. Feel free to reach out to us via email or phone, and we’ll be happy to help.
            </Text>
          </ListItem>
        </List>
        <Text mt={5}>
          At Lincoln Eyewear, we are committed to providing you with a delightful shopping experience, right from the moment you browse our collection to the moment you receive your eyewear. Shop with confidence, knowing that your satisfaction is our top priority.
        </Text>
      </Box>
      <Footer />
    </>
  );
};

export default SD;
