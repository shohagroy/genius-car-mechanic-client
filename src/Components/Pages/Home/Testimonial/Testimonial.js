import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div>
        <div className="text-center w-[718px] mx-auto">
          <p className="text-[20px] font-bold text-[#ff3811] mt-[130px] mb-[10px] ">
            Testimonial
          </p>
          <h3 className="font-bold text-[45px] text-[#151515]">
            What Customer Says
          </h3>
          <p className="capitalize p-[20px] text-[#737373] mb-[50px]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 p-5">
          <div className="border border-black  px-8 rounded-xl p-5">
            <div className="flex justify-between  pr-20">
              <div>
                <img
                  className="h-[70px] w-[70px] rounded-full object-cover"
                  src="https://i.ibb.co/JpBMCvn/1.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-bold text-[25px] text-[#444444]">
                  Awlad Hossain
                </h3>
                <p className="font-semibold text-[20px] text-[#737373]">
                  Businessman
                </p>
              </div>
              <div className="text-6xl text-[#ff3811]">
                <i className="fa-sharp fa-solid fa-quote-right"></i>
              </div>
            </div>
            <div>
              <p className="py-5 text-[#737373]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <div className="text-[24px] text-[#FF912C]">
                <i className="fa-solid p-1 fa-star"></i>
                <i className="fa-solid p-1 fa-star"></i>
                <i className="fa-solid p-1 fa-star"></i>
                <i className="fa-solid p-1 fa-star"></i>
                <i className="fa-solid p-1 fa-star"></i>
              </div>
            </div>
          </div>

          <div className="border border-black  px-8 rounded-xl p-5">
            <div className="flex justify-between  pr-20">
              <div>
                <img
                  className="h-[70px] w-[70px] rounded-full object-cover"
                  src="https://i.ibb.co/JpBMCvn/1.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-bold text-[25px] text-[#444444]">
                  Awlad Hossain
                </h3>
                <p className="font-semibold text-[20px] text-[#737373]">
                  Businessman
                </p>
              </div>
              <div className="text-6xl text-[#ff3811]">
                <i className="fa-sharp fa-solid fa-quote-right"></i>
              </div>
            </div>
            <div>
              <p className="py-5 text-[#737373]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <div className="text-[24px] text-[#FF912C]">
                <i className="fa-solid p-1 fa-star"></i>
                <i className="fa-solid p-1 fa-star"></i>
                <i className="fa-solid p-1 fa-star"></i>
                <i className="fa-solid p-1 fa-star"></i>
                <i className="fa-solid p-1 fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
