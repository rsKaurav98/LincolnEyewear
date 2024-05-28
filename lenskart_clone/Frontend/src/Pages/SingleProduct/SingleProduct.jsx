import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/CartPage/action";
import { addToWishlist } from "../../redux/wishlist/wishlist.actions";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ProdCard from "./ProdCard";
import axios from "axios";
import { Grid, Box, Image, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartManager);

  const handleAddToCart = () => {
    const existingItem = cart.findIndex((item) => item.id === data.id);
    if (existingItem === -1) {
      const newData = { ...data, quantity: 1 };
      dispatch(addToCart(newData));
      setTimeout(() => {
        navigate('/cart');
      }, 1000);
    } else {
      alert('Product Already Added in Cart');
    }
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(data));
    setTimeout(() => {
      navigate('/wishlist');
    }, 1000);
  };

  const fetchSingleProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/products/${id}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  const isDataLoaded = data && data.gallery && data.gallery.length > 0;

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? data.gallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === data.gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <br />
      <br />
      <Grid
        gap={5}
        m="auto"
        w="95%"
        justifyContent="space-around"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
      >
        {isDataLoaded && (
          <>
            <GridItem
              borderRadius={10}
              p="80px 5px"
              border="1px solid"
              borderColor="gray.300"
              display={{ lg: 'inherit', base: 'none' }}
              _hover={{ transform: 'scale(1.05)' }}
              transition="0.3s"
            >
              <Image src={data.image.original} />
            </GridItem>
            <GridItem
              borderRadius={10}
              p="80px 5px"
              border="1px solid"
              borderColor="gray.300"
              w={{ lg: '100%', sm: '80%', base: '80%' }}
              m="auto"
              _hover={{ transform: 'scale(1.05)' }}
              transition="0.3s"
            >
              <Image src={data.image.original} />
            </GridItem>
            <GridItem p={5} colSpan={1} rowSpan={10} mt="0" mb="auto" pos="sticky" top="0">
              <ProdCard
                type={data}
                handleCart={handleAddToCart}
                handleWishlist={handleAddToWishlist}
              />
            </GridItem>
            {ProdImage.map((ele, i) => (
              <GridItem
                _hover={{ transform: 'scale(1.05)' }}
                transition="0.3s"
                display={{ lg: 'inherit', base: 'none' }}
                borderRadius={10}
                p="80px 5px"
                border="1px solid"
                borderColor="gray.300"
                key={i}
=======
      <Box p={5}>
        <Grid templateColumns={{ base: "1fr", md: "1fr", lg: "2fr 1fr" }} gap={5}>
          {isDataLoaded && (
            <Box position="relative" maxW="100%">
              <Box
                width={{ base: "100%", md: "100%", lg: "100%" }}
                height="auto"
                display="flex"
                justifyContent="center"
                alignItems="center"
>>>>>>> e23b8361923b433820d0a6e334668a56f37fb89d
              >
                <Image
                  src={data.gallery[currentImage].original}
                  maxW={{ base: "100%", md: "100%", lg: "100%" }}
                  maxH={{ base: "100%", md: "500px", lg: "600px" }}
                  objectFit="cover"
                />
              </Box>
              {isDataLoaded && data.gallery.length > 1 && (
                <>
                  <IconButton
                    icon={<ArrowBackIcon />}
                    position="absolute"
                    left="10px"
                    top={{base:"50%", md:"30%", lg:"30%"}}
                    transform="translateY(-50%)"
                    onClick={handlePrevImage}
                  />
                  <IconButton
                    icon={<ArrowForwardIcon />}
                    position="absolute"
                    right="10px"
                    top={{base:"50%", md:"30%", lg:"30%"}}
                    transform="translateY(-50%)"
                    onClick={handleNextImage}
                  />
                </>
              )}
            </Box>
          )}
          <Box pos="sticky" top="0">
            <ProdCard
              type={data}
              handleCart={handleAddToCart}
              handleWishlist={handleAddToWishlist}
            />
          </Box>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default SingleProduct;
