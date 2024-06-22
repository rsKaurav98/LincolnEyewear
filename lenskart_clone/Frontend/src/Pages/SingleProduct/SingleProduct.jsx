import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/CartPage/action";
import { addToWishlist } from "../../redux/wishlist/wishlist.actions";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ProdCard from "./ProdCard";
import axios from "axios";
import Zoom from "react-medium-image-zoom";
import { Text } from "@chakra-ui/react";
import "react-medium-image-zoom/dist/styles.css";
import {
  Grid,
  Box,
  Image,
  IconButton,
  SimpleGrid,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons";
import Loadingimg from "./loadingimg";
import ProductCard from "../Product/ProductCard";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartManager);
  const [isLoaded, setIsLoaded] = useState(true);
  const [selectedLens, setSelectedLens] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddToCart = (item) => {
    const productToAdd = {
      ...item,
      quantity: 1,
      selectedLens,
      totalPrice: selectedLens ? totalPrice : item.sale_price,
    };

    if (selectedLens) {
      const existingProduct = cart.findIndex(
        (cartItem) =>
          cartItem.id === item.id && cartItem.selectedLens === selectedLens
      );
      if (existingProduct === -1) {
        dispatch(addToCart(productToAdd));
        setTimeout(() => {
          navigate("/cart");
        }, 1000);
      } else {
        alert("Product With This Lens Already Added in Cart");
      }
    } else {
      const existingProduct = cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingProduct === -1) {
        dispatch(addToCart(productToAdd));
        setTimeout(() => {
          navigate("/cart");
        }, 1000);
      } else {
        alert("Product Already Added in Cart");
      }
    }
  };

  const handleAddToWishlist = () => {
    const productToAdd = {
      ...data,
      selectedLens: selectedLens,
      totalPrice: selectedLens ? totalPrice : data.sale_price,
    };

    dispatch(addToWishlist(productToAdd));

    setTimeout(() => {
      navigate("/wishlist");
    }, 1000);
  };

  const fetchSingleProduct = async () => {
    try {
      const consumerKey = "ck_a5217f627b385dde1c5d2392aae81f5244ce0af5";
      const consumerSecret = "cs_70ed7d3b65ccb71cf9cbf49f6bd064cd25402bca";

      const response = await axios.get(
        `https://lincolneyewear.com/wp-json/wc/v3/products/${id}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`
      );
      setData(response.data);
      setTotalPrice(response.data.sale_price);
      fetchRelatedProducts(response.data.related_ids);
      setIsLoaded(false);
    } catch (error) {
      console.error("Fetch Error:", error);
      setIsLoaded(false);
    }
  };

  const fetchRelatedProducts = async (relatedIds) => {
    try {
      const consumerKey = "ck_a5217f627b385dde1c5d2392aae81f5244ce0af5";
      const consumerSecret = "cs_70ed7d3b65ccb71cf9cbf49f6bd064cd25402bca";
      const relatedProductsRequests = relatedIds.map((relatedId) =>
        axios.get(
          `https://lincolneyewear.com/wp-json/wc/v3/products/${relatedId}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`
        )
      );
      const relatedProductsResponses = await Promise.all(
        relatedProductsRequests
      );
      const relatedProductsData = relatedProductsResponses.map(
        (response) => response.data
      );
      setRelatedProducts(relatedProductsData);
    } catch (error) {
      console.error("Related Products Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  const isDataLoaded = data && data.images && data.images.length > 0;

  const handlePrevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? data.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prev) =>
      prev === data.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleLensCart = (lens) => {
    setSelectedLens(lens);
    setTotalPrice(
      parseFloat(data.sale_price) +
        parseFloat(lens.price === "Free" ? 0 : lens.price)
    );
  };

  const handleImageClick = (index) => {
    setCurrentImage(index);
    onOpen();
  };

  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        {isLoaded ? (
          <Loadingimg />
        ) : (
          <Box p={5} flex="1">
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
              gap={5}
            >
              {isDataLoaded && (
                <Box position="relative" maxW="100%">
                  {data.images.length > 1 ? (
                    <>
                      <SimpleGrid
                        columns={{ base: 1, md: 1, lg: 2 }}
                        spacing={5}
                        display={{ base: "none", md: "grid" }}
                        pos="sticky"
                        top="0"
                      >
                        {data.images.map((image, index) => (
                          <Zoom key={index}>
                            <Image
                              src={image.src}
                              maxW="100%"
                              maxH={{ base: "100%", md: "500px", lg: "600px" }}
                              objectFit="cover"
                              _hover={{ transform: "scale(1.05)" }}
                              boxShadow="md"
                              bg="white"
                              onClick={() => handleImageClick(index)}
                              loading="lazy"
                            />
                          </Zoom>
                        ))}
                      </SimpleGrid>
                      <Box
                        display={{ base: "block", md: "none" }}
                        width="100%"
                        height="auto"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                      >
                        <Zoom>
                          <Image
                            src={data.images[currentImage].src}
                            maxW="100%"
                            maxH={{ base: "100%", md: "500px", lg: "600px" }}
                            objectFit="cover"
                            onClick={() => handleImageClick(currentImage)}
                            boxShadow="md"
                            bg="white"
                          />
                        </Zoom>
                        <IconButton
                          icon={<ArrowBackIcon />}
                          position="absolute"
                          left="10px"
                          top="50%"
                          transform="translateY(-50%)"
                          onClick={handlePrevImage}
                        />
                        <IconButton
                          icon={<ArrowForwardIcon />}
                          position="absolute"
                          right="10px"
                          top="50%"
                          transform="translateY(-50%)"
                          onClick={handleNextImage}
                        />
                      </Box>
                    </>
                  ) : (
                    <Zoom>
                      <Image
                        src={data.images[0].src}
                        maxW="100%"
                        maxH={{ base: "100%", md: "500px", lg: "600px" }}
                        objectFit="cover"
                        onClick={() => handleImageClick(0)}
                        boxShadow="md"
                        bg="white"
                      />
                    </Zoom>
                  )}
                </Box>
              )}
              <Box pos="sticky" top="0" alignSelf="start">
                <ProdCard
                  type={data}
                  handleCart={handleAddToCart}
                  handleWishlist={handleAddToWishlist}
                  handleLensCart={handleLensCart}
                  selectedLens={selectedLens}
                  totalPrice={totalPrice}
                  virtualTryOnImage={isDataLoaded ? data.images[1].src : null}
                />
              </Box>
            </Grid>
            <br/>
            {relatedProducts.length > 0 && (
              <Box mt={10}>
                <Text fontSize="2xl" mb={5} fontWeight="bold">
                  Related Products
                </Text>
                <ProductCard type={relatedProducts} />
              </Box>
            )}
          </Box>
        )}
      </Box>
      <Footer />
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            {isDataLoaded && (
              <Zoom
                wrapElement={(props) => (
                  <Box
                    maxW="90%"
                    maxH="90%"
                    boxShadow="lg"
                    bg="white"
                    p={5}
                    {...props}
                  />
                )}
                zoomMargin={40}
              >
                <Image
                  src={data.images[currentImage].src}
                  maxW="100%"
                  maxH="100%"
                  objectFit="contain"
                />
              </Zoom>
            )}
            <IconButton
              icon={<CloseIcon />}
              aria-label="Close zoom"
              position="absolute"
              top="10px"
              right="10px"
              onClick={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SingleProduct;
