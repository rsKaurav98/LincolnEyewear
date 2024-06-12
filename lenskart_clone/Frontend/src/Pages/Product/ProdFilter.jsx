import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Loadingfilter from "./Loadingfilter";

const ProdFilter = ({
  handleCategoryChange,
  handleTagChange,
  selectedCategory,
  selectedTag,
}) => {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/products/categories"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    const fetchTags = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/products/tags"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchCategories(), fetchTags()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loadingfilter />;
  }

  return (
    <Box>
      <br />
      <Accordion defaultIndex={[0, 1]} allowMultiple w="100%" m="auto" mt="-1%">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight="500" color="gray.500">
                <Text fontWeight="bold" mb="3px" color="gray.600" fontSize="15px">
                  Categories
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color="gray.500" p="2">
            <RadioGroup onChange={handleCategoryChange} value={selectedCategory}>
              <Stack direction="column" gap="2">
                <Radio value="" key="all">
                  All Categories
                </Radio>
                {categories.map((category) => (
                  <Radio value={category.id.toString()} key={category.id}>
                    {category.name}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight="500" color="gray.500">
                <Text fontWeight="bold" mb="3px" color="gray.600" fontSize="15px">
                  Tags
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color="gray.500" p="2">
            <RadioGroup onChange={handleTagChange} value={selectedTag}>
              <Stack direction="column" gap="2">
                <Radio value="" key="all">
                  All Tags
                </Radio>
                {tags.map((tag) => (
                  <Radio value={tag.id.toString()} key={tag.id}>
                    {tag.name}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default ProdFilter;
