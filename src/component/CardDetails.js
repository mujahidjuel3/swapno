
"use client";

import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaFacebook,FaFacebookMessenger,FaWhatsappSquare,FaTruck } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const CardDetails = () => {
  const [cart, setCart] = useState({});
  

    const card = {
        id: 1,
        image: "/images/black-pepper.png", // Replace with your image path
        title: "Well Food Butter Toast 250gm",
        price: "৳108",
        originalPrice: "৳129",
        discount: "৳12 OFF",
        delivery: "1-2 hours",
        sku: "2801573",
        tags: ["Cookies", "Baked Goods", "Snack Biscuits"],
        reviews: [],
        sku:"SKU: 2808532",
        brand: "Brand:",
        brandname: "Ispahani",
        description: "Delicious and crisp buttery toast perfect for tea time!",
      };

      const handleAddToCart = (id) => {
        setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
      };
    
      const handleRemoveFromCart = (id) => {
        setCart((prev) => {
          const newCart = { ...prev };
          if (newCart[id] > 1) newCart[id] -= 1;
          else delete newCart[id];
          return newCart;
        });
      };

  return (
    <div className="pt-36">
    <div className='flex grid sm:grid-cols-1 md:grid-cols-3 items-center justify-between px-16'>
        <div className="sm:pl-36 lg:pl-0 pb-20">
        <Image
            src={card.image}
            alt={card.title}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>

        <div className="space-y-1">
        <h1 className="text-xl font-semibold text-gray-800">{card.title}</h1>
            <p className="text-red-500 text-xl font-semibold">{card.price}</p>
            <p className="text-gray-500 text-sm line-through">{card.originalPrice}</p>
            <p className="text-green-600 text-sm">{card.discount}</p>
            
            {cart[card.id] ? (
                    <div className="flex items-center gap-4 mt-2 rounded-full">
                      <button
                        className="bg-slate-100 px-1 py-1 h-14 justify-center text-red-600 text-3xl w-14 shadow rounded-full"
                        onClick={() => handleRemoveFromCart(card.id)}
                      >
                        -
                      </button>
                      <span className="font-semibold text-xl">{cart[card.id]}</span>
                      <button
                        className="bg-slate-100 px-1 py- h-14 justify-center text-red-600 text-3xl w-14 shadow rounded-full"
                        onClick={() => handleAddToCart(card.id)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="bg-red-600 text-white text-center px-4 py-1 mt-2 rounded-full"
                      onClick={() => handleAddToCart(card.id)}
                    >
                      + Add to Bag
                    </button>
                  )}
            <div className="mt-4 pb-28">
              <h2 className="font-semibold text-lg">Product Tags:</h2>
              <ul className="flex gap-2 flex-wrap mt-2">
                {card.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-lg"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
        </div>

        <div className="bg-white px-5 w-full py-3 rounded shadow">
            <div className="justify-between flex">
              <h2 className="text-sm font-bold text-gray-800 mb-4">{card.sku}</h2>
              <section className="flex items-center pb-4 text-green-600 gap-1">
              <input type="checkbox" id="" name="" className="bg-green-600" />
                <p className="text-xs">In-stock</p>
                </section>
            </div>  
            <h2 className="text-sm pt-1 font-bold">{card.brand} <span className="text-sm font-bold text-blue-600">{card.brandname}</span></h2>
           <p className="text-xs pt-2">{card.description}</p>
           <div className=" flex pt-7 justify-between">
            <p className="flex items-center py-2 px-2 rounded text-xs font-semibold bg-white shadow"> <IoMdHeartEmpty  className="text-red-500 text-xl"/> Add to Wishlist</p>
             <div className="flex gap-3">
               <p className="text-xl bg-white py-2 px-1 rounded shadow"><FaFacebook className="text-blue-800"/></p>
               <p className="text-xl bg-white py-2 px-1 rounded shadow"><FaFacebookMessenger className="text-rose-600"/></p>
               <p className="text-xl bg-white py-2 px-1 rounded shadow"><FaWhatsappSquare className="text-green-600"/></p>
             </div>
            </div>
            <div className="pt-5 space-y-2">
              <p className="flex gap-1 text-xs"><span className="font-bold flex items-center gap-1"><FaTruck className="text-sm"/> Delivery: </span> 1-2 hours</p>
              <p className="flex gap-1 text-xs"><span className="font-bold flex items-center gap-1"><MdLocationPin className="text-sm"/>Location: </span> <span className="text-xs text-blue-600 flex items-center gap-1">Select your delivery location <IoIosArrowDown className="text-xs mt-1"/></span></p>
            </div>
            <div className="pt-5 px-4 py-2 bg-white shadow rounded">
              <p className="flex  items-center font-semibold text-sm">Card Payment
              <Image src="/payments.png" alt="Logo" width={100} height={100} className="w-[14rem] h-5 px-5"/>
              </p>
            </div>
            <div className="flex justify-between gap-2 pt-4">
              <p className="flex items-center text-xs bg-white rounded px-8 sm:w-[20rem] py-2 shadow text-center">bkash
              <Image src="/bkash.png" alt="Logo" width={100} height={100} className="w-[4rem] h-5 px-5"/>
              </p>
              <p className="flex items-center text-xs bg-white rounded px-8 sm:w-[20rem] py-2 shadow text-center">Cash on <br/> Delivery
              <Image src="/cashon.png" alt="Logo" width={100} height={10} className="w-[4rem] h-5 px-5"/>
              </p>
            </div>
        </div>
    </div>
    <div className="px-16 pt-5">
        <div className="border rounded">
     <h2 className="text-lg font-bold mb-4 bg-gray-100 px-4 py-3 border"><span className="text-white bg-yellow-500 px-5 py-1 rounded-full">Reviews</span></h2>
     <p className="text-black font-semibold rounded text-center py-5">No reviews yet. Be the first one to review!</p>
       </div>
    </div>
    </div>

  )
}

export default CardDetails