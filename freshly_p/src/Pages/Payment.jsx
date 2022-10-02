import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Faq } from "../Components/Separate/faq";
import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Button,
} from "@chakra-ui/react";
const initData = {
  name: "",
  email: "",
  phone: "",
};
const Payment = () => {
  const [value, setValue] = useState("");
  const [form, setForm] = useState(initData);

  const handleValue = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const handleChange = (e) => {
    const { name: key, value, type, checked } = e.target;
    const val = type === "chcekbox" ? checked : value;
    setForm({
      ...form,
      [key]: val,
    });
  };

  return (
    <div>
      <div className="Main">
        <Box position={"sticky"} zIndex="999">
          <Navbar />
        </Box>
        <Box m="10" p="5" w="100%">
          <div className="Body">
            <Flex>
              <Box w="55%">
                <Heading size="lg">Checkout</Heading>
              </Box>
            </Flex>
            <Box>
              <div className="div1">
                <Box>
                  <FormControl>
                    <div
                      className="name"
                      style={{ width: "50%", margin: "auto" }}
                    >
                      <div>
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" id="fName" onChange={handleChange} />
                      </div>
                      <div>
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" id="sName" onChange={handleChange} />
                      </div>

                      <div className="address">
                        <FormLabel>Address Line 1</FormLabel>
                        <Input type="text" id="add1" onChange={handleChange} />
                      </div>
                      <div className="address">
                        <FormLabel>Address Line 2(optional)</FormLabel>
                        <Input type="text" id="add2" onChange={handleChange} />
                      </div>
                      <div className="Zip">
                        <div>
                          <FormLabel>City</FormLabel>
                          <Input
                            type="text"
                            id="city"
                            onChange={handleChange}
                          />
                        </div>

                        <div>
                          <FormLabel>State</FormLabel>
                          <Select
                            placeholder="Select State"
                            value={value}
                            onChange={handleValue}
                          >
                            <option value="NewYork">Karimnagr</option>
                            <option value="California">Telangana</option>
                            <option value="Albama">Hyderabad</option>
                            <option value="Los Vegas">Vizag</option>
                          </Select>
                        </div>
                        <div>
                          <FormLabel>Zip</FormLabel>
                          <Input type="text" id="zip" onChange={handleChange} />
                        </div>
                      </div>
                      <div className="address">
                        <FormLabel>Phone</FormLabel>
                        <Input type="text" id="phone" onChange={handleChange} />
                      </div>
                      <div id="checkbox">
                        <Stack spacing={5} direction="row"></Stack>
                      </div>
                      <div className="address">
                        <FormLabel>
                          Email (We require your email to send you receipts and
                          order updates)
                        </FormLabel>
                        <Input
                          type="email"
                          name="email"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </FormControl>
                  <br />
                  <br />
                  <Link to="/thank">
                    <Button w={200} colorScheme="blue" className="btn">
                      Procced to Payment{" "}
                    </Button>
                  </Link>
                </Box>
              </div>
            </Box>
          </div>
        </Box>
        <Box mt="20px">
          <Faq />
        </Box>
      </div>
    </div>
  );
};

export default Payment;
