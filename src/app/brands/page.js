"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card"; // ShadCN Card
import Image from "next/image";
import cardData4 from "../../data/cardData4.json";
import Navbar from "../../component/Navbar";
import NavbarModal from "../../component/NavbarModal";
import Footer from "../../component/Footer";
import FooterBottom from "../../component/FooterBottom";
import NavTop from "../../component/NavTop";

const OurBrands = () => {
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
      <div className="pt-32 pb-4 container mx-auto py-8 px-4 lg:px-8">
        <div className="relative p-4">
          <h2 className="text-xl font-bold mb-4 text-center underline">
            Our Brands
          </h2>

          {/* Grid Layout for Cards */}
          <div className={`grid gap-4 ${getGridColumns()}`}>
            {cardData4.map((card, index) => (
              <Card
                key={index}
                className="shadow-md border overflow-hidden rounded-lg"
              >
                <div>
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={200}
                    height={200}
                    className="h-32 w-full object-cover"
                  />
                </div>
                {/* Title Section */}
                <div className="flex justify-center items-center pt-2">
                  <div className="bg-slate-300 border text-center py-1 px-2 rounded">
                    <p className="text-sm font-medium text-black">
                      {card.title}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default OurBrands;
