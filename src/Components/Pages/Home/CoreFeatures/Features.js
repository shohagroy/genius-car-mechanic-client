import React from "react";

const Features = ({ image, name }) => {
  return (
    <div className="flex flex-col justify-center items-center border rounded-xl w-[170px] h-[156px]">
      <img src={image} alt="" />
      <p className="p-3 text-[#444444]">{name}</p>
    </div>
  );
};

export default Features;
