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

  return (
    <div className="font-sans">
      <NavTop />
      <Navbar />
      <NavbarModal />
      <div className="flex flex-col lg:flex-row gap-4 container mx-auto py-8 px-4 pt-12 lg:pt-32 lg:px-8">
        <Card className="flex-1">
          <div>
            <CardHeader className="bg-blue-600 py-1 rounded-t-md">
              <CardTitle className="flex gap-1">
                <FaMotorcycle className="text-xl" /> 1-2 hours
              </CardTitle>
            </CardHeader>
            <CardTitle className="px-4 text-sm pt-3">Delivery Slot</CardTitle>
            <CardContent className="flex flex-col md:flex-row justify-between border-2 pt-3 m-2 rounded-md gap-1">
  {/* Date Input */}
  <div className="mb-4 w-full">
    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
    <Input
      type="date"
      value={deliverySlot.date}
      onChange={(e) =>
        setDeliverySlot((prev) => ({ ...prev, date: e.target.value }))
      }
    />
  </div>
  {/* Time Slot Select */}
  <div className="mb-4 w-full">
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
        {[
          "2:00 PM - 3:00 PM",
          "3:00 PM - 4:00 PM",
          "4:00 PM - 5:00 PM",
          "5:00 PM - 6:00 PM",
          "6:00 PM - 7:00 PM",
          "7:00 PM - 8:00 PM",
        ].map((slot) => (
          <SelectItem key={slot} value={slot}>
            {slot}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
</CardContent>

            <CardTitle className="px-4 text-lg font-bold">{cartItems.length} Items</CardTitle>
            <CardContent>
              <Table>
                <TableBody className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-wrap justify-between items-center bg-white p-2 shadow-sm rounded-md"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex flex-col">
                          <h2 className="text-sm font-semibold">{item.name}</h2>
                          <p className="text-sm text-gray-500">
                            ৳{item.price.toFixed(2)} | VAT: ৳0.00
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="w-8 h-8 text-red-500 rounded-md flex justify-center items-center"
                        >
                          <RiDeleteBin6Line />
                        </button>
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity <= 1}
                          className="w-8 h-8 text-white bg-gray-200 shadow rounded-full flex justify-center items-center disabled:bg-gray-50"
                        >
                          <FiMinus className="text-xl text-red-600" />
                        </button>
                        <span className="text-lg font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 text-white bg-gray-200 shadow rounded-full flex justify-center items-center"
                        >
                          <FiPlus className="text-xl text-red-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </div>
        </Card>

        <div className="w-full lg:w-[30%] space-y-6">
          <CardHeader className="flex w-full py-0 px-0">
            <CardTitle className="flex items-center justify-between bg-yellow-400 px-2">
              <p className="text-xl font-bold">Delivery Address</p>
              <p className="flex items-center gap-1">
                <FiPlus className="text-xl text-red-600" />
                <span>Add New</span>
              </p>
            </CardTitle>
          </CardHeader>
          <div className="px-5 py-5 text-center">No address available</div>

          <div className="border rounded px-5 py-2 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold">Apply Coupon</span>
              <button
                onClick={() => setShowCouponInput(!showCouponInput)}
                className="text-black text-xs"
              >
                {showCouponInput ? "▲" : "▼"}
              </button>
            </div>
            {showCouponInput && (
              <div className="flex items-center">
                <Input placeholder="Type your coupon code." className="flex-grow mr-2 relative w-full py-1 px-3 text-sm text-black rounded focus:ring-2 focus:outline-none border" />
                <Button className="absolute ml-[195px] sm:ml-[28rem] md:ml-[36rem] lg:ml-36 xl:ml-52 2xl:ml-72 bg-red-600 lg:px-4 xl:px-6 py-2 text-white text-xs rounded-md">Apply coupon</Button>
              </div>
            )}
          </div>

          <div className="border rounded shadow-md px-5 py-3">
          <p className="text-xs font-bold pb-3">Add note</p>
            <Input
              placeholder="Add your special note here."
              className="w-full py-1 px-2 text-sm text-black rounded focus:ring-2 focus:py-8 focus:outline-none border"
            />
          </div>

          <div className="px-5 py-4 border rounded">
            <div className="bg-white px-4">
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

          <Button className="w-full bg-red-500 text-white py-2 mt-6 rounded-md hover:bg-red-600">
            Confirm Order
          </Button>
        </div>

        {/* Cross-sell Products Section */}
        {(windowWidth < 768 || windowWidth >= 1280) && (
  <div className="w-full xl:w-[30%] flex justify-center">
    <div className="w-[90%] md:hidden lg:hidden xl:flex xl:w-[100%]">
      <Card className="w-full border rounded-lg shadow p-4">
        <CardHeader className="mb-4">
          <h2 className="text-xl font-semibold">Cross Sell Products</h2>
        </CardHeader>
        <div
          className={`grid ${
            windowWidth >= 1280 ? "grid-cols-2" : "grid-cols-1"
          } gap-4`}
        >
          {cardData10.map((product) => (
            <Card
              key={product.id}
              className="border rounded-lg shadow hover:shadow-lg flex flex-col justify-between overflow-hidden"
            >
              <Link href={`/details/${product.id}`} legacyBehavior>
                <a>
                  {/* Product Image */}
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="w-full object-cover h-[150px] rounded-t-md"
                  />
                  {/* Product Info */}
                  <div className="text-center p-4">
                    <h3 className="text-md font-bold">{product.title}</h3>
                    <p className="text-red-500 font-semibold">৳{product.price}</p>
                  </div>
                </a>
              </Link>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  </div>
)}

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
