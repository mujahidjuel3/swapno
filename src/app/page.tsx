"use client";

import { useState,useEffect } from "react";
import Navbar from '../component/Navbar';
import Navbar2 from '../component/Navbar2';
import BannerSlider from "../component/BannerSlider";
import CardSlider from "../component/CardSlider";
import cards from "../data/cards.json";
import cardData from "../data/cardData.json";
import cardData1 from "../data/cardData1.json";
import cardData2 from "../data/cardData2.json";
import cardData3 from "../data/cardData3.json";
import cardData4 from "../data/cardData4.json";
import cardData5 from "../data/cardData5.json";
import cardData6 from "../data/cardData6.json";
import cardData7 from "../data/cardData7.json";
import Services from "../component/Services";
import Services1 from "../component/Services1";
import WeekdayDeals from "../component/WeekdayDeals";
import Recommended from "../component/Recommended";
import SelfCare from "../component/SelfCare";
import Featured from "../component/Featured";
import Popular from "../component/Popular";
import Banner from "../component/Banner";
import BannerImage from "../component/BannerImage";
import Diabetic from "../component/Diabetic";
import Brand from "../component/Brand";
import SwapnoCoverage from "../component/SwapnoCoverage";
import Footer from "../component/Footer";
import FooterBottom from "../component/FooterBottom";
import DailyNecessities from "../component/DailyNecessities";
import CartSidebar from "../component/CartSidebar";
import Message from "../component/Message";
import './styles/globals.css';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity?: number;
};

function MyApp() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); 

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart)); 
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem, isUpdate = false) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        if (isUpdate) {
          return prev.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: item.quantity || 1 }
              : cartItem
          );
        }
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
            : cartItem
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };
  


  return (
    <>
    <main className="min-w-full">
      <Navbar />
      <Navbar2 />
      <BannerSlider />
      <CardSlider cards={cards} />
      <Services />
      <WeekdayDeals cardData7={cardData7} addToCart={addToCart} cartItems={cartItems}/>
      <Recommended cardData={cardData}  addToCart={addToCart} cartItems={cartItems}/>
      <SelfCare cardData1={cardData1} addToCart={addToCart} cartItems={cartItems}/>
      <Featured cardData2={cardData2} addToCart={addToCart} cartItems={cartItems}/>
      <Popular cardData3={cardData3} addToCart={addToCart} cartItems={cartItems}/>
      <DailyNecessities cardData6={cardData6} addToCart={addToCart} cartItems={cartItems}/>
      <Banner />
      <BannerImage />
      <Diabetic cardData5={cardData5} addToCart={addToCart} cartItems={cartItems}/>
      <Brand cardData4={cardData4} />
      <SwapnoCoverage />
      <Services1 />
      <Footer />
      <FooterBottom />
      <CartSidebar cartItems={cartItems} setCartItems={setCartItems} />
      <Message />
      </main>
    </>
  );
}

export default MyApp;
