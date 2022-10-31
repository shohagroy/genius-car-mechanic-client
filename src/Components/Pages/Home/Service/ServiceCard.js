import React from "react";

const ServiceCard = ({ servies }) => {
  const { img, price, title, service_id } = servies;

  console.log(service_id);
  return (
    <div>
      <div className="p-5 border rounded-xl">
        <img
          className=" w-[315px] h-[210px] rounded-xl"
          src={img}
          alt={title}
        />
        <h3 className="text-[25px] my-[20px] font-bold text-[#444444]">
          {title}
        </h3>
        <div className="flex justify-between text-[20px] items-center font-semibold text-[#FF3811]">
          <p>Price: ${price}</p>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
