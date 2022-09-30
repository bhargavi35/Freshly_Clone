import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import { Login } from "./Login";
import  MenuPage  from "./MenuPage";
import { SignUp } from "./Signup";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plansmenu" element={<MenuPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route />
      <Route />
    </Routes>
  );
};

export default AllRoutes;
