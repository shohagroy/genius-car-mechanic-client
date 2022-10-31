import React from "react";

const Address = () => {
  return (
    <div className="mb-[130px]">
      <div className=" flex items-center justify-between bg-[#151515] h-[250px] px-[30px] rounded-xl">
        <div className="flex justify-center items-center mx-[30px] ">
          <div className="text-[#FF3811]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-center ml-[20px] text-white">
            <p className="font-semibold">We are open monday-friday</p>
            <h2 className="text-[25px] font-bold">7:00 am - 9:00 pm</h2>
          </div>
        </div>
        <div className="flex justify-center items-center mx-[30px]">
          <div className="text-[#FF3811]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              />
            </svg>
          </div>
          <div className="text-center ml-[20px] text-white">
            <p className="font-semibold">Have a question?</p>
            <h2 className="text-[25px] font-bold">+2546 251 2658</h2>
          </div>
        </div>
        <div className="flex justify-center items-center mx-[30px]">
          <div className="text-[#FF3811]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
          <div className="text-center ml-[20px] text-white">
            <p className="font-semibold">Need a repair? our address</p>
            <h2 className="text-[25px] font-bold">Liza Street, New York</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
