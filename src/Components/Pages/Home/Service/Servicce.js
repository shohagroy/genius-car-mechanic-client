import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Servicce = () => {
  const [servies, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div>
        <div className="text-center w-[718px] mx-auto">
          <p className="text-[20px] font-bold text-[#ff3811] mt-[130px] mb-[10px] ">
            Service
          </p>
          <h3 className="font-bold text-[45px] text-[#151515]">
            Our Service Area
          </h3>
          <p className="capitalize p-[20px] text-[#737373] mb-[50px]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[25px]">
          {servies.map((servie) => (
            <ServiceCard key={servie._id} servies={servie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicce;
