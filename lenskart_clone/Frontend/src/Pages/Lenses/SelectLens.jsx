import React, { useState, useContext } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Heading, Input, HStack, Box, Flex, InputGroup, InputRightElement, Checkbox, Button, Image, Link } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthContext";

const SelectLens = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [btn, setBtn] = useState();
  const [SelectLensData, setSelectLensData] = useState({ email: "", password: "" });
  const [pass, setPass] = useState(false);
  const [show, setShow] = useState(false);
  const { setisAuth, setAuthData } = useContext(AuthContext);
  const [incorrect, setIncorrect] = useState(false);
  const navigate = useNavigate();
  let res1 = [];

  const handleChange = (e) => {
    setIncorrect(false);
    const { name, value } = e.target;
    setSelectLensData({ ...SelectLensData, [name]: value });

    const button = (
      <Box
        fontSize={"14px"}
        mt="5px"
        color={"#ff1f1f"}
        fontWeight="500"
        letterSpacing={"-0.4px"}
      >
        Please enter a valid Email or Mobile Number.
      </Box>
    );
    setBtn(button);
  };

 
       

         
    

  

 

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ xl: "md", lg: "md", md: "md", sm: "md", base: "sm" }}>
      <ModalOverlay />
      <ModalContent rounded="3xl">
        <ModalCloseButton borderRadius={"50%"} bg="white" m={"10px 10px 0px 0px"} />
        <ModalBody p={"0px 0px "} borderRadius={"15px 15px 15px 15px "}>
        
          <Box m={"34px 45px 50px 45px"}>
           
            
            <Box textDecoration={"underline"} m="15px 0px 0px 0px" color="#000042" fontSize="15px">
              Forget Password
            </Box>
           
            <HStack fontSize="16px">
              <Checkbox mb={"20px"} mt="20px" size="sm">
                Get Update on WhatsApp
              </Checkbox>
              <Image src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png" w={"22px"} h="22px" />
            </HStack>
             
              <Button
                isLoading={loading}
               
                bgColor={"#11daac"}
                width="100%"
                borderRadius={"35px/35px"}
                h="50px"
                fontSize="18px"
                _hover={{ backgroundColor: "#11daac" }}
              >
               Select Lens
              </Button>
             
              
            
            <HStack spacing={"0px"} mt="19px" gap="2">
              <Box fontSize={"14px"}> New member?</Box>
              <Link fontSize={"15px"} fontWeight="500" textDecoration={"underline"}>
                Create an Account
              </Link>
            </HStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SelectLens;
