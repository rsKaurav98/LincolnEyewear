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
import { transform } from "framer-motion";

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
      <Box p={5}>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }} gap={5}>
          {isDataLoaded && (
            <Box position="relative" maxW="100%">
              {data.gallery.length > 1 ? (
                <>
                  {/* For large screens, use grid layout with two columns */}
                  <SimpleGrid
                    columns={{ base: 1, md: 1, lg: 2 }}
                    spacing={5}
                    display={{ base: "none", md:"grid" }}
                    pos="sticky"
                    top="0"
                  >
                    {data.gallery.map((image, index) => (
                      <Image
                        key={index}
                        src={image.original}
                        maxW="100%"
                        maxH={{ base: "100%", md: "500px", lg: "600px" }}
                        objectFit="cover"
                        _hover={{transform:"scale(1.05)"}}
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
                  >
                    <Image
                      src={data.gallery[currentImage].original}
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
                  src={data.gallery[0].original}
                  maxW="100%"
                  maxH={{ base: "100%", md: "500px", lg: "600px" }}
                  objectFit="cover"
                />
              )}
            </Box>
          )}
          <Box pos={{ lg: "sticky" }} top="0">
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
