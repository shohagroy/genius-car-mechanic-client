import React from "react";

const TeamCard = ({ team }) => {
  const { img, name, expert } = team;
  return (
    <div>
      <div className="p-5 border rounded-xl">
        <img className=" w-[315px] h-[293px] rounded-xl" src={img} alt={name} />

        <h3 className="text-[25px] text-center my-[10px] font-bold text-[#444444]">
          {name}
        </h3>
        <div className="flex justify-center text-[20px] items-center font-semibold text-[#737373]">
          <p>{expert}</p>
        </div>
        <div className="text-center flex justify-center items-center my-[10px] text-3xl">
          <i class="p-2 mx-2 bg-[#FF3811] text-white rounded-full fa-brands fa-facebook"></i>
          <i class="p-2 mx-2 bg-[#FF3811] text-white rounded-full fa-brands fa-twitter"></i>
          <i class="p-2 mx-2 bg-[#FF3811] text-white rounded-full fa-brands fa-linkedin-in"></i>
          <i class="p-2 mx-2 bg-[#FF3811] text-white rounded-full fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
