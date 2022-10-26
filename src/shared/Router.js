import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Join from "../pages/Join";
import AddCard from "../pages/AddCard";
import List from "../components/List";
import Detail from "../pages/Detail";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<AddCard />} />
        <Route path="/list" element={<List />} />
        <Route path="/post/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;