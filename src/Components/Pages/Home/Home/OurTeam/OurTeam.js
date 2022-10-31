import React from "react";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  const teams = [
    {
      id: "01",
      img: "https://i.ibb.co/JpBMCvn/1.jpg",
      name: "Car Engine Plug",
      expert: "Engine Expert",
    },
    {
      id: "02",
      img: "https://i.ibb.co/bmx7Dw4/2.jpg",
      name: "Car Engine Plug",
      expert: "Engine Expert",
    },
    {
      id: "03",
      img: "https://i.ibb.co/x5mBLcx/3.jpg",
      name: "Car Engine Plug",
      expert: "Engine Expert",
    },
  ];
  return (
    <div>
      <div>
        <div className="text-center w-[718px] mx-auto">
          <p className="text-[20px] font-bold text-[#ff3811] mt-[130px] mb-[10px] ">
            Team
          </p>
          <h3 className="font-bold text-[45px] text-[#151515]">
            Meet Our Team
          </h3>
          <p className="capitalize p-[20px] text-[#737373] mb-[50px]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[25px]">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
