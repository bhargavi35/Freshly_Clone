import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Choose from "./Choose";
import HomePage from "./HomePage";
import { Login } from "./Login";
import MenuPage from "./MenuPage";
import Payment from "./Payment";
import { SignUp } from "./Signup";
import { Thankyou } from "./Thank";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plansmenu" element={<MenuPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/choose" element={<Choose />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/thank" element={<Thankyou />} />
    </Routes>
  );
};

export default AllRoutes;
