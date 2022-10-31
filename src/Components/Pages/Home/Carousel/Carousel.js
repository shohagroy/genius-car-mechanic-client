import React from "react";
import CarosuelCard from "./CarosuelCard";

const Carousel = () => {
  const carouselImages = [
    {
      img: "https://i.ibb.co/GvgGrqB/1.jpg",
      priv: 6,
      id: 1,
      next: 2,
    },
    {
      img: "https://i.ibb.co/nQ9XcJg/2.jpg",
      priv: 1,
      id: 2,
      next: 3,
    },
    {
      img: "https://i.ibb.co/KFsyrVC/3.jpg",
      priv: 2,
      id: 3,
      next: 4,
    },
    {
      img: "https://i.ibb.co/NTcqksk/4.jpg",
      priv: 3,
      id: 4,
      next: 5,
    },
    {
      img: "https://i.ibb.co/tPM5y8S/5.jpg",
      priv: 4,
      id: 5,
      next: 6,
    },
    {
      img: "https://i.ibb.co/0c8D3cp/6.jpg",
      priv: 5,
      id: 6,
      next: 1,
    },
  ];
  return (
    <div>
      <div className="carousel w-full mb-[130px] h-[600px] object-cover rounded-xl">
        {carouselImages.map((img) => (
          <CarosuelCard key={img.id} carousel={img} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
