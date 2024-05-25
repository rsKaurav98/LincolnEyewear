import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Image,
  Heading,
  Box,
  Button,
  Flex,
  Text,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  Divider
} from "@chakra-ui/react";
import "../../App.css";

function NavbarCard5() {
  return (
    <Flex bg="#455666" cursor="pointer" gap="36" h="7" display="flex">
      <Menu>
        <MenuButton
          bg="#455666"
          fontSize="15px"
          fontWeight="600"
          fontFamily="sans-serif"
          color="white"
          _hover={{
            borderBottom: "2px solid white",
          }}
        >
          EYEGLASSES
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          bg="whiteAlpha.900"
          w="400px"
          p="4"
          borderRadius="md"
          boxShadow="lg"
          maxH="700"
          overflowY="auto"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
          }}
        >
          <Link to="/products">
            <Box>
              <Grid templateColumns="repeat(2, 1fr)" gap="4">
                <Box>
                  <Box fontSize="lg" fontWeight="bold" mb="2">Shop By</Box>
                  <Flex alignItems="center" gap="3">
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://images.unsplash.com/photo-1587310311582-aa7610e90826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="men"
                      size="sm"
                    />
                    <Box
                      fontSize="md"
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Men
                    </Box>
                  </Flex>

                  <Flex alignItems="center" gap="3" mt="2">
                    <Avatar
                      name="Kola Tioluwani"
                      src="https://images.unsplash.com/flagged/photo-1577479662097-5e0347cbe923?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="women"
                      size="sm"
                    />
                    <Box
                      fontSize="md"
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Women
                    </Box>
                  </Flex>

                  <Flex alignItems="center" gap="3" mt="2">
                    <Avatar
                      name="Kent Dodds"
                      src="https://images.unsplash.com/photo-1631424542224-54dc0ddb69b4?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="kid"
                      size="sm"
                    />
                    <Box
                      fontSize="md"
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Kids
                    </Box>
                  </Flex>
                </Box>

                {/* <Box>
                  <Box fontSize="lg" fontWeight="bold" mb="2">Select Category</Box>
                  <Box fontSize="md" _hover={{ bg: "gray.100" }} p="2">
                    CLASSIC EYE-GLASSES
                    <p>Starting From ₹ <span>1199</span></p>
                  </Box>
                  <Box fontSize="md" _hover={{ bg: "gray.100" }} p="2" mt="2">
                    PREMIUM EYE-GLASSES
                    <p>Starting From ₹ <span>3000</span></p>
                  </Box>
                  <Box fontSize="md" _hover={{ bg: "gray.100" }} p="2" mt="2">
                    COMPUTER EYE-GLASSES
                    <p>Starting From ₹ <span>1299</span></p>
                  </Box>
                </Box> */}
              </Grid>

              <Divider my="2" />

              <Box>
                <Box fontSize="lg" fontWeight="bold" mb="2">Our Top Picks</Box>
                <Flex direction="column" fontSize="md" gap="2">
                  <Box _hover={{ fontWeight: "bold" }}>New Arrivals</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Best Seller</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Lenskart BLU lenses</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Trending</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Tinted Eyeglasses</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Computer Eyeglasses</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Progressive Eyeglasses</Box>
                </Flex>
              </Box>

              <Divider my="2" />

              <Box>
                <Box fontSize="lg" fontWeight="bold" mb="2">Frame Type</Box>
                <Flex direction="column" fontSize="md" gap="2">
                  <Box _hover={{ fontWeight: "bold" }}>Rectangle Frames</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Wayfarer Frames</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Round Frames</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Aviator Frames</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Cat-Eye Frames</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Rimless Frames</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Half Rim Frames</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Geometric Frames</Box>
                </Flex>
              </Box>

              <Divider my="2" />

              <Box>
                <Box fontSize="lg" fontWeight="bold" mb="2">Brands</Box>
                <Flex direction="column" fontSize="md" gap="2">
                  <Box _hover={{ fontWeight: "bold" }}>Vincent Chase</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Lenskart Air</Box>
                  <Box _hover={{ fontWeight: "bold" }}>John Jacobs</Box>
                  <Box _hover={{ fontWeight: "bold" }}>OJOS</Box>
                  <Box _hover={{ fontWeight: "bold" }}>New Balance</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Carrera</Box>
                  <Box _hover={{ fontWeight: "bold" }}>Fossil</Box>
                </Flex>
              </Box>
            </Box>
          </Link>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          bg="#455666"
          fontSize="15px"
          fontWeight="600"
          fontFamily="sans-serif"
          color="white"
          _hover={{
            borderBottom: "2px solid white",
          }}
        >
          COMPUTER GLASSES
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          bg="whiteAlpha.900"
          w="300px"
          p="4"
          borderRadius="md"
          boxShadow="lg"
          maxH="700px"
          overflowY="auto"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
          }}
        >
          <Link to="/products">
            <Box>
              <Grid templateColumns="repeat(1, 1fr)" gap="4">
                <Box>
                  <Box fontSize="lg" fontWeight="bold" mb="2">Shop By</Box>
                  <Flex alignItems="center" gap="3">
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://images.unsplash.com/photo-1587310311582-aa7610e90826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="men"
                      size="sm"
                    />
                    <Box
                      fontSize="md"
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Men
                    </Box>
                  </Flex>

                  <Flex alignItems="center" gap="3" mt="2">
                    <Avatar
                      name="Kola Tioluwani"
                      src="https://images.unsplash.com/flagged/photo-1577479662097-5e0347cbe923?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="women"
                      size="sm"
                    />
                    <Box
                      fontSize="md"
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Women
                    </Box>
                  </Flex>

                  <Flex alignItems="center" gap="3" mt="2">
                    <Avatar
                      name="Kent Dodds"
                      src="https://images.unsplash.com/photo-1631424542224-54dc0ddb69b4?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="kid"
                      size="sm"
                    />
                    <Box
                      fontSize="md"
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Kids
                    </Box>
                  </Flex>
                </Box>

                <Divider my="2" />

                {/* <Box>
                  <Box fontSize="lg" fontWeight="bold" mb="2">Select Category</Box>
                  <Box fontSize="md" _hover={{ bg: "gray.100" }} p="2">
                    Blu 0 Computer Glasses
                    <p>Starting From ₹ <span>1299</span></p>
                  </Box>
                  <Box fontSize="md" _hover={{ bg: "gray.100" }} p="2" mt="2">
                    PREMIUM RANGE
                    <p>Starting From ₹ <span>3000</span></p>
                  </Box>
                </Box> */}
