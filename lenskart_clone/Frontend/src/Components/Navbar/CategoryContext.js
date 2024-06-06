// CategoryContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

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

    fetchCategories();
  }, []);

  const findCategoryIdBySlug = (slug) => {
    const category = categories.find((cat) => cat.slug === slug);
    return category ? category.id.toString() : null;
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <CategoryContext.Provider
      value={{ categories, selectedCategory, setSelectedCategory, findCategoryIdBySlug }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
