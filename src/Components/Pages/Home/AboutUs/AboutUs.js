import React from "react";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-2 gap-[60px] h-[560px] w-full">
      <div className="relative">
        <img
          className="absolute top-0 left-0 w-[460px] rounded-xl h-[473px]"
          src="https://i.ibb.co/dbBmvQh/person.jpg"
          alt="image"
        />
        <div className="absolute bottom-0 right-0  ">
          <img
            className="object-cover w-[327px] h-[332px] p-3 bg-white rounded-xl "
            src="https://i.ibb.co/kxGs33B/parts.jpg"
            alt="Image"
          />
        </div>
      </div>
      <div>
        <div>
          <p className="text-[20px] font-bold text-[#ff3811] mb-2 ">
            About Us <br />
            <span className="font-bold text-[45px] text-[#151515]">
              We are qualified <br /> & of experience <br /> in this field
            </span>
          </p>

          <p className="py-3 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>
        <button className="px-8 my-5 text-white bg-[#FF3811] py-3 text-[18px] font-semibold   rounded ">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
