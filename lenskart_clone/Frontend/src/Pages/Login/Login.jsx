import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import {
  Checkbox,
  useDisclosure,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Box,
  Heading,
  Input,
  HStack,
  Flex,
  Center,
  InputGroup,
  InputRightElement,
  useToast // Import useToast hook
} from "@chakra-ui/react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [pass, setPass] = useState(false);
  const [show, setShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth,setisAuth, setAuthData ,} = useContext(AuthContext);
  
  const [incorrect, setIncorrect] = useState(false);
  const navigate = useNavigate();
  const toast = useToast(); // Initialize useToast hook

  const handleChange = (e) => {
    setIncorrect(false);
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  useEffect(() => {
    if (isAuth) {
      // Navigate only if isAuth is true
      navigate("/");
    }
  }, [isAuth]);

  const getData = async () => {
    try {
      setLoading(true);
      setIncorrect(false);
      if (loginData.username && loginData.password) {
        const res = await fetch("https://lincolneyewear.com/wp-json/jwt-auth/v1/token", {
          method: "POST",
          body: JSON.stringify(loginData),
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (res.status !== 200) {
          throw new Error(`HTTP status ${res.status}`);
        }

        const data = await res.json();
        if (data.token) {
          console.log(`login response`,data)
          console.log(data.token)
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data));
          setisAuth(true);
          setAuthData(data);
          

          onClose();
          setLoading(false);
          // Display toast for successful login
          toast({
            title: "Login Successful",
            description: "You have been successfully logged in.",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        } else {
          setLoading(false);
          setIncorrect(true);
        }
      }
    } catch (error) {
      setLoading(false);
      setIncorrect(true);
      console.error("An error occurred. Please try again later.", error);
    }
  };

  const handleClick = () => {
    setLoginData({ ...loginData, password: "" });
    setPass(false);
  };

  const handleSign = () => {
    setPass(true);
    if (loginData.password.length >= 6) {
      getData();
    }
  };

  return (
    <div>
      <Center onClick={onOpen} fontWeight={"600"} fontSize="16px" w="60px">
        Sign In
      </Center>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ xl: "md", lg: "md", md: "md", sm: "md", base: "sm" }}
      >
        <ModalOverlay />
        <ModalContent rounded="3xl">
          <ModalCloseButton
            borderRadius={"50%"}
            bg="white"
            m={"10px 10px 0px 0px"}
          />

          <ModalBody p={"0px 0px "} borderRadius={"15px 15px 15px 15px "}>
            <Image
              src="https://images.unsplash.com/photo-1581239125393-67d48d3dd429?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="pic"
              borderRadius={"10px 10px 0px 0px "}
            />
            <Box m={"34px 45px 50px 45px"}>
              <Heading
                fontFamily={" Times, serif"}
                fontWeight="100"
                fontSize={"28px"}
                mb="24px"
                color={"#333368"}
              >
                Sign In
              </Heading>

              {pass === false ? (
                <Box>
                  <Input
                    name="username"
                    placeholder="Username"
                    h={"50px"}
                    fontSize="16px"
                    focusBorderColor="rgb(206, 206, 223)"
                    borderColor={"rgb(206, 206, 223)"}
                    onChange={handleChange}
                    rounded="2xl"
                  />
                  <Button
                    mt="20px"
                    onClick={() => setPass(true)}
                    bgColor={"#11daac"}
                    width="100%"
                    borderRadius={"35px/35px"}
                    h="50px"
                    fontSize="18px"
                    _hover={{ backgroundColor: "#11daac" }}
                  >
                    Next
                  </Button>
                </Box>
              ) : (
                <Box>
                  <Box fontSize={"17px"} color="#66668e">
                    Enter password for
                  </Box>

                  <Flex
                    justifyContent={"space-between"}
                    fontFamily={" sans-serif"}
                    mb="22px"
                    color={"#000042"}
                  >
                    <Box fontSize="18px">{loginData.username}</Box>
                    <Box
                      fontSize={"14px"}
                      textDecoration="underline"
                      onClick={handleClick}
                      cursor="pointer"
                    >
                      Edit
                    </Box>
                  </Flex>

                  <InputGroup>
                    <Input
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="Enter password"
                      h={"50px"}
                      fontSize="16px"
                      focusBorderColor="rgb(206, 206, 223)"
                      borderColor={"rgb(206, 206, 223)"}
                      onChange={handleChange}
                      rounded="2xl"
                    />

                    <InputRightElement width="6.5rem" size="lg">
                      <Button
                        size="md"
                        borderRadius="3xl"
                        mt="10%"
                        onClick={() => setShow(!show)}
                        bg="white"
                      >
                        {show ? <ViewOffIcon /> : <ViewIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  {incorrect && (
                    <Box
                      fontSize={"14px"}
                      m="3px 0px 3px 0px"
                      color={"#ff1f1f"}
                      fontWeight="500"
                      ml="2"
                      letterSpacing={"-0.4px"}
                    >
                      Wrong username or password
                    </Box>
                  )}

                  <Button
                    mt="20px"
                    isLoading={loading}
                    onClick={handleSign}
                    bgColor={"#11daac"}
                    width="100%"
                    borderRadius={"35px/35px"}
                    h="50px"
                    fontSize="18px"
                    _hover={{ backgroundColor: "#11daac" }}
                  >
                    Sign In
                  </Button>
                </Box>
              )}
              <Box
                textDecoration={"underline"}
                m="15px 0px 0px 0px"
                color="#000042"
                fontSize="15px"
              >
                Forget Password
              </Box>

              <HStack fontSize="16px">
                <Checkbox mb={"20px"} mt="20px" size="sm">
                  Get Update on WhatsApp
                </Checkbox>
                <Image
                  src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
                  w={"22px"}
                  h="22px"
                />
              </HStack>

              <HStack spacing={"0px"} mt="19px" gap="2">
                <Box fontSize={"14px"}> New member?</Box>
                <Link
                  fontSize={"15px"}
                  fontWeight="500"
                  textDecoration={"underline"}
                >
                  Create an Account
                </Link>
              </HStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Login;
