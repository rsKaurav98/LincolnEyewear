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
