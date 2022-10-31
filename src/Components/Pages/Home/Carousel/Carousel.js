import React from "react";

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px] object-cover rounded-xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/PN3m8Ns/6.jpg" className="w-full" />
          <div className="absolute w-full h-full bg-gradient-to-r from-black to-black/0"></div>

          {/* carousel text  */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="w-[50%] text-white pl-[100px] ">
              <h2 className="text-6xl font-bold ">
                Affordable <br /> Price For Car <br /> Servicing
              </h2>
              <p className=" py-[30px]  text-[18px]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button
                  type="button"
                  className="px-8 mr-[20px] text-white bg-[#FF3811] hover:bg-white/0 py-3 text-[18px] font-semibold  hover:border rounded hover:border-white "
                >
                  Discover More
                </button>

                <button
                  type="button"
                  className="px-8 hover:text-white hover:bg-[#FF3811] py-3 text-[18px] font-semibold font-semibold border hover:border-none  rounded border-white text-white"
                >
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          {/* button  */}
          <div className="absolute flex justify-end transform -translate-y-1/2  right-[50px] bottom-0">
            <a href="#slide4" className="btn bg-black/30 btn-circle mr-[30px]">
              <span>
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
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </span>
            </a>
            <a href="#slide2" className="btn bg-[#FF3811]  btn-circle">
              <span>
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
              </span>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
