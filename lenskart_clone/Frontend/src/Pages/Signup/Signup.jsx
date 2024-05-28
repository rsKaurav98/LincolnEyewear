import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Center,
  Heading,
  HStack,
  InputGroup,
  InputLeftAddon,
  useDisclosure,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Input,
  Checkbox,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import Login from "../Login/Login";

const Signup = () => {
  const init = {
    Name: "",
    email: "",
    password: ""
  };

  const [userData, setUserData] = useState(init);
  const [first, setFirst] = useState();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const [flag , setFlag]=useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [Auth, setAuth] = useState();
  const [exist, setExist] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  const Required = (props) => {
    return (
      <Box
        fontSize={"14px"}
        m="3px 0px 3px 0px"
        color={"#ff1f1f"}
        fontWeight="500"
        letterSpacing={"-0.4px"}
      >
        {props.info}
      </Box>
    );
  };

  const handleChange = (e) => {
    setExist(false);
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    switch (name) {
      case "Name":
        setFirst(
          value === "" ? <Required info="This is a required feild" /> : ""
        );
        break;

      case "email":
        setMail(
          value === "" ? (
            <Required info="This is a required feild" />
          ) : (
            <Required info="Please enter a valid email address e.g. johndoe@domain.com." />
          )
        );
        break;

      case "password":
        setPass(
          value === "" ? (
            <Required info="This is a required feild" />
          ) : (
            <Required info="Password should be greater than 6 , must include a special character" />
          )
        );
        break;

      default:
        break;
    }
  };

  const handleClose = () => {
    setExist(false);
    onClose();
  };
  const handleRegister = async () => {
    var formdata = new FormData();
    formdata.append("name", userData.Name);
    formdata.append("email", userData.email);
    formdata.append("password", userData.password);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    try {
      var response = await fetch("http://localhost:8000/register", requestOptions);
      if (response.status === 422) {
        var resText = await response.text();
        var resJson = JSON.parse(resText);
        if (resJson?.email?.[0].includes("taken")) {
          setExist(true);
          
        } 
      } else if (response.status === 200){
        setExist(false)
        
        onClose();
      }
      else {
        var resText = await response.text();
        console.log(resText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    
    
    
  };

  return (
    <div>
      <Center onClick={onOpen} fontWeight={"600"} fontSize="16px" w="60px">
        Sign Up
      </Center>

      <Modal isOpen={isOpen} onClose={handleClose} isCentered size="md">
        <ModalOverlay />
        <ModalContent w="lg" pt="5" rounded="3xl">
          <ModalCloseButton />

          <ModalBody p={"0px 0px "}>
            <Box m={"5px 45px 20px 45px"}>
              <Heading
                fontFamily={" Times, serif"}
                fontWeight="100"
                fontSize={"26px"}
                mb="20px"
                color={"#333368"}
              >
                Create an Account
              </Heading>

              <Input
                type="text"
                fontSize="16px"
                onChange={handleChange}
                focusBorderColor="rgb(206, 206, 223)"
                name="Name"
                placeholder="First Name*"
                h={"45px"}
                borderColor={"rgb(206, 206, 223)"}
                m={"8px 0px 15px 0px"}
                rounded="2xl"
              />

              <Text mt="-2%" ml="2%">
                {first}
              </Text>

              {/* <Input
                fontSize="16px"
                onChange={handleChange}
                name="last_name"
                type="text"
                placeholder="Last Name"
                h={"45px"}
                focusBorderColor="rgb(206, 206, 223)"
                borderColor={"rgb(206, 206, 223)"}
                m={"8px 0px 25px 0px"}
                rounded="2xl"
              /> */}
              {/* <Text mt="-2%" ml="2%">
                {last}
              </Text> */}

              {/* <InputGroup
                w="100%"
                h="50px"
                fontSize="18px"
                borderRadius="xl"
                mb="14px"
              >
                <InputLeftAddon
                  children="+91"
                  h="45px"
                  fontSize="18px"
                  rounded="2xl"
                  bg="whiteAlpha.900"
                />

                <Input
                  onChange={handleChange}
                  type="number"
                  name="ph_no"
                  placeholder=" Mobile*"
                  w="100%"
                  h="45px"
                  fontSize="16px"
                  focusBorderColor="rgb(206, 206, 223)"
                  borderColor={"rgb(206, 206, 223)"}
                  rounded="2xl"
                />
              </InputGroup>
              <Text mt="-2%" ml="2%">
                {userData.ph_no.length === 10 ? "" : ph}
              </Text> */}

              <Input
                onChange={handleChange}
                fontSize="16px"
                name="email"
                placeholder="Email*"
                h={"45px"}
                focusBorderColor="rgb(206, 206, 223)"
                borderColor={"rgb(206, 206, 223)"}
                m={"8px 0px 18px 0px"}
                rounded="2xl"
              />
              <Text mt="-2%" ml="2%">
                {userData.email.includes("@") && userData.email.includes(".com")
                  ? ""
                  : mail}
              </Text>
              {exist === true ? (
                <Required info="Email Id already exists" />
              ) : (
                ""
              )}
             

              <InputGroup mb="15px">
                <Input
                  onChange={handleChange}
                  fontSize="16px"
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Password*"
                  h={"45px"}
                  focusBorderColor="rgb(206, 206, 223)"
                  borderColor={"rgb(206, 206, 223)"}
                  m={"8px 0px 8px 0px"}
                  rounded="2xl"
                />

                <InputRightElement width="6.5rem" size="lg">
                  <Button
                    size="md"
                    borderRadius="3xl"
                    mt="20%"
                    onClick={() => setShow(!show)}
                    bg="white"
                  >
                    {show ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {userData.password.length >= 6 ? "" : pass}

              {/* <HStack>
                <Box
                  textDecoration={"underline"}
                  fontFamily={" sans-serif"}
                  color={"#333368"}
                  fontSize="14px"
                >
                  Got a Referral code?
                </Box>

                <Box fontFamily={" sans-serif"} color={"#333368"}>
                  (Optional)
                </Box>
              </HStack> */}

              {/* <HStack>
                <Checkbox
                  mb={"20px"}
                  mt="20px"
                  size="sm"
                  fontFamily={" sans-serif"}
                >
                  Get Update on whatsapp
                </Checkbox>
                <Image
                  src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
                  w={"22px"}
                  h="22px"
                />
              </HStack> */}
              

              <HStack spacing={"3px"} mb="10px">
                <Box
                  fontSize={"14px"}
                  fontFamily={" sans-serif"}
                  fontWeight="100"
                  letterSpacing={"-0.4px"}
                >
                  By creating this account, you agree to our
                </Box>
                <Box fontSize={"15px"} textDecoration="underline">
                  Privacy Policy
                </Box>
              </HStack>

              {userData.email.includes("@") &&
              userData.email.includes(".com") &&
              userData.Name.length >= 1 &&
              userData.password.length >= 6 ?
               (
                <Button
                  isLoading={loading}
                  onClick={handleRegister}
                  bgColor={"#11daac"}
                  width="100%"
                  borderRadius={"35px/35px"}
                  h="50px"
                  _hover={{ backgroundColor: "#11daac" }}
                  fontFamily={" sans-serif"}
                  fontWeight="300"
                  fontSize="18px"
                >
                  Create an Account 
                </Button>
              ) : (
                <Button
                  bgColor={"#cccccc"}
                  width="100%"
                  borderRadius={"35px/35px"}
                  h="50px"
                  fontFamily={" sans-serif"}
                  fontWeight="300"
                  fontSize="18px"
                >
                  Create an Account
                </Button>
              )}

              <Center mt={"14px"} fontSize="15px" gap="2">
                Have an account?{" "}
                <Center fontWeight={"500"} textDecoration="underline">
                  Sign In
                </Center>
              </Center>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
    
  );
};

export default Signup;
