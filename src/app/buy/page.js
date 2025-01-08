"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card"; // ShadCN Card
import Image from "next/image";
import Link from "next/link"; // Link for routing
import cardData8 from "../../data/cardData8.json";
import Navbar from "../../component/Navbar";
import NavbarModal from "../../component/NavbarModal";
import Footer from "../../component/Footer";
import FooterBottom from "../../component/FooterBottom";
import CartSidebar from "../../component/CartSidebar";
import CartBottom from "../../component/CartBottom";
import NavTop from "../../component/NavTop";
import Message from "../../component/Message";


const Buy = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Screen size-specific card display logic
  const getGridColumns = () => {
    if (windowWidth >= 1280) return "grid-cols-6"; // 6 columns for desktop
    if (windowWidth >= 1024) return "grid-cols-5"; // 5 columns for laptop
    if (windowWidth >= 668) return "grid-cols-3"; // 3 columns for tablet
    return "grid-cols-2"; // 2 columns for mobile
  };

  return (
    <div>
      <NavTop />
      <Navbar />
      <NavbarModal />
      <div className="pt-16 lg:pt-32 pb-4 container mx-auto py-8 px-4 lg:px-8">
        <div className="relative p-4">
          
          {/* Banner Section */}
          <div className="flex justify-center items-center py-4">
            {cardData8.length > 0 ? (
              <Image
                src={cardData8[0].banner} // Assuming your JSON has a 'banner' field
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

          <h2 className="text-xl font-bold mb-4 text-center">
            Buy & Save More Deals
          </h2>

          <div className="flex justify-center items-center py-4">
            
              <Image
                src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/663af67f315c0ed4738f2756_Buy%20more%20save%20more_strip.png" // Assuming your JSON has a 'banner' field
                alt="Banner Image"
                width={1920}
                height={1600}
                className="rounded-lg object-cover"
              />
          </div>


          {/* Grid Layout for Cards */}
          <div className={`grid gap-4 ${getGridColumns()}`}>
            {cardData8.map((product) => (
              <Card
                key={product.id}
                className="border rounded-lg shadow hover:shadow-lg h-[240px] flex flex-col overflow-hidden"
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
      <Footer />
      <FooterBottom />
      <CartSidebar />
      <CartBottom />
      <Message />
    </div>
  );
};

export default Buy;
