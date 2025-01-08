"use client";

import { useState } from "react";
import { useCart } from "../context/cartContext";
import { RiCloseFill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiShoppingBasket, CiDeliveryTruck, CiLocationOn } from "react-icons/ci";
import { FiPlus, FiMinus } from "react-icons/fi";
import Link from "next/link";

const CartBottom = () => {
  const [isOpen, setIsOpen] = useState(false);
    const { cartItems, updateQuantity, handleRemove } = useCart();
  
    const toggleCart = () => setIsOpen(!isOpen);
  
    // Calculate Total Price
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

  return (
    <>
      {/* Fixed Cart Bottom (Mobile Only) */}
      <div className="fixed bottom-0 left-0 w-full z-50 lg:hidden">
        <div className="flex justify-between items-center px-4 py-2 bg-white shadow-lg">
          {/* Location */}
          <button className="flex items-center text-xs space-x-2">
            <CiLocationOn className="text-lg" />
            <span>Select your location</span>
          </button>

          {/* Cart Icon */}
          <div
            onClick={toggleCart}
            className="relative flex items-center justify-center bottom-7"
          >
            
            <CiShoppingBasket className="h-10 w-10 text-white bg-red-600 rounded-full p-2 cursor-pointer" />
           
            <div className="absolute bottom-8 right-0 bg-gray-600 text-white rounded-full text-xs px-1">
              {cartItems.length}
            </div>
          </div>

          {/* Delivery Time */}
          <button className="flex items-center text-xs space-x-2">
            <CiDeliveryTruck className="text-lg" />
            <span>Today: 12PM - 1PM</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-[96px] right-0 h-[27rem] w-[21rem] bg-white shadow-lg z-50">
          <div className="flex items-center bg-yellow-400 justify-between p-4 border-b">
            <div className="flex gap-1 items-center justify-center">
              <CiShoppingBasket  className="text-2xl text-red-600" />
              <p className="bg-red-600 text-white px-2 rounded text-xs font-semibold">
              {cartItems.length} Items
              </p>
            </div>
             <div>
             <RiCloseFill
              onClick={toggleCart}
              className="text-2xl text-gray-600 cursor-pointer"
            />
             </div>
          </div>

          <div className="p-4 flex flex-col gap-4 overflow-y-auto h-[calc(100%-140px)]">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <p className="font-semibold text-rose-600 text-sm">{item.name}</p>
                  <p className="text-xs text-black">
                    ৳{Number(item.price).toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                <button
                    onClick={() => handleRemove(item.id)}
                    className="px-2 py-1 text-red-600"
                  >
                    <RiDeleteBin6Line />
                  </button>
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    disabled={item.quantity === 1}
                    className="bg-gray-200 px-2 py-2 shadow  rounded-full"
                  >
                    <FiMinus className="text-xl text-red-600"/>
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="bg-gray-200 px-2 py-2 shadow  rounded-full"
                  >
                    <FiPlus className="text-xl text-red-600"/>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t">
            <div className="px-4">
              <div className="flex max-w-xs rounded-md border-2">
              <input
                type="text"
                placeholder="Type your coupon code"
                className="relative w-full py-1 px-2 text-sm text-black rounded-md focus:outline-none"
               />
               <button className="absolute bg-red-600 px-2 py-1 right-4 items-center justify-center pr-9 rounded-md border-2">
                <p className="text-xs">Apply coupon</p>
               </button>
             </div>
             </div>
            <div className="flex justify-between pt-1 px-4 font-semibold text-lg">
              <span>Total:</span>
              <span>৳{totalPrice.toFixed(2)}</span>
            </div>
            <Link href="/checkout/defaultId" legacyBehavior>
            <button className="mt-2 w-full bg-red-600 text-white py-2 rounded">
              Place Order
            </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartBottom;
