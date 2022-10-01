import React, { useReducer } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "./index.css";
import {
  Box,
  Button,
  Heading,
  Text,
  Image,
  Flex,
  Spacer,
  Grid,
} from "@chakra-ui/react";
const items = [
  {
    id: 1,
    name: "Oven-Baked BBQ Pork Chop",
    price: 1000,
    src: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1623678624/production-meal-image-86a5a9df-909d-4034-b6fa-6b48e5d110cf.jpg",
  },
  {
    id: 2,
    name: "THAI GREEN CURRY BOWL",
    price: 500,
    src: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad18c6660c69c5c75460_production-meal-image-eea55b43-0737-4923-912f-d2aa340a7bc0.jpeg",
  },
  {
    id: 3,
    name: "jalVEGGIE-LOADED BURRITO BAKEebi",
    price: 400,
    src: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1650468077/production-meal-image-aa45ad57-f3bd-41bf-b74b-7906066bdd24.jpg",
  },
  {
    id: 4,
    name: "INDIAN-SPICED RED LENTIL DAL",
    price: 800,
    src: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62d3ad48c308b87e4282889a_production-meal-image-c2bd7c69-3db7-40c1-8740-e86f50357fcb.jpeg",
  },
  {
    id: 5,
    name: "ASIAN-INSPIRED VEGETABLE STIR-FRY",
    price: 800,
    src: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62809ed29666d0adc9cdc607_production-meal-image-aa45ad57-f3bd-41bf-b74b-7906066bdd24-p-500.jpeg",
  },
  {
    id: 6,
    name: "INDIAN-SPICED RED LENTIL DAL",
    price: 800,
    src: "https://res.cloudinary.com/freshly/image/upload/c_fill,dpr_2,f_auto,h_383,w_580/v1637012184/production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpg",
  },
];

export default function Cart() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      console.log({ action });

      switch (action.type) {
        case "ADD_TO_CART":
          return {
            ...state,
            cartItems: state.cartItems + 1,
            totalPrice: state.totalPrice + action.payload,
          };

        case "REMOVE_FROM_CART":
          return {
            ...state,
            cartItems: state.cartItems - 1,
            totalPrice: state.totalPrice - action.payload,
          };

        default:
          return state;
      }
    },
    { cartItems: 0, totalPrice: 0 }
  );

  const { cartItems, totalPrice } = state;

  return (
    <>
      <Navbar />

      <div>
        <Heading>Cart: {cartItems}</Heading>
        <Text>Total Price: {totalPrice}</Text>
        <Grid>
          {items.map(({ name, price, src }) => (
            <div>
              <Box>
                {" "}
                <Image src={src} alt="" width="20%" borderRadius="5%" />
              </Box>
              <Flex m={8} p={4} alignItems="center">
                <Text>{name}</Text>
                <Text>₹{price}</Text>
                <Spacer />
                <Button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: price })
                  }
                  colorScheme={"blue"}
                  w={100} m={2}
                >
                  Add to Cart
                </Button>
                <Button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: price })
                  }
                  colorScheme={"red"}
                  w={160}
                >
                  Remove from cart
                </Button>
              </Flex>
            </div>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
}
