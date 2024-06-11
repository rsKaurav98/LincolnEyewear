// CategoryContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

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
