import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

const Signup = () => {
  const init = {
    username: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(init);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [exist, setExist] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    if (name === "username") {
      setUsernameError(value.trim() === "");
    } else if (name === "email") {
      setEmailError(!/\S+@\S+\.\S+/.test(value));
    } else if (name === "password") {
      setPasswordError(value.length < 6);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRegister = async () => {
    setLoading(true);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    };

    try {
      const response = await fetch(
        "https://lincolneyewear.com/wp-json/custom/v1/register",
        requestOptions
      );

      if (response.ok) {
        // Handle successful registration
        toast({
          title: "User Registered",
          description: "You have been successfully registered.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setIsOpen(false);
      } else if (response.status === 422) {
        // Handle validation errors
        const data = await response.json();
        setExist(true); // Email already exists
      } else {
        // Handle other errors
        console.error("Registration failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      <Center onClick={() => setIsOpen(true)} fontWeight="600" fontSize="16px" w="60px">
        Sign Up
      </Center>

      <Modal isOpen={isOpen} onClose={handleClose} isCentered size="md">
        <ModalOverlay />
        <ModalContent w="lg" pt="5" rounded="3xl">
          <ModalCloseButton />

          <ModalBody p="0px 0px ">
            <Box m="5px 45px 20px 45px">
              <Heading fontFamily="Times, serif" fontWeight="100" fontSize="26px" mb="20px" color="#333368">
                Create an Account
              </Heading>

              <Input
                type="text"
                fontSize="16px"
                onChange={handleChange}
                name="username"
                placeholder="Username*"
                h="45px"
                borderColor={usernameError ? "red.500" : "rgb(206, 206, 223)"}
                m="8px 0px 15px 0px"
                rounded="2xl"
              />
              {usernameError && <Text color="red.500">Username is required</Text>}

              <Input
                onChange={handleChange}
                fontSize="16px"
                name="email"
                placeholder="Email*"
                h="45px"
                borderColor={emailError ? "red.500" : "rgb(206, 206, 223)"}
                m="8px 0px 18px 0px"
                rounded="2xl"
              />
              {emailError && <Text color="red.500">Please enter a valid email address</Text>}
              {exist && <Text color="red.500">Email already exists</Text>}

              <InputGroup mb="15px">
                <Input
                  onChange={handleChange}
                  fontSize="16px"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password*"
                  h="45px"
                  borderColor={passwordError ? "red.500" : "rgb(206, 206, 223)"}
                  m="8px 0px 8px 0px"
                  rounded="2xl"
                />

                <InputRightElement width="6.5rem" size="lg">
                  <Button
                    size="md"
                    borderRadius="3xl"
                    mt="20%"
                    onClick={() => setShowPassword(!showPassword)}
                    bg="white"
                  >
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {passwordError && <Text color="red.500">Password should be at least 6 characters long</Text>}

              <Button
                isLoading={loading}
                onClick={handleRegister}
                bgColor="#11daac"
                width="100%"
                borderRadius="35px/35px"
                h="50px"
                _hover={{ backgroundColor: "#11daac" }}
                fontFamily="sans-serif"
                fontWeight="300"
                fontSize="18px"
                disabled={usernameError || emailError || passwordError || loading}
              >
                Create an Account
              </Button>

              <Center mt="14px" fontSize="15px" gap="2">
                Have an account?{" "}
                <Link
                  fontSize={"15px"}
                  fontWeight="500"
                  textDecoration={"underline"}
                  onClick={onclose}
                >
                  <Login/>
                </Link>
              </Center>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Signup;
