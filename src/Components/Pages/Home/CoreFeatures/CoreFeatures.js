import React from "react";
import img1 from "../../../../assets/icons/group.svg";
import Features from "./Features";
import img2 from "../../../../assets/icons/deliveryt.svg";
import img3 from "../../../../assets/icons/person.svg";
import img4 from "../../../../assets/icons/Wrench.svg";
import img5 from "../../../../assets/icons/check.svg";

const CoreFeatures = () => {
  return (
    <div>
      <div>
        <div className="text-center w-[718px] mx-auto">
          <p className="text-[20px] font-bold text-[#ff3811] mt-[130px] mb-[10px] ">
            Core Features
          </p>
          <h3 className="font-bold text-[45px] text-[#151515]">
            Why Choose Us
          </h3>
          <p className="capitalize p-[20px] text-[#737373] mb-[50px]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-[24px]">
          <Features name={"Expert Team"} image={img1} />
          <Features name={"Timely Delivery"} image={img2} />
          <Features name={"24/7 Support"} image={img3} />
          <Features name={"Best Equipment"} image={img4} />
          <Features name={"100% Guranty"} image={img5} />
          <Features name={"Timely Delivery"} image={img2} />
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
