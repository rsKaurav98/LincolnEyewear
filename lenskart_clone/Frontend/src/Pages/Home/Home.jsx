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

} from "./HomeDetails";
import { Image, Box } from "@chakra-ui/react";
import Loadingimg from "../SingleProduct/loadingimg";
import { fetchProductData } from "./HomeDetails";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [HomeDetails6, setHomeDetails6] = useState([]);
  const [HomeDetails7, setHomeDetails7] = useState([]);
  const [HomeDetails8, setHomeDetails8] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let response6 = await fetchProductData(80);
        setHomeDetails6(response6);
        let response7 = await fetchProductData(53);
        setHomeDetails7(response7);
        let response8 = await fetchProductData(87);
        setHomeDetails8(response8);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
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
