"use client";

import { useState, useEffect } from "react";
import { LiaCommentDollarSolid } from "react-icons/lia";
import { LuHelpCircle } from "react-icons/lu";
import { BsChevronRight, BsArrowLeft } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";
import {
  FaAppleAlt,
  FaBaby,
  FaBroom,
  FaSpa,
  FaTshirt,
  FaCouch,
  FaPencilAlt,
  FaGamepad,
  FaMobileAlt,
} from "react-icons/fa";
import Link from "next/link";
import Slider from "./Slider";

const NavbarModal = () => {
  const [isMainModalOpen, setIsMainModalOpen] = useState(true); // শুরুতে মেনু শো থাকবে
  const [activeMainItem, setActiveMainItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // মোবাইল স্ক্রিন
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMainModal = () => {
    setIsMainModalOpen(!isMainModalOpen);
    setActiveMainItem(null);
    setActiveSubItem(null);
  };

  const hideModal = () => {
    setIsMainModalOpen(false);
    setActiveMainItem(null);
    setActiveSubItem(null);
  };

  const mainMenuItems = [
    {
      name: "Food",
      icon: <FaAppleAlt />,
      subItems: [
        {
          name: "Meat & Fish",
          subSubItems: [
            { id: "1-1-1", name: "Beef" },
            { id: "1-1-2", name: "Chicken" },
            { id: "1-1-3", name: "Fish" },
          ],
        },
        {
          name: "Fruits & Vegetables",
          subSubItems: [
            { id: "1-2-1", name: "Apples" },
            { id: "1-2-2", name: "Carrots" },
            { id: "1-2-3", name: "Potatoes" },
          ],
        },
        {
          name: "Eggs",
          subSubItems: [{ id: "1-3-1", name: "Eggs" }],
        },
        {
          name: "Baking Needs",
          subSubItems: [
            { id: "1-4-1", name: "Flour" },
            { id: "1-4-2", name: "Sugar" },
            { id: "1-4-3", name: "Yeast" },
          ],
        },
      ],
    },
    {
      name: "Baby Food & Care",
      icon: <FaBaby />,
      subItems: [
        {
          name: "Baby Formula",
          subSubItems: [
            { id: "2-1-1", name: "Brand A" },
            { id: "2-1-2", name: "Brand B" },
          ],
        },
        {
          name: "Baby Snacks",
          subSubItems: [
            { id: "2-2-1", name: "Cookies" },
            { id: "2-2-2", name: "Biscuits" },
          ],
        },
      ],
    },
    {
      name: "Home Cleaning",
      icon: <FaBroom />,
      subItems: [
        {
          name: "Laundry",
          subSubItems: [
            { id: "3-1-1", name: "Detergents" },
            { id: "3-1-2", name: "Softeners" },
          ],
        },
        {
          name: "Cleaning Tools",
          subSubItems: [
            { id: "3-2-1", name: "Mops" },
            { id: "3-2-2", name: "Brushes" },
          ],
        },
      ],
    },
    {
      name: "Beauty & Health",
      icon: <FaSpa />,
      subItems: [
        {
          name: "Makeup",
          subSubItems: [
            { id: "4-1-1", name: "Lipstick" },
            { id: "4-1-2", name: "Foundation" },
          ],
        },
        {
          name: "Skincare",
          subSubItems: [
            { id: "4-2-1", name: "Creams" },
            { id: "4-2-2", name: "Lotions" },
          ],
        },
      ],
    },
    {
      name: "Fashion & Lifestyle",
      icon: <FaTshirt />,
      subItems: [
        {
          name: "Men",
          subSubItems: [
            { id: "5-1-1", name: "Shirts" },
            { id: "5-1-2", name: "Pants" },
          ],
        },
        {
          name: "Women",
          subSubItems: [
            { id: "5-2-1", name: "Dresses" },
            { id: "5-2-2", name: "Jewelry" },
          ],
        },
      ],
    },
    {
      name: "Home & Kitchen",
      icon: <FaCouch />,
      subItems: [
        {
          name: "Furniture",
          subSubItems: [
            { id: "6-1-1", name: "Chairs" },
            { id: "6-1-2", name: "Tables" },
          ],
        },
        {
          name: "Kitchenware",
          subSubItems: [
            { id: "6-2-1", name: "Pots" },
            { id: "6-2-2", name: "Pans" },
          ],
        },
      ],
    },
    {
      name: "Stationeries",
      icon: <FaPencilAlt />,
      subItems: [
        {
          name: "Office Supplies",
          subSubItems: [
            { id: "7-1-1", name: "Pens" },
            { id: "7-1-2", name: "Paper" },
          ],
        },
        {
          name: "School Supplies",
          subSubItems: [
            { id: "7-2-1", name: "Notebooks" },
            { id: "7-2-2", name: "Erasers" },
          ],
        },
      ],
    },
    {
      name: "Toys & Sports",
      icon: <FaGamepad />,
      subItems: [
        {
          name: "Outdoor Games",
          subSubItems: [
            { id: "8-1-1", name: "Balls" },
            { id: "8-1-2", name: "Rackets" },
          ],
        },
        {
          name: "Indoor Games",
          subSubItems: [
            { id: "8-2-1", name: "Board Games" },
            { id: "8-2-2", name: "Puzzles" },
          ],
        },
      ],
    },
    {
      name: "Gadget",
      icon: <FaMobileAlt />,
      subItems: [
        {
          name: "Smartphones",
          subSubItems: [
            { id: "9-1-1", name: "Android" },
            { id: "9-1-2", name: "iOS" },
          ],
        },
        {
          name: "Accessories",
          subSubItems: [
            { id: "9-2-1", name: "Cables" },
            { id: "9-2-2", name: "Chargers" },
          ],
        },
      ],
    },
  ];

  

  return (
    <header
      className="lg:fixed top-[0px] md:top-16 left-0 w-full bg-white text-black shadow z-50"
      onMouseLeave={hideModal}
    >
      <div className="container mx-auto flex items-center justify-center text-center lg:justify-between py-2 px-4 sm:px-6 lg:px-8">
        <button
          className="text-xl gap-1 hidden lg:flex lg:text-2xl"
          onClick={toggleMainModal}
        >
          <RiMenu2Fill />
          <h1 className="hidden xl:flex uppercase text-sm font-semibold">
            Shop By Category
          </h1>
        </button>
        <div className="flex gap-[3px] md:gap-4 text-[5px] lg:text-sm font-semibold uppercase">
          <Slider />
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <button className="flex items-center space-x-2">
            <LiaCommentDollarSolid />
            <Link href="/outlets">
              <span>Our Outlets</span>
            </Link>
          </button>
          <button className="flex items-center space-x-2">
            <LuHelpCircle />
            <Link href="/helpline">
              <span>Help Line</span>
            </Link>
          </button>
        </div>
      </div>

      {/* Modal for Desktop/Laptop/Tablets */}

      {isMainModalOpen && !isMobile && (
        <div
          className="absolute top-[41px] hidden lg:flex lg:pl-[22px] xl:pl-[20px] 2xl:pl-[215px]"
          onMouseLeave={hideModal}
        >
          <div className="grid grid-cols-3">
            <div className="bg-white w-[14rem] md:w-[18rem]">
              <ul>
                {mainMenuItems.map((item, index) => (
                  <li
                    key={index}
                    className="p-4 hover:text-red-600 rounded cursor-pointer flex justify-between"
                    onMouseEnter={() => setActiveMainItem(item)}
                  >
                    <span className="flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </span>
                    <BsChevronRight />
                  </li>
                ))}
              </ul>
            </div>

            {activeMainItem && (
              <div className="bg-white">
                <ul>
                  {activeMainItem.subItems.map((subItem, index) => (
                    <li
                      key={index}
                      className="p-4 hover:bg-rose-600 rounded cursor-pointer flex justify-between"
                      onMouseEnter={() => setActiveSubItem(subItem)}
                    >
                      {subItem.name}
                      <BsChevronRight />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeSubItem && (
              <div className="bg-white">
                <ul>
                  {activeSubItem.subSubItems.map((subSubItem) => (
                    <li
                      key={subSubItem.name}
                      className="p-4 hover:bg-blue-600 rounded"
                    >
                      <Link href={`/filter/${subSubItem.name}`}>
                        {subSubItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {isMainModalOpen && isMobile && (
        <div className="hidden fixed inset-0 top-24 left-8">
          <div
            className="w-[17rem] overflow-hidden bg-white"
            onMouseLeave={hideModal}
          >
            {!activeMainItem && !activeSubItem && (
              <div>
                <ul className="divide-y">
                  {mainMenuItems.map((item, index) => (
                    <li
                      key={index}
                      className="p-4 flex justify-between items-center hover:bg-red-600 rounded cursor-pointer"
                      onClick={() => {
                        setActiveMainItem(item);
                        setActiveSubItem(null);
                      }}
                    >
                      <span className="flex items-center">
                        {item.icon}
                        <span className="ml-2">{item.name}</span>
                      </span>
                      <BsChevronRight />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeMainItem && !activeSubItem && (
              <div>
                <button
                  className="absolute top-11 left-0 text-xl"
                  onClick={() => setActiveMainItem(null)}
                >
                  <BsArrowLeft />
                </button>
                <h2 className="text-lg font-bold p-4">{activeMainItem.name}</h2>
                <ul className="divide-y">
                  {activeMainItem.subItems.map((subItem, index) => (
                    <li
                      key={index}
                      className="p-4 flex justify-between items-center hover:bg-lime-600 rounded cursor-pointer"
                      onClick={() => setActiveSubItem(subItem)}
                    >
                      {subItem.name}
                      <BsChevronRight />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeSubItem && (
              <div>
                <button
                  className="absolute top-11 left-0 text-xl"
                  onClick={() => setActiveSubItem(null)}
                >
                  <BsArrowLeft />
                </button>
                <h2 className="text-lg font-bold p-4">{activeSubItem.name}</h2>

                <ul className="divide-y">
                  {activeSubItem.subSubItems.map((subSubItem) => (
                    <li
                      key={subSubItem.name}
                      className="p-4 hover:bg-indigo-600 rounded cursor-pointer"
                    >
                      <Link href={`/filter/${subSubItem.name}`}>
                        {subSubItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarModal;
