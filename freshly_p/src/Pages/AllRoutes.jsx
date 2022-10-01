import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Choose from "./Choose";
import HomePage from "./HomePage";
import { Login } from "./Login";
import MenuPage from "./MenuPage";
import { SignUp } from "./Signup";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plansmenu" element={<MenuPage />} />
      <Route path="/choose" element={<Choose />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AllRoutes;
