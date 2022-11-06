import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banar from "./Banar";
import logo from "../../../assets/logo.svg";

const ServiceDetails = () => {
  const [service] = useLoaderData();

  const { img, title, price, description, facility, _id } = service;

  return (
    <div className="max-w-[1140px] mx-auto">
      <Banar text={"Service Details"} />

      {/* service detalis  */}
      <div className="grid grid-cols-[752px_minmax(364px,_1fr)] mb-[30px] gap-6">
        <div>
          <div>
            <img
              className="h-[400px] w-full object-cover rounded-xl mb-[50px]"
              src={img}
              alt=""
            />
            <h2 className="text-[#151515] font-bold text-[35px] mb-[30px]">
              {title}
            </h2>
            <p className="capitalize text-[#737373] mb-[30px]">{description}</p>
          </div>
          <div className="grid grid-cols-2 my-4 gap-4 mb-[30px] ">
            {facility.map((fa) => (
              <div
                key={fa.name}
                className="bg-[#F3F3F3] p-[40px] rounded-xl border-t-2 border-[#FF3811]"
              >
                <h3 className="font-bold text-[20px]">{fa.name}</h3>
                <p className="pt-2 text-[#737373]">{fa.details}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-[#737373] mb-[30px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.{" "}
            </p>
            <h3 className="text-[35px] font-bold mb-[30px]">
              3 Simple Steps to Process
            </h3>
            <p className="text-[#737373] mb-[30px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text
            </p>
            <div className="grid grid-cols-3 gap-4 mb-[30px]">
              <div className="border rounded-lg flex flex-col justify-center items-center p-[36px] text-center">
                <p className="py-5 px-3 rounded-full bg-[#FF3811]/20">
                  <span className="p-3 bg-[#FF3811] rounded-full text-[20px] font-bold text-white">
                    01
                  </span>
                </p>
                <h3 className="p-[20px] font-bold uppercase">Step One</h3>
                <p className="text-[#737373]">
                  It uses a dictionary of over 200 .
                </p>
              </div>
              <div className="border rounded-lg flex flex-col justify-center items-center p-[36px] text-center">
                <p className="py-5 px-3 rounded-full bg-[#FF3811]/20">
                  <span className="p-3 bg-[#FF3811] rounded-full text-[20px] font-bold text-white">
                    02
                  </span>
                </p>
                <h3 className="p-[20px] font-bold uppercase">Step Two</h3>
                <p className="text-[#737373]">
                  It uses a dictionary of over 200 .
                </p>
              </div>
              <div className="border rounded-lg flex flex-col justify-center items-center p-[36px] text-center">
                <p className="py-5 px-3 rounded-full bg-[#FF3811]/20">
                  <span className="p-3 bg-[#FF3811] rounded-full text-[20px] font-bold text-white">
                    03
                  </span>
                </p>
                <h3 className="p-[20px] font-bold uppercase">Step Three</h3>
                <p className="text-[#737373]">
                  It uses a dictionary of over 200 .
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                className="h-[400px] rounded-xl w-full object-cover"
                src="https://i.ibb.co/nQ9XcJg/2.jpg"
                alt=""
              />
              <div className="absolute top-0 w-full h-full flex justify-center items-center">
                <span className="text-[#FF3811]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-16 h-16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-[#F3F3f3] p-[40px] rounded-xl">
            <h3 className=" text-[25px] font-bold">Service</h3>
            {facility.map((fa) => (
              <div key={fa.name} className="my-[20px] ">
                <div className="p-[20px] flex justify-between items-center  hover:bg-[#FF3811] bg-white hover:text-white font-semibold rounded-xl">
                  <p>{fa.name}</p>
                  <span className="">
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
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="my-[30px] bg-[#151515] rounded-xl text-white p-[40px]">
            <h3 className="text-[25px] font-bold">Download</h3>
            <div className="my-[20px] flex justify-between items-center">
              <div className="flex items-center">
                <span className="p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </span>

                <div>
                  <h4 className="font-semibold text-[18px]">Our Brochure</h4>
                  <p className="text-[#A2A2A2]">Download</p>
                </div>
              </div>

              <button className="p-[16px] rounded-md bg-[#FF3811]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
            <div className="my-[20px] flex justify-between items-center">
              <div className="flex items-center">
                <span className="p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </span>

                <div>
                  <h4 className="font-semibold text-[18px]">Company Details</h4>
                  <h4 className="font-semibold text-[18px]"></h4>
                  <p className="text-[#A2A2A2]">Download</p>
                </div>
              </div>

              <button className="p-[16px] rounded-md bg-[#FF3811]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="my-[30px] bg-[#151515] flex flex-col justify-center items-center rounded-xl p-[50px] text-white text-center">
            <img className="w-[150px]" src={logo} alt="" />
            <p className="text-[20px] py-2 font-bold">
              Need Help? We Are Here To Help You
            </p>
            <div className="bg-white rounded-xl flex flex-col justify-center items-center">
              <div className="p-[20px] relative">
                <p className="text-[#FF3811] text-[20px] p-2 font-bold">
                  Car Doctor <span className="text-black">Special</span>
                </p>
                <p className="font-bold text-[#737373] pb-6">
                  Save up to <span className="text-[#FF3811]">60% off</span>
                </p>
                <button className="px-[32px] py-[17px] bg-[#FF3811] font-semibold text-[18px] absolute bottom-[-30px] rounded-xl left-[38px]">
                  Get A Quote
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[35px] font-bold">Price: ${price}</h2>
          </div>
          <Link to={`../chekout/${_id}`}>
            <button className="mt-[30px] w-full py-[17px] text-[18px] font-semibold text-white rounded-xl bg-[#FF3811]">
              Proceed Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
