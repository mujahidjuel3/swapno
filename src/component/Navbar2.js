"use client";
import { LiaCommentDollarSolid } from "react-icons/lia";
import { LuHelpCircle } from "react-icons/lu";
import { BsChevronRight } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAppleAlt, FaBaby, FaBroom, FaSpa, FaTshirt, FaCouch, FaPencilAlt, FaGamepad, FaMobileAlt } from "react-icons/fa";
import Link from 'next/link';
import { useState } from 'react';

const Navbar2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMainItem, setActiveMainItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setActiveMainItem(null);
    setActiveSubItem(null);
  };

  const handleMouseEnterMain = (item) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveMainItem(item);
  };

  const handleMouseEnterSub = (subItem) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveSubItem(subItem);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMainItem(null);
      setActiveSubItem(null);
    }, 3000); // 3000ms delay before hiding
    setHoverTimeout(timeout);
  };

  const handleClickSubSubItem = (item) => {
    alert(`You selected ${item}`);
  };

  const mainMenuItems = [
    { name: "Food", icon: <FaAppleAlt />, subItems: ["Meat & Fish", "Fruits & Vegetables", "Eggs", "Baking Needs"] },
    { name: "Baby Food & Care", icon: <FaBaby />, subItems: ["Baby Formula", "Baby Snacks"] },
    { name: "Home Cleaning", icon: <FaBroom />, subItems: ["Laundry", "Cleaning Tools"] },
    { name: "Beauty & Health", icon: <FaSpa />, subItems: ["Makeup", "Skincare", "Haircare"] },
    { name: "Fashion & Lifestyle", icon: <FaTshirt />, subItems: ["Men", "Women", "Accessories"] },
    { name: "Home & Kitchen", icon: <FaCouch />, subItems: ["Furniture", "Kitchenware"] },
    { name: "Stationeries", icon: <FaPencilAlt />, subItems: ["Office Supplies", "School Supplies"] },
    { name: "Toys & Sports", icon: <FaGamepad />, subItems: ["Outdoor Games", "Indoor Games"] },
    { name: "Gadget", icon: <FaMobileAlt />, subItems: ["Smartphones", "Tablets", "Accessories"] },
  ];

  return (
    <header className="fixed top-12 sm:top-12 md:top-16 left-0 w-full bg-green-500 text-black shadow-md z-50">
    <div className="container mx-auto flex items-center justify-between py-2 px-2 lg:px-0">
      {/* Shop By Category Button */}
      <div className="flex items-center space-x-2">
        <button 
          className="text-xl sm:flex sm:text-2xl" 
          onClick={toggleSidebar}
        >
         <RiMenu2Fill />
        </button>
        <span className="hidden md:flex font-semibold uppercase">Shop By Category</span>
      </div>
  
      {/* Desktop Navigation Links */}
      <div className=" sm:flex items- sm:items-center sm:pr-0 pr-11 space-x-2  uppercase text-[10px] sm:text-xs font-semibold">
        <Link href="#" className="hover:text-yellow-400 sm:border rounded py-1 px-2 transition-all duration-200">Great Deals</Link>
        <Link href="#" className="hover:text-yellow-400 sm:border rounded py-1 px-2 transition-all duration-200">Our Brands</Link>
        <Link href="#" className="hover:text-yellow-400 sm:border rounded py-1 px-2 transition-all duration-200">Buy & Save More</Link>
        <Link href="#" className="hover:text-yellow-400 sm:border rounded py-1 px-2 transition-all duration-200">Deal Hub</Link>
      </div>
  
      {/* Our Outlets and Help Line for Desktop */}
      <div className="hidden md:flex items-center space-x-2">
        <button className="flex items-center space-x-1 text-xs py-1 px-2  hover:bg-yellow-500 transition-all duration-200">
          <LiaCommentDollarSolid className="h-4 w-4" />
          <span>Our Outlets</span>
        </button>
        <button className="flex items-center space-x-1 text-xs py-1 px-2  hover:bg-yellow-500 transition-all duration-200">
          <LuHelpCircle className="h-4 w-4" />
          <span>Help Line</span>
        </button>
      </div>
    </div>
  
    {/* Main Sidebar */}
    <aside 
      className={`fixed md:top-30 lg:top-30 left-0 w-64 bg-white shadow-2xl h-[475px] rounded transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} z-50`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-4">
        <ul className="space-y-0">
          {mainMenuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnterMain(item.name)}
              className="flex items-center justify-between text-gray-800 hover:text-rose-500 rounded p-2 cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                {item.icon}
                <span>{item.name}</span>
              </div>
              <BsChevronRight />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  
    {/* Sub Sidebar */}
    {activeMainItem && (
      <aside 
        className="fixed md:top-30 lg:top-30 left-64 w-64 bg-gray-50 shadow-2xl h-[475px] rounded z-50"
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-4">
          <ul className="space-y-0">
            {mainMenuItems
              .find(item => item.name === activeMainItem)
              .subItems.map((subItem, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnterSub(subItem)}
                  className="flex items-center justify-between text-gray-800 hover:bg-red-500 rounded p-2 cursor-pointer"
                >
                  <span>{subItem}</span>
                  <BsChevronRight />
                </li>
              ))}
          </ul>
        </div>
      </aside>
    )}
  
    {/* Sub-Sub Sidebar */}
    {activeSubItem && (
      <aside 
        className="fixed md:top-30 lg:top-30 sm:left-[32rem] w-64 bg-gray-100 shadow-2xl h-[475px] rounded z-50"
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-4">
          <ul className="space-y-0">
            <li onClick={() => handleClickSubSubItem("Option 1")} className="text-gray-800 hover:bg-lime-500 rounded p-2 cursor-pointer">Option 1 under {activeSubItem}</li>
            <li onClick={() => handleClickSubSubItem("Option 2")} className="text-gray-800 hover:bg-lime-500 rounded p-2 cursor-pointer">Option 2 under {activeSubItem}</li>
            <li onClick={() => handleClickSubSubItem("Option 3")} className="text-gray-800 hover:bg-lime-500 rounded p-2 cursor-pointer">Option 3 under {activeSubItem}</li>
          </ul>
        </div>
      </aside>
    )}
  
    {/* Overlay for closing sidebar */}
    {isSidebarOpen && (
      <div 
        className="inset-0 bg-black opacity-50 z-20" 
        onClick={toggleSidebar}
      ></div>
    )}
  </header>  
  );
};

export default Navbar2;