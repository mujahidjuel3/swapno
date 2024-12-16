"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DailyNecessities = ({ cardData6, addToCart, cartItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // For card slider
  const [headerIndex, setHeaderIndex] = useState(0); // For header title slider
  const [cardsToShow, setCardsToShow] = useState(4); // Default for desktop screens

  const headerTitles = [
    { id: 1, title: "Pasta" },
    { id: 2, title: "Full Cream Milk" },
    { id: 3, title: "Regular Spice" },
    { id: 4, title: "Green Tea" },
  ];
  // Detect Screen Size and Adjust Cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2); // Tablet
      } else if (window.innerWidth < 1599) {
        setCardsToShow(3); // Laptop
      } else {
        setCardsToShow(4); // Desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Listen for window resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider Navigation Handlers
  const handlePrevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(cards.length - cardsToShow, 0) : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prev) =>
      prev + cardsToShow >= cardData6.length ? 0 : prev + 1
    );
  };

  const handlePrevHeader = () => {
    setHeaderIndex((prev) => (prev === 0 ? headerTitles.length - 1 : prev - 1));
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
      <div className="relative lg:w-1/3 flex justify-center items-end">
        <Image
          src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/6682cb75422b24d32ce5ac9a_site-banner-2-copy_400.jpeg"
          alt="daily necessity"
          width={300}
          height={300}
          className="rounded-lg"
        />
        <div className="absolute pb-10">
          <h1 className="px-8 py-2 uppercase rounded-full bg-yellow-500 font-semibold">
            Daily Necessities
          </h1>
        </div>
      </div>
      {/* Right Section */}
      <div className="lg:w-2/3 border-r bg-gray-200 pt-5 px-4 py-3 rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          {/* Header Title Slider */}
          <div className="flex items-center gap-2 pl-1">
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

        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-2 rounded-full z-10"
            onClick={handlePrevSlide}
          >
            <IoIosArrowBack />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 gap-1 items-stretch"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / cardsToShow
                }%)`,
              }}
            >
              {cardData6.map((card) => (
                <div
                  key={card.id}
                  className="flex-shrink-0 p-2 bg-white rounded-lg shadow flex flex-col items-center justify-between"
                  style={{ width: `${99 / cardsToShow}%`, minHeight: "250px" }} // Ensures consistent size
                >
                  <Link href={`/details/${card.id}`} key={card.id} legacyBehavior>
                  <div>
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
                  </div>
                  </Link>

                  <div className="flex items-center justify-center pb-4 pt-4">
                    {getItemQuantity(card.id) > 0 ? (
                      <div className="flex items-center bg-yellow-500 justify-between rounded-full w-28 sm:w-32">
                        <button
                          onClick={() =>
                            addToCart({ ...card, quantity: -1 }, true)
                          }
                          className="bg-yellow-500 text-white px-3 py-1 text-lg sm:text-xl rounded-full"
                        >
                          -
                        </button>
                        <span className="font-semibold flex items-center gap-1 text-sm sm:text-base">
                          {getItemQuantity(card.id)}{" "}
                          <p className="text-xs font-semibold">in Bag</p>
                        </span>
                        <button
                          onClick={() =>
                            addToCart({ ...card, quantity: 1 }, true)
                          }
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
    </div>
  );
};

export default DailyNecessities;
