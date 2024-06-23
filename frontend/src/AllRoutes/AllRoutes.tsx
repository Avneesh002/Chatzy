import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../Pages/Home";
import Chat from "./../Pages/Chat";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/chat" element={<Chat />}></Route>
    </Routes>
  );
};

export default AllRoutes;
