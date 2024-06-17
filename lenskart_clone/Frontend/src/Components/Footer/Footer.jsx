import React from "react";
import { Box, Text, Flex, Link, Icon, Image } from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope,FaShieldAlt,FaScroll ,FaUndo,FaTimesCircle} from "react-icons/fa";
import { services } from "./FooterDetails";
import logo from "../../Images/logo.png";
import map from "../../Images/map.png"

const Footer = () => {
  return (
    <Box
      bgColor="secondary"
      color="whiteAlpha.900"
      pt="5"
      px={{ base: "20px", md: "60px" }}
      borderTop="2px solid #485872"
    >
      <Flex
        align="flex-start"
        justify="space-between"
        mb="4"
        flexDirection={{ base: "column", md: "row" }}
      >
        {/* Left Section */}
        <Flex flexDirection="column" alignItems="flex-start" flex="1">
          <a href="/">
          <Image src={logo} alt="Lincoln" h="50px" mb="2" />
          </a>
          <br/>
          <Text fontSize="sm" mb="4" textAlign="justify">
            Discover The World Through Clarity And Style With Lincoln Eyewear.
            Elevate Your Vision With Our Meticulously Crafted Eyewear
            Collections, Where Design Meets Precision. Explore Timeless
            Elegance, Cutting-Edge Technology, And Unparalleled Comfort. Your
            Journey To Exceptional Eyewear Begins Here – Lincoln Eyewear, Where
            Every Pair Tells A Unique Story Of Craftsmanship And Sophistication.
          </Text>
          <Flex gap="4">
            <Link
              href="https://www.facebook.com/profile.php?id=61559231648874"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook size="35px" />
            </Link>
            <Link
              href="https://www.instagram.com/lincoln_eyewear"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram size="35px" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCC0JN9PAPidcRUwEJ4tqPFQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillYoutube size="35px" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/lincoln-eyewear-485793308/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size="35px" />
            </Link>
          </Flex>
        </Flex>

        <hr/>
        <Flex flexDirection="column" flex="1" ml={{ md: "4" }} mt="10">
          <Flex align="center" mb="2">
            <Icon as={FaPhone} mr="2" />
            <Text fontSize="sm">+91 95102 24663</Text>
          </Flex>
          <Flex align="center" mb="2">
            <Icon as={FaEnvelope} mr="2" />
            <Text fontSize="sm">info@lincolneyewear.com</Text>
          </Flex>
          <Flex align="center" mb="2">
            <Icon as={FaMapMarkerAlt} mr="2" />
            <Text fontSize="sm">
              LINCOLN VENTURES LLP, Lincoln Eyewear 3-H, Patel Industrial Estate,
              Pratap Nagar, Dabhoi Road, Vadodara, Gujarat 390004, India
            </Text>
          </Flex>
          <Flex flexDirection="column" flex="1" mt={{ base: "4", md: "0" }}>
          {services.map((service, index) => (
            <Link key={index} href={service.src} mb="2" display="flex" flexDirection="row">
     <Icon as={index === 0 ? FaShieldAlt : (index === 1 ? (index === 2?FaTimesCircle: FaScroll) : FaUndo)} mr="2" />

              <Text fontSize="sm">{service.labels}</Text>
            </Link>
          ))}
        </Flex>
        </Flex>

        <Flex>
        <Link
            href="https://www.google.com/maps/search/Lincoln+Eyewear+3-H,+patel+Industrial+estate,Pratap+nagar,+dabhoi+road,+Vadodara,+Gujarat+390004+,India/@22.2831522,73.2140548,15z?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={map} alt="map" width="350vw"></img>
          </Link>
        </Flex>
      </Flex>
      <Flex
            align="center"
            justify="center"
            mt="4"
            bgColor="#485872"
            p="2"
            borderTopRadius="md"
            width="-moz-fit-content"
          >
            <Text fontSize="sm" color="white">
              &copy; 2024. POWERED BY TECHOFY INDIA
            </Text>
          </Flex>
    </Box>
  );
};

export default Footer;
