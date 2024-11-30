"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button"; // ShadCN Button
import { Card } from "@/components/ui/card"; // ShadCN Card
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

const CardSlider = ({ cards }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Screen size card
  const getVisibleCards = () => {
    if (windowWidth >= 1280) return 5; // Desktop
    if (windowWidth >= 1024) return 4; // Laptop
    if (windowWidth >= 668) return 2; // Tablet
    return 1; // Mobile
  };

  const scrollSlider = (direction) => {
    const scrollAmount = sliderRef.current.offsetWidth / getVisibleCards();
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="sm:pl-[16rem] top-28 md:top-32 relative p-4">
      {/* Left Arrow */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => scrollSlider("left")}
        className="absolute top-1/2 sm:left-[16rem] transform -translate-y-1/2 z-10 bg-yellow-400 rounded-full shadow-md"
      >
        <IoIosArrowBack size={20} />
      </Button>

      {/* Card Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-hidden gap-4"
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            className="flex-shrink-0 shadow-md border-none overflow-hidden rounded-lg"
            style={{
              width: `calc(100% / ${getVisibleCards()} - 1rem)`, 
            }}
          >
            <div className="relative">
              <Image
                src={card.image}
                alt={card.title}
                width={100}
                height={100}
                className="h-56 w-full object-cover"
              />
              {/* Title on Image */}
              <div className="absolute bottom-0 md:left-2 sm:left-5 lg:left-7  md:w-28 lg:w-36 w-full sm:w-44 bg-yellow-400 sm:rounded-full text-center py-2">
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

export default CardSlider;