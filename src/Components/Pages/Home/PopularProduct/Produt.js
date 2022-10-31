import React from "react";

const Produt = ({ product }) => {
  const { img, title, price } = product;
  return (
    <div>
      <div className="p-5 border rounded-xl">
        <img
          className=" w-[315px] h-[210px] rounded-xl"
          src={img}
          alt={title}
        />
        <h3 className="text-[25px] text-center my-[20px] font-bold text-[#444444]">
          {title}
        </h3>
        <div className="flex justify-center text-[20px] items-center font-semibold text-[#FF3811]">
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Produt;
