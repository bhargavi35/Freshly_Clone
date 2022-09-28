import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import TopSection from "../Components/Separate/Top";
import Menu from "../Components/Separate/Menu";
const HomePage = () => {
  return (
    <Box w="100vw">
      <Navbar />
      <TopSection />
      <Menu />

      {/* <HowItWorks />
      <OnTheMenu />
      <FlexiblePlans />
      <WeBelieveEating />
      <HealthyMeals />
      <Image
        src="companiesBottomHP.png"
        alt="bottom"
        height={{ sm: "auto", md: "auto", lg: "auto" }}
      />
      <Footer /> */}
    </Box>
  );
};

export default HomePage;
