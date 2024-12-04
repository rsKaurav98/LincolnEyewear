import React, { useState, useEffect } from "react";
import HomeCard from "./HomeCard";
import HomeCard1 from "./HomeCard1";
import { HomeCard5, HomeCard5a, HomeCard5b, HomeCard5c } from "./HomeCard5";
import HomeCard6 from "./HomeCard6";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  HomeDetails,
  HomeDetails1,
  HomeDetails2,
  HomeDetails4,
  HomeDetails5,
  HomeDetails6,
  HomeDetails7,
  HomeDetails8,
} from "./HomeDetails";
import { Image, Box } from "@chakra-ui/react";
import Loadingimg from "../SingleProduct/loadingimg";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <Navbar />
      {isLoading ? (
        <Loadingimg/>
      ) : (
        <>
          <HomeCard type={HomeDetails} />
          <HomeCard1 type={HomeDetails1} />
          <br />
          <HomeCard6 type={HomeDetails6} heading="ACETATE EYEGLASSES" />
          <br />
          <HomeCard6 type={HomeDetails7} heading="SUNGLASSES" />
          <br />
          <HomeCard6 type={HomeDetails8} heading="TR EYEGLASSES" />
          <br />
          <HomeCard5 />
          <br />
          <Footer />
        </>
      )}
    </Box>
  );
};

export default Home;
