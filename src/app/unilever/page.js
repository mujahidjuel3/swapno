"use client";

import { useState, useEffect } from "react";
import { useCart } from "../../context/cartContext";
import { Card } from "@/components/ui/card"; // ShadCN Card
import Image from "next/image";
import Link from "next/link"; // Link for routing
import cardData9 from "../../data/cardData9.json";
import Navbar from "../../component/Navbar";
import NavbarModal from "../../component/NavbarModal";
import Footer from "../../component/Footer";
import FooterBottom from "../../component/FooterBottom";
import CartSidebar from "../../component/CartSidebar";
import CartBottom from "../../component/CartBottom";
import NavTop from "../../component/NavTop";
import Message from "../../component/Message";


const Unilever = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Screen size-specific card display logic
  const getGridColumns = () => {
    if (windowWidth >= 1280) return "grid-cols-6"; // 6 columns for desktop
    if (windowWidth >= 1024) return "grid-cols-4"; // 5 columns for laptop
    if (windowWidth >= 680) return "grid-cols-2"; // 3 columns for tablet
    return "grid-cols-1"; // 2 columns for mobile
  };

  

  const getItemQuantity = (id) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div>
      <NavTop />
      <Navbar />
      <NavbarModal />
      <div className="pt-12 lg:pt-32 pb-4 container mx-auto py-8 px-4 lg:px-8">
        <div className="relative p-4">
          {/* Banner Section */}
          <div className="flex justify-center items-center py-4">
            {cardData9.length > 0 ? (
              <Image
                src={cardData9[0].banner} // Assuming your JSON has a 'banner' field
                alt="Banner Image"
                width={1920}
                height={1200}
                className="rounded-lg object-cover"
              />
            ) : (
              <p className="text-center text-xl font-bold py-4">
                Data Not Available
              </p>
            )}
          </div>

          <div className="flex gap-2 items-center pb-4">
            <h1 className="text-sm flex font-semibold">Sort By:</h1>
            <ul className="gap-2 flex">
              {[
                ...new Set(cardData9.flatMap((product) => product.sort || [])),
              ].map((sortOption, idx) => (
                <li
                  key={idx}
                  className="shadow bg-slate-50 text-[12px] md:text-sm px-2 py-1 rounded hover:bg-yellow-500 cursor-pointer"
                >
                  {sortOption}
                </li>
              ))}
            </ul>
          </div>

          {/* Grid Layout for Cards */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className={`grid gap-4 ${getGridColumns()}`}>
              {cardData9.length > 0 ? (
                cardData9.map((product) => (
                  <Card
                    key={product.id}
                    className="border rounded-lg shadow hover:shadow-lg h-[300px] w-[230px] flex flex-col"
                  >
                    <Link href={`/details/${product.id}`} legacyBehavior>
                      <div>
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={300}
                          height={200}
                          className="w-full object-cover p-1 h-[150px] rounded-md"
                        />
                        <div className="text-center justify-center pt-2">
                          <p className="text-xs text-gray-600 italic pb-1">
                            {product.delivery}
                          </p>
                          <h3 className="text-sm font-semibold">
                            {product.title}
                          </h3>
                          <p className="text-red-500 font-bold">
                            ৳{product.price}{" "}
                            <span className="text-xs text-gray-500">
                              {product.perprice}
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>

                    <div className="flex items-center justify-center pb-1 pt-7">
                      {getItemQuantity(product.id) > 0 ? (
                        <div className="flex items-center bg-yellow-500 justify-between rounded-full w-32 sm:w-32">
                          <button
                            onClick={() => removeFromCart(product, -1)}
                            className="bg-yellow-500 text-white px-3 items-center text-sm  rounded-full"
                          >
                            -
                          </button>
                          <span className="font-semibold flex items-center gap-1 text-sm sm:text-base">
                            {getItemQuantity(product.id)}{" "}
                            <p className="text-xs font-semibold">in Bag</p>
                          </span>
                          <button
                            onClick={() => addToCart(product, 1)}
                            className="bg-yellow-500 text-white px-3 items-center text-sm  rounded-full"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() =>
                            addToCart({
                              id: product.id,
                              name: product.title,
                              price: product.price,
                            })
                          }
                          className="bg-red-600 text-white px-4 items-center  rounded-full text-sm"
                        >
                         <p className="text-xs items-center py-1 px-2">+ Add to Bag</p>
                        </button>
                      )}
                    </div>
                  </Card>
                ))
              ) : (
                <p className="text-sm text-center justify-center font-bold">
                  No products found
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FooterBottom />
      <CartSidebar  />
      <CartBottom  />
      <Message />
    </div>
  );
};

export default Unilever;
