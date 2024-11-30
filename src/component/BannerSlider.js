"use client";

import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { cn } from "@/lib/utils";

const banners = [
  {
    id: 1,
    img: "/slider1.png",
    alt: "Unlock Big Savings!",
  },
  {
    id: 2,
    img: "/slider2.png",
    alt: "Exciting Deals Await!",
  },
  {
    id: 3,
    img: "/slider3.png",
    alt: "Shop and Save More!",
  },
  {
    id: 4,
    img: "/slider4.png",
    alt: "Unlock Big Savings!",
  },
  {
    id: 5,
    img: "/slider5.png",
    alt: "Exciting Deals Await!",
  },
  {
    id: 6,
    img: "/slider6.png",
    alt: "Shop and Save More!",
  },
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay Handler
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="sm:left-[16rem] pl-4 sm:pl-1 lg:pl-0  lg:pr-3 top-24 md:top-28 relative flex sm:w-[28rem] w-[30rem] lg:w-[66rem] xl:w-[86rem] h-48 sm:h-56 overflow-hidden">

      {/* Slider */}
      <div className="relative w-full lg:w-[80%]">
        <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                index === currentSlide ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="">
              <Image
                src={banner.img}
                alt={banner.alt}
                fill
                className="h-48 sm:h-56 w-[31rem] sm:w-[31rem] lg:w-[62rem] xl:w-[86rem]"
                priority={index === 0}
              />
              </div>
            </div>
          ))}
        </div>

        {/* Dot nevigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full",
                index === currentSlide
                  ? "bg-red-500"
                  : "bg-gray-400 hover:bg-gray-500"
              )}
            ></button>
          ))}
        </div>

        {/* Nevigation Button */}
        <div className="absolute inset-0 flex  justify-between items-center px-2">
          <button
            onClick={prevSlide}
            className="p-2.5 bg-yellow-300 w-9 h-9 text-white rounded-full hover:bg-gray-800"
          >
            <IoIosArrowBack/>
          </button>
          <button
            onClick={nextSlide}
            className="p-2.5 bg-yellow-300 w-9 h-9 text-white rounded-full hover:bg-gray-800"
          >
            <IoIosArrowForward/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
