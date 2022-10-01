import React from "react";
import { Link } from "react-router-dom";
import { ModalBody, ModalCloseButton } from "@chakra-ui/react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Image,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ModalHeader,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import ing from "../../Assests/Home/Ingre.jpg";
import "../../index.css";
export const MenuModal = ({data}) => {
  // console.log(data);
  return (
    <Box className="Menumodal" overflow={"scroll"}>
      <>
        <Box paddingRight="22px" paddingLeft="22px" mb="-10px">
          <ModalHeader justifyContent={"space-between"}>
            Homestyle Chicken
          </ModalHeader>
          <p fontSize="15px">with Masterful Mac & Cheese</p>

          <span
            style={{
              backgroundColor: "rgb(245, 153, 245",
              padding: "4px",
              borderRadius: "4px",
            }}
          >
            High Protein
          </span>
          <span
            style={{
              backgroundColor: "rgb(245, 153, 245",
              padding: "4px",
              borderRadius: "4px",
            }}
          >
            Soy Free
          </span>
          <span
            style={{
              backgroundColor: "rgb(245, 153, 245",
              padding: "4px",
              borderRadius: "4px",
            }}
          >
            Gluten Free
          </span>
          <Box w="80%" mt="15px">
            <Image
              w="100%"
              h="80%"
              src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/5f8be0f694facb12034940aa_production-meal-image-0a78bae3-2e0c-4ab7-b420-154ed262d4d0.jpeg"
            />
          </Box>
          <Box p="10px" backgroundColor={"white"} mt="10px" h="fit-content">
            <Text>
              <b>Ingredients</b>
            </Text>
            <Image style={{ width: "80%", cursor: "pointer" }} src={ing} />
          </Box>
          <Link to="/cart">
            <Button colorScheme={"blue"}>Add to Cart</Button>
          </Link>
        </Box>

        <ModalBody>
          {" "}
          <ModalCloseButton />
          <Box
            justifyContent={"space-between"}
            h="400px"
            w="100%"
            backgroundColor="rgb(247,247,247)"
          >
            <Box
              style={{
                backgroundColor: "white",
                textAlign: "left",
                padding: "10px",
                w: "52%",
                ml: "1px",
                mt: "15px",
              }}
            >
              <Text mt="15px" paddingLeft="20px">
                <b>What makes this dish special</b>
              </Text>
              <Stack>
                <Box
                  paddingLeft="10px"
                  marginBottom="10px"
                  marginTop="10px"
                  borderLeft="5px solid rgb(113,113,113)"
                ></Box>
                <Text
                  color="rgb(48,48,54)"
                  fontSize={"14px"}
                  letterSpacing="3"
                  fontWeight="500"
                >
                  Greaseless oven-fried chicken breast, hand-"breaded' with a
                  gluten-free almond flour batter. <br />
                  <br />
                  Our Masterful Mac is made with gluten-free brown-rice macaroni
                  and a cheesy sauce thickened with butternut squash. <br />
                  <br />
                  Garlicky green beans tossed in our fragrant, house-infused
                  oil.
                  <br />
                  <br />
                  Add some chile kick with red pepper flakes or your favorite
                  hot sauce
                </Text>
              </Stack>
            </Box>
            <Box>
              <Box style={{ backgroundColor: "white" }}>
                <Text>
                  <b>What is inside</b>
                </Text>{" "}
                <SimpleGrid columns={2}>
                  <div>
                    <span>
                      <h4>Calories</h4>
                      <h2>560</h2>
                    </span>
                    <span>
                      <h4>Dietary Fiber</h4>
                      <h2>6g</h2>
                    </span>
                  </div>
                  <Box>
                    <span>
                      <h4>totalFat</h4>
                      <h2>0g</h2>
                    </span>
                    <span>
                      <h4>Protein</h4>
                      <h2>46g</h2>
                    </span>
                    <br />
                  </Box>
                  <br />
                </SimpleGrid>
              </Box>
              <Box cursor="pointer" h="fit-content">
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem h="fit-content">
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text
                          fontWeight={"semibold"}
                          fontSize="14px"
                          letterSpacing={"3"}
                        >
                          Show Complete Ingredients
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Box>
                        <Text
                          fontSize={"12px"}
                          letterSpacing="3"
                          fontWeight="500"
                        >
                          Chicken Breast, Green Beans, Macaroni (Water, Brown
                          Rice Flour, Potato Starch, Tapioca Starch, Whole Egg,
                          Egg White, Xanthan Gum, Vinegar), Water, Cheddar
                          Cheese (Cheddar Cheese (Cultured Pasteurized Milk,
                          Salt, Enzymes, Annatto), Potato And Corn Starches
                          (Anti-Caking Agents), Natamycin (Natural Mold
                          Inhibitor)), Half & Half (Milk, Cream), Almonds,
                          Pepper Jack Cheese (Monterey Jack Cheese With Jalapeno
                          Peppers [Cultured Pasteurized Milk, Jalapeno Peppers,
                          Salt, Enzymes], Potato and Corn Starches (Anti-Caking
                          Agents), Natamycin (Natural Mold Inhibitor)), Vinegar,
                          Onion, Garlic, Butternut Squash, Expeller Pressed
                          Canola Oil, Sea Salt, Rice Flour, Paprika, Cassava
                          Flour, Sunflower Powder Lecithin, Spices, Rosemary
                          Extract (Salt, Natural Extract), Baking Soda, Xanthan
                          Gum. Contains: Egg, Milk, Tree Nuts (Almonds).
                          Manufactured in a facility that uses egg, tree nuts,
                          milk, fish, shellfish, and soy.
                        </Text>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Box>
            <Box>
              <Box borderBottom={"1px solid"}>
                <Heading as="h4">Nutrition Facts</Heading>
              </Box>
              <Box borderBottom={"3px solid"}>
                <Text>1 Serving Per Container</Text>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"semibold"}>Serving Size</Text>
                  <Text fontWeight={"semibold"}>1 Tray (380g)</Text>
                </Flex>
              </Box>
              <Box borderBottom={"3px solid"}>
                <Text fontWeight={"semibold"}>Amount Per Serving</Text>
                <Flex justifyContent={"space-between"}>
                  <Heading as="h5" size="lg">
                    Calories
                  </Heading>
                  <Heading as="h5" size="lg">
                    560
                  </Heading>
                </Flex>
              </Box>
              <Box borderBottom={"1px solid"}>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"semibold"}></Text>
                  <Text fontWeight={"semibold"}>% Daily Value*</Text>
                </Flex>
              </Box>
              <Box borderBottom={"1px solid"}>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"semibold"}>Total Fat 27g</Text>
                  <Text fontWeight={"semibold"}>35%</Text>
                </Flex>
              </Box>
              <Box borderBottom={"1px solid"} ml="10px">
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"semibold"}>Saturated Fat 10g</Text>
                  <Text>50%</Text>
                </Flex>
              </Box>
              <Box borderBottom={"1px solid"}>
                <Flex justifyContent={"space-between"}>
                  <Text pl="10px">Trans Fat 0g</Text>
                  <Text fontWeight={"semibold"}></Text>
                </Flex>
              </Box>
              <Box borderBottom={"1px solid"}>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"semibold"}>Cholesterol 155mg</Text>
                  <Text fontWeight={"semibold"}>52%</Text>
                </Flex>
              </Box>
              <Box borderBottom={"1px solid"}>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"semibold"}>Sodium 560mg</Text>
                  <Text fontWeight={"semibold"}>24%</Text>
                </Flex>
              </Box>
              <Box borderBottom={"1px solid"}>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"semibold"}>Total Carbohydrates 35g</Text>
                  <Text fontWeight={"semibold"}>13%</Text>
                </Flex>
              </Box>
              <Box borderBottom={"1px solid"}>
                <Flex justifyContent={"space-between"}>
                  <Text pl="10px">Dietary Fiber 6g</Text>
                  <Text fontWeight={"semibold"}>21%</Text>
                </Flex>
              </Box>
              <Box borderBottom={"1px solid"} ml="10px">
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"semibold"}>Total Sugars 4g</Text>
                  <Text fontWeight={"semibold"}></Text>
                </Flex>
              </Box>
              <Box borderBottom={"1px solid"} ml="20px">
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"semibold"}>Includes 0g Added Sugars</Text>
                  <Text fontWeight={"semibold"}>0%</Text>
                </Flex>
              </Box>
              <Box borderBottom={"3px solid"}>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"semibold"}>Protein 46g</Text>
                  <Text fontWeight={"semibold"}></Text>
                </Flex>
              </Box>
              <Box borderBottom={"1px solid"}>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"semibold"}>Vitamin D 0mcg</Text>
                  <Text fontWeight={"semibold"}>0%</Text>
                </Flex>
              </Box>
              <Box borderBottom={"1px solid"}>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"semibold"}>Calcium 390mg</Text>
                  <Text fontWeight={"semibold"}>30%</Text>
                </Flex>
              </Box>
              <Box borderBottom={"1px solid"}>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"semibold"}>Iron 4mg</Text>
                  <Text fontWeight={"semibold"}>20%</Text>
                </Flex>
              </Box>
              <Box borderBottom={"1px solid"}>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"semibold"}>Potassium 1175mg</Text>
                  <Text fontWeight={"semibold"}>25%</Text>
                </Flex>
              </Box>
              <Box mt="20px">
                <Text
                  fontWeight={"semibold"}
                  fontSize={"12px"}
                  letterSpacing="3"
                >
                  * The % Daily Value (DV) tells you how much a nutrient in a
                  serving of food contributes to a daily diet. 2,000 calories a
                  day is used for general nutrition advice.
                </Text>
              </Box>
              <Box mt="20px">
                <Text fontSize={"12px"} letterSpacing="3">
                  Given our rotating menu of ingredients and meals, nutrition
                  info may vary depending on slight recipe variations in our
                  different kitchens. While the info and ingredients found here
                  are meant to give you a general idea of a meal’s nutrition
                  facts, please always check the physical label on the meal
                  you’re about to eat for the most up-to-date information.
                </Text>
              </Box>
            </Box>
          </Box>
        </ModalBody>
      </>
    </Box>
  );
};
