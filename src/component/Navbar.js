
"use client";
import React, { useState } from 'react';
import { CiDeliveryTruck, CiMenuKebab, CiLogout } from "react-icons/ci";
import { IoMdHeart, IoMdListBox  } from "react-icons/io";
import { MdRequestQuote } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaAddressBook } from "react-icons/fa";
import Image from 'next/image';
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineInfoCircle } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignOpen, setIsSignOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSign = () => {
    setIsSignOpen(!isSignOpen);
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-red-600 text-white z-50">
  <div className="container mx-auto flex items-center justify-between py-1 gap-4 px-2 lg:px-0">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <Image src="/shwapno.png" alt="Logo" width={100} height={40} className="h-10 w-28 md:h-14 md:w-32" />
    </div>

    {/* Location */}
    <div className="hidden md:flex items-center space-x-2">
      <button className="text-xs py-2 px-2 border flex items-center rounded space-x-1">
        <CiDeliveryTruck className="text-lg" />
        <span>Select your delivery location</span>
      </button>
    </div>
    {/* Search Bar */}
    <div className="flex flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <input
            type="text"
            placeholder="Search your products"
            className="w-full py-2 px-4 text-sm text-black rounded-l-lg focus:outline-none"
          />
          <button className="bg-yellow-500 px-4 rounded-r-lg hover:bg-yellow-600 transition">
            🔍
          </button>
        </div>

    {/* Download App */}
    <div className="hidden lg:flex items-center space-x-2">
      <a href="https://play.google.com/store/apps/details?id=com.shwapno">
        <Image src="/downloadnow.png" alt="Download App" width={100} height={40} className="h-10 w-32" />
      </a>
    </div>

    {/* Bangla Button */}
    <div className="hidden md:flex items-center space-x-2">
      <button className="text-xs py-2 px-4 space-x-1 border rounded">বাংলা</button>
    </div>

    {/* Sign In */}
    <div className="flex items-center space-x-2">
      <button onClick={toggleSign} className="flex items-center space-x-1 text-xs md:rounded py-2 px-2 md:border">
        <CgProfile className="md:h-4 md:w-4 w-6 h-6" />
        <span className='hidden md:flex'>Sign in / Sign up</span>
      </button>
    </div>

     {/* Mobile Sign Modal */}
  {isSignOpen && (
    <div className="fixed top-[5.75rem] inset-0 bg-black bg-opacity-10 flex justify-end z-50">
      <div className="w-64 bg-gray-300 h-96 rounded-xl shadow-lg p-4">
        <button onClick={toggleSign} className="text-red-600 font-bold text-xl self-end">
          ✕
        </button>
        <ul className="space-y-6 ml-20">
          <li className="flex items-center space-x-2 text-gray-800 hover:text-red-500">
            <MdRequestQuote  className="text-2xl text-red-500 oreange-500" />
            <span>Order History</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-red-500">
            <IoMdListBox className="text-2xl text-red-500 oreange-500" />
            <span>Return Request</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-red-500">
            <CgProfile className="text-2xl text-red-500 oreange-500" />
            <span>Persional Info</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-red-500">
            <FaAddressBook className="text-2xl text-red-500 oreange-500" />
            <span>Address Book</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-red-500">
          <IoMdHeart className="text-2xl text-red-500 oreange-500" />
            <span>Wishlist</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-red-500">
          <CiLogout className="text-2xl text-red-500 oreange-500" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )}

    {/* Mobile Menu Icon */}
    <div className="md:hidden sm:pr-0 pr-11">
      <button onClick={toggleMenu} className='text-white text-2xl items-center pt-2 font-bold'>
        <CiMenuKebab />
      </button>
    </div>
  </div>

  {/* Mobile Menu Modal */}
  {isMenuOpen && (
    <div className="fixed top-[5.75rem] inset-0 bg-black bg-opacity-10 flex justify-end z-50">
      <div className="w-60 bg-gray-300 h-60 rounded-xl shadow-lg p-4">
        <button onClick={toggleMenu} className="text-red-600 font-bold text-xl self-end">
          ✕
        </button>
        <ul className="space-y-6 ml-20">
          <li className="flex items-center space-x-2 text-gray-800 hover:text-red-500">
            <AiOutlineHome className="text-2xl" />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-red-500">
            <AiOutlineShoppingCart className="text-2xl" />
            <span>Shop</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-red-500">
            <CgProfile className="text-2xl" />
            <span>Profile</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-800 hover:text-red-500">
            <AiOutlineInfoCircle className="text-2xl" />
            <span>About</span>
          </li>
        </ul>
      </div>
    </div>
  )}
</header>
  );
};

export default Navbar;
