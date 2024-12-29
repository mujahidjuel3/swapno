"use client";
import { Truck, ShieldCheck, Headset, CreditCard } from "lucide-react";

const Services = () => {
  return (
    <div className="hidden lg:flex md:pt-20">
      {/* গ্রিড কন্টেইনার */}
      <div className="grid gap-5 md:gap-[26px] xl:gap-[74px] grid-cols-1 md:grid-cols-4 xl:grid-cols-4  md:max-w-[1280px]  xl:max-w-[2000px]">
        {/* সার্ভিস ১ */}
        <div className="flex items-center space-x-3 border-black shadow-lg md:px-2 xl:px-14 py-4 rounded">
          <Truck
            className="text-red-600 border-red-600 border-2 px-1 py-1 rounded-full"
            size={33}
          />
          <div>
            <h4 className="text-sm font-semibold">60 Mins Delivery</h4>
            <p className="text-xs text-gray-600">Free shipping over 400TK</p>
          </div>
        </div>

        {/* সার্ভিস ২ */}
        <div className="flex items-center space-x-3 border-black shadow-lg md:px-1 xl:px-12 py-4 rounded">
          <ShieldCheck
            className="text-red-600 border-red-600 border-2 px-1 py-1 rounded-full"
            size={33}
          />
          <div>
            <h4 className="text-sm font-semibold">Authorized Products</h4>
            <p className="text-xs text-gray-600">Within 30 days for an exchange</p>
          </div>
        </div>

        {/* সার্ভিস ৩ */}
        <div className="flex items-center space-x-3 border-black shadow-lg md:px-1 xl:px-10 py-4 rounded">
          <Headset
            className="text-red-600 border-red-600 border-2 px-1 py-1 rounded-full"
            size={33}
          />
          <div>
            <h4 className="text-sm font-semibold">Customer Service Support</h4>
            <p className="text-xs text-gray-600">9am to 9pm</p>
          </div>
        </div>

        {/* সার্ভিস ৪ */}
        <div className="flex items-center space-x-3 border-black shadow-lg md:px-2 xl:px-14 py-4 rounded">
          <CreditCard
            className="text-red-600 border-red-600 border-2 px-1 py-1 rounded-full"
            size={33}
          />
          <div>
            <h4 className="text-sm font-semibold">Flexible Payments</h4>
            <p className="text-xs text-gray-600">Pay with multiple credit cards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
