"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import cardData10 from "../../../data/cardData10.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Table, TableBody } from "@/components/ui/table";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useCart } from "../../../context/cartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMotorcycle } from "react-icons/fa6";


import Navbar from "../../../component/Navbar";
import NavbarModal from "../../../component/NavbarModal";
import Footer from "../../../component/Footer";
import FooterBottom from "../../../component/FooterBottom";
import CartSidebar from "../../../component/CartSidebar";
import CartBottom from "../../../component/CartBottom";
import NavTop from "../../../component/NavTop";
import Message from "../../../component/Message";


const Checkout = () => {
  const [deliverySlot, setDeliverySlot] = useState({
    date: "2025-01-02",
    time: "2:00 PM - 3:00 PM",
  });
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const { cartItems, handleRemove, updateQuantity } = useCart();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold text-gray-700">
        Your cart is empty!
      </div>
    );
  }

 
  // Screen size-specific card display logic
  const getGridColumns = () => {
    if (windowWidth >= 1280) return "grid-cols-2"; // 6 columns for desktop
    if (windowWidth >= 1024) return "grid-cols-2"; // 5 columns for laptop
    if (windowWidth >= 668) return "grid-cols-2"; // 3 columns for tablet
    return "grid-cols-1"; // 2 columns for mobile
  };

  return (
    <div>
      <NavTop />
      <Navbar />
      <NavbarModal />
    <div className="flex flex-col lg:flex-row p-4 gap-4 container mx-auto py-8 px-4 lg:px-8 mt-24">
      <Card className="flex-1 w-[40%]">
        <div className="flex-1">
          <CardHeader className="bg-blue-600 py-1 rounded-t-md">
            <CardTitle className="flex gap-1">
              <FaMotorcycle className="text-xl" /> 1-2 hours
            </CardTitle>
          </CardHeader>
          <CardTitle className="flex gap-1 px-4 text-sm pt-3">
            Delivery Slot
          </CardTitle>
          <CardContent className="flex justify-between border-2 pt-3 m-2 rounded-md">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <Input
                type="date"
                value={deliverySlot.date}
                onChange={(e) =>
                  setDeliverySlot((prev) => ({ ...prev, date: e.target.value }))
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time Slot
              </label>
              <Select
                onValueChange={(value) =>
                  setDeliverySlot((prev) => ({ ...prev, time: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder={deliverySlot.time} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2:00 PM - 3:00 PM">
                    2:00 PM - 3:00 PM
                  </SelectItem>
                  <SelectItem value="3:00 PM - 4:00 PM">
                    3:00 PM - 4:00 PM
                  </SelectItem>
                  <SelectItem value="4:00 PM - 5:00 PM">
                    4:00 PM - 5:00 PM
                  </SelectItem>
                  <SelectItem value="5:00 PM - 6:00 PM">
                    5:00 PM - 6:00 PM
                  </SelectItem>
                  <SelectItem value="6:00 PM - 7:00 PM">
                    6:00 PM - 7:00 PM
                  </SelectItem>
                  <SelectItem value="7:00 PM - 8:00 PM">
                    7:00 PM - 8:00 PM
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>

          <CardHeader className=""></CardHeader>
          <p className="px-4 text-lg font-bold">{cartItems.length} Items</p>
          <CardContent>
            <Table>
              <TableBody className="">
                <div className="gap-10 overflow-y-auto">
                  {/* Cart Items */}
                  <div className=" space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center bg-white p-2 shadow-sm"
                      >
                        <div className="flex items-center space-x-4">
                          {/* Product Image */}
                          <div className="flex flex-col">
                            <h2 className="text-sm font-semibold">
                              {item.name}
                            </h2>
                            <p className="text-sm text-gray-500">
                              ৳{item.price.toFixed(2)} <sspan> | </sspan> VAT:
                              ৳0.00
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          {/* Delete Button */}
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="w-8 h-8 text-red-500 rounded-md flex justify-center items-center"
                          >
                            <RiDeleteBin6Line />
                          </button>
                          {/* Quantity Controls */}
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                            className="w-8 h-8 text-white rounded-full flex justify-center bg-gray-200 shadow items-center disabled:bg-gray-50"
                          >
                            <FiMinus className="text-xl text-red-600" />
                          </button>
                          <span className="text-lg font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 text-white rounded-full flex justify-center bg-gray-200 shadow items-center "
                          >
                            <FiPlus className="text-xl text-red-600" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TableBody>
            </Table>
          </CardContent>
        </div>
      </Card>

      <div className="w-[30%] space-y-6">
        <CardHeader className="flex w-full py-0 px-0">
          <CardTitle className="">
            <h2 className="border-b flex items-center rounded-t-md justify-between bg-yellow-400 px-2">
              <p className="text-xl font-bold">Delivery ddress</p>
              <p className="flex items-center gap-1">
                {" "}
                <FiPlus className="text-xl text-red-600" />
                <span clssName="text-xs">Add New</span>
              </p>
            </h2>
          </CardTitle>
          <p className="px-5 py-5">No address available</p>
        </CardHeader>
        <div className="border rounded">
          <div
            className="flex items-center justify-between cursor-pointer mb-2"
            onClick={() => setShowCouponInput(!showCouponInput)}
          >
            <span className="text-sm font-bold px-5">Apply coupon</span>
            <button className="text-black text-xs">
              {showCouponInput ? "▲" : "▼"}
            </button>
          </div>

          {showCouponInput && (
            <div className="flex items-center shadow-md rounded-md px-4 py-2">
              <input
                type="text"
                placeholder="Type your coupon code."
                className="relative w-full py-1 px-3 text-sm text-black rounded focus:ring-2 focus:outline-none border"
              />
              <button className="absolute ml-52 bg-red-600 px-6 py-2 text-white text-xs rounded-md">
                Apply coupon
              </button>
            </div>
          )}
        </div>

        {/* Add Note Section */}
        <div className="border rounded shadow-md pt-3">
        <div className="items-center px-4 py-2">
          <p className="text-xs font-bold pb-3">Add note</p>
          <div className="flex max-w-xs rounded-md border-2">
            <input
              type="text"
              placeholder="You can add your special note here."
              className="w-full py-1 px-2 text-sm text-black rounded focus:ring-2 focus:py-4 focus:outline-none border"
            />
          </div>
        </div>
        </div>
        <div className="px-1 py-2 border shadow-md rounded">
          <div className="bg-white px-4 ">
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">৳{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">VAT</span>
              <span className="font-semibold">৳0.00</span>
            </div>
            <div className="flex justify-between border-t pt-4 font-semibold">
              <span>Total</span>
              <span className="text-blue-600">৳{totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <Button
          size="lg"
          className="w-full bg-red-500 text-white py-2 px-0 mt-6 rounded-md hover:bg-red-600"
        >
          Confirm Order
        </Button>
      </div>

      <div className="w-[30%]">
        <CardHeader className="flex w-full py-0 px-0">
          <h2 className="text-xl font-semibold pb-4">Cross Sell Products</h2>
        </CardHeader>
        
        <div>
        <div className={`grid gap-4 ${getGridColumns()}`}>
            {cardData10.map((product) => (
              <Card
                key={product.id}
                className="border rounded-lg shadow hover:shadow-lg h-[180px] flex flex-col justify-between overflow-hidden"
              >
                <Link href={`/details/${product.id}`} legacyBehavior>
                  <a>
                    {/* Product Image */}
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={300}
                      height={200}
                      className="w-full object-cover h-[100px] rounded-t-md"
                    />
                    {/* Product Info */}
                    <div className="text-center p-2 flex-1">
                      <h3 className="text-sm font-semibold mb-1">
                        {product.title}
                      </h3>
                      <p className="text-red-500 font-bold">
                        ৳{product.price}
                      </p>
                    </div>
                  </a>
                </Link>
              </Card>
            ))}
          </div>
    </div>
      </div>
    </div>
    <Footer />
      <FooterBottom />
      <CartSidebar />
      <CartBottom />
      <Message />
    </div>
  );
};

export default Checkout;
