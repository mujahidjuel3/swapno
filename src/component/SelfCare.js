"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button"; // ShadCN Button
import { Card } from "@/components/ui/card"; // ShadCN Card
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

const SelfCare = ({ cardData1, addToCart, cartItems }) => {
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
    if (windowWidth >= 640) return 2; // Tablet
    return 1; // Mobile
  };

  const scrollSlider = (direction) => {
    const scrollAmount = sliderRef.current.offsetWidth / getVisibleCards();
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const getItemQuantity = (id) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="relative py-8">
      <h1 className="text-center mb-4 uppercase text-3xl font-semibold">
        Self-care Snactuary
      </h1>
      {/* Left arrow */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => scrollSlider("left")}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-yellow-400 rounded-full shadow-md"
      >
        <IoIosArrowBack size={20} />
      </Button>

      {/* Card slider */}
      <div ref={sliderRef} className="flex overflow-hidden gap-4 items-stretch">
        {cardData1.map((card, index) => (
          <Card
            key={index}
            className="flex-shrink-0 shadow-md border overflow-hidden h-full rounded-lg"
            style={{
              width: `calc(100% / ${getVisibleCards()} - 1rem)`,
              minHeight: "20rem",
            }}
          >
            <div className="h-full flex flex-col justify-between">
            <Link href={`/details/${card.id}`} key={card.id} legacyBehavior>
              <div>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={100}
                  height={100}
                  className="h-44 w-full mb-2"
                />
                <div className="px-4">
                  <h2 className="text-sm font-semibold">{card.title}</h2>
                  <div className="pt-2">
                    <p className="text-xs text-gray-600">{card.delivery}</p>
                    <p className="text-red-500 font-bold">
                      {card.price}{" "}
                      <span className="text-xs text-gray-500">
                        {card.perprice}
                      </span>
                    </p>
                    <p className="text-gray-500 text-xs">{card.discount}</p>
                  </div>
                </div>
              </div>
              </Link>

              <div className="flex items-center justify-center pb-4 pt-4">
                {getItemQuantity(card.id) > 0 ? (
                  <div className="flex items-center bg-yellow-500 justify-between rounded-full w-28 sm:w-32">
                    <button
                      onClick={() => addToCart({ ...card, quantity: -1 }, true)}
                      className="bg-yellow-500 text-white px-3 py-1 text-lg sm:text-xl rounded-full"
                    >
                      -
                    </button>
                    <span className="font-semibold flex items-center gap-1 text-sm sm:text-base">
                      {getItemQuantity(card.id)}{" "}
                      <p className="text-xs font-semibold">in Bag</p>
                    </span>
                    <button
                      onClick={() => addToCart({ ...card, quantity: 1 }, true)}
                      className="bg-yellow-500 text-white px-3 py-1 text-lg sm:text-xl rounded-full"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-red-600 text-white text-center px-3 sm:px-4 py-1 rounded-full text-sm sm:text-base"
                    onClick={() =>
                      addToCart({
                        id: card.id,
                        name: card.title,
                        price: parseFloat(card.price.replace("৳", "")),
                      })
                    }
                  >
                    + Add to Bag
                  </button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Right arrow */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => scrollSlider("right")}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-yellow-400 rounded-full shadow-md"
      >
        <IoIosArrowForward size={20} />
      </Button>
    </div>
  );
};

export default SelfCare;
