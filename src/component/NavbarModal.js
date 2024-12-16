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
          subSubItems: ["Beef", "Chicken", "Fish"],
        },
        {
          name: "Fruits & Vegetables",
          subSubItems: ["Apples", "Carrots", "Potatoes"],
        },
        { name: "Eggs", subSubItems: ["Organic Eggs", "Regular Eggs"] },
        { name: "Baking Needs", subSubItems: ["Flour", "Sugar", "Yeast"] },
      ],
    },
    {
      name: "Baby Food & Care",
      icon: <FaBaby />,
      subItems: [
        { name: "Baby Formula", subSubItems: ["Brand A", "Brand B"] },
        { name: "Baby Snacks", subSubItems: ["Cookies", "Biscuits"] },
      ],
    },
    {
      name: "Home Cleaning",
      icon: <FaBroom />,
      subItems: [
        { name: "Laundry", subSubItems: ["Detergents", "Softeners"] },
        { name: "Cleaning Tools", subSubItems: ["Mops", "Brushes"] },
      ],
    },
    {
      name: "Beauty & Health",
      icon: <FaSpa />,
      subItems: [
        { name: "Makeup", subSubItems: ["Lipstick", "Foundation"] },
        { name: "Skincare", subSubItems: ["Creams", "Lotions"] },
      ],
    },
    {
      name: "Fashion & Lifestyle",
      icon: <FaTshirt />,
      subItems: [
        { name: "Men", subSubItems: ["Shirts", "Pants"] },
        { name: "Women", subSubItems: ["Dresses", "Jewelry"] },
      ],
    },
    {
      name: "Home & Kitchen",
      icon: <FaCouch />,
      subItems: [
        { name: "Furniture", subSubItems: ["Chairs", "Tables"] },
        { name: "Kitchenware", subSubItems: ["Pots", "Pans"] },
      ],
    },
    {
      name: "Stationeries",
      icon: <FaPencilAlt />,
      subItems: [
        { name: "Office Supplies", subSubItems: ["Pens", "Paper"] },
        { name: "School Supplies", subSubItems: ["Notebooks", "Erasers"] },
      ],
    },
    {
      name: "Toys & Sports",
      icon: <FaGamepad />,
      subItems: [
        { name: "Outdoor Games", subSubItems: ["Balls", "Rackets"] },
        { name: "Indoor Games", subSubItems: ["Board Games", "Puzzles"] },
      ],
    },
    {
      name: "Gadget",
      icon: <FaMobileAlt />,
      subItems: [
        { name: "Smartphones", subSubItems: ["Android", "iOS"] },
        { name: "Accessories", subSubItems: ["Cables", "Chargers"] },
      ],
    },
  ];

  return (
    <header
      className="fixed top-14 md:top-16 left-0 w-full bg-green-500 text-black shadow-md z-50"
      onMouseLeave={hideModal}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-4 sm:px-6 lg:px-8">
        <button className="text-xl sm:text-2xl" onClick={toggleMainModal}>
          <RiMenu2Fill />
        </button>
        <div className="flex space-x-4 text-[10px] md:text-sm font-semibold uppercase">
          <Link href="#" className="hover:text-yellow-400">
            Great Deals
          </Link>
          <Link href="#" className="hover:text-yellow-400">
            Reckitt Special
          </Link>
          <Link href="#" className="hover:text-yellow-400">
            Our Brands
          </Link>
          <Link href="#" className="hover:text-yellow-400">
            Buy & Save More
          </Link>
          <Link href="#" className="hover:text-yellow-400">
            Deal Hub
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <button className="flex items-center space-x-2">
            <LiaCommentDollarSolid />
            <span>Our Outlets</span>
          </button>
          <button className="flex items-center space-x-2">
            <LuHelpCircle />
            <span>Help Line</span>
          </button>
        </div>
      </div>

      {/* Modal for Desktop/Laptop/Tablets */}
      {isMainModalOpen && !isMobile && (
        <div
          className="absolute top-full hidden md:flex pl-9 xl:pl-[150px] 2xl:pl-[224px] rounded-lg"
          onMouseLeave={hideModal}
        >
          <div className="grid grid-cols-3">
            {/* Main Menu */}
            <div className="bg-gray-100 w-[14rem] md:w-[18rem]">
              <ul>
                {mainMenuItems.map((item, index) => (
                  <li
                    key={index}
                    className="p-4 hover:bg-red-600 rounded cursor-pointer flex justify-between"
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

            {/* Sub Menu */}
            {activeMainItem && (
              <div className="bg-gray-100">
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

            {/* Sub-Sub Menu */}
            {activeSubItem && (
              <div className="bg-gray-100">
                <ul>
                  {activeSubItem.subSubItems.map((subSubItem, index) => (
                    <li key={index} className="p-4 hover:bg-blue-600 rounded">
                      {subSubItem}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal for Mobile */}
      {isMainModalOpen && isMobile && (
        <div className="fixed inset-0 flex top-24 left-8">
          <div className="rounded-lg w-[17rem] overflow-hidden bg-gray-100" onMouseLeave={hideModal}>
            {/* Mobile view content */}
            {!activeMainItem && !activeSubItem && (
              <div>
                <h2 className="text-lg font-bold p-4">Main Menu</h2>
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

            {/* Sub-menu */}
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

            {/* Sub-Sub-menu */}
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
                  {activeSubItem.subSubItems.map((subSubItem, index) => (
                    <li
                      key={index}
                      className="p-4 hover:bg-indigo-600 rounded cursor-pointer"
                    >
                      {subSubItem}
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
