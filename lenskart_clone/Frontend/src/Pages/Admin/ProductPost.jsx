import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Center,
  VStack,
  useToast,
  Select,
  FormLabel,
  InputGroup,
  InputRightElement,
  HStack,
  Spacer,
  Flex,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const ProductPost = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [price, setPrice] = useState("");
  const [mPrice, setMPrice] = useState("");
  const [shape, setShape] = useState("");
  const [gender, setGender] = useState("");
  const [style, setStyle] = useState("");
  const [dimension, setDimension] = useState("");
  const [productType, setProductType] = useState("");
  const [colors, setColors] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const previews = [];
    const filesArray = Array.from(files);

    if (filesArray.length < 3) {
      toast({
        title: "Images can't be less than 3",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom"
      });
      return;
    }

    if (filesArray.length > 7) {
      toast({
        title: "Images can't be more than 7",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "bottom"
      });
      return;
    }

    filesArray.forEach((file) => {
      const preview = URL.createObjectURL(file);
      previews.push(preview);
    });

    setImageFiles(filesArray);
    setImagePreviews(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (
        imageFiles.length > 0 &&
        price !== "" &&
        mPrice !== "" &&
        name !== "" &&
        shape !== "" &&
        gender !== "" &&
        style !== "" &&
        dimension !== "" &&
        productType !== "" &&
        colors !== ""
      ) {
        const formData = new FormData();

        imageFiles.forEach((file) => {
          formData.append("images", file);
        });

        formData.append("productRefLink", name);
        formData.append("rating", 0);
        formData.append("userRated", 0);
        formData.append("price", price);
        formData.append("mPrice", mPrice);
        formData.append("shape", shape);
        formData.append("gender", gender);
        formData.append("style", style);
        formData.append("dimension", dimension);
        formData.append("productType", productType);
        formData.append("colors", colors);
        formData.append("quantity", 0);

        const response = await fetch(
          "http://localhost:4000/product",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.status === 201) {
          setLoading(false);
          toast({
            title: "Product Register Successfully",
            status: "success",
            duration: 1000,
            isClosable: true,
            position: "bottom"
          });
          setTimeout(() => {
            navigate("/productlist");
          }, 1000);
        } else {
          setLoading(false);
          const { message } = await response.json();
          console.log(message);
        }
      } else {
        setLoading(false);
        toast({
          title: "Please fill all the field",
          status: "warning",
          duration: 1000,
          isClosable: true,
          position: "bottom"
        });
      }
    } catch (error) {
      setLoading(false);
      console.log("An error occurred. Please try again later.");
      toast({
        title: "An error occurred. Please try again",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "bottom"
      });
    }
  };

  return (
    <Box bg="gray.200" minH="710px">
      <Navbar />
      <br />
      <br />
      <Center>
        <VStack
          w={{ lg: "650px", md: "650px", sm: "90%", base: "95%" }}
          mb={{ lg: "0", md: "0", sm: "4", base: "4" }}
          borderRadius="xl"
          boxShadow="dark-lg"
          p="10"
          bg="whiteAlpha.900"
        >
          <Heading fontSize="30px">Product Register Form</Heading>
          <br />
          <br />
          <FormControl>
            <Input
              type="text"
              size="lg"
              fontSize="16px"
              h="40px"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              bg="whiteAlpha.900"
            />
          </FormControl>
          <br />
          <FormControl>
            <Input
              type="file"
              size="lg"
              fontSize="16px"
              h="40px"
              placeholder="Enter Image Url"
              onChange={handleImageChange}
              multiple
              bg="whiteAlpha.900"
            />
          </FormControl>
          <br />
          <FormControl>
            <Input
              type="Number"
              size="lg"
              fontSize="16px"
              h="40px"
              placeholder="Enter Discounted Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              bg="whiteAlpha.900"
            />
          </FormControl>
          <br />
          <FormControl>
            <Input
              type="Number"
              size="lg"
              fontSize="16px"
              h="40px"
              placeholder="Enter Original Price"
              onChange={(e) => setMPrice(e.target.value)}
              value={mPrice}
              bg="whiteAlpha.900"
            />
          </FormControl>
          <br />
          <FormControl>
            <Select
              placeholder="Choose Frame Shape"
              onChange={(e) => setShape(e.target.value)}
              value={shape}
              size="lg"
              fontSize="16px"
              h="40px"
              bg="whiteAlpha.900"
            >
              <option value="Rectangle">Rectangle</option>
              <option value="Round">Round</option>
              <option value="Wayfarer">Wayfarer</option>
              <option value="Butterfly">Butterfly</option>
              <option value="Aviator">Aviator</option>
              <option value="Wrapround">Wrap Round</option>
              <option value="Cateye">Cateye</option>
              <option value="Hexagon">Hexagon</option>
<option value="Square">Square</option>
            </Select>
          </FormControl>
          <br />
          <FormControl>
            <Select
              placeholder="Choose Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              size="lg"
              fontSize="16px"
              h="40px"
              bg="whiteAlpha.900"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kid">Kid</option>
            </Select>
          </FormControl>
          <br />

          <FormControl>
            <Select
              placeholder="Choose Frame Types"
              onChange={(e) => setStyle(e.target.value)}
              value={style}
              size="lg"
              fontSize="16px"
              h="40px"
              bg="whiteAlpha.900"
            >
<option value="Tinted">Tinted</option>
              <option value="FullFrame">FullFrame</option>
              <option value="Mirror">Mirror</option>
            </Select>
          </FormControl>
          <br />
          <FormControl>
            <Input
              type="text"
              size="lg"
              fontSize="16px"
              h="40px"
              placeholder="Enter Frame Dimension"
              onChange={(e) => setDimension(e.target.value)}
              value={dimension}
              bg="whiteAlpha.900"
            />
          </FormControl>
          <br />
          <FormControl>
            <Select
              placeholder="Choose Glass"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              size="lg"
              fontSize="16px"
              h="40px"
              bg="whiteAlpha.900"
            >
              <option value="sunglasses">SunGlass</option>
              <option value="eyeglasses">EyeGlass</option>
            </Select>
          </FormControl>
          <br />
          <FormControl>
            <Input
              type="text"
              size="lg"
              fontSize="16px"
              h="40px"
              placeholder="Enter Frame Colour"
              onChange={(e) => setColors(e.target.value)}
              value={colors}
              bg="whiteAlpha.900"
            />
          </FormControl>
          <br />

          {loading ? (
            <Button
              isLoading
              loadingText="Submitting"
              colorScheme="blue"
              fontSize="20px"
              py="4"
              w="100%"
              borderRadius="lg"
              variant="outline"
            >
              Submit
            </Button>
          ) : (
            <Button
              colorScheme="blue"
              fontSize="20px"
              py="4"
              w="100%"
              borderRadius="lg"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}

          <br />
          <br />
          {imagePreviews.length > 0 && (
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
                xl: "repeat(5, 1fr)",
              }}
              gap={4}
            >
              {imagePreviews.map((preview, index) => (
                <GridItem key={index}>
                  <img
                    src={preview}
                    alt={`preview-${index}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </GridItem>
              ))}
            </Grid>
          )}
        </VStack>
      </Center>
    </Box>
  );
};

export default ProductPost;