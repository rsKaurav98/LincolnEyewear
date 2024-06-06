import { React, useContext } from "react";
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
  MenuItem,
  Divider
} from "@chakra-ui/react";
import { CategoryContext } from "../../Components/Navbar/CategoryContext";

const NavbarCard5 = () => {
  const { setSelectedCategory, categories, findCategoryIdBySlug, selectedCategory } = useContext(CategoryContext);

  const handleCategoryClick = (slug) => {
    const categoryId = findCategoryIdBySlug(slug);
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
  };

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
          w="300px"
          p="4"
          borderRadius="md"
          BoxShadow="lg"
          maxH="700px"
          overflowY="auto"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
          }}
          display="flex"
          flexDir="column"
        >
          <MenuItem display="flex"
          flexDir="column">
  <MenuItem
    fontSize="lg"
    mb="3"
    bg={
      selectedCategory === findCategoryIdBySlug("acetate-eyeglasses")
        ? "gray.200"
        : "transparent"
    }
    _hover={{ bg: "gray.200" }}
    onClick={() => handleCategoryClick("acetate-eyeglasses")}
  >
    ACETATE EYEGLASSES
  </MenuItem>

    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("hawk")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("hawk")}
    >
      HAWK
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("chariot")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("chariot")}
    >
      CHARIOT
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("poseidon")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("poseidon")}
    >
      POSEIDON
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("eagle")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("eagle")}
    >
      EAGLE
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("king")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("king")}
    >
      KING
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("leo")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("leo")}
    >
      LEO
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("oliver")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("oliver")}
    >
      OLIVER
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("august")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("august")}
    >
      AUGUST
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("carter")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("carter")}
    >
      CARTER
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("zeus")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("zeus")}
    >
      ZEUS
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("alexa")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("alexa")}
    >
      ALEXA
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("frank")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("frank")}
    >
      FRANK
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("hogan")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("hogan")}
    >
      HOGAN
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("samantha")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("samantha")}
    >
      SAMANTHA
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("austin")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("austin")}
    >
      AUSTIN
    </MenuItem>
</MenuItem>

<Divider my="2" />

<MenuItem display="flex"
          flexDir="column">
  <MenuItem
    fontSize="lg"
    mb="3"
    bg={
      selectedCategory === findCategoryIdBySlug("tr-eyeglases")
        ? "gray.200"
        : "transparent"
    }
    _hover={{ bg: "gray.200" }}
    onClick={() => handleCategoryClick("tr-eyeglases")}
  >
    TR EYEGLASSES
  </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("urban-edge-series")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("urban-edge-series")}
    >
      Urban Edge Series
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("lens-luxury-eyewear")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("lens-luxury-eyewear")}
    >
      Lens Luxury Eyewear
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("trufocus-tr-frames")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("trufocus-tr-frames")}
    >
      TruFocus TR Frames
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("techtrend-tr-series")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("techtrend-tr-series")}
    >
      TechTrend TR Series
    </MenuItem>
    <MenuItem
      bg={
        selectedCategory === findCategoryIdBySlug("vintage-charm-collection")
          ? "gray.200"
          : "transparent"
      }
      _hover={{ bg: "gray.200" }}
      onClick={() => handleCategoryClick("vintage-charm-collection")}
    >
      Vintage Charm Collection
    </MenuItem>
