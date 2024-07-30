import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Box, Heading, Text, List, ListItem } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <Box p={5} marginX={{base:"0",md:"120px"}}>
        <Heading as="h1" mb={4}>Privacy Policy</Heading>
        <Text mb={4}>
          At Lincoln Eyewear, we value your privacy and are committed to protecting your personal information.
          This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
          By accessing our website or providing us with your information, you consent to the terms outlined in this policy.
        </Text>
        <Heading as="h2" size="md" mb={2}>1. Information We Collect:</Heading>
        <List styleType="disc" mb={4} pl={5}>
          <ListItem>
            <Text as="span" fontWeight="bold">Personal Information:</Text> 
            When you make a purchase or register for an account, we may collect personal information such as your name, email address, shipping address, and payment details.
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="bold">Browsing Information:</Text> 
            We may also gather non-personal information such as your IP address, browser type, device information, and browsing patterns to enhance your user experience and improve our services.
          </ListItem>
        </List>
        <Heading as="h2" size="md" mb={2}>2. How We Use Your Information:</Heading>
        <List styleType="disc" mb={4} pl={5}>
          <ListItem>
            <Text as="span" fontWeight="bold">To process transactions:</Text> 
            We use your information to process orders, facilitate payments, and deliver products to you.
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="bold">To improve our services:</Text> 
            We may use data to analyse website performance, enhance product offerings, and tailor our marketing efforts to better suit your preferences.
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="bold">To communicate with you:</Text> 
            We may send you emails regarding order updates, promotions, and newsletters. You have the option to unsubscribe from these communications at any time.
          </ListItem>
        </List>
        <Heading as="h2" size="md" mb={2}>3. Data Security:</Heading>
        <List styleType="disc" mb={4} pl={5}>
          <ListItem>
            We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
          </ListItem>
          <ListItem>
            Your payment information is encrypted using secure socket layer technology (SSL) and stored securely in compliance with PCI-DSS standards.
          </ListItem>
        </List>
        <Heading as="h2" size="md" mb={2}>4. Data Sharing and Disclosure:</Heading>
        <List styleType="disc" mb={4} pl={5}>
          <ListItem>
            We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you.
          </ListItem>
          <ListItem>
            We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or to protect our rights, property, or safety.
          </ListItem>
        </List>
        <Heading as="h2" size="md" mb={2}>5. Cookies:</Heading>
        <List styleType="disc" mb={4} pl={5}>
          <ListItem>
            We use cookies and similar tracking technologies to enhance your browsing experience, analyse website traffic, and personalize content.
            You can choose to disable cookies through your browser settings, but this may affect certain functionalities of our website.
          </ListItem>
        </List>
        <Heading as="h2" size="md" mb={2}>6. Your Rights:</Heading>
        <List styleType="disc" mb={4} pl={5}>
          <ListItem>
            You have the right to access, correct, or delete your personal information at any time.
            You can update your account details or request data deletion by contacting our customer support team.
          </ListItem>
          <ListItem>
            You may also request to opt-out of certain data processing activities, such as marketing communications, by contacting us.
          </ListItem>
        </List>
        <Heading as="h2" size="md" mb={2}>7. Changes to This Policy:</Heading>
        <List styleType="disc" mb={4} pl={5}>
          <ListItem>
            We reserve the right to modify this Privacy Policy at any time.
            Any changes will be reflected on this page, and your continued use of our website constitutes acceptance of the updated policy.
          </ListItem>
        </List>
        <Heading as="h2" size="md" mb={2}>8. Contact Us:</Heading>
        <List styleType="disc" mb={4} pl={5}>
          <ListItem>
            If you have any questions or concerns about our Privacy Policy or the handling of your personal information,
            please contact us at [email address] or through our website’s contact form.
          </ListItem>
        </List>
        <Text as="h3" size="md" mb={2}>Effective Date: [01/06/2024]</Text>
        <Text mt={4} mb={4}>
          Thank you for entrusting Lincoln Eyewear with your personal information. We are dedicated to maintaining the utmost confidentiality and security of your data.
        </Text>
      </Box>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
