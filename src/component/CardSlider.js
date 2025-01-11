"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

const CardSlider = ({ cards }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial width calculation
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCards = () => {
    if (windowWidth >= 1920) return 5; // Desktop
    if (windowWidth >= 1599) return 5; // Laptop
    if (windowWidth >= 992) return 4; // Tablet
    if (windowWidth >= 680) return 2; // Mobile
    return 1; // Extra small devices
  };

  const scrollSlider = (direction) => {
    const scrollAmount = sliderRef.current.offsetWidth / getVisibleCards();
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative py-8 top-12 lg:top-20 pl-[1px] lg:pl-[270px]">
      {/* Left Arrow */}
      <button
        onClick={() => scrollSlider("left")}
        className="absolute top-1/2 pl-[2px] lg:left-[18.5rem] transform -translate-y-1/2 z-10 p-1 bg-yellow-400 rounded-full shadow hover:bg-yellow-500 focus:outline-none"
      >
        <IoIosArrowBack size={22} />
      </button>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-hidden scrollbar-hide gap-4"
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex-shrink-0 rounded  overflow-hidden"
            style={{
              width: `calc(100% / ${getVisibleCards()} - 1rem)`,
            }}
          >
            <Link
            href={`/filter/${card.title}`}>
            <div className="relative">
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={200}
                className="h-56 w-full object-cover"
              />
              {/* Card Title */}
              <div className="absolute bottom-0 left-0 md:left-24 lg:left-0 xl:left-7 2xl:left-8 right-0 bg-yellow-400 justify-center items-center md:w-40 md:rounded-full text-center py-1">
                <p className="text-sm font-medium text-black">{card.title}</p>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scrollSlider("right")}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 p-1 bg-yellow-400 rounded-full shadow hover:bg-yellow-500 focus:outline-none"
      >
        <IoIosArrowForward size={22} />
      </button>
    </div>
  );
};

export default CardSlider;
