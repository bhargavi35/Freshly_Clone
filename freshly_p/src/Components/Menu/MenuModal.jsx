import React from "react";
import { ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { Box, Center, Flex, Image, Stack } from "@chakra-ui/react";
import { MenuModalTitle } from "./title";
import { MenuDesc } from "./des";
import { MenuIngredient } from "./ingred";
import MenuNutrition from "./nutr";

export const MenuModal = ({ data }) => {
  // console.log(data);
  return (
    <Box>
        <>
          <Box h={"150px"} paddingRight="22px" paddingLeft="22px" mb="-10px">
            <Box h="40px">
              <ModalCloseButton />
            </Box>
            <Flex justifyContent={"space-between"}>
              <MenuModalTitle data={data} />
            </Flex>
          </Box>

          <ModalBody>
            <Flex
              justifyContent={"space-between"}
              h="400px"
              overflow={"scroll"}
              w="100%"
              backgroundColor="rgb(247,247,247)"
            >
              <Box w="46%" mt="15px">
                <Stack>
                  <Center>
                    <Image w="90%" h="180px" src={data.img_1} alt="image" />
                  </Center>
                  <Center>
                    <Image w="90%" h="180px" src={data.img_2} alt="image" />
                  </Center>
                </Stack>
              </Box>

              <Box w="52%" ml="1px" mt="15px">
                <Box>
                  <MenuDesc data={data} />
                </Box>
                {/* Ingredients Starting */}
                <Box>
                  <MenuIngredient data={data} mt="10px" />
                </Box>
                {/* Ingredients ends */}
                {/* nutrition */}
                <MenuNutrition data={data} mt="10px" />
                {/* Nutrition Ends */}
              </Box>
            </Flex>
          </ModalBody>
        </>
    </Box>
  );
};
