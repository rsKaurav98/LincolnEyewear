import React, { useState } from "react";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import NavbarCard5 from "./NavbarCard5";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";
import { FiPhoneCall } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { TriangleDownIcon } from "@chakra-ui/icons";
import logo from '../../Images/logo.png'
import {
  Box,
  Text,
  Flex,
  Image,
  Input,
  Button,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody
} from "@chakra-ui/react";
import { useSearch } from '../../Context/SearchContext';

// Reusable Button Component with consistent styling
const StyledButton = ({
  children,
  onClick,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  return (
    <Button
      width="fit-content"
      h="45px"
      px="20px"
      bg="whiteAlpha.900"
      fontSize="15px"
      fontWeight="600"
      border={`1px solid`}
      borderColor={"secondary"}
      _hover={{ bg: "secondary", color: "white" }}
      transition={"0.3s"}
      onClick={onClick}
      {...rest}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </Button>
  );
};

export const NavbarCard2 = () => {
  const { isAuth, setisAuth, Authdata } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const { setSearchValue, searchValue } = useSearch();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/products?search=${searchValue}`);
    }
  }

  // Function to get initials from name
  const getInitials = (name) => {
    const words = name.split(' ');
    if (words.length === 1) {
      return name; // return the name as is if there's only one word
    }
    return words.map(word => word.charAt(0).toUpperCase()).join('');
  }

  return (
    <Box cursor="pointer">
      <HStack m="auto">
        <Box w="20%">
          <Link to="/">
            <Image src={logo} alt="logo" />
          </Link>
        </Box>
        <HStack w="80%" m="auto" display="flex" justify="space-between">
          {/* <Box w="15%">
            <HStack fontSize="18px" fontWeight="bold">
              <FiPhoneCall />
              <Text>1800-111-111</Text>
            </HStack>
          </Box> */}
          <Box w="50%">
            <input
              type="text"
              placeholder="Search for Eyeglasses, Sunglasses and more.."
              borderColor={"secondary"}
              style={{
                border: `1px solid`,
                width: "95%",
                backgroundColor: "white",
                fontSize: "17px",
                height: "45px",
                paddingLeft:"4px",
                borderRadius:"7px"
              }}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </Box>
          <Box w="20%"></Box>
          <HStack w="45%">
            <StyledButton
              onClick={() => navigate("/orderhistory")}
            >
              Track Order
            </StyledButton>
            {isAuth === true ? (
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Button
                    fontWeight={"600"}
                    fontSize="16px"
                    width="fit-content"
      h="45px"
      px="20px"
                    w="auto"
                    textAlign="center"
                    bg="white"
                    borderColor={"secondary"}
                    _hover={{ bg: "secondary", color: "white" }}
                  >
                    {getInitials(Authdata.user_display_name)}
                    <TriangleDownIcon
                      ml="2px"
                      fontSize={"9px"}
                      _hover={{ transform: "rotate(180deg)" }}
                    />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  w="120px"
                  boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                >
                  <PopoverBody
                    h={"40px"}
                    pl="6"
                    fontSize="15px"
                    _hover={{ fontWeight: "bold" }}
                  >
                    <Box
                      color="#333368"
                      onClick={() => {
                        setisAuth(false);
                        localStorage.removeItem("user");
                        localStorage.removeItem("token");
                        localStorage.removeItem("customerData", decoded.data.user);
                        navigate("/");
                      }}
                      _hover={{ fontWeight: "bold" }}
                      transition={"0.3s"}
                    >
                      Sign Out
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            ) : (
              <Box display={"flex"}>
                <Login />
                <Signup />
              </Box>
            )}
            <StyledButton
              leftIcon={<CiHeart size={25} />}
              onClick={() => navigate("/wishlist")}
            >
              Wishlist
            </StyledButton>
            <Link to="/cart">
              <StyledButton
                leftIcon={<CgShoppingCart size={25} />}
              >
                Cart
              </StyledButton>
            </Link>
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export const NavbarCard4 = () => {
  return (
    <Box cursor="pointer" marginTop="1rem" bg="secondary" borderRadius="8" display="flex" justifyContent="center">
      <Flex py={2} px={5}>
        <NavbarCard5 />
      </Flex>
    </Box>
  );
};
