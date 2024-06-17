// CategoryContext.js
import React, { createContext, useState, useEffect } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const consumerKey = 'ck_a5217f627b385dde1c5d2392aae81f5244ce0af5';
        const consumerSecret = 'cs_70ed7d3b65ccb71cf9cbf49f6bd064cd25402bca';
        
        const response = await fetch(
          `https://lincolneyewear.com/wp-json/wc/v3/products/categories?per_page=50&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Filter out the category with name "Lenses"
        const filteredCategories = data.filter(category => category.name.toLowerCase() !== "lenses");
        setCategories(filteredCategories);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchCategories();
  }, []);

  const findCategoryIdBySlug = (slug) => {
    const category = categories.find((cat) => cat.slug === slug);
    return category ? category.id.toString() : null;
  };

  return (
    <CategoryContext.Provider
      value={{ categories, selectedCategory, setSelectedCategory, findCategoryIdBySlug }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
