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
    const consumerKey = 'ck_a5217f627b385dde1c5d2392aae81f5244ce0af5';
    const consumerSecret = 'cs_70ed7d3b65ccb71cf9cbf49f6bd064cd25402bca';

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `https://lincolneyewear.com/wp-json/wc/v3/products/categories?per_page=50&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.filter(category => category.id !== 100); // Filter out the category with ID 100
      } catch (error) {
        console.error("Fetch Error:", error);
        return [];
      }
    };

    const fetchTags = async () => {
      try {
        const response = await fetch(
          `https://lincolneyewear.com/wp-json/wc/v3/products/tags?per_page=50&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Fetch Error:", error);
        return [];
      }
    };
    
    const fetchData = async () => {
      const [categoriesData, tagsData] = await Promise.all([fetchCategories(), fetchTags()]);
      setCategories(categoriesData);
      setTags(tagsData);
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