<Box>
  <Box fontSize="lg" fontWeight="bold" mb="2">Our Top Picks</Box>
  <Flex direction="column" fontSize="md" gap="2">
    <Box _hover={{ fontWeight: "bold" }}>New Arrivals</Box>
    <Box _hover={{ fontWeight: "bold" }}>Best Seller</Box>
    <Box _hover={{ fontWeight: "bold" }}>Lenskart BLU lenses</Box>
    <Box _hover={{ fontWeight: "bold" }}>Trending</Box>
    <Box _hover={{ fontWeight: "bold" }}>Tinted Eyeglasses</Box>
    <Box _hover={{ fontWeight: "bold" }}>Computer Eyeglasses</Box>
    <Box _hover={{ fontWeight: "bold" }}>Progressive Eyeglasses</Box>
  </Flex>
</Box>

<Divider my="2" />

<Box>
  <Box fontSize="lg" fontWeight="bold" mb="2">Frame Type</Box>
  <Flex direction="column" fontSize="md" gap="2">
    <Box _hover={{ fontWeight: "bold" }}>Rectangle Frames</Box>
    <Box _hover={{ fontWeight: "bold" }}>Wayfarer Frames</Box>
    <Box _hover={{ fontWeight: "bold" }}>Round Frames</Box>
    <Box _hover={{ fontWeight: "bold" }}>Aviator Frames</Box>
    <Box _hover={{ fontWeight: "bold" }}>Cat-Eye Frames</Box>
    <Box _hover={{ fontWeight: "bold" }}>Rimless Frames</Box>
    <Box _hover={{ fontWeight: "bold" }}>Half Rim Frames</Box>
    <Box _hover={{ fontWeight: "bold" }}>Geometric Frames</Box>
  </Flex>
