import React from "react";
import { Box,Image } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import TopSection from "../Components/Separate/Top";
import Menu from "../Components/Separate/Menu";
import Plans from "../Components/Separate/Plans";
import Eat from "../Components/Separate/eat";
import bot from "../Assests/Home/bottom.png"
const HomePage = () => {
  return (
    <Box w="100vw">
      <Navbar />
      <TopSection />
      <Menu />
      <Plans/>
      <Eat/>
      <Image
        src={bot}
        alt="bottom"
        height={{ sm: "auto", md: "auto", lg: "auto" }}
      />
      {/* <Footer />  */}
    </Box>
  );
};

export default HomePage;
