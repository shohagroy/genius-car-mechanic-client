import React from "react";
import banarImage from "../../../assets/images/banner/4.jpg";

const Banar = ({ text }) => {
  return (
    <div className="mb-[130px]">
      <div className="carousel-item  rounded-xl relative w-full h-[300px]">
        <img
          src={banarImage}
          className="object-cover rounded-xl w-full h-[300px] "
        />
        <div className="absolute rounded-xl w-full h-full bg-gradient-to-r from-black to-black/0"></div>

        {/* carousel text  */}
        <div className="absolute flex rounded-xl justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="w-[50%] text-white pl-[100px] ">
            <h1 className="text-[45px] font-bold">{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banar;
