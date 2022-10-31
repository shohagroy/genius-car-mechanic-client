import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Carousel from "../Carousel/Carousel";
import Servicce from "../Service/Servicce";

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <Servicce />
    </div>
  );
};

export default Home;
