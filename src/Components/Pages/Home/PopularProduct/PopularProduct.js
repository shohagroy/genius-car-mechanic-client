import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Produt from "./Produt";

const PopularProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("Product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div>
        <div className="text-center w-[718px] mx-auto">
          <p className="text-[20px] font-bold text-[#ff3811] mt-[130px] mb-[10px] ">
            Popular Products
          </p>
          <h3 className="font-bold text-[45px] text-[#151515]">
            Browse Our Products
          </h3>
          <p className="capitalize p-[20px] text-[#737373] mb-[50px]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[25px]">
          {products.map((product) => (
            <Produt key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div className="text-center mb-[130px]">
        <button
          type="button"
          className="px-8 mt-[50px]  hover:text-white hover:bg-[#FF3811] py-3 text-[18px] font-semibold font-semibold border rounded border-[#FF3811] text-[#FF3811]"
        >
          More Services
        </button>
      </div>
    </div>
  );
};

export default PopularProduct;
