import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Plans from "../Components/Separate/Plans";
import { Faq } from "../Components/Separate/faq";
import { Box, Spacer } from "@chakra-ui/react";
import "../Components/Separate/style.css";
import { MenuCard } from "../Components/Menu/card";
import axios from "axios";

const MenuPage = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("https://fake-product.herokuapp.com/miniP").then(({ data }) => {
      setState(data);
      // console.log(data)
    });
  }, []);
  return (
    <>
      <Navbar />
      <Plans />
      <Box>
        <Box className="onmenu">
          <h1>On the Menu</h1>
          <p>
            Whatever your lifestyle, Freshly’s got you covered—with{" "}
            <a href="#">gluten-free,</a> <a href="#">dairy-free,</a>{" "}
            <a href="#">plant-based,</a> <a href="#">carb-smart,</a>
            and <a href="#">calorie-conscious,</a> meal options! Our low-lift
            lunches and done-for-you dinners provide an effortless alternative
            to everyday cooking, with nutritious prepared meals delivered to
            your door. Explore this week’s dishes and start eating better
          </p>
          <div className="menuDrop">
            <div className="menutitle">
              <p>Menu Category: </p>
            </div>
            <Box className="selectMenu">
              <select name="All Meals" className="selectmenu">
                <option value="All Meals">All Meals</option>
                <option value="Purely Plant">Purely Plant</option>
                <option value="Signature Collection">
                  Signature Collection
                </option>
                <option value="FeshlyFit">FreshlyFit</option>
                <option value="Proteins & Sides">Proteins & Sides</option>
              </select>
            </Box>
          </div>
        </Box>
        <Box
          w="97%"
          mt="20px"
          m="auto"
          pt="15px"
          pl="20px"
          backgroundColor="white"
        >
          <MenuCard data={state} />
        </Box>
        <Spacer/>
        <div className="dietPlan">
          <h1>For Every Diet & Lifestyle</h1>
          <p>
            We’re here to make every dish delicious and nutritious, with
            prepared meals that satisfy a wide range of tastes—all meticulously
            crafted to meet your dietary wants and needs.
          </p>
        </div>
        <div className="lastSec">
          <div>
            <img
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/620001104582091be7236479_Freshly_Iconography_DietaryIcons-03.png"
              alt=""
            />
            <h4>Purely Plant</h4>
            <p>Plant-based meals for everyone</p>
            <a href="#">Learn More</a>
          </div>
          <div>
            <img
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6200014b6c9c4f739d8a120f_Freshly_Iconography_DietaryIcons-05.png"
              alt=""
            />
            <h4>Gluten Free</h4>
            <p>Certified by the Gluten Intolerance Group</p>
            <a href="#">Learn More</a>
          </div>
          <div>
            <img
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62000182acc5e0f3435178cb_Freshly_Iconography_DietaryIcons-02.png"
              alt=""
            />
            <h4>Dairy Free Meals</h4>
            <p>Dairy free prepared meals for all tastes</p>
            <a href="#">Learn More</a>
          </div>
          <div>
            <img
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/620002995a9c84ce8cc5dc3b_Freshly_Iconography_DietaryIcons-01.png"
              alt=""
            />
            <h4>Carb-Smart</h4>
            <p>Chef-crafted low-carb meals</p>
            <a href="#">Learn More</a>
          </div>
          <div>
            <img
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/620002cf09966d7359a8b2e8_Freshly_Iconography_DietaryIcons-04.png"
              alt=""
            />
            <h4>Calorie-Conscious</h4>
            <p>Low-calorie meal plan with perfect portions</p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </Box>
      <Faq />
    </>
  );
};

export default MenuPage;
