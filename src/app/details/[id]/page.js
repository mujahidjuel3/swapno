"use client";
import { useEffect } from "react";
import { useCart } from "../../../context/cartContext";
import { notFound } from "next/navigation"; // Handle 404
import Navbar from "../../../component/Navbar";
import NavbarModal from "../../../component/NavbarModal";
import Footer from "../../../component/Footer";
import FooterBottom from "../../../component/FooterBottom";
import CartSidebar from "../../../component/CartSidebar";
import NavTop from "../../../component/NavTop";
import CartBottom from "../../../component/CartBottom";
import Message from "../../../component/Message";
import cardData1 from "@/data/cardData1.json";
import cardData from "@/data/cardData.json";
import cardData2 from "@/data/cardData2.json";
import cardData5 from "@/data/cardData5.json";
import cardData3 from "@/data/cardData3.json";
import cardData6 from "@/data/cardData6.json";
import cardData7 from "@/data/cardData7.json";
import cardData8 from "@/data/cardData8.json";
import cardData9 from "@/data/cardData9.json";
import cardData10 from "@/data/cardData10.json";
import products from "@/data/products.json";
import products1 from "@/data/products1.json";
import products2 from "@/data/products2.json";
import products3 from "@/data/products3.json";
import products4 from "@/data/products4.json";
import products5 from "@/data/products5.json";
import products6 from "@/data/products6.json";
import products7 from "@/data/products7.json";
import products8 from "@/data/products8.json";
import products9 from "@/data/products9.json";
import products10 from "@/data/products10.json";
import Image from "next/image";
import { Card } from "@/components/ui/card"; // ShadCN Card
import { Button } from "@/components/ui/button"; // ShadCN Button
import { IoMdHeartEmpty } from "react-icons/io";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaWhatsappSquare,
  FaTruck,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const combinedData = [
  ...cardData,
  ...cardData1,
  ...cardData2,
  ...cardData3,
  ...cardData5,
  ...cardData6,
  ...cardData7,
  ...cardData8,
  ...cardData9,
  ...cardData10,
  ...products,
  ...products1,
  ...products2,
  ...products3,
  ...products4,
  ...products5,
  ...products6,
  ...products7,
  ...products8,
  ...products9,
  ...products10,
];

