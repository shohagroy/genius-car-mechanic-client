import React from "react";
import logo from "../../../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="mt-[130px] bg-black p-6 w-[100vw] h-[477px] mx-auto">
      <footer className="footer my-[130px]   text-white max-w-[1140px] mx-auto">
        <div>
          <img src={logo} alt="Logo" />
          <p className="text-[#E8E8E8]">
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br />
            trainer who is also a serial .
          </p>
        </div>
        <div>
          <span className=" text-xl text-white font-bold">About</span>
          <a className="link mt-6 link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <span className=" text-xl text-white font-bold">Company</span>
          <a className="link mt-6 link-hover">Why Car Doctor</a>
          <a className="link link-hover">About</a>
        </div>
        <div>
          <span className=" text-xl text-white font-bold">Support</span>
          <a className="link mt-6 link-hover">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accesbility</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
