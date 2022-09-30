import React from "react";
import { Flex, Image, Button, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./style.css"
const OnTheMenu = () => {
  return (
    <Box
      backgroundImage="url('https://assets-global.website-files.com/5d03b4e130118314af624b20/61f127577dd58a9659fa4545_22_Homepage_OntheMenu_BG_1440%20x%20890.jpg')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      h="fit-content"
      p="35px"
      background-size="cover"
      height="65.27rem"
      width=" 100%"
      display=" flex"
      justify-content=" center"
      align-items=" center"
      background-position-x=" 50%"
      background-position-y=" 50%"
    >
      <Box
        bg="white"
        w={{ sm: "70%", md: "70%", lg: "60%" }}
        m="auto"
        p="40px"
        align="left"
      >
        <Text fontSize="50px" fontWeight="bolder" mb="10px">
          On the menu
        </Text>
        <Text mb="30px">
          Each Freshly meal is perfectly sized for 1 person to enjoy at 1
          sitting. Our fully-prepared meals are delivered fresh, and ready to
          eat in 3 minutes.
        </Text>
        <Box>
          <Flex gap="20px" justify="space-between" mb="30px">
            <Box>
              <Image
                h="150px"
                className="otm"
                borderRadius="20px"
                src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6326bb5ce576ad86fd7fd56c_production-meal-image-d5ef4016-ed9b-4aac-93e1-109ae9b9b6ba-p-500.jpeg"
              />
              <Text fontWeight="bold">Philly-ish Cheesesteak</Text>
              <Text fontSize="1rem" color="#303030" margin-bottom="-0.875rem">
                540 Cal| Gluten Free|
              </Text>
              <Text fontSize=" 0.875rem" color="#357471">
                Single-Serve
              </Text>
            </Box>
            <Box>
              <Image
                className="otm"
                h="150px"
                borderRadius="20px"
                src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6326bb60a847d2a0e5565974_production-meal-image-7a187b20-0f13-45d7-9417-5a1b9e0f9662-p-500.jpeg"
              />
              <Text fontWeight="bold">Oven-Baked BBQ Pork Chop</Text>
              <Text fontSize="1rem" color="#303030" margin-bottom="-0.875rem">580 Cal | Gluten Free |</Text>
              <Text  fontSize=" 0.875rem" color="#357471">Single-Serve</Text>
            </Box>
            <Box>
              <Image
                className="otm"
                h="150px"
                borderRadius="20px"
                src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6326bb627d27da37a7237b9a_production-meal-image-d495faf8-2904-4640-a8fe-f09ce9b4fb60-p-500.jpeg"
              />
              <Text fontWeight="bold">Sliced Turkey & Carolina Gold Sauce</Text>
              <Text fontSize="1rem" color="#303030" margin-bottom="-0.875rem">480 Cal | Gluten Free |</Text>
              <Text  fontSize=" 0.875rem" color="#357471">Single-Serve</Text>
            </Box>
          </Flex>

          <Flex gap="20px" justify="space-between">
            <Box>
              <Image
                className="otm"
                h="150px"
                borderRadius="20px"
                src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62809ed29666d0adc9cdc607_production-meal-image-aa45ad57-f3bd-41bf-b74b-7906066bdd24-p-500.jpeg"
              />
              <Text fontWeight="bold">Cuban Mojo Shrimp</Text>
              <Text fontSize="1rem" color="#303030" margin-bottom="-0.875rem">410 Cal | Gluten Free |</Text>
              <Text  fontSize=" 0.875rem" color="#357471">Single-Serve</Text>
            </Box>
            <Box>
              <Image
                className="otm"
                h="150px"
                borderRadius="20px"
                src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6326bb6994fefe024f228bb0_production-meal-image-43b9ce48-cbff-4c29-9ee8-58fc3974cdff-p-500.jpeg"
              />
              <Text fontWeight="bold">Oven-Glazed Chicken Marsala</Text>
              <Text fontSize="1rem" color="#303030" margin-bottom="-0.875rem">350 Cal | Gluten Free |</Text>
              <Text  fontSize=" 0.875rem" color="#357471">Single-Serve</Text>
            </Box>
            <Box>
              <Image
                className="otm"
                h="150px"
                borderRadius="20px"
                src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6326bb6cea9e2c276a62bc87_production-meal-image-4e60254a-6b6e-461b-9ec7-a25a2035949f-p-500.jpeg"
              />
              <Text fontWeight="bold">Creamy Chicken Fettuccine Alfredo</Text>
              <Text fontSize="1rem" color="#303030" margin-bottom="-0.875rem">360 Cal | Has Gluten |</Text>
              <Text  fontSize=" 0.875rem" color="#357471">Single-Serve</Text>
            </Box>
          </Flex>
        </Box>

        <Link to="/plansmenu">
          <Button
            w="100%"
            borderRadius="0"
            colorScheme="messenger"
            variant="solid"
            mt="30px"
          >
            View Plans & Menu
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default OnTheMenu;
