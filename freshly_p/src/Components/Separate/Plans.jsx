import React from "react";
import { Flex, Image, Button, Text, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import "./style.css";
const Plans = () => {
  return (
    <Box bg="#fffdf7" p="20px" align="center">
      <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192ce7669f68694a8b969af_Group%20(8).svg" />
      <Text fontSize="40px" fontWeight="bold">
        Flexible plans that fit your life
      </Text>
      <Text mb="60px" mt="10px" as="span">
        We offer anywhere from 4–12 meals per week, with meals as low as{" "}
      </Text>
      <Text style={{ display: "inline", color: "teal", fontWeight: "bold" }}>
        $8.99 each.
      </Text>{" "}
      <Text style={{ display: "inline", fontWeight: "bold" }}>
        The bigger your box, the more you’ll save{" "}
      </Text>
      <Text>
        and you can always pause, cancel, or change your plan at any time.
      </Text>
      <Flex gap="20px" justify="space-between" mt="40px">
        <Box>
         
          <Box className="tag4"></Box>
          <Text style={{ color: "teal" }} fontSize="25px" fontWeight="bold">
            4-5 Meals
          </Text>
        </Box>
        <Box>
          <Box className="tag">
            {" "}
            <h2>save up to $12</h2>
          </Box>
          <Text style={{ color: "teal" }} fontSize="25px" fontWeight="bold">
            6-7 Meals
          </Text>
        </Box>
        <Box>
          <Box className="tag1">
            {" "}
            <h2>save up to $20</h2>
          </Box>
          <Text style={{ color: "teal" }} fontSize="25px" fontWeight="bold">
            8-9 Meals
          </Text>
        </Box>
        <Box>
          <Box className="tag2">
            {" "}
            <h2>save up to $29</h2>
          </Box>
          <Text style={{ color: "teal" }} fontSize="25px" fontWeight="bold">
            10-11 Meals
          </Text>
        </Box>
        <Box>
          <Box className="tag3">
            {" "}
            <h2>save up to $35</h2>
          </Box>
          <Text style={{ color: "teal" }} fontSize="25px" fontWeight="bold">
            12 Meals
          </Text>
        </Box>
      </Flex>
      <Text my="30px" style={{ color: "teal" }} fontWeight="500">
        Shipping and tax added at checkout. Prices are rounded for your
        convenience.
      </Text>
      <RouterLink color="green.800" to="/signup">
        <Button
          colorScheme="messenger"
          variant="solid"
          w="10%"
          borderRadius="0"
        >
          Get Started
        </Button>
      </RouterLink>
    </Box>
  );
};

export default Plans;
