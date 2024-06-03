import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/CartPage/action";
import { addToWishlist } from "../../redux/wishlist/wishlist.actions";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ProdCard from "./ProdCard";
import axios from "axios";
import { Grid, Box, Image, IconButton, SimpleGrid } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Loading from "./loadingimg"


const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartManager);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleAddToCart = (item) => {
    if (item.isLens) {
      // Handling the addition of a lens to the cart
      const existingLens = cart.findIndex(
        (cartItem) => cartItem.id === item.id && cartItem.isLens && cartItem.productId === item.productId
      );
      if (existingLens === -1) {
        const newLensData = { ...item, quantity: 1 };
        dispatch(addToCart(newLensData));
      } else {
        alert('Lens Already Added in Cart');
      }
    } else {
      // Handling the addition of a product to the cart
      const existingProduct = cart.findIndex((cartItem) => cartItem.id === item.id);
      if (existingProduct === -1) {
        const newProductData = { ...item, quantity: 1 };
        dispatch(addToCart(newProductData));
        setTimeout(() => {
          navigate('/cart');
        }, 1000);
      } else {
        alert('Product Already Added in Cart');
      }
    }
  };
  
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(data));
    setTimeout(() => {
      navigate('/wishlist');
    }, 1000);
  };

  const fetchSingleProduct = async () => {
    setIsLoaded(true);
    try {
      const response = await axios.get(`https://lincolneyewear.com/wp-json/wc/v3/products/${id}?consumer_key=ck_a5217f627b385dde1c5d2392aae81f5244ce0af5&consumer_secret=cs_70ed7d3b65ccb71cf9cbf49f6bd064cd25402bca`);
      setData(response.data);
      setIsLoaded(false);
    } catch (error) {
      console.log(error);
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  const isDataLoaded = data && data?.images && data?.images?.length > 0;

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? data?.images?.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === data?.images?.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Navbar />
      {isLoaded ? (
        <Loading />
      ) : (
        <Box p={5}>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }} gap={5}>
            {isDataLoaded && (
              <Box position="relative" maxW="100%">
                {data?.images?.length > 1 ? (
                  <>
                    {/* For large screens, use grid layout with two columns */}
                    <SimpleGrid
                      columns={{ base: 1, md: 1, lg: 2 }}
                      spacing={5}
                      display={{ base: "none", md: "grid" }}
                      pos="sticky"
                      top="0"
                    >
                      {data?.images.map((image, index) => (
                        <Image
                          key={index}
                          src={image.src}
                          maxW="100%"
                          maxH={{ base: "100%", md: "500px", lg: "600px" }}
                          objectFit="cover"
                          _hover={{ transform: "scale(1.05)" }}
                          boxShadow="md"
                          bg="white"
                        />
                      ))}
                    </SimpleGrid>

                    {/* For small screens, use the current image carousel */}
                    <Box
                      display={{ base: "block", md: "none" }}
                      width="100%"
                      height="auto"
                      justifyContent="center"
                      alignItems="center"
                      position="relative"
                    >
                      <Image
                        src={data.images[currentImage].src}
                        maxW="100%"
                        maxH={{ base: "100%", md: "500px", lg: "600px" }}
                        objectFit="cover"
                      />
                      <IconButton
                        icon={<ArrowBackIcon />}
                        position="absolute"
                        left="10px"
                        top="50%"
                        transform="translateY(-50%)"
                        onClick={handlePrevImage}
                        display={{ base: "block", md: "none" }}
                      />
                      <IconButton
                        icon={<ArrowForwardIcon />}
                        position="absolute"
                        right="10px"
                        top="50%"
                        transform="translateY(-50%)"
                        onClick={handleNextImage}
                        display={{ base: "block", md: "none" }}
                      />
                    </Box>
                  </>
                ) : (
                  <Image
                    src={data.images[0].src}
                    maxW="100%"
                    maxH={{ base: "100%", md: "500px", lg: "600px" }}
                    objectFit="cover"
                  />
                )}
              </Box>
            )}
            <Box pos="sticky" top="0" alignSelf="start" >
              <ProdCard
                type={data}
                handleCart={handleAddToCart}
                handleWishlist={handleAddToWishlist}
              />
            </Box>
          </Grid>
        </Box>
      )}
      <Footer />
    </>
  );
};

export default SingleProduct;
