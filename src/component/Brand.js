"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button"; // ShadCN Button
import { Card } from "@/components/ui/card"; // ShadCN Card
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

const Brand = ({ cardData4 }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Screen Size Card 
  const getVisibleCards = () => {
    if (windowWidth >= 1280) return 6; // Desktop
    if (windowWidth >= 1024) return 5; // Laptop
    if (windowWidth >= 668) return 3; // Tablet
    return 2; // Mobile
  };

  const scrollSlider = (direction) => {
    const scrollAmount = sliderRef.current.offsetWidth / getVisibleCards();
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-10 relative p-4">
      {/* Left Arrow */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => scrollSlider("left")}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-yellow-400 rounded-full shadow-md"
      >
        <IoIosArrowBack size={20} />
      </Button>

      {/* Card Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-hidden gap-4"
      >
        {cardData4.map((card, index) => (
          <Card
            key={index}
            className="flex-shrink-0 shadow-md border overflow-hidden rounded-lg"
            style={{
              width: `calc(100% / ${getVisibleCards()} - 1rem)`,
            }}
          >
            <div className="">
              <Image
                src={card.image}
                alt={card.title}
                width={100}
                height={100}
                className="h-32 w-full "
              />
            </div>
              {/* Title on Image */}
            <div className="hidden justify-center items-center md:flex pt-2">
              <div className="bottom-0 md:left-2 sm:left-5 lg:left-7  md:w-28 lg:w-32 w-full sm:w-36 bg-slate-300  sm:border text-center py-1">
                <p className="text-sm font-medium text-black">{card.title}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Right Arrow */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => scrollSlider("right")}
        className="absolute top-1/2 right-8 transform -translate-y-1/2 z-10 bg-yellow-400 rounded-full shadow-md"
      >
        <IoIosArrowForward size={20} />
      </Button>
    </div>
  );
};

export default Brand;