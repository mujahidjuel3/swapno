"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IoFilter, IoClose } from "react-icons/io5";
import Image from "next/image";
import products1 from "../../../data/products1.json"; 
import Navbar from "../../../component/Navbar";
import NavbarModal from "../../../component/NavbarModal";
import Footer from "../../../component/Footer";
import FooterBottom from "../../../component/FooterBottom";
import CartSidebar from "../../../component/CartSidebar";
import CartBottom from "../../../component/CartBottom";

const ResponsiveFilterCard = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(products1 || []);
  const [cartItems, setCartItems] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const [filters, setFilters] = useState({
    expressDelivery: null,
    freeShipping: null,
    deliveryTime: [],
    tags: [],
  });

  const [availableTags, setAvailableTags] = useState([]);
  const [availableDeliveryTimes, setAvailableDeliveryTimes] = useState([]);
  const [availableSort, setAvailableSort] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (!products1?.length) {
      setAvailableTags([]);
      setAvailableDeliveryTimes([]);
      return;
    }

    const tags = new Set();
    const deliveryTimes = new Set();
    const sort = new Set();

    products.forEach((product) => {
      product.tags?.forEach((tag) => tags.add(tag));
      product.delivery?.forEach((time) => deliveryTimes.add(time));
      product.sort?.forEach((sorts) => sort.add(sorts));
    });

    setAvailableTags([...tags]);
    setAvailableDeliveryTimes([...deliveryTimes]);
    setAvailableSort([...sort]);
  }, []);

  useEffect(() => {
    const handleFilter = () => {
      if (!Array.isArray(products) || products.length === 0) {
        setFilteredData([]);
        return;
      }

      let updatedData = products.filter(
        (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
      );

      if (filters.expressDelivery !== null) {
        updatedData = updatedData.filter(
          (p) => p.expressDelivery === filters.expressDelivery
        );
      }
      if (filters.freeShipping !== null) {
        updatedData = updatedData.filter(
          (p) => p.freeShipping === filters.freeShipping
        );
      }
      if (filters.deliveryTime.length) {
        updatedData = updatedData.filter((p) =>
          filters.deliveryTime.every((time) => p.delivery.includes(time))
        );
      }
      if (filters.tags.length) {
        updatedData = updatedData.filter((p) =>
          filters.tags.every((tag) => p.tags.includes(tag))
        );
      }

      setFilteredData(updatedData);
    };

    handleFilter();
  }, [priceRange, filters]);

  const handleRadioChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const handleDeliveryTime = (time) => {
    setFilters((prev) => {
      const updatedTime = prev.deliveryTime.includes(time)
        ? prev.deliveryTime.filter((t) => t !== time)
        : [...prev.deliveryTime, time];
      return { ...prev, deliveryTime: updatedTime };
    });
  };

  const handleTagSelection = (tag) => {
    setFilters((prev) => {
      const updatedTags = prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag];
      return { ...prev, tags: updatedTags };
    });
  };

  // Add to cart functionality
  const addToCart = (product, increment = 1) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + increment }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const getItemQuantity = (id) => {
    const item = cartItems.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="">
      <Navbar />
      <NavbarModal />
      <div className="container mx-auto py-8 px-4 lg:px-8 pt-20">
        <div className="flex justify-center items-center py-4">
          <Image
            src="https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/65f7d088115075f231e86890_Eggs.png"
            alt="Banner Image"
            width={1920}
            height={1200}
            className="rounded-lg object-cover "
          />
        </div>
        {/* Top Section */}
        <div className="container mx-auto py-4 px-4 lg:px-8 flex justify-between md:justify-center items-center gap-2 mb-4 mt-4">
          {/* Mobile Filter Icon */}
          <div className="lg:hidden flex gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-yellow-400 rounded-full"
                >
                  <IoFilter size={20} />
                </Button>
              </DialogTrigger>

              <DialogContent className="top-[335px] left-[180px]  h-[30rem] w-[18rem] flex flex-col overflow-auto p-4 lg:hidden">
                {/* Filters Content */}
                <div className="space-y-2">
                  {/* Price Range */}
                  <div className="border rounded p-4">
                    <h3 className="font-semibold mb-2">Price Range</h3>
                    <div className="flex justify-between text-sm">
                      <p>Min: ৳11</p>
                      <p>Max: ৳280</p>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([+e.target.value, priceRange[1]])
                      }
                      className="w-full"
                    />
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], +e.target.value])
                      }
                      className="w-full mt-2"
                    />
                    <p>
                      ৳{priceRange[0]} - ৳{priceRange[1]}
                    </p>
                  </div>

                  {/* Delivery Time */}
                  <div className="border rounded p-4">
                    <h3 className="font-semibold mb-2">Delivery Time</h3>
                    {availableDeliveryTimes.map((time) => (
                      <label key={time} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={filters.deliveryTime.includes(time)}
                          onChange={() => handleDeliveryTime(time)}
                        />
                        {time}
                      </label>
                    ))}
                  </div>

                  {/* Other Filters */}
                  {["expressDelivery", "freeShipping"].map((type) => (
                    <div key={type} className="border rounded p-4">
                      <h3 className="font-semibold mb-2">
                        {type === "expressDelivery"
                          ? "Express Delivery"
                          : "Free Shipping"}
                      </h3>
                      <label>
                        <input
                          type="radio"
                          name={type}
                          onChange={() => handleRadioChange(type, true)}
                        />{" "}
                        Yes
                      </label>
                      <label className="ml-4">
                        <input
                          type="radio"
                          name={type}
                          onChange={() => handleRadioChange(type, false)}
                        />{" "}
                        No
                      </label>
                    </div>
                  ))}

                  {/* Tag Filters */}
                  <div className="border rounded p-4">
                    <h3 className="font-semibold mb-2">Tags</h3>
                    {availableTags.map((tag) => (
                      <label key={tag} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.tags.includes(tag)}
                          onChange={() => handleTagSelection(tag)}
                        />
                        <span className="ml-2">{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex gap-2 items-center">
            <h1 className="text-sm flex font-semibold">Sort By:</h1>
            <ul className="gap-2 flex">
              {availableSort.map((sorts) => (
                <li
                  key={sorts}
                  className="shadow bg-slate-50 text-xs md:text-sm px-2 py-1 rounded hover:bg-yellow-500 cursor-pointer"
                >
                  {sorts}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Sidebar Filter */}
          <div
            className={`fixed lg:static top-0 left-0 h-full bg-white p-4 shadow-lg transition-transform z-10 ${
              isFilterOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            } lg:w-1/4`}
          >
            <Button
              className="md:hidden"
              variant="ghost"
              size="icon"
              onClick={() => setIsFilterOpen(false)}
            >
              <IoClose size={20} />
            </Button>

            {/* Price Range */}
            <div className="space-y-4">
              <div className="border rounded p-4">
                <h3 className="font-semibold mb-2">Price Range</h3>
                <div className="flex justify-between text-sm">
                  <p>Min: ৳11</p>
                  <p>Max: ৳280</p>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([+e.target.value, priceRange[1]])
                  }
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], +e.target.value])
                  }
                  className="w-full mt-2"
                />
                <p>
                  ৳{priceRange[0]} - ৳{priceRange[1]}
                </p>
              </div>

              {/* Delivery Time */}
              <div className="border rounded p-4">
                <h3 className="font-semibold mb-2">Delivery Time</h3>
                {availableDeliveryTimes.map((time) => (
                  <label key={time} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.deliveryTime.includes(time)}
                      onChange={() => handleDeliveryTime(time)}
                    />
                    {time}
                  </label>
                ))}
              </div>

              {/* Other Filters */}
              {["expressDelivery", "freeShipping"].map((type) => (
                <div key={type} className="border rounded p-4">
                  <h3 className="font-semibold mb-2">
                    {type === "expressDelivery"
                      ? "Express Delivery"
                      : "Free Shipping"}
                  </h3>
                  <label>
                    <input
                      type="radio"
                      name={type}
                      onChange={() => handleRadioChange(type, true)}
                    />{" "}
                    Yes
                  </label>
                  <label className="ml-4">
                    <input
                      type="radio"
                      name={type}
                      onChange={() => handleRadioChange(type, false)}
                    />{" "}
                    No
                  </label>
                </div>
              ))}

              {/* Tags */}
              <div className="border rounded p-4">
                <h3 className="font-semibold mb-2">Tags</h3>
                <div className="flex gap-2 flex-wrap">
                  {availableTags.map((tag) => (
                    <label key={tag} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.tags.includes(tag)}
                        onChange={() => handleTagSelection(tag)}
                      />
                      <span className="ml-2 text-sm">{tag}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Filter Toggle Button */}

          {/* Cards Section */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredData.length > 0 ? (
              filteredData.map((product) => (
                <Card
                  key={product.id}
                  className="border rounded-lg shadow hover:shadow-lg h-[280px] flex flex-col"
                >
                    <Link href={`/details/${product.id}`} key={product.id} legacyBehavior>
                 <div>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={300}
                      height={200}
                      className="w-full object-cover p-1 h-[150px] rounded-md"
                    />
                    <div className="text-center justify-center">
                     <p className="text-xs text-gray-600 italic pb-1">
                      {product.delivery}
                     </p>
                     <h3 className="text-sm font-semibold">{product.title}</h3>
                     <p className="text-red-500 font-bold">
                      ৳{product.price}{" "}
                      <span className="text-xs text-gray-500">
                        {product.perprice}
                      </span>
                      </p>
                      </div>
                 </div>
                 </Link>

                  <div className="flex items-center justify-center pb-4 pt-4">
                    {getItemQuantity(product.id) > 0 ? (
                      <div className="flex items-center bg-yellow-500 justify-between rounded-full w-32 sm:w-32">
                        <button
                          onClick={() => addToCart(product, -1)}
                          className="bg-yellow-500 text-white px-3 py-1 text-lg rounded-full"
                        >
                          -
                        </button>
                        <span className="font-semibold flex items-center gap-1 text-sm sm:text-base">
                          {getItemQuantity(product.id)}{" "}
                          <p className="text-xs font-semibold">in Bag</p>
                        </span>
                        <button
                          onClick={() => addToCart(product, 1)}
                          className="bg-yellow-500 text-white px-3 py-1 text-lg rounded-full"
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
                        className="bg-red-600 text-white px-4 py-2 rounded-full text-sm"
                      >
                        + Add to Bag
                      </button>
                    )}
                  </div>
                </Card>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <FooterBottom />
      <CartSidebar cartItems={cartItems} setCartItems={setCartItems} />
      <CartBottom cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default ResponsiveFilterCard;