</MenuItem>

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
            <MenuItem>
              <Grid
                gridTemplateColumns="repeat(3, 1fr)"
                justifyContent="center"
                p="5"
              >
                <MenuItem bg="whiteAlpha.900" h="250px" w="240px">
                  <img
                    className="navImg1"
                    src="https://static1.lenskart.com/media/desktop/img/May22/glasses.jpg"
                    alt="kidsIcon_1"
                  />
                  <MenuItem mt="10px" textAlign="center" fontSize="lg">
                    Eye Glasses
                  </MenuItem>
                </MenuItem>
                <MenuItem bg="whiteAlpha.900" h="250px" w="240px">
                  <img
                    className="navImg2"
                    src="https://static1.lenskart.com/media/desktop/img/May22/computer-glasses.jpg"
                    alt="kidsIcon_2"
                  />
                  <MenuItem mt="10px" textAlign="center" fontSize="lg">
                    Zero Power Computer Glasses
                  </MenuItem>
                </MenuItem>
                <MenuItem bg="whiteAlpha.900" h="250px" w="240px">
                  <img
                    className="navImg2"
                    src="https://static1.lenskart.com/media/desktop/img/May22/Sunnies.jpg"
                    alt="kidsIcon_3"
                  />
                  <MenuItem mt="10px" textAlign="center" fontSize="lg">
                    Sun Glasses
                  </MenuItem>
                </MenuItem>
              </Grid>
            </MenuItem>
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
            <MenuItem>
              <Grid gridTemplateColumns="repeat(5, 1fr)" p="1" w="100%">
                <Flex direction="column" gap="6">
                  <MenuItem
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Brands
                  </MenuItem>
                  <Flex direction="column" gap="2" fontSize="md">
                    <MenuItem _hover={{ fontWeight: "bold" }}> Aqualens</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Bausch Lomb</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Johnson & Johnson</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Soflens</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Acuvue</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Alcon</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Air Optix</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Pure Vision</MenuItem>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <MenuItem
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Explore by Disposability
                  </MenuItem>
                  <Flex direction="column" fontSize="md" gap="2">
                    <MenuItem _hover={{ fontWeight: "bold" }}> Monthly</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Day & Night</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Daily</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Yearly</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Bi-weekly</MenuItem>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <MenuItem
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Explore by Power
                  </MenuItem>
                  <Flex direction="column" fontSize="md" gap="2">
                    <MenuItem _hover={{ fontWeight: "bold" }}>Spherical - CYL</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Spherical + CYL</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Cylindrical Power</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Toric Power</MenuItem>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <MenuItem
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Explore by Colors
                  </MenuItem>
                  <Flex direction="column" fontSize="md" gap="2">
                    <MenuItem _hover={{ fontWeight: "bold" }}>Green</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Blue</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Brown</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Turquoise</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>View all colors</MenuItem>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="6">
                  <MenuItem
                    fontSize="md"
                    fontWeight="bold"
                    borderBottom="1px solid black"
                    p="1"
                  >
                    Solution
                  </MenuItem>
                  <Flex direction="column" fontSize="md" gap="2">
                    <MenuItem _hover={{ fontWeight: "bold" }}>Small</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>Large</MenuItem>
                    <MenuItem _hover={{ fontWeight: "bold" }}>
                      View all solutions
                    </MenuItem>
                  </Flex>
                </Flex>
              </Grid>
            </MenuItem>
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
          BoxShadow="lg"
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
          {categories.map((category) => (
            (category.slug === "acetate-sunglasses" ||
              category.slug === "metal-sunglasses" ||
              category.slug === "tr-sunglasses") && (
              <MenuItem
                key={category.id}
                onClick={() => handleCategoryClick(category.slug)}
                bg={selectedCategory === category.id.toString() ? "gray.200" : "transparent"}
                _hover={{ bg: "gray.200" }}
              >
                {category.name}
              </MenuItem>
            )
          ))}
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
          <MenuItem>
            <Grid gridTemplateColumns="repeat(2, 1fr)">
              <MenuItem>
                <Image
                  h="100%"
                  w="100%"
                  src="https://static1.lenskart.com/media/desktop/img/HomeTryOut.png"
                  alt="doc_img"
                />
              </MenuItem>
              <MenuItem>
                <MenuItem m="auto">
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
                </MenuItem>
              </MenuItem>
            </Grid>
          </MenuItem>
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
            <MenuItem>
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
              <MenuItem color="black" fontSize="15px" textAlign="center" mt="6%">
                Experience eyewear in a whole new way: Visit your nearest store
              </MenuItem>
              <MenuItem color="black" fontSize="15px" textAlign="center" mt="1.5%">
                and treat yourself to 5000+ eyewear styles.
              </MenuItem>
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
            </MenuItem>
            <Flex mt="30%" fontSize="14px" fontWeight="600">
              <MenuItem>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Delhi1.png"
                  alt="Delhi"
                ></Image>
                <Text mt="-8px" ml="22px">
                  Delhi
                </Text>
              </MenuItem>
              <MenuItem>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Banglore1.png"
                  alt="Banglore"
                ></Image>
                <Text mt="-8px" ml="15px">
                  Banglore
                </Text>
              </MenuItem>
              <MenuItem>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Mumbai1.png"
                  alt="Mumbai"
                ></Image>
                <Text mt="-8px" ml="15px">
                  Mumbai
                </Text>
              </MenuItem>
              <MenuItem>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Ahmedabad1.png"
                  alt="Ahemdabad"
                ></Image>
                <Text mt="-8px" ml="10px">
                  Ahmedabad
                </Text>
              </MenuItem>
              <MenuItem>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Chennai1.png"
                  alt="Chennai"
                ></Image>
                <Text mt="-8px" ml="15px">
                  Chennai
                </Text>
              </MenuItem>
              <MenuItem>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Hyderabad1.png"
                  alt="Hyderabad"
                ></Image>
                <Text mt="-8px" ml="15px">
                  Hyderabad
                </Text>
              </MenuItem>
              <MenuItem>
                <Image
                  h=""
                  w=""
                  src="https://static.lenskart.com/media/desktop/img/Cities1.png"
                  alt="+100_cities"
                ></Image>
                <Text mt="-8px" ml="15px">
                  +100 cities
                </Text>
              </MenuItem>
            </Flex>
          </Grid>
        </MenuList>
      </Menu> */}
    </Flex>
  );
}
export default NavbarCard5;
