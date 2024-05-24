import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/CartPage/action";
import { addToWishlist } from "../../redux/wishlist/wishlist.actions";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ProdCard from "./ProdCard";
import { ProdImage } from "./ProdImage";
import axios from "axios";
import { Grid, GridItem, Image } from "@chakra-ui/react";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
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
      alert('Product Already Add in Cart');
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

  const isDataLoaded = data && data.image && data.shop;

  return (
    <>
      <Navbar />
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
              _hover={{ transform: 'scale(1.1)' }}
            >
              <Image src={data.gallery[0].original} />
            </GridItem>
            <GridItem
              borderRadius={10}
              p="80px 5px"
              border="1px solid"
              borderColor="gray.300"
              w={{ lg: '100%', sm: '80%', base: '80%' }}
              m="auto"
            >
              <Image _hover={{ transform: 'scale(1.1)' }} src={data.gallery[1].original} />
            </GridItem>
            <GridItem p={5} colSpan={1} rowSpan={10} m="auto" justifyContent="center">
              <ProdCard
                type={data}
                handleCart={handleAddToCart}
                handleWishlist={handleAddToWishlist}
              />
            </GridItem>
            {ProdImage.map((ele, i) => (
              <GridItem
                _hover={{ transform: 'scale(1.1)' }}
                display={{ lg: 'inherit', base: 'none' }}
                borderRadius={10}
                p="80px 5px"
                border="1px solid"
                borderColor="gray.300"
                key={i}
              >
                <Image src={data.gallery[2].original} />
              </GridItem>
            ))}
            <GridItem
              _hover={{ transform: 'scale(1.1)' }}
              display={{ lg: 'inherit', base: 'none' }}
              borderRadius={10}
              p="80px 5px"
              border="1px solid"
              borderColor="gray.300"
            >
              <Image src={data.gallery[3].original} />
            </GridItem>
            <GridItem
              _hover={{ transform: 'scale(1.1)' }}
              display={{ lg: 'inherit', base: 'none' }}
              borderRadius={10}
              p="80px 5px"
              border="1px solid"
              borderColor="gray.300"
            >
              <Image src={data.gallery[0].original} />
            </GridItem>
          </>
        )}
      </Grid>
      <Footer />
    </>
  );
};

export default SingleProduct;
