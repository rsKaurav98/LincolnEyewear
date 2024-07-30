import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Flex,
  FormLabel,
  Select,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

const EyePowerForm = ({ isOpen, onClose, onChange, onSubmit }) => {
  const generateOptions = (start, end, step) => {
    let options = [];
    for (let i = start; i <= end; i += step) {
      options.push(i.toFixed(2));
    }
    return options;
  };

  const SPHOptions = generateOptions(-12.00, 12.00, 0.25);
  const CYLOptions = generateOptions(-3.00, 3.00, 0.25);
  const ADDOptions = generateOptions(0.00, 4.00, 0.25);
  const PDOptions = generateOptions(40.0, 80.0, 0.50);
  const smallPDOptions = generateOptions(20.00, 40.00, 0.50);
  const AXISOptions = Array.from({ length: 181 }, (_, i) => i.toString());

  const [isDualPD, setIsDualPD] = useState(false);
  const [formData, setFormData] = useState({
    sphRight: '0.00',
    cylRight: '0.00',
    axisRight: '0',
    addRight: '0.00',
    sphLeft: '0.00',
    cylLeft: '0.00',
    axisLeft: '0',
    addLeft: '0.00',
    pd: '40.00',
    pdRight: '20.00',
    pdLeft: '20.00',
  });

  const togglePDType = () => {
    setIsDualPD(!isDualPD);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    onChange({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formdata",formData)
    onSubmit();
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        rounded="md"
        maxWidth={{ base: '95%', md: '50%' }}
        maxHeight={{ base: '95vh', md: '80vh' }}
        overflowY="hidden"
        boxShadow="2xl"
        bg="white"
        py="4"
        px="6"
      >
        <ModalHeader textAlign="center" fontSize="2xl" fontWeight="bold">
          Enter Your Eye Power
        </ModalHeader>
        <ModalCloseButton borderRadius="50%" bg="white" color="#333" boxShadow="md" />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap="6" align="center">
              <Flex direction={{ base: 'column', md: 'row' }} gap="6" width="100%">
                <Box flex="1">
                  <Heading size="sm" mb="4" textAlign="center">
                    Right Eye (O.D)
                  </Heading>
                  <Flex direction="column" gap="4">
                    <Flex align="center" justify="space-between">
                      <FormLabel htmlFor="sphRight" mb="0">
                        SPH
                      </FormLabel>
                      <Select
                        id="sphRight"
                        name="sphRight"
                        value={formData.sphRight}
                        onChange={handleInputChange}
                        bgGradient="linear(to-b, white, gray.100)"
                        _hover={{ bg: 'white' }}
                      >
                        {SPHOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </Flex>
                    <Flex align="center" justify="space-between">
                      <FormLabel htmlFor="cylRight" mb="0">
                        CYL
                      </FormLabel>
                      <Select
                        id="cylRight"
                        name="cylRight"
                        value={formData.cylRight}
                        onChange={handleInputChange}
                        bgGradient="linear(to-b, white, gray.100)"
                        _hover={{ bg: 'white' }}
                      >
                        {CYLOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </Flex>
                    <Flex align="center" justify="space-between">
                      <FormLabel htmlFor="axisRight" mb="0">
                        AXIS
                      </FormLabel>
                      <Select
                        id="axisRight"
                        name="axisRight"
                        value={formData.axisRight}
                        onChange={handleInputChange}
                        bgGradient="linear(to-b, white, gray.100)"
                        _hover={{ bg: 'white' }}
                      >
                        {AXISOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </Flex>
                    <Flex align="center" justify="space-between">
                      <FormLabel htmlFor="addRight" mb="0">
                        ADD
                      </FormLabel>
                      <Select
                        id="addRight"
                        name="addRight"
                        value={formData.addRight}
                        onChange={handleInputChange}
                        bgGradient="linear(to-b, white, gray.100)"
                        _hover={{ bg: 'white' }}
                      >
                        {ADDOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </Flex>
                  </Flex>
                </Box>
                <Box flex="1">
                  <Heading size="sm" mb="4" textAlign="center">
                    Left Eye (O.S)
                  </Heading>
                  <Flex direction="column" gap="4">
                    <Flex align="center" justify="space-between">
                      <Select
                        id="sphLeft"
                        name="sphLeft"
                        value={formData.sphLeft}
                        onChange={handleInputChange}
                        bgGradient="linear(to-b, white, gray.100)"
                        _hover={{ bg: 'white' }}
                      >
                        {SPHOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </Flex>
                    <Flex align="center" justify="space-between">

                      <Select
                        id="cylLeft"
                        name="cylLeft"
                        value={formData.cylLeft}
                        onChange={handleInputChange}
                        bgGradient="linear(to-b, white, gray.100)"
                        _hover={{ bg: 'white' }}
                      >
                        {CYLOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </Flex>
                    <Flex align="center" justify="space-between">

                      <Select
                        id="axisLeft"
                        name="axisLeft"
                        value={formData.axisLeft}
                        onChange={handleInputChange}
                        bgGradient="linear(to-b, white, gray.100)"
                        _hover={{ bg: 'white' }}
                      >
                        {AXISOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </Flex>
                    <Flex align="center" justify="space-between">
                      <Select
                        id="addLeft"
                        name="addLeft"
                        value={formData.addLeft}
                        onChange={handleInputChange}
                        bgGradient="linear(to-b, white, gray.100)"
                        _hover={{ bg: 'white' }}
                      >
                        {ADDOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
              <Box width="100%" display="flex">
                <FormLabel htmlFor="pd">PD</FormLabel>
                {isDualPD ? (
                  <Flex gap="4" width="100%">
                    <Select
                      name="pdRight"
                      value={formData.pdRight}
                      onChange={handleInputChange}
                      bgGradient="linear(to-b, white, gray.100)"
                      _hover={{ bg: 'white' }}
                    >
                      {smallPDOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Select>
                    <Select
                      name="pdLeft"
                      value={formData.pdLeft}
                      onChange={handleInputChange}
                      bgGradient="linear(to-b, white, gray.100)"
                      _hover={{ bg: 'white' }}
                    >
                      {smallPDOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Select>
                  </Flex>
                ) : (
                  <Select
                    name="pd"
                    value={formData.pd}
                    onChange={handleInputChange}
                    bgGradient="linear(to-b, white, gray.100)"
                    _hover={{ bg: 'white' }}
                  >
                    {PDOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                )}
              </Box>

            </Flex>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Text
                onClick={togglePDType}
                cursor="pointer"
                _hover={{ textDecoration: 'underline' }}
                color="blue.500"
              >
                {isDualPD ? 'I have one PD value' : 'I have two PD values'}
              </Text>
              <Button type="submit" bg="secondary" color="white" _hover={{ color: "black",bg:"gray.200" }} mt="4">
                Submit
              </Button>
            </Box>
            
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EyePowerForm;