</Box>

<Divider my="2" />

<Box>
  <Box fontSize="lg" fontWeight="bold" mb="2">Brands</Box>
  <Flex direction="column" fontSize="md" gap="2">
    <Box _hover={{ fontWeight: "bold" }}>Vincent Chase</Box>
    <Box _hover={{ fontWeight: "bold" }}>Lenskart Air</Box>
    <Box _hover={{ fontWeight: "bold" }}>John Jacobs</Box>
    </Flex>
    </Box>
              </Grid>
            </Box>
          </Link>
        </MenuList>
      </Menu>

      {/* <Menu>
        <MenuButton
          bg="#fbf9f7"
          fontSize="15px"
          fontWeight="600"
          _hover={{
            borderBottom: "4px solid teal"
          }}
        >
          KIDS GLASSES
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          h="100%"
          bg="whiteAlpha.800"
          w="100%"
          p="2"
        >
          <Link to="/products">
            <Box>
              <Grid
                gridTemplateColumns="repeat(3, 1fr)"
                justifyContent="center"
                p="5"
              >
                <Box bg="whiteAlpha.900" h="250px" w="240px">
                  <img
                    className="navImg1"
                    src="https://static1.lenskart.com/media/desktop/img/May22/glasses.jpg"
                    alt="kidsIcon_1"
                  />
                  <Box mt="10px" textAlign="center" fontSize="lg">
                    Eye Glasses
                  </Box>
                </Box>
                <Box bg="whiteAlpha.900" h="250px" w="240px">
                  <img
                    className="navImg2"
                    src="https://static1.lenskart.com/media/desktop/img/May22/computer-glasses.jpg"
                    alt="kidsIcon_2"
                  />
                  <Box mt="10px" textAlign="center" fontSize="lg">
                    Zero Power Computer Glasses
                  </Box>
                </Box>
                <Box bg="whiteAlpha.900" h="250px" w="240px">
                  <img
                    className="navImg2"
                    src="https://static1.lenskart.com/media/desktop/img/May22/Sunnies.jpg"
                    alt="kidsIcon_3"
                  />
                  <Box mt="10px" textAlign="center" fontSize="lg">
                    Sun Glasses
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Link>
        </MenuList>
      </Menu> */}

      {/* <Menu>
        <MenuButton
          bg="#fbf9f7"
          fontSize="15px"
          fontWeight="600"
          _hover={{
            borderBottom: "4px solid teal"
          }}
        >
          CONTACT LENSES
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          h="400px"
          bg="whiteAlpha.800"
          p="5"
          w="100%"
        >
          <Link to="/newproduct">
            <Box>
              <Grid gridTemplateColumns="repeat(5, 1fr)" p="1" w="100%">
                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Brands
                  </Box>
                  <Flex direction="column" gap="2" fontSize="md">
                    <Box _hover={{ fontWeight: "bold" }}> Aqualens</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Bausch Lomb</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Johnson & Johnson</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Soflens</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Acuvue</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Alcon</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Air Optix</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Pure Vision</Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Explore by Disposability
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}> Monthly</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Day & Night</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Daily</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Yearly</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Bi-weekly</Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Explore by Power
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Spherical - CYL</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Spherical + CYL</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Cylindrical Power</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Toric Power</Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Explore by Colors
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Green</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Blue</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Brown</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Turquoise</Box>
                    <Box _hover={{ fontWeight: "bold" }}>View all colors</Box>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Solution
                  </Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Small</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Large</Box>
                    <Box _hover={{ fontWeight: "bold" }}>
                      View all solutions
                    </Box>
                  </Flex>
                </Flex>
              </Grid>
            </Box>
          </Link>
        </MenuList>
      </Menu> */}

      <Menu>
        <MenuButton
          bg="#455666"
          fontSize="15px"
          fontWeight="600"
          fontFamily="sans-serif"
          color="white"
          _hover={{
            borderBottom: "2px solid white",
          }}
        >
          SUN GLASSES
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          bg="whiteAlpha.900"
          w="100%"
          p="4"
          borderRadius="md"
          boxShadow="lg"
          maxH="700px"
          overflowY="auto"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
          }}
        >
          <Link to="/products">
            <Box>
              <Grid templateColumns="repeat(1, 1fr)" gap="4">
                <Box>
                  <Box fontSize="lg" fontWeight="bold" mb="2">Shop By</Box>
                  <Flex alignItems="center" gap="3">
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://images.unsplash.com/photo-1587310311582-aa7610e90826?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="men"
                      size="sm"
                    />
                    <Box
                      fontSize="md"
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Men
                    </Box>
                  </Flex>

                  <Flex alignItems="center" gap="3" mt="2">
                    <Avatar
                      name="Kola Tioluwani"
                      src="https://images.unsplash.com/flagged/photo-1577479662097-5e0347cbe923?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="women"
                      size="sm"
                    />
                    <Box
                      fontSize="md"
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Women
                    </Box>
                  </Flex>
                </Box>

                <Divider my="2" />
                {/* <Box>
                  <Box fontSize="lg" fontWeight="bold" mb="2">Select Category</Box>
                  <Box fontSize="md" _hover={{ bg: "gray.100" }} p="2">
                    CLASSIC SUNGLASSES
                    <p>Starting From ₹ <span>1299</span></p>
                  </Box>
                  <Box fontSize="md" _hover={{ bg: "gray.100" }} p="2" mt="2">
                    PREMIUM SUNGLASSES
                    <p>Starting From ₹ <span>2500</span></p>
                  </Box>
                </Box> */}

                <Box>
                  <Box fontSize="lg" fontWeight="bold" mb="2">Our Top Picks</Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>New Arrivals</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Best Seller</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Pilot Style</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Power Sunglasses</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Polarized Sunglasses</Box>
                  </Flex>
                </Box>

                <Divider my="2" />

                <Box>
                  <Box fontSize="lg" fontWeight="bold" mb="2">Shape</Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Aviator</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Rounders</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Wayfarer</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Rectangle</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Hexagon</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Cat-Eye</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Clubmaster</Box>
                  </Flex>
                </Box>

                <Divider my="2" />

                <Box>
                  <Box fontSize="lg" fontWeight="bold" mb="2">Collections</Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Glam Slam</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Havana</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Polarized</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Power Sunglasses</Box>
                    <Box _hover={{ fontWeight: "bold" }}>Designer Sunglasses</Box>
                  </Flex>
                </Box>

                <Divider my="2" />

                <Box>
                  <Box fontSize="lg" fontWeight="bold" mb="2">Brand</Box>
                  <Flex direction="column" fontSize="md" gap="2">
                    <Box _hover={{ fontWeight: "bold" }}>Vincent Chase</Box>
                    <Box _hover={{ fontWeight: "bold" }}>John Jacobs</Box>
                    <Box _hover={{ fontWeight: "bold" }}>OJOS</Box>
                  </Flex>
                </Box>
              </Grid>
            </Box>
          </Link>
        </MenuList>
      </Menu>

      {/* <Menu>
        <MenuButton
          bg="#fbf9f7"
          fontSize="15px"
          fontWeight="600"
          _hover={{
            borderBottom: "4px solid teal"
          }}
        >
          HOME EYE-TEST
        </MenuButton>

        <MenuList color="blackAlpha.900" h="400px" bg="whiteAlpha.800" w="100%">
          <Box>
            <Grid gridTemplateColumns="repeat(2, 1fr)">
              <Box>
                <Image
                  h="100%"
                  w="100%"
                  src="https://static1.lenskart.com/media/desktop/img/HomeTryOut.png"
                  alt="doc_img"
                />
              </Box>
              <Box>
                <Box m="auto">
                  <Heading
                    color="black"
                    fontWeight=""
                    fontSize="4xl"
                    fontFamily="sans-serif"
                    textAlign="center"
                    mt="10%"
                  >
                    Get your eyes checked at home
                  </Heading>
                  <Text
                    color="black"
                    fontSize="lg"
                    fontWeight="600"
                    textAlign="center"
                    mt="2%"
                  >
                    A certified refractionist will wisit you with
                  </Text>
                  <Text
                    color="black"
                    fontSize="lg"
                    fontWeight="600"
                    textAlign="center"
                    mt="2%"
                  >
                    latest eye testing machines & 100 trail frames
                  </Text>
                  <Button
                    colorScheme="black"
                    variant="outline"
                    bg="whiteAlpha.900"
                    rounded="50px"
                    p="7"
                    fontSize="15px"
                    mt="20"
                    ml="30%"
                    _hover={{ bg: "#020043", color: "white" }}
                  >
                    Book appointment
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Box>
        </MenuList>
      </Menu> */}

      {/* <Menu>
        <MenuButton
          bg="#fbf9f7"
          fontSize="15px"
          fontWeight="600"
          _hover={{
            borderBottom: "4px solid teal"
          }}
        >
          STORE LOCATOR
        </MenuButton>

        <MenuList
          color="blackAlpha.900"
          h="400px"
          bg="whiteAlpha.800"
          w="100%"
          p="5"
        >
          <Grid gridTemplateColumns="repeat(2, 1fr)">
            <Box>
              <Heading
                color="black"
                fontWeight=""
                fontSize="40px"
                fontFamily="sans-serif"
                textAlign="center"
                mt="15%"
              >
                Over 1100+ Lenskart Store
              </Heading>
              <Box color="black" fontSize="15px" textAlign="center" mt="6%">
                Experience eyewear in a whole new way: Visit your nearest store
              </Box>
              <Box color="black" fontSize="15px" textAlign="center" mt="1.5%">
                and treat yourself to 5000+ eyewear styles.
              </Box>
              <Button
                colorScheme="black"
                variant="outline"
                bg="whiteAlpha.900"
                rounded="50px"
                p="6"
                fontSize="15px"
                mt="10"
                ml="30%"
                _hover={{ bg: "#020043", color: "white" }}
              >
                Locate a store
              </Button>
            </Box>
            <Flex mt="30%" fontSize="14px" fontWeight="600">
              <Box>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Delhi1.png"
                  alt="Delhi"
                ></Image>
                <Text mt="-8px" ml="22px">
                  Delhi
                </Text>
              </Box>
              <Box>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Banglore1.png"
                  alt="Banglore"
                ></Image>
                <Text mt="-8px" ml="15px">
                  Banglore
                </Text>
              </Box>
              <Box>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Mumbai1.png"
                  alt="Mumbai"
                ></Image>
                <Text mt="-8px" ml="15px">
                  Mumbai
                </Text>
              </Box>
              <Box>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Ahmedabad1.png"
                  alt="Ahemdabad"
                ></Image>
                <Text mt="-8px" ml="10px">
                  Ahmedabad
                </Text>
              </Box>
              <Box>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Chennai1.png"
                  alt="Chennai"
                ></Image>
                <Text mt="-8px" ml="15px">
                  Chennai
                </Text>
              </Box>
              <Box>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Hyderabad1.png"
                  alt="Hyderabad"
                ></Image>
                <Text mt="-8px" ml="15px">
                  Hyderabad
                </Text>
              </Box>
              <Box>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Cities1.png"
                  alt="+100_cities"
                ></Image>
                <Text mt="-8px" ml="15px">
                  +100 cities
                </Text>
              </Box>
            </Flex>
          </Grid>
        </MenuList>
      </Menu> */}
    </Flex>
  );
}
export default NavbarCard5;
