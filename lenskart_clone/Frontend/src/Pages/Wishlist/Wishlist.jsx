import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Text, Button, Heading, Grid, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@chakra-ui/react";
import { removeFromWishlist, WishlistReset } from "../../redux/wishlist/wishlist.actions";
import { addToCart } from "../../redux/CartPage/action";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Wishlist = () => {
  const wishlistItems = useSelector((store) => store.wishlistManager.wishlist);
  const { cart } = useSelector((state) => state.cartManager);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDeletingAll, setIsDeletingAll] = useState(false);

  const handleDelete = (itemId, selectedLensId) => {
    dispatch(removeFromWishlist(itemId, selectedLensId));
  };

  const handleAddToCart = (data) => {
    const existingItemIndex = cart.findIndex((item) => item.id === data.id && item.selectedLens?.id === data.selectedLens?.id);
    if (existingItemIndex === -1) {
      data.quantity = 1;
      data.totalPrice = parseFloat(data.sale_price) + (data.selectedLens ? parseFloat(data.selectedLens.price) : 0);
      dispatch(addToCart(data));
      dispatch(removeFromWishlist(data.id, data.selectedLens?.id));
      setTimeout(() => {
        navigate("/cart");
      }, 1000);
    } else {
      alert("Product with this lens is already in the cart.");
    }
  };

  const handleReset = () => {
    dispatch(WishlistReset());
    onClose();
  };

  const handleDeleteAll = () => {
    setIsDeletingAll(true);
    onOpen();
  };

  return (
    <Box>
      <Navbar />
      <br />
      <br />
      <Box
        minHeight="635"
        w={{ lg: "80%", md: "90%", sm: "90%", base: "95%" }}
        m="auto"
      >
        <Heading
          fontSize="25px"
          textAlign="center"
          p="2"
          bg="secondary"
          color="whiteAlpha.900"
          w={{ lg: "80%", md: "90%", sm: "90%", base: "95%" }}
          m="auto"
          borderRadius="8px"
        >
          Wishlist
        </Heading>
        <br />
        {wishlistItems.length === 0 ? (
          <Text
            textAlign="center"
            fontSize="28px"
            color="gray"
            mt="1%"
            fontWeight="bolder"
          >
            Your wishlist is empty.
          </Text>
        ) : (
          <Box>
            <Grid templateColumns="repeat(1,1fr)" gap={18} w={"100%"}>
              {wishlistItems &&
                wishlistItems.map((item) => (
                  <Box
                    key={`${item.id}-${item.selectedLens?.id}`}
                    borderWidth="1px"
                    boxShadow="2xl"
                    p="4"
                    my="4"
                    w={{ lg: "80%", md: "90%", sm: "90%", base: "95%" }}
                    m="auto"
                    bg="whiteAlpha.900"
                    borderRadius="8px"
                  >
                    <Grid
                      m="auto"
                      templateColumns={{
                        base: "repeat(1,1fr)",
                        sm: "repeat(1,1fr)",
                        md: "repeat(1,1fr)",
                        lg: "60% 40%",
                        xl: "70% 30%"
                      }}
                      justify="space-between"
                      mb="2"
                    >
                      <Text
                        fontSize="xl"
                        fontWeight="bold"
                        textTransform="capitalize"
                        mb={{ sm: "4", base: "4" }}
                      >
                        {item.name}
                      </Text>
                      <Grid
                        m={{ lg: "auto", sm: "left", base: "right" }}
                        templateColumns={{
                          base: "repeat(1,1fr)",
                          sm: "repeat(2,1fr)",
                          md: "repeat(2,1fr)",
                          lg: "repeat(2,1fr)",
                          xl: "repeat(2,1fr)"
                        }}
                        gap="4"
                        justify="space-between"
                        mb="2"
                      >
                        <Button
                          colorScheme="teal"
                          onClick={() => handleAddToCart(item)}
                        >
                          Add to Cart
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => handleDelete(item.id, item.selectedLens?.id)}
                        >
                          Remove
                        </Button>
                      </Grid>
                    </Grid>

                    <Grid
                      m="auto"
                      templateColumns={{
                        base: "repeat(1,1fr)",
                        sm: "40% 50%",
                        md: "30% 60%",
                        lg: "30% 60%",
                        xl: "20% 60%"
                      }}
                      align="center"
                      mb="1"
                    >
                      <img
                        src={item?.images[0].src}
                        alt={item.name}
                        boxSize="180px"
                        m="auto"
                      />

                      <Box
                        ml="4"
                        textAlign={{
                          lg: "left",
                          md: "left",
                          sm: "left",
                          base: "center"
                        }}
                      >
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          textTransform="capitalize"
                        >
                          {item.name}
                        </Text>
                        <Text fontSize="lg" fontWeight="bold">
                          Price : ₹ {item.sale_price}.00 /-
                        </Text>
                        {item.selectedLens && (
                          <Text fontSize="lg" fontWeight="bold">
                            Lens: {item.selectedLens.name} - ₹ {item.selectedLens.price}
                          </Text>
                        )}
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          color="gray.600"
                          textTransform="capitalize"
                        >
                          {item.productType}
                        </Text>
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          color="gray.600"
                          textTransform="capitalize"
                        >
                          Total : ₹ {parseFloat(item.sale_price) + parseFloat(item.selectedLens?.price || 0)}
                        </Text>{" "}
                      </Box>
                    </Grid>
                  </Box>
                ))}
            </Grid>
            <IconButton
              icon={<FaTrash />}
              aria-label="Delete all items"
              onClick={handleDeleteAll}
              mt={4}
              colorScheme="red"
              display={wishlistItems.length > 1?"flex":"none" }
            />
          </Box>
        )}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete All Items</ModalHeader>
          <ModalBody>
            Are you sure you want to delete all the items from the wishlist?
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" onClick={handleReset} ml={3}>
              Proceed
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <br />
      <Footer />
    </Box>
  );
};

export default Wishlist;