export default function ProductDetailsPage({ params }) {
  // Unwrap the dynamic route param
  const { cartItems, setCartItems, addToCart } = useCart();
  const { id } = params;

  useEffect(() => {
    // Load cart items from localStorage when component mounts
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, [setCartItems]);

  useEffect(() => {
    // Save cart items to localStorage when cartItems changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const product = combinedData.find((item) => item.id === parseInt(id));
  if (!product) notFound();

  // Add to cart functionality
  // Add to cart functionality

  // Handle minus quantity properly
  const updateCartItemQuantity = (productId, increment) => {
    setCartItems(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + increment }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove items if quantity goes below 1
    );
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
      <div className="container mx-auto py-8 px-4 lg:px-8 pt-12 lg:pt-28">
        <Card className="shadow-lg border rounded-lg p-6">
          {/* Main Grid Section */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left Section: Product Image */}
            <div className="col-span-1">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>

            {/* Middle Section: Title and Tags */}
            <div className="col-span-1 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h1>
                <p className="text-gray-600 text-sm mb-4">{product.delivery}</p>
                <p className="text-red-600 font-semibold text-xl">
                  {product.price}{" "}
                  <span className="text-sm text-gray-500">
                    {product.perprice}
                  </span>
                </p>
                {/* Tags */}
                <h2 className="font-semibold text-lg mt-4">Product Tags:</h2>
                <ul className="flex gap-2 flex-wrap mt-2">
                  {product.tags?.length > 0 ? (
                    product.tags.map((tag, index) => (
                      <li
                        key={index}
                        className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-lg"
                      >
                        {tag}
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500 text-sm">No tags available</li>
                  )}
                </ul>
              </div>

              <div className="flex items-center justify-center pb-4 pt-4">
                {getItemQuantity(product.id) > 0 ? (
                  <div className="flex items-center bg-yellow-500 justify-between rounded-full w-32">
                    <button
                      onClick={() => updateCartItemQuantity(product.id, -1)}
                      className="bg-yellow-500 text-white px-3 items-center text-sm rounded-full"
                    >
                      -
                    </button>
                    <span className="font-semibold flex items-center gap-1 text-sm sm:text-base">
                      {getItemQuantity(product.id)}{" "}
                      <p className="text-xs font-semibold">in Bag</p>
                    </span>
                    <button
                      onClick={() => updateCartItemQuantity(product.id, 1)}
                      className="bg-yellow-500 text-white px-3 items-center text-sm rounded-full"
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
                        price: product.price, // No need for manual conversion here
                      })
                    }
                    className="bg-red-600 text-white px-4 rounded-full text-sm"
                  >
                    <p className="text-xs items-center py-1 px-2">
                      + Add to Bag
                    </p>
                  </button>
                )}
              </div>
            </div>

            {/* Right Section: SKU to Delivery Options */}
            <div className="col-span-1 bg-gray-100 p-4 rounded-lg">
              <div className="justify-between flex">
                <h2 className="text-sm font-bold text-gray-800 mb-4">
                  {product.sku}
                </h2>
                <section className="flex items-center pb-4 text-green-600 gap-1">
                  <input
                    type="checkbox"
                    id=""
                    name=""
                    className="bg-green-600"
                  />
                  <p className="text-xs">In-stock</p>
                </section>
              </div>
              <div className="pt-4">
                <h2 className="text-sm font-bold">{product.brand}</h2>
                <p className="text-xs pt-2">{product.description}</p>
              </div>
              <div className="flex gap-1 pt-7 justify-between">
                <Button
                  variant="outline"
                  className="flex items-center text-xs font-semibold shadow-md bg-white text-gray-700"
                >
                  <IoMdHeartEmpty className="text-red-500 text-xl mr-2" />
                  Add to Wishlist
                </Button>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white shadow rounded"
                  >
                    <FaFacebook className="text-blue-800 text-xl" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white shadow rounded"
                  >
                    <FaFacebookMessenger className="text-pink-600 text-xl" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white shadow rounded"
                  >
                    <FaWhatsappSquare className="text-green-600 text-xl" />
                  </Button>
                </div>
              </div>

              {/* Delivery and Payment Options */}
              <div className="pt-6">
                <p className="flex items-center gap-1 text-xs">
                  <FaTruck className="text-sm" /> Delivery: 1-2 hours
                </p>
                <p className="flex gap-1 text-xs">
                  <span className="font-bold flex items-center gap-1">
                    <MdLocationPin className="text-sm" />
                    Location:
                  </span>
                  <span className="text-xs text-blue-600 flex items-center gap-1">
                    Select your delivery location{" "}
                    <IoIosArrowDown className="text-xs mt-1" />
                  </span>
                </p>
              </div>

              {/* Payment Methods Section */}
              <div className="pt-5">
                <p className="flex items-center text-sm font-semibold">
                  Card Payment{" "}
                  <Image
                    src="/payments.png"
                    alt="Logo"
                    width={100}
                    height={10}
                    className="w-36 h-5 px-3"
                  />
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-between pt-4">
                <p className="flex items-center text-xs bg-white rounded px-6 sm:px-8 py-2 shadow w-full sm:w-[45%] justify-between">
                  bkash
                  <Image
                    src="/bkash.png"
                    alt="bKash"
                    width={100}
                    height={10}
                    className="w-20 h-5"
                  />
                </p>
                <p className="flex items-center text-xs bg-white rounded px-6 sm:px-8 py-2 shadow w-full sm:w-[45%] justify-between">
                  Cash on Delivery
                  <Image
                    src="/cashon.png"
                    alt="Cash"
                    width={100}
                    height={10}
                    className="w-20 h-5"
                  />
                </p>
              </div>
            </div>
          </div>
          {/* Reviews Section */}
          <div className="mt-6">
            <div className="border rounded">
              <h2 className="text-lg font-bold mb-4 bg-gray-100 px-4 py-3 border">
                <span className="text-white bg-yellow-500 px-5 py-1 rounded-full">
                  Reviews
                </span>
              </h2>
              {product.reviews?.length > 0 ? (
                <div className="space-y-4 px-4 py-3">
                  {product.reviews.map((review, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white shadow-sm rounded-lg border"
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-semibold text-gray-800">
                          {review}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-black font-semibold rounded text-center py-5">
                  No reviews yet. Be the first one to review!
                </p>
              )}
            </div>
          </div>
        </Card>
      </div>

      <Footer />
      <FooterBottom />
      <CartSidebar />
      <CartBottom />
      <Message />
    </div>
  );
}
