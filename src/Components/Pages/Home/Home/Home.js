import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Address from "../Address/Address";
import Carousel from "../Carousel/Carousel";
import PopularProduct from "../PopularProduct/PopularProduct";
import Servicce from "../Service/Servicce";

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <Servicce />
      <Address />
      <PopularProduct />
    </div>
  );
};

export default Home;
