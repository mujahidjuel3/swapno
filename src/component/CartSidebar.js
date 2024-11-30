"use client";

import { useState } from "react";
import { RiShoppingBag2Fill, RiCloseFill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiShoppingBasket } from "react-icons/ci";
import { FiPlus,FiMinus } from "react-icons/fi";

const CartSidebar = ({ cartItems, setCartItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // Calculate Total Price (Ensure Numbers are Used)
  const totalPrice = cartItems.reduce((acc, item) => {
    const itemPrice = Number(item.price) || 0; // Convert price to a number
    const itemQuantity = Number(item.quantity) || 0;
    console.log(itemQuantity); // Convert quantity to a number
    return acc + itemPrice * itemQuantity;
  }, 0);

  return (
    <>
      {/* Sidebar Button */}
      <div className="fixed top-1/2 right-0 z-50 transform -translate-y-1/2">
        <div
          onClick={toggleCart}
          className="relative h-36 w-28 flex items-center justify-center rounded cursor-pointer"
        >
          <RiShoppingBag2Fill className="h-24 w-20 text-red-600" />
          <div className="absolute bottom-2 flex flex-col pb-8 items-center">
            <p className="bg-red-600 text-white px-2 rounded text-xs font-semibold">
              {cartItems.length} Items
            </p>
            <p className="bg-black text-white px-1 w-full text-xs font-semibold">
              ৳{totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar Content */}
      {isOpen && (
        <div className="fixed top-[84px] sm:top-[90px] md:top-[105px] right-0 h-[27rem] w-[22rem] bg-white shadow-lg z-50">
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
              <div className="flex max-w-xs rounded-full border-2">
              <input
                type="text"
                placeholder="Type your coupon code"
                className="relative w-full py-1 px-2 text-sm text-black rounded focus:outline-none"
               />
               <button className="absolute bg-red-600 px-2 py-1 right-4 items-center justify-center pr-9 rounded-full border-2">
                <p className="text-xs">Apply coupon</p>
               </button>
             </div>
             </div>
            <div className="flex justify-between pt-1 px-4 font-semibold text-lg">
              <span>Total:</span>
              <span>৳{totalPrice.toFixed(2)}</span>
            </div>
            <button className="mt-2 w-full bg-red-600 text-white py-2 rounded">
              Place Order
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSidebar;
