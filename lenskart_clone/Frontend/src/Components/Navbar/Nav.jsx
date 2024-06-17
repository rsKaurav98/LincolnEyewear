import React, { useContext } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from '../../Images/logo.png'
import { Accordion } from "@chakra-ui/react";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import {
  DrawerCloseButton,
  Button,
  Box,
  useDisclosure,
  HStack,
  Image,
  Input,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerBody,
  Heading,
  Avatar,
  Text,
  Flex
} from "@chakra-ui/react";
import { useSearch } from '../../Context/SearchContext';

function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const { isAuth, setisAuth, Authdata } = useContext(AuthContext);
  const navigate = useNavigate();
  const { setSearchValue, searchValue } = useSearch();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/products?search=${searchValue}`);
    }
  }

  const scrollToContact = () => {
    const contactDetails = document.getElementById("contact-details");
    if (contactDetails) {
      contactDetails.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  }

  return (
    <Box
      display={{ lg: "inherit", xl: "none" }}
      cursor="pointer"
      bg="aliceblue"
      p={2.5}
    >
      <HStack m="auto" justifyContent="space-between">
        <Box w="20%">
          <Link to="/">
            <Image
              src={logo}
              alt="logo"
            />
          </Link>
        </Box>
        <Box w="70%" display="inherit">
          <Input
            placeholder="Search for Eyeglasses,Sunglasses and more.."
            border="1px solid black"
            bg="white"
            w="90%"
            fontSize="16px"
            h="35px"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
            textOverflow="ellipsis"
          />
        </Box>

        <Box>
          <Button bg="secondary" color="white" p="0" onClick={onOpen}>
            <HamburgerIcon fontSize="20px" />
          </Button>
          <Drawer
            size="xs"
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent color="blackAlpha.900">
              <DrawerCloseButton />
              <DrawerHeader bg="whiteAlpha.900">
                {isAuth ? (
                  <Flex
                    borderBottom="2px solid #18CFA8"
                    p="5%"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    w="100%"
                  >
                    <Flex w="100%">
                      <Avatar
                        src="https://i.pinimg.com/originals/46/3e/3a/463e3a853866fd0615fead90841838dc.jpg"
                        size="lg"
                        mr="2"
                      />
                      <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                      >
                        <Text mt="10px" fontSize="20px" color="blackAlpha.900">
                          {Authdata.user_display_name}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                ) : (
                  <Box
                    style={{
                      padding: "5%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%"
                    }}
                  >
                    <Box
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginBottom: "-6%"
                      }}
                    >
                      <Box
                        bg="blue.500"
                        p="10px 15px"
                        rounded="lg"
                        color="white"
                        _hover={{ bg: "blue.200" }}
                      >
                        <Login />
                      </Box>
                      <Box
                        bg="blue.500"
                        p="10px 15px"
                        rounded="lg"
                        color="white"
                        _hover={{ bg: "blue.200" }}
                      >
                        <Signup />
                      </Box>
                    </Box>
                  </Box>
                )}
              </DrawerHeader>
              <DrawerBody borderBottomWidth="1px" bg="whiteAlpha.900">
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link to="/orderhistory">
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      onClick={() => navigate("/orderhistory")}
                    >
                      My Orders
                    </Box>
                  </Link>
                  <Link to="/cart">
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Cart
                    </Box>
                  </Link>
                  <Link to="/wishlist">
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Wishlist
                    </Box>
                  </Link>

                  <Link to="/" onClick={scrollToContact}>
                    <Box
                      borderBottom="1px solid white"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Contact Us
                    </Box>
                  </Link>
                </Box>

                <Heading mt="15%" color="black" fontSize="15px" mb="5%">
                  SHOP NOW
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Text pb="2" borderBottom="1px solid white" onClick={() => handleCategoryClick(52)}>
                    EYEGLASSES
                  </Text>
                  <Text pb="2" borderBottom="1px solid white" onClick={() => handleCategoryClick(52)}>
                    COMPUTER GLASSES
                  </Text>
                  <Text pb="2" borderBottom="1px solid white" onClick={() => handleCategoryClick(53)}>
                    SUNGLASSES
                  </Text>
                </Box>
                <Heading mt="15%" color="black" fontSize="15px" mb="5%">
                  FAQ's & POLICIES
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link to="/PP">
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Privacy Policy
                    </Box>
                  </Link>
                  <Link to="/CR">
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Cancellation & Return Policy
                    </Box>
                  </Link>
                  <Link to="/SD">
                    <Box
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Shipping & Delivery
                    </Box>
                  </Link>
                </Box>

                <Accordion allowMultiple></Accordion>
              </DrawerBody>
              {isAuth && (
                <DrawerFooter bg="whiteAlpha.900">
                  <Button
                    mt="5%"
                    fontSize="18px"
                    bg="secondary"
                    color={"white"}
                    borderBottom="1px solid #526171"
                    p="6% 15%"
                    _hover={{ bg: "#455680" }}
                    onClick={() => {
                      setisAuth(false);
                      localStorage.removeItem("user")
                      localStorage.removeItem("token")
                      localStorage.removeItem("customerData", decoded.data.user);
                      return <Navigate to="/" />;
                    }}
                  >
                    Sign Out
                  </Button>
                </DrawerFooter>
              )}
            </DrawerContent>
          </Drawer>
        </Box>
      </HStack>
    </Box>
  );
}

export default Nav;
