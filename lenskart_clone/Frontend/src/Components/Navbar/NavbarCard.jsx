import React, { useState } from "react";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import NavbarCard5 from "./NavbarCard5";
import { NavbarDetail1 } from "./NavbarDetail";
import { Link, Navigate, Route, } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";
import { useNavigate} from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { TriangleDownIcon } from "@chakra-ui/icons";
import logo from '../../Images/logo.png'
import {
  Box,
  Text,
  Flex,
  Spacer,
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

// export const NavbarCard1 = () => {
//   return (
//     <Box cursor="pointer">
//       <Flex gap={2} pl={5} pt={2}>
//         {NavbarDetail1.map((i, index) => (
//           <Box key={index}>
//             <Text fontSize="20px" _hover={{ textDecoration: "underline" }}>
//               {i.labels}
//             </Text>
//             <Spacer />
//           </Box>
//         ))}
//       </Flex>
//     </Box>
//   );
// };



export const NavbarCard2 = () => {
  const { isAuth, setisAuth, Authdata } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const { setSearchValue,searchValue } = useSearch();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/products?search=${searchValue}`);
    }
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
              style={{
                border: "1px solid black",
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
            <Button
              width="fit-content"
              h="45px"
              px="20px"
              bg="whiteAlpha.900"
              fontSize="15px"
              fontWeight="600"
              border="1px solid #455666"
              _hover={{ bg: "#455666", color: "white" }}
              transition={"0.3s"}
              onClick={() => navigate("/orderhistory")}

            >
              Track Order
            </Button>
            {isAuth === true ? (
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Box
                    fontWeight={"600"}
                    fontSize="16px"
                    m="auto"
                    mt="-2px"
                    w="auto"
                    textAlign="center"
                  >
                    {Authdata.user_display_name}
                    <TriangleDownIcon
                      ml="2px"
                      fontSize={"9px"}
                      _hover={{ transform: "rotate(180deg)" }}
                    />
                  </Box>
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
                        localStorage.removeItem("user")
                        localStorage.removeItem("token")
                        localStorage.removeItem("customerData",decoded.data.user );
                        return <Navigate to="/" />;
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
            <Button
              leftIcon={<CiHeart size={25} />}
              width="fit-content"
              px="20px"
              h="45px"
              bg="whiteAlpha.900"
              fontSize="15px"
              fontWeight="600"
              border="1px solid #455666"
              onClick={() => navigate("/wishlist")}
              _hover={{ bg: "#455666", color: "white" }}
              transition={"0.3s"}
            >
              Wishlist
            </Button>
            <Link to="/cart">
              <Button
                leftIcon={<CgShoppingCart size={25} />}
                width="fit-content"
                px="20px"
                h="45px"
                bg="whiteAlpha.900"
                fontSize="15px"
                fontWeight="600"
                border="1px solid #455666"
                _hover={{ bg: "#455666", color: "white" }}
                transition={"0.3s"}
              >
                Cart
              </Button>
            </Link>
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export const NavbarCard4 = () => {
  return (
    <Box cursor="pointer" marginTop="1rem" bg="#455666" borderRadius="8" display="flex" justifyContent="center">
      <Flex py={2} px={5}>
        <NavbarCard5 />
        {/* <HStack w="20%" ml="5%" justifyContent="right">
          <Image
            src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
            alt="img1"
            w="70px"
            borderRadius="base"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
            alt="img1"
            w="70px"
            borderRadius="base"
          />
          <Image
            src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg"
            alt="img1"
            w="70px"
            borderRadius="base"
          />
        </HStack> */}
      </Flex>
    </Box>
  );
};
