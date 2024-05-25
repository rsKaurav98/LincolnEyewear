import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { NavbarCard2, NavbarCard4 } from "./NavbarCard";
import Nav from "./Nav";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      // overflow="hidden"
      bg="white"
      position="sticky"
      top="0"
      zIndex="1000"
      boxShadow={scrolled ? "0 4px 6px rgba(0, 0, 0, 0.5)" : "none"}
      transition="box-shadow 0.3s ease-in-out"
    >
      <Box
        display={{ base: "none", xl: "inherit" }}
        color="blackAlpha.800"
        padding="1rem"
        bg="aliceblue"
      >
        <NavbarCard2 />
        <NavbarCard4 />
      </Box>
      <Nav />
    </Box>
  );
};

export default Navbar;
