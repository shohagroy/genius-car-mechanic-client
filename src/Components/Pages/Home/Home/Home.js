import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Address from "../Address/Address";
import Carousel from "../Carousel/Carousel";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import PopularProduct from "../PopularProduct/PopularProduct";
import Servicce from "../Service/Servicce";
import Testimonial from "../Testimonial/Testimonial";
import OurTeam from "./OurTeam/OurTeam";

const Home = () => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <Carousel />
      <AboutUs />
      <Servicce />
      <Address />
      <PopularProduct />
      <OurTeam />
      <CoreFeatures />
      <Testimonial />
    </div>
  );
};

export default Home;
