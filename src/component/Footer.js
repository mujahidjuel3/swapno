"use client";
import Image from 'next/image';
import { useState } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa";

const Footer = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  return (
    <div className='pt-10'>
      {/* Main Grid for Desktop and Laptop */}
      <div className='hidden md:grid grid-cols-5 bg-gray-100 px-12 py-12 gap-4'>
        {/* First Section */}
        <div className='pt-2'>
          <Image src="https://www.shwapno.com/images/shwapno_logo.png" alt='swapno' width={150} height={150} />
          <h1 className='font-semibold my-3'>Always Here for You</h1>
          <p className='text-sm pt-1'>Call Us: 16469 (9am-9pm, Everyday)</p>
          <p className='text-sm'>Email Us: queries@acilogistics.net</p>
        </div>

        {/* Second Section */}
        <div className='space-y-2'>
          <h1 className='font-semibold'>Information</h1>
          <p>Office Address</p>
          <p>Shipping & returns</p>
          <p>About us</p>
          <p>Terms & Condition</p>
        </div>

        {/* Third Section */}
        <div className='space-y-1.5'>
          <h1 className='font-semibold'>Customer Service</h1>
          <p>Contact</p>
        </div>

        {/* Fourth Section */}
        <div>
          <h1 className='font-semibold'>My Account</h1>
        </div>

        {/* Fifth Section */}
        <div className='space-y-2'>
          <h1 className='font-semibold'>Pay With</h1>
          <Image src="https://d2t8nl1y0ie1km.cloudfront.net/public/payment-methods.png" alt='payment' width={220} height={200} />
          <h1 className='font-semibold'>Follow Us</h1>
          <div className='flex gap-4 items-center'>
            <FaFacebookSquare className='h-10 w-10 bg-gray-100 text-blue-600' />
            <FaYoutube className='h-9 w-9 px-2 py-2 text-white bg-red-500 rounded' />
          </div>
        </div>
      </div>

      {/* Mobile and Tablet View */}
      <div className='md:hidden bg-gray-100 px-6 py-4'>
        {/* First Section */}
        <div className='pt-2'>
          <Image src="https://www.shwapno.com/images/shwapno_logo.png" alt='swapno' width={150} height={150} />
          <h1 className='font-semibold my-3'>Always Here for You</h1>
          <p className='text-sm pt-1'>Call Us: 16469 (9am-9pm, Everyday)</p>
          <p className='text-sm'>Email Us: queries@acilogistics.net</p>
        </div>

        {/* Expandable Sections */}
        <div>
          <div className='flex justify-between items-center my-4'>
            <h1 className='font-semibold'>Information</h1>
            <button onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {showInfo && (
            <div className='space-y-2'>
              <p>Office Address</p>
              <p>Shipping & returns</p>
              <p>About us</p>
              <p>Terms & Condition</p>
            </div>
          )}
        </div>

        <div>
          <div className='flex justify-between items-center my-4'>
            <h1 className='font-semibold'>Customer Service</h1>
            <button onClick={() => setShowService(!showService)}>
              {showService ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {showService && (
            <div className='space-y-2'>
              <p>Contact</p>
            </div>
          )}
        </div>

        <div>
          <div className='flex justify-between items-center my-4'>
            <h1 className='font-semibold'>My Account</h1>
            <button onClick={() => setShowAccount(!showAccount)}>
              {showAccount ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {showAccount && <div className='space-y-2'><p>Account Details</p></div>}
        </div>

        {/* Fifth Section */}
        <div className='mt-4'>
          <h1 className='font-semibold mb-3'>Pay With</h1>
          <Image src="https://d2t8nl1y0ie1km.cloudfront.net/public/payment-methods.png" alt='payment' width={220} height={200} />
          <h1 className='font-semibold mt-4'>Follow Us</h1>
          <div className='flex gap-4 items-center pt-3'>
            <FaFacebookSquare className='h-10 w-10 bg-gray-100 text-blue-600' />
            <FaYoutube className='h-9 w-9 px-2 py-2 text-white bg-red-500 rounded' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;