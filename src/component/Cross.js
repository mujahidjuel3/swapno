"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card"; // ShadCN Card
import Image from "next/image";
import Link from "next/link";
import cardData10 from "../data/cardData10.json";

const Cross = () => {
    const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Screen size-specific card display logic
  const getGridColumns = () => {
    if (windowWidth >= 1280) return "grid-cols-2"; // 6 columns for desktop
    if (windowWidth >= 1024) return "grid-cols-2"; // 5 columns for laptop
    if (windowWidth >= 668) return "grid-cols-2"; // 3 columns for tablet
    return "grid-cols-1"; // 2 columns for mobile
  };
  return (
    <div>
        <div className={`grid gap-4 ${getGridColumns()}`}>
            {cardData10.map((product) => (
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
  )
}

export default Cross