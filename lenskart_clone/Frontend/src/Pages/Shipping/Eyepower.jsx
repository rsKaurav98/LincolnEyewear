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
  Tooltip,
} from '@chakra-ui/react';

const EyePowerForm = ({ isOpen, onClose, onChange, onSubmit }) => {
  const generateOptions = (start, end, step) => {
    let options = [];
    for (let i = start; i <= end; i += step) {
      options.push(i.toFixed(2));
    }
    return options;
  };

  const SPHOptions = generateOptions(-12.0, 12.0, 0.25);
  const CYLOptions = generateOptions(-3.0, 3.0, 0.25);
  const ADDOptions = generateOptions(0.0, 4.0, 0.25);
  const PDOptions = generateOptions(40.0, 80.0, 0.5);
  const smallPDOptions = generateOptions(20.0, 40.0, 0.5);
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
    onSubmit();
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        rounded="xl"
        maxWidth={{ base: '95%', md: '50%' }}
        maxHeight={{ base: '95vh', md: '80vh' }}
        overflowY="auto"
        boxShadow="2xl"
        bg="gray.50"
        py="6"
        px="8"
        css={{
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        <ModalHeader textAlign="center" fontSize="2xl" fontWeight="bold" color="blue.700">
          Enter Your Eye Power
        </ModalHeader>
        <ModalCloseButton
          borderRadius="50%"
          bg="white"
          color="blue.700"
          boxShadow="md"
        />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap="6" align="center">
              <Flex
                direction={{ base: 'column', md: 'row' }}
                gap="6"
                width="100%"
              >
                <Box flex="1">
                  <Heading
                    size="sm"
                    mb="4"
                    textAlign="center"
                    display={{ base: 'block', md: 'none' }}
                    color="blue.600"
                  >
                    Right Eye (O.D)
                  </Heading>
                  <Flex direction="column" gap="4">
                    <Flex align="center" justify="space-between">
                      <Tooltip label="Spherical Power (SPH)" aria-label="SPH Tooltip">
                        <FormLabel htmlFor="sphRight" mb="0" _hover={{ color: 'blue.500' }}>
                          SPH
                        </FormLabel>
                      </Tooltip>
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
                      <Tooltip label="Cylinder (CYL)" aria-label="CYL Tooltip">
                        <FormLabel htmlFor="cylRight" mb="0" _hover={{ color: 'blue.500' }}>
                          CYL
                        </FormLabel>
                      </Tooltip>
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
                      <Tooltip label="Axis (AXIS)" aria-label="AXIS Tooltip">
                        <FormLabel htmlFor="axisRight" mb="0" _hover={{ color: 'blue.500' }}>
                          AXIS
                        </FormLabel>
                      </Tooltip>
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
                      <Tooltip label="Addition (ADD)" aria-label="ADD Tooltip">
                        <FormLabel htmlFor="addRight" mb="0" _hover={{ color: 'blue.500' }}>
                          ADD
                        </FormLabel>
                      </Tooltip>
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
                  <Heading
                    size="sm"
                    mb="4"
                    textAlign="center"
                    display={{ base: 'block', md: 'none' }}
                    color="blue.600"
                  >
                    Left Eye (O.S)
                  </Heading>
                  <Flex direction="column" gap="4">
                    <Flex align="center" justify="space-between">
                      <Tooltip label="Spherical Power (SPH)" aria-label="SPH Tooltip">
                        <FormLabel htmlFor="sphLeft" mb="0" _hover={{ color: 'blue.500' }}>
                          SPH
                        </FormLabel>
                      </Tooltip>
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
                      <Tooltip label="Cylinder (CYL)" aria-label="CYL Tooltip">
                        <FormLabel htmlFor="cylLeft" mb="0" _hover={{ color: 'blue.500' }}>
                          CYL
                        </FormLabel>
                      </Tooltip>
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
                      <Tooltip label="Axis (AXIS)" aria-label="AXIS Tooltip">
                        <FormLabel htmlFor="axisLeft" mb="0" _hover={{ color: 'blue.500' }}>
                          AXIS
                        </FormLabel>
                      </Tooltip>
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
                      <Tooltip label="Addition (ADD)" aria-label="ADD Tooltip">
                        <FormLabel htmlFor="addLeft" mb="0" _hover={{ color: 'blue.500' }}>
                          ADD
                        </FormLabel>
                      </Tooltip>
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

              {/* PD Section */}
              <Box width="100%">
                <Flex align="center" justify="space-between">
                  <Tooltip label="Pupillary Distance (PD)" aria-label="PD Tooltip">
                    <FormLabel mb="0" _hover={{ color: 'blue.500' }}>
                      PD
                    </FormLabel>
                  </Tooltip>
                  {isDualPD ? (
                    <>
                      <Flex flex="1" direction="column" gap="4">
                        <Flex align="center" justify="space-between">
                          <FormLabel htmlFor="pdRight" mb="0">
                            PD Right
                          </FormLabel>
                          <Select
                            id="pdRight"
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
                        </Flex>
                        <Flex align="center" justify="space-between">
                          <FormLabel htmlFor="pdLeft" mb="0">
                            PD Left
                          </FormLabel>
                          <Select
                            id="pdLeft"
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
                      </Flex>
                    </>
                  ) : (
                    <Select
                      id="pd"
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
                </Flex>
                <Text
                  mt="2"
                  color="blue.600"
                  textAlign="right"
                  fontSize="sm"
                  onClick={togglePDType}
                  cursor="pointer"
                  _hover={{ textDecoration: 'underline' }}
                >
                  {isDualPD ? 'Use Single PD' : 'Use Dual PD'}
                </Text>
              </Box>

              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                width="100%"
                mt="4"
                boxShadow="lg"
                _hover={{ boxShadow: 'xl' }}
              >
                Submit
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EyePowerForm;
