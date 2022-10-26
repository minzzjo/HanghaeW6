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
        <Route path='/' element={<Home />} />
        <Route path='/join' element={<Join />} />
        <Route path='/addcard' element={<AddCard />} />
        <Route path='/list' element={<List />} />
        <Route path='/detail' element={<Detail />} />
        {/* 로그인 페이지로 이동 */}
        <Route path='login' element={<Login />} />
        {/* 회원가입 페이지로 이동 */}
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
