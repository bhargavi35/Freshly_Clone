import React, { useReducer } from "react";
import styled from "styled-components";
import {
  Heading,
  Input,
  Button,
  Flex,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// nav*********
import { Icon } from "@chakra-ui/react";
import { TbChevronRight } from "react-icons/tb";
import { GrCircleQuestion } from "react-icons/gr";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Faq } from "../Components/Separate/faq";
const initState = {
  name: "freshly",
  email: "",
  password: "",
  username: "Fresly",
  mobile: "12345678",
  description: "OrderFromFreshly",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return {
        ...state,
        email: action.payload,
      };

    case "password":
      return {
        ...state,
        password: action.payload,
      };

    default:
      return state;
  }
};

export const SignUp = () => {
  const [state, setter] = useReducer(reducer, initState);
  const navigate = useNavigate();

  const id = window.location.pathname;
  console.log(id);
  const handleChange = () => {
    navigate("/login");
  };
  return (
    <>
      <Box style={{ position: "sticky", top: 0, zIndex: 999 }}>
        <div>
          <Box style={{display:"flex" ,justifyContent:"space-between",position:"sticky",padding:"1%"}}>
            <div>
              <Link to="/">
                <img
                  src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            <div>
              <Box style={{ paddingTop: "10px" }}>

                {id === "/deliverydate" ? (
                  <div style={{ display: "flex" }}>
                    <Link
                      to="/plansmenu"
                      style={{
                        textDecoration: "underline",
                        color: "blue",
                      }}
                    >
                      Plans
                    </Link>

                    <div style={{ padding: "5px 8px " }}>
                      <Icon as={TbChevronRight} />
                    </div>

                    <div>Date</div>

                    <div style={{ padding: "5px 8px " }}>
                      <Icon as={TbChevronRight} />
                    </div>

                    <div>Meals</div>

                    <div style={{ padding: "5px 8px " }}>
                      <Icon as={TbChevronRight} />
                    </div>

                    <div>Checkout</div>
                  </div>
                ) : id === "/plans" ? (
                  <div style={{ display: "flex" }}>
                    <div>Plans</div>
                    <div style={{ padding: "5px 8px " }}>
                      <Icon as={TbChevronRight} />
                    </div>
                    <div>Date</div>

                    <div style={{ padding: "5px 8px " }}>
                      <Icon as={TbChevronRight} />
                    </div>

                    <div>Meals</div>

                    <div style={{ padding: "5px 8px " }}>
                      <Icon as={TbChevronRight} />
                    </div>

                    <div>Checkout</div>
                  </div>
                ) : id === "/checkout" ? (
                  <div style={{ display: "flex" }}>
                    <Link
                      to="/plans"
                      style={{
                        textDecoration: "underline",
                        color: "blue",
                      }}
                    >
                      Plans
                    </Link>

                    <div style={{ padding: "5px 8px " }}>
                      <Icon as={TbChevronRight} />
                    </div>

                    <Link
                      to="/deliverydate"
                      style={{
                        textDecoration: "underline",
                        color: "blue",
                      }}
                    >
                      Date
                    </Link>

                    <div style={{ padding: "5px 8px " }}>
                      <Icon as={TbChevronRight} />
                    </div>

                    <Link
                      to="/plansandmenus"
                      style={{
                        textDecoration: "underline",
                        color: "blue",
                      }}
                    >
                      Meals
                    </Link>

                    <div style={{ padding: "5px 8px " }}>
                      <Icon as={TbChevronRight} />
                    </div>
                    <div>Checkout</div>
                  </div>
                ) : (
                  <div style={{ display: "flex" }}>
                    <div>Plans</div>
                    <div style={{ padding: "5px 8px " }}>
                      <Icon as={TbChevronRight} />
                    </div>
                    <div>Date</div>

                    <div style={{ padding: "5px 8px " }}>
                      <Icon as={TbChevronRight} />
                    </div>

                    <div>Meals</div>

                    <div style={{ padding: "5px 8px " }}>
                      <Icon as={TbChevronRight} />
                    </div>

                    <div>Checkout</div>
                  </div>
                )}
              </Box>
            </div>

            <div>
              <Box style={{display:"flex"}}>
                <div style={{ paddingTop: "10px" }}>
                  <Icon as={GrCircleQuestion} />
                </div>

                <div
                  style={{
                    padding: "5px",
                    textDecoration: "underline",
                    color: "blue",
                  }}
                ></div>
                <div style={{ padding: "5px " }}>
                  <div>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={
                          <i
                            class="bi bi-chevron-down"
                            style={{ color: "blue" }}
                          ></i>
                        }
                        style={{
                          backgroundColor: "white",
                          borderRadius: "0%",
                          color: "blue",
                          textDecoration: "underline",
                        }}
                      >
                        Customer Support
                      </MenuButton>
                      <MenuList>
                        <MenuItem
                          as={Button}
                          style={{
                            borderBottom: "1px solid #ededed",
                            margin: "2px",
                          }}
                        >
                          Live Chat
                        </MenuItem>
                        <MenuItem
                          as={Button}
                          style={{
                            borderBottom: "1px solid #ededed",
                            margin: "2px",
                          }}
                        >
                          support@freshly.com
                        </MenuItem>
                        <MenuItem
                          as={Button}
                          style={{
                            borderBottom: "1px solid #ededed",
                            margin: "2px",
                          }}
                        >
                          1-844-373-7459
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>
              </Box>
            </div>
          </Box>
        </div>
      </Box>
      <SignUpWrapper>
        <SignUpBox>
          <Box>
            <Heading size={"3xl"}>Dinner’s ready!</Heading>
          </Box>
          <Box>
            <Heading>Chef-prepared, healthy meals delivered weekly</Heading>
          </Box>
          <form style={{ display: "flex", gap: "20px", padding: "3%" }}>
            <Input
              placeholder="Email"
              flex={2}
              value={state.email}
              onChange={(e) =>
                setter({ type: "email", payload: e.target.value })
              }
            />
            <Input
              placeholder="Zip"
              flex={1}
              value={state.password}
              onChange={(e) =>
                setter({ type: "password", payload: e.target.value })
              }
            />
            <Button
              bg={"blue"}
              color={"white"}
              fontSize={"25px"}
              flex={1}
              _hover={{
                bg: "blue",
              }}
              onClick={handleChange}
            >
              Continue
            </Button>
          </form>
          <Stack p={4} m={"0px 40px"}>
            <Flex>
              <Text>Already have an account?</Text>
              <Text color={"blue"}>
                <Link to="/login">Login</Link>
              </Text>
            </Flex>
            <Flex>
              <Text>
                By continuing, you agree to our <span color="blue">Terms</span>{" "}
                and Privacy Policy & will receive emails from Freshly.
              </Text>
            </Flex>
          </Stack>
        </SignUpBox>
      </SignUpWrapper>
      <Faq/>
    </>
  );
};

const SignUpWrapper = styled.div`
  width: 100%;
  height: 75vh;
  background: url("https://res.cloudinary.com/freshly/image/upload/c_crop,g_auto,dpr_auto,q_30,w_1500,h_900/v1494958610/joinnow-southchicken.jpg");
  background-repeat: no-repeat;
  margin: 1%;
  display: flex;
`;

const SignUpBox = styled.div`
  width: 50%;
  height: fit-content;
  background-color: white;
  opacity: 0.8;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3%;
`;
