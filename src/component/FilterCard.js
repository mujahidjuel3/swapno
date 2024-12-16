"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IoFilter, IoClose } from "react-icons/io5";
import Image from "next/image";

const ResponsiveFilterCard = ({ products }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(products);

  // Price filter
  const handleFilter = (filterFn) => {
    const filtered = products.filter(filterFn);
    setFilteredData(filtered);
  };

  // Responsive card count
  const getVisibleCards = () => {
    if (window.innerWidth >= 1280) return 4; // Desktop
    if (window.innerWidth >= 1024) return 3; // Laptop
    if (window.innerWidth >= 640) return 2; // Tablet
    return 1; // Mobile
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Sidebar Filter */}
      <div
        className={`fixed lg:static top-0 left-0 h-full z-50 bg-white p-4 shadow-lg transition-transform ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:w-1/4`}
      >
        {/* Close Button for Mobile */}
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <h2 className="text-xl font-bold">Filters</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFilterOpen(false)}
          >
            <IoClose size={20} />
          </Button>
        </div>

        {/* Filters */}
        <div className="space-y-4">
          {/* Price Range */}
          <div>
            <h3 className="font-semibold">Price Range</h3>
            <div className="flex gap-2">
              <Button
                onClick={() => handleFilter((p) => p.price >= 0 && p.price <= 500)}
                className="bg-gray-200 text-sm"
              >
                0 - 500
              </Button>
              <Button
                onClick={() => handleFilter((p) => p.price > 500 && p.price <= 1000)}
                className="bg-gray-200 text-sm"
              >
                501 - 1000
              </Button>
            </div>
          </div>

          {/* Delivery Time */}
          <div>
            <h3 className="font-semibold">Delivery Time</h3>
            <div className="flex gap-2">
              <Button
                onClick={() => handleFilter((p) => p.deliveryTime === "1-2 hours")}
                className="bg-gray-200 text-sm"
              >
                1-2 Hours
              </Button>
              <Button
                onClick={() => handleFilter((p) => p.deliveryTime === "2-4 hours")}
                className="bg-gray-200 text-sm"
              >
                2-4 Hours
              </Button>
            </div>
          </div>

          {/* Express Delivery */}
          <div>
            <h3 className="font-semibold">Express Delivery</h3>
            <div className="flex gap-2">
              <Button
                onClick={() => handleFilter((p) => p.expressDelivery)}
                className="bg-gray-200 text-sm"
              >
                Yes
              </Button>
              <Button
                onClick={() => handleFilter((p) => !p.expressDelivery)}
                className="bg-gray-200 text-sm"
              >
                No
              </Button>
            </div>
          </div>

          {/* Free Shipping */}
          <div>
            <h3 className="font-semibold">Free Shipping</h3>
            <div className="flex gap-2">
              <Button
                onClick={() => handleFilter((p) => p.freeShipping)}
                className="bg-gray-200 text-sm"
              >
                Yes
              </Button>
              <Button
                onClick={() => handleFilter((p) => !p.freeShipping)}
                className="bg-gray-200 text-sm"
              >
                No
              </Button>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="font-semibold">Tag</h3>
            <div className="flex gap-2 flex-wrap">
              {["Everyday Tea", "Traditional Tea", "Green Tea"].map((tag) => (
                <Button
                  key={tag}
                  onClick={() => handleFilter((p) => p.tags.includes(tag))}
                  className="bg-gray-200 text-sm"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Icon for Mobile */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsFilterOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-yellow-400 rounded-full shadow-md"
      >
        <IoFilter size={20} />
      </Button>

      {/* Cards Section */}
      <div
        className="flex-1 grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${getVisibleCards()}, minmax(0, 1fr))`,
        }}
      >
        {filteredData.map((product) => (
          <Card key={product.id} className="p-4 shadow-lg">
            <Image
              src={product.image}
              alt={product.title}
              height={40}
              width={100}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
            <p className="text-red-500">৳{product.price}</p>
            <Button className="bg-red-600 text-white mt-4">Add to Bag</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveFilterCard;
