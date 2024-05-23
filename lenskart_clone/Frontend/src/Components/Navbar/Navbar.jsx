import React from "react";
import { Box } from "@chakra-ui/react";
import { NavbarCard2, NavbarCard4 } from "./NavbarCard";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <Box overflow="hidden" bg="white">
      <Box display={{ base: "none", xl: "inherit" }} color="blackAlpha.800" padding="1rem" bg={"aliceblue"}>
        <NavbarCard2 />
        <NavbarCard4 />
      </Box>
      <Nav />
    </Box>
  );
};

export default Navbar;
