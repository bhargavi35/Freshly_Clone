import React, { useState, useContext } from "react";
import {
  Heading,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import Footer from "../Components/Footer";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = ({ email, password }) => {
    return axios.get("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  };

  const { login, isAuth } = useContext(AuthContext);
  const handleLogin = () => {
    userLogin({
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    }).then((res) => {
      // console.log(res);
      login("", res.token);
    });
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Box bg="white">
        <Flex
          h={"12vh"}
          p={"1% 2%"}
          justify="space-between"
          alignItems={"center"}
          boxShadow={"base"}
          fontSize={"1rem"}
          color="gray.700"
        >
          <Flex flex={1} justify="space-between">
            <Link to="/plansmenu">Plans & Menu</Link>
            <Link to="#">About</Link>
            <Link to="#">For Bussiness</Link>
            <Link to="#">Gifts</Link>
          </Flex>
          <Flex flex={2} justify={"center"}>
            <Link to="/">
              <Image
                h={"10vh"}
                w={"20vh"}
                src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg"
                alt="FRESHLY"
              />
            </Link>
          </Flex>
          <Flex flex={1} justify="space-between" alignItems="center">
            <Link to="#">Get $30</Link>
            <Link to="#">Help</Link>
            <Link to="#">Login</Link>
            <Button
              bg={"blue"}
              color="white"
              borderRadius={"none"}
              _hover={{
                bg: "blue",
              }}
            >
              <Link to="/signup"> Sign Up</Link>
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box bg="#fef9eb">
        <Flex
          direction={"column"}
          justify={"space-evenly"}
          align="center"
          w={"30%"}
          h={"30rem"}
          m={"auto"}
        >
          <Heading fontSize={"4rem"}>Log In</Heading>
          <Flex
            h={"70%"}
            w={"100%"}
            direction={"column"}
            justify={"space-evenly"}
          >
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="freshly@domain.com"
                type={"email"}
                bg="white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Enter your password"
                type={"password"}
                bg="white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button
              mt={2}
              colorScheme="blue"
              onClick={handleLogin}
              // isLoading={isLoading}
            >
              Submit
            </Button>
            <Flex justify={"space-around"}>
              <Text color={"blue"} fontSize="14px">
                <Link to="#">Forgot password ?</Link>
              </Text>
              <Text color={"blue"} fontSize="14px">
                Don't have an account? <Link to="/signup">Get Started</Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Footer />
      </Box>
    </>
  );
};
