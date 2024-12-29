"use client";

import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { cn } from "@/lib/utils";

const banners = [
  { id: 1, img: "/slider1.png", alt: "Unlock Big Savings!" },
  { id: 2, img: "/slider2.png", alt: "Exciting Deals Await!" },
  { id: 3, img: "/slider3.png", alt: "Shop and Save More!" },
  { id: 4, img: "/slider4.png", alt: "Unlock Big Savings!" },
  { id: 5, img: "/slider5.png", alt: "Exciting Deals Await!" },
  { id: 6, img: "/slider6.png", alt: "Shop and Save More!" },
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000); // 3 seconds interval
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative top-9 lg:top-28 md:top-20">
  {/* Slider Container */}
  <div className="relative pl-[1px] lg:pl-[296px] mx-auto w-full max-w-8xl h-[180px] md:h-[200px] lg:h-[240px] xl:h-[280px]">
    {/* Slides */}
    <div className="relative w-full h-full overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={cn(
            "absolute top-0 left-0 w-full h-full transition-opacity duration-500",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={banner.img}
            alt={banner.alt}
            layout="fill"
            className=""
            priority={index === 0}
          />
        </div>
      ))}
    </div>

    {/* Navigation Buttons */}
    <button
      onClick={prevSlide}
      className="absolute pl-[2px] md:left-[18.5rem] top-1/2 transform -translate-y-1/2 p-1 bg-yellow-300 text-black rounded-full shadow hover:bg-yellow-500 focus:outline-none"
    >
      <IoIosArrowBack size={22} />
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 bg-yellow-300 text-black rounded-full shadow hover:bg-yellow-500 focus:outline-none"
    >
      <IoIosArrowForward size={22} />
    </button>

    {/* Dots Navigation */}
    <div className="absolute bottom-4 left-[55rem] transform -translate-x-1/2 hidden xl:flex space-x-2">
      {banners.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={cn(
            "w-3 h-3 rounded-full transition-colors",
            index === currentSlide
              ? "bg-red-500"
              : "bg-gray-400 hover:bg-gray-500"
          )}
        ></button>
      ))}
    </div>
  </div>
</div>

  );
};

export default BannerSlider;
