"use client";
import { Truck, ShieldCheck, Headset, CreditCard } from "lucide-react";

const Services = () => {
  return (
    <div className="hidden md:flex pt-20 md:pt-40 bg-white shadow-md">
      {/* গ্রিড কন্টেইনার */}
      <div className="grid gap-6 xl:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center pb-16 md:max-w-[1024px] lg:max-w-[1199px] xl:max-w-[1920px] mx-auto">
        {/* সার্ভিস ১ */}
        <div className="flex items-center space-x-3 bg-gray-50 border-black shadow px-4 py-3 rounded">
          <Truck
            className="text-red-600 border-red-600 border-2 px-1 py-1 rounded-full"
            size={33}
          />
          <div>
            <h4 className="text-lg font-semibold">60 Mins Delivery</h4>
            <p className="text-sm text-gray-600">Free shipping over 400TK</p>
          </div>
        </div>

        {/* সার্ভিস ২ */}
        <div className="flex items-center space-x-3 bg-gray-50 border-black shadow px-4 py-3 rounded">
          <ShieldCheck
            className="text-red-600 border-red-600 border-2 px-1 py-1 rounded-full"
            size={33}
          />
          <div>
            <h4 className="text-lg font-semibold">Authorized Products</h4>
            <p className="text-sm text-gray-600">Within 30 days for an exchange</p>
          </div>
        </div>

        {/* সার্ভিস ৩ */}
        <div className="flex items-center space-x-3 bg-gray-50 border-black shadow px-4 py-3 rounded">
          <Headset
            className="text-red-600 border-red-600 border-2 px-1 py-1 rounded-full"
            size={33}
          />
          <div>
            <h4 className="text-lg font-semibold">Customer Service Support</h4>
            <p className="text-sm text-gray-600">9am to 9pm</p>
          </div>
        </div>

        {/* সার্ভিস ৪ */}
        <div className="flex items-center space-x-3 bg-gray-50 border-black shadow px-4 py-3 rounded">
          <CreditCard
            className="text-red-600 border-red-600 border-2 px-1 py-1 rounded-full"
            size={33}
          />
          <div>
            <h4 className="text-lg font-semibold">Flexible Payments</h4>
            <p className="text-sm text-gray-600">Pay with multiple credit cards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
