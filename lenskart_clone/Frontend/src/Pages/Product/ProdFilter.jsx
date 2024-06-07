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

const ProdFilter = ({
  handleCategoryChange,
  handleTagChange,
  selectedCategory,
  selectedTag,
}) => {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://lincolneyewear.com/wp-json/wc/v3/products/categories?consumer_key=ck_a5217f627b385dde1c5d2392aae81f5244ce0af5&consumer_secret=cs_70ed7d3b65ccb71cf9cbf49f6bd064cd25402bca&per_page=50"
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
          "https://lincolneyewear.com/wp-json/wc/v3/products/tags?consumer_key=ck_a5217f627b385dde1c5d2392aae81f5244ce0af5&consumer_secret=cs_70ed7d3b65ccb71cf9cbf49f6bd064cd25402bca&per_page=50"
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

    fetchCategories();
    fetchTags();
  }, []);

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
