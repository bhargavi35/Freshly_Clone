import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./index.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
const Choose = ({data}) => {
  // console.log(data)
  return (
    <>
      <Navbar />
      <Box id="main">
        <Box>
          <h1>Choose A Delivery Day</h1>
        </Box>

        <Box id="date_window">
          <Box></Box>
          <Box id="window">
            <Box id="special">
              <Box id="fun">
                <b>Monday</b> Oct 3
              </Box>

              <Box style={{ display: "flex" }}>
                <i className="fa-thin fa-star-sharp"></i>
                <p
                  style={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    marginTop: "-2px",
                    fontSize: "14px",
                  }}
                >
                  Most Popular
                </p>
              </Box>
            </Box>

            <Box>
              <Box id="fun1">
                <b>Friday</b>, Sep 30
              </Box>
            </Box>
            <Box>
              <Box id="fun2">
                <b>SaturDay</b>, Oct 1
              </Box>
            </Box>
            <Box>
              <Box id="fun3">
                <b>Sunday</b>, Oct 2
              </Box>
            </Box>
            <Box>
              <Box id="fun4">
                {" "}
                <b>Monday</b>, Oct 3
              </Box>
            </Box>
            <Box>
              <Box id="fun5">
                <b>Tuesday</b>, Oct 4
              </Box>
            </Box>
            <Box>
              <Box id="fun6">
                <b>Wednesday</b>, Oct 5
              </Box>
            </Box>
            <Box>
              <Box id="fun7">
                <b>Thursday</b>, Oct 6
              </Box>
            </Box>
            <Box>
              <Box id="fun8">
                <b>Friday</b>, Oct 7
              </Box>
            </Box>
            <Box>
              <Box id="fun9">
                <b>Saturday</b>, Oct 8
              </Box>
            </Box>
            <Box>
              <Box id="fun">
                <b>Sunday</b>, Oct 9
              </Box>
            </Box>
            <Box>
              <Box id="fun">
                <b>Monday</b>, Oct 10
              </Box>
            </Box>
            <Box>
              <Box id="fun">
                <b>Tuesday</b>, Oct 11
              </Box>
            </Box>
            <Box>
              <Box id="fun">
                <b>Wednesday</b>, Oct 12
              </Box>
            </Box>
            <Box>
              <Box id="fun">
                <b>Thursday</b>, Oct 13
              </Box>
            </Box>
          </Box>
          <Box id="below_text">Scroll for more delivery dates</Box>
          <Box></Box>
          <Box>
            <Link to="/cart">
              <Button>Next</Button>
            </Link>
          </Box>
          <Box id="date"></Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Choose;
