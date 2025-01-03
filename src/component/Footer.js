"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookSquare, FaYoutube, FaPlus, FaMinus } from "react-icons/fa";

const Footer = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  return (
    <footer className="bg-gray-100">
      {/* Desktop and Laptop View */}
      <div className="hidden lg:grid grid-cols-5 px-12 py-12 gap-8 max-w-[1920px] mx-auto">
        {/* First Section */}
        <div className="pt-2">
          <Image
            src="https://www.shwapno.com/images/shwapno_logo.png"
            alt="swapno"
            width={150}
            height={150}
          />
          <h1 className="font-semibold my-3">Always Here for You</h1>
          <p className="text-sm pt-1">Call Us: 16469 (9am-9pm, Everyday)</p>
          <p className="text-sm">Email Us: queries@acilogistics.net</p>
        </div>

        {/* Second Section */}
        <div className="space-y-2">
          <h1 className="font-semibold">Information</h1>
          <Link href="/address"><p className="hover:text-blue-600">Office Address</p></Link>
          <Link href="/shipping"><p className="hover:text-blue-600">Shipping & returns</p></Link>
          <Link href="/about"><p className="hover:text-blue-600">About us</p></Link>
          <Link href="/condition"><p className="hover:text-blue-600">Terms & Condition</p></Link>
        </div>

        {/* Third Section */}
        <div className="space-y-1.5">
          <h1 className="font-semibold">Customer Service</h1>
         <Link href="/contact"><p className="hover:text-blue-600">Contact</p></Link> 
        </div>

        {/* Fourth Section */}
        <div>
          <h1 className="font-semibold">My Account</h1>
          <Link href="/account"><p className="hover:text-blue-600">Account Details</p></Link>
        </div>

        {/* Fifth Section */}
        <div className="space-y-2">
          <h1 className="font-semibold">Pay With</h1>
          <Image
            src="https://d2t8nl1y0ie1km.cloudfront.net/public/payment-methods.png"
            alt="payment"
            width={220}
            height={200}
          />
          <h1 className="font-semibold mt-4">Follow Us</h1>
          <div className="flex gap-4 items-center">
            <FaFacebookSquare className="h-10 w-10 text-blue-600" />
            <FaYoutube className="h-9 w-9 text-white bg-red-500 rounded-full p-1" />
          </div>
        </div>
      </div>

      {/* Mobile and Tablet View */}
      <div className="lg:hidden px-6 py-4">
        {/* First Section */}
        <div className="pt-2">
          <Image
            src="https://www.shwapno.com/images/shwapno_logo.png"
            alt="swapno"
            width={150}
            height={150}
          />
          <h1 className="font-semibold my-3">Always Here for You</h1>
          <p className="text-sm pt-1">Call Us: 16469 (9am-9pm, Everyday)</p>
          <p className="text-sm">Email Us: queries@acilogistics.net</p>
        </div>

        {/* Expandable Sections */}
        <div>
          <div className="flex justify-between items-center my-4">
            <h1 className="font-semibold">Information</h1>
            <button onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {showInfo && (
            <div className="space-y-2">
              <Link href="/address"><p className="hover:text-blue-600">Office Address</p></Link>
              <Link href="/shipping"><p className="hover:text-blue-600">Shipping & returns</p></Link>
              <Link href="/about"><p className="hover:text-blue-600">About us</p></Link>
              <Link href="/condition"><p className="hover:text-blue-600">Terms & Condition</p></Link>
            </div>
          )}
        </div>

        <div>
          <div className="flex justify-between items-center my-4">
            <h1 className="font-semibold">Customer Service</h1>
            <button onClick={() => setShowService(!showService)}>
              {showService ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {showService && (
            <div className="space-y-2">
            <Link href="/contact"><p className="hover:text-blue-600">Contact</p></Link>
            </div>
          )}
        </div>

        <div>
          <div className="flex justify-between items-center my-4">
            <h1 className="font-semibold">My Account</h1>
            <button onClick={() => setShowAccount(!showAccount)}>
              {showAccount ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {showAccount && <div className="space-y-2"><Link href="/account"><p className="hover:text-blue-600">Account Details</p></Link></div>}
        </div>

        {/* Fifth Section */}
        <div className="mt-4">
          <h1 className="font-semibold mb-3">Pay With</h1>
          <Image
            src="https://d2t8nl1y0ie1km.cloudfront.net/public/payment-methods.png"
            alt="payment"
            width={220}
            height={200}
          />
          <h1 className="font-semibold mt-4">Follow Us</h1>
          <div className="flex gap-4 items-center pt-3">
            <FaFacebookSquare className="h-10 w-10 text-blue-600" />
            <FaYoutube className="h-9 w-9 text-white bg-red-500 rounded-full p-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;