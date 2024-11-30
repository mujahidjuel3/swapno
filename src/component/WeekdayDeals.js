"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const WeekdayDeals = ({ cardData7, addToCart, cartItems }) => {
  const [timeLeft, setTimeLeft] = useState("00:00:00");
  const [currentIndex, setCurrentIndex] = useState(0); // For card slider
  const [headerIndex, setHeaderIndex] = useState(0); // For header title slider
  const [cardsToShow, setCardsToShow] = useState(4); // Default for desktop screens

  const headerTitles = [
    { id: 1, title: "Pasta" },
    { id: 2, title: "Full Cream Milk" },
    { id: 3, title: "Regular Spice" },
    { id: 4, title: "Green Tea" },
  ];

  // Countdown Timer
  useEffect(() => {
    const targetTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft("00:00:00");
      } else {
        const hours = Math.floor(
          (difference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (60 * 60 * 1000)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (60 * 1000)) / 1000);
        setTimeLeft(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Detect Screen Size and Adjust Cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2); // Tablet
      } else {
        setCardsToShow(4); // Laptop/Desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Listen for window resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider Navigation Handlers
  const handlePrevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cardData7.length - cardsToShow : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prev) =>
      prev + cardsToShow >= cardData7.length ? 0 : prev + 1
    );
  };

  const handlePrevHeader = () => {
    setHeaderIndex((prev) =>
      prev === 0 ? headerTitles.length - 1 : prev - 1
    );
  };

  const handleNextHeader = () => {
    setHeaderIndex((prev) => (prev + 1) % headerTitles.length);
  };

  const getItemQuantity = (id) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  };


  return (
    <div className="flex flex-col pt-32 lg:flex-row bg-gray-50 rounded-lg shadow-lg pl-2 md:pl-16 py-8 gap-4">
      {/* Left Section */}
      <div className="lg:w-2/3 border-r bg-gray-400 pt-5 px-4 py-3 rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <h1 className="font-bold uppercase text-sm sm:text-xl md:text-2xl text-black pl-1">
              Weekday Deals!!
            </h1>
            <span className="bg-red-600 text-white border-red-600 border px-1 py-0 text-sm rounded">
              {timeLeft}
            </span>
            <span className="text-red-600 font-bold border-red-600 border bg-gray-100 text-sm px-2 py-0 italic">
              Left
            </span>
          </div>
          {/* Header Title Slider */}
          <div className="flex items-center gap-2 pr-1">
            <button
              onClick={handlePrevHeader}
              className="p-2 bg-yellow-500 rounded-full items-center"
            >
              <IoIosArrowBack />
            </button>
            <span className="px-4 bg-red-600 rounded-full">
              {headerTitles[headerIndex].title}
            </span>
            <button
              onClick={handleNextHeader}
              className="p-2 bg-yellow-500 rounded-full items-center"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full z-10"
            onClick={handlePrevSlide}
          >
            <IoIosArrowBack />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 gap-1 items-center"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {cardData7.map((card) => (
                <div
                  key={card.id}
                  className="flex-shrink-0 p-2 bg-white rounded-lg shadow"
                  style={{ width: `${99 / cardsToShow}%` }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={150}
                    height={150}
                    className="object-contain mb-2"
                  />
                  <h2 className="text-sm font-semibold">{card.title}</h2>
                  <p className="text-red-500 font-bold">
                    ৳{card.price}{" "}
                    <span className="text-xs text-gray-500">
                      {card.perprice}
                    </span>
                  </p>
                  <p className="text-gray-500 text-xs">{card.discount}</p>
                  <p className="text-xs text-gray-600">{card.delivery}</p>

                  {getItemQuantity(card.id) > 0 ? (
                    <div className="flex items-center bg-yellow-500 justify-between rounded-full">
                      <button
                        onClick={() =>
                          addToCart({ ...card, quantity: -1 }, true)
                        }
                        className="bg-yellow-500 text-white px-2 py-1 text-xl rounded-full"
                      >
                        -
                      </button>
                      <span className="font-semibold">
                        {getItemQuantity(card.id)}
                      </span>
                      <button
                        onClick={() =>
                          addToCart({ ...card, quantity: 1 }, true)
                        }
                        className="bg-yellow-500 text-white px-2 py-1 text-xl rounded-full"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="bg-red-600 text-white text-center px-4 py-1 rounded-full"
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
              ))}
            </div>
          </div>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full"
            onClick={handleNextSlide}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3 flex items-center justify-center">
        <Image
          src="/happy-hour.png"
          alt="Happy Hour"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default WeekdayDeals;
