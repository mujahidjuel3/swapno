"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CiDeliveryTruck,
  CiMenuKebab,
  //CiLogout,
} from "react-icons/ci";
//import { IoMdHeart, IoMdListBox } from "react-icons/io";
//import { MdRequestQuote } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
//import { FaAddressBook } from "react-icons/fa";
import Image from "next/image";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignOpen, setIsSignOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSign = () => {
    setIsSignOpen(!isSignOpen);
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In Triggered");
    // Replace with Google Sign-In logic
  };

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    toggleSign();
  };


  return (
    <header className="fixed top-0 left-0 w-full bg-red-600 text-white z-50">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 lg:px-8 gap-5">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/shwapno.png"
            alt="Logo"
            width={100}
            height={40}
            className="h-10 w-28 md:h-12 md:w-32"
          />
        </div>

        {/* Location */}
        <div className="hidden lg:flex items-center space-x-2">
          <button className="text-xs py-2 px-3 border flex items-center rounded-md space-x-2">
            <CiDeliveryTruck className="text-lg" />
            <span>Select your delivery location</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 max-w-[400px] lg:max-w-[600px]">
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
        <div className="hidden xl:flex items-center">
          <a href="https://play.google.com/store/apps/details?id=com.shwapno">
            <Image
              src="/downloadnow.png"
              alt="Download App"
              width={100}
              height={40}
              className="h-10 w-32"
            />
          </a>
        </div>

        {/* Bangla Button */}
        <div className="hidden lg:flex items-center">
          <button className="text-xs py-2 px-4 border rounded-md">বাংলা</button>
        </div>

        {/* Sign In */}
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleSign}
            className="flex items-center space-x-1 text-xs md:rounded py-2 px-3"
          >
            <CgProfile className="md:h-4 md:w-4 w-6 h-6" />
            <span className="hidden md:flex">Sign in / Sign up</span>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            <CiMenuKebab />
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className="fixed pt-24 pr-10 inset-0 bg-black bg-opacity-20 flex justify-end z-50">
          <div className="w-64 bg-white h-64 rounded-l-lg shadow-lg p-4">
            <button
              onClick={toggleMenu}
              className="text-red-600 font-bold text-2xl self-end"
            >
              ✕
            </button>
            <ul className="mt-4 ml-16 space-y-4">
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

      {/* Sign Modal */}
      {isSignOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="w-[20rem] bg-white h-[25rem] rounded-lg shadow-lg p-4">
      {/* Close Button */}
      <button
        onClick={toggleSign}
        className="text-red-600 font-bold text-2xl self-end pl-[260px] pb-10"
      >
        ✕
      </button>

      {/* Title */}
      <h2 className="text-sm text-black justify-center text-center font-bold mb-8">
        Sign in to get best online experience
      </h2>

      {/* Phone Number Input */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="flex items-center">
            <span className="bg-gray-200 px-3 py-2 rounded-l border border-gray-300">
              +880
            </span>
            <input
              type="text"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{9}$/,
                  message: "Invalid phone number",
                },
              })}
              placeholder="1XXXXXXXXX"
              className={`w-full p-2 border rounded-r ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-red-500 text-white w-full py-2 rounded-full font-bold"
        >
          Login
        </button>
      </form>

      {/* Google Sign-In */}
      <div className="mt-4 text-center">
        <p className="text-black text-sm">or, sign in with</p>
        <button
          onClick={handleGoogleSignIn}
          className="mt-2 bg-white border border-gray-300 flex items-center justify-center py-2 w-full rounded-full shadow hover:bg-gray-100"
        >
          <Image
            src="/google.png"
            alt="Google"
            height={5}
            width={5}
            className="w-5 h-5 mr-2"
          />
          <span className="text-black font-bold">Sign in with Google</span>
        </button>
      </div>
    </div>
  </div>
)}
    </header>
  );
};

export default Navbar;
