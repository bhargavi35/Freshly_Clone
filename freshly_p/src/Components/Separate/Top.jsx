import React from "react";
import {
  Flex,
  Image,
  VStack,
  HStack,
  Button,
  Text,
  Box,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const TopSection = () => {
  return (
    <Box w="100%" bg="#fef9eb" m="10px">
      {/* Top section */}
      {/* Left image */}
      <Flex direction={{ sm: "column", md: "column", lg: "row" }}>
        <Box maxH="400px" w={{ sm: "100%", md: "100%", lg: "60%" }}>
          <Image
            src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62aa50d46eadd67c1b7ca2df_Freshly_SpringMarketing_C141139-Edit%20(1)%20(2).jpg"
            alt="logo"
            position="relative"
            width={{ sm: "auto", md: "auto", lg: "100%" }}
            height={{ sm: "auto", md: "auto", lg: "650px" }}
          />
          <h2
            style={{
              position: "absolute",
              // bottom: "80%",
              left: "38%",
              top:"15%",
              textTransform: "capitalize",
              color: "white",
              fontWeight: "bolder",
              fontSize: "40px",
            }}
          >
            Delivered to you <br /> fresh, not <br /> frozen.
          </h2>
        </Box>
        {/* Right part top section */}
        <Box
          bg="#85e5c6"
          maxH="650px"
          w={{ sm: "auto", md: "auto", lg: "40%" }}
          height={{ lg: "800px" }}
          alignItems="flex-start"
        >
          <VStack alignItems="flex-start">
            <Text fontSize="45px" fontWeight="bold" p="20px">
              Balanced Meal for busy lives.
            </Text>
            <HStack p="20px">
              <Link to="/plans">
                <Button
                  borderColor="blue"
                  color="blue"
                  bg="white"
                  variant="solid"
                  borderRadius="0"
                >
                  Explore Meals
                </Button>
              </Link>
            </HStack>
            <HStack>
              <Box mt="20px" ml="20px">
                <b>
                  <Text>See meals available in your area!</Text>
                </b>
                <br />
                <Input
                  placeholder="freshly@freshly.com"
                  type="email"
                  name="Email"
                  backgroundColor="white"
                />

                <Input
                  backgroundColor="white"
                  placeholder="11111"
                  type="number"
                  name="zip"
                  m="3px"
                />
              </Box>
            </HStack>
            <HStack>
              <Link to="/signup">
                <Button
                  colorScheme="messenger"
                  variant="solid"
                  borderRadius="0"
                  m="30px"
                  width="100%"
                >
                  Get Started
                </Button>
              </Link>
            </HStack>
            <Text fontSize="15px"  p="20px">
              By continuing, you agree to our {" "}
              <Link style={{color:"blue",textDecoration:"underline"}} >Terms</Link> and{" "}
              <Link style={{color:"blue",textDecoration:"underline"}} >Privacy Policy</Link> {" "}& will receive emails from
              Freshly.
            </Text>
          </VStack>
        </Box>
      </Flex>

      <Spacer />
      <Spacer />
      <Text fontSize="40px" fontWeight="bold" mt="18px" mb="30px">
        How it works
      </Text>
      <Flex
        gap="20px"
        justify="space-evenly"
        align="center"
        direction={{ sm: "column", md: "row", lg: "row" }}
      >
        <Box align="center" w="200px" h="fit-content">
          <Image
            mb="20px"
            src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19dbc5f55c4206158f7_choose-your-meals%20(1).svg"
          />
          <Text fontSize="20px" fontWeight="bold">
            Choose Your Meals
          </Text>
          <Text>Rotating menu of 50+ balanced dishes.</Text>
        </Box>
        <Box align="center" w="200px" h="fit-content">
          <Image
            mt="-10px"
            mb="20px"
            src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b358b954d12f769ba_we-cook-deliver%20(1).svg"
          />
          <Text fontSize="20px" fontWeight="bold">
            We Cook & Deliver
          </Text>
          <Text>Fully-cooked meals sent fresh, not frozen.</Text>
        </Box>
        <Box align="center" w="200px" h="fit-content">
          <Image
            mb="20px"
            src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b53e85f79fe3374c5_chill-reheat.svg"
          />
          <Text fontSize="20px" fontWeight="bold">
            Chill & Reheat
          </Text>
          <Text>Refrigerate meals & reheat in 3 minutes.</Text>
        </Box>
        <Box align="center" w="200px" h="fit-content">
          <Image
            mb="20px"
            src="https://uploads-ssl.webflow.com/5d03b4e130118314af624b20/62b0b19b83b282277e15a7af_eat-repeat.svg"
          />
          <Text fontSize="20px" fontWeight="bold">
            Eat & Repeat
          </Text>
          <Text>Change meals, skip a week, or cancel any time.</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TopSection;
