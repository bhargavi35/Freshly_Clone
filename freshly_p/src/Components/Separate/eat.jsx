import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Input,
} from "@chakra-ui/react";
import React from "react";
import "./style.css";

const Eat = () => {
  return (
    <>
      <Box className="EatBox">
        {/* Left text */}
        <Box className="Box1">
          <Flex direction="column" gap="20px">
            <Text fontSize="40px" fontWeight="600">
              We believe eating right should be easy for everyone.
            </Text>
            <Text>
              Each Freshly meal is perfectly sized for 1 person to enjoy at 1
              sitting. Our fully-prepared meals are delivered fresh, and ready
              to eat in 3 minutes. Learn More
            </Text>
            <Button
              width={{ sm: "100%", md: "120px", lg: "120px", xl: "120px" }}
              colorScheme="messenger"
              variant="solid"
              borderRadius="0"
            >
              Learn More
            </Button>
          </Flex>
        </Box>

        {/* Right image */}
        <Box className="imageBox">
          <Image
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f1275059fd961964f53287_22_Homepage_EatingBetterEasy_BG_866x708.jpg"
            alt="image"
          />
        </Box>
      </Box>
      {/* *********** health********************** */}
      <Box className="healthBox">
        {/* Left image */}

        <Box className="imageBox1">
          <Image
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/61f1274f0c096f517bb89ed5_22_Homepage_HealthyMealsDelivered_866x708.jpg"
            alt="image"
          />
        </Box>
        {/* Right text */}
        <Box className="Box2">
          <Flex direction="column" gap="20px">
            <Text fontSize="40px" fontWeight="600">
              Healthy Meals Delivered Weekly
            </Text>
            <Input placeholder="freshly@freshly.com" />
            <Input placeholder="zip" />
            <Button
              width={{ sm: "100%", md: "120px", lg: "120px", xl: "120px" }}
              colorScheme="messenger"
              variant="solid"
              borderRadius="0"
            >
              Get Started!
            </Button>
            <Text>
              Already have an account?<span>Log in.</span>
            </Text>
            <Text>
              By continuing, you agree to our <span>Terms </span>and{" "}
              <span>Privacy Policy</span> & will receive emails from Freshly.
            </Text>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Eat;
