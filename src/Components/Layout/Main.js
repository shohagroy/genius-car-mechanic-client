import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer/Footer";
import Header from "../Pages/Header/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
