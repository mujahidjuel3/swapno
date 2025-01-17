"use client";

import { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import NavbarModal from "../component/NavbarModal";
import BannerSlider from "../component/BannerSlider";
import CardSlider from "../component/CardSlider";
import Services from "../component/Services";
import Services1 from "../component/Services1";
import WeekdayDeals from "../component/WeekdayDeals";
import Recommended from "../component/Recommended";
import SelfCare from "../component/SelfCare";
import Featured from "../component/Featured";
import Popular from "../component/Popular";
import DailyNecessities from "../component/DailyNecessities";
import Banner from "../component/Banner";
import BannerImage from "../component/BannerImage";
import Diabetic from "../component/Diabetic";
import Brand from "../component/Brand";
import SwapnoCoverage from "../component/SwapnoCoverage";
import Footer from "../component/Footer";
import FooterBottom from "../component/FooterBottom";
import Message from "../component/Message";
import CartSidebar from "../component/CartSidebar"
import CartBottom from "../component/CartBottom";
import NavTop from "../component/NavTop";


import cards from "../data/cards.json";
import cardData from "../data/cardData.json";
import cardData1 from "../data/cardData1.json";
import cardData2 from "../data/cardData2.json";
import cardData3 from "../data/cardData3.json";
import cardData4 from "../data/cardData4.json";
import cardData5 from "../data/cardData5.json";
import cardData6 from "../data/cardData6.json";
import cardData7 from "../data/cardData7.json";



function MyApp() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  
  
  return (
    <div className="border bg-white">
      {/* Navbar Section */}
      <header>
      <NavTop/>
      </header>

      <header className="sticky top-0 z-50 bg-white shadow">       
        <Navbar />      
      </header>

      <header>
      <NavbarModal />
      </header>

      {/* Main Content */}
      <main className="space-y-10">
        {/* Responsive sections */}
        <section className="container mx-auto px-4 lg:px-8">
          <BannerSlider />
        </section>
        <section className="container mx-auto px-4 lg:px-7">
          <CardSlider cards={cards} />
        </section>
        <section className="container mx-auto px-4 lg:px-8">
          <Services />
        </section>
        <section className="container mx-auto px-4 lg:px-8">
          <WeekdayDeals
            cardData7={cardData7}
           
            
          />
        </section>
        <section className="container mx-auto px-4 lg:px-8">
          <Recommended
            cardData={cardData}
           
          />
        </section>
        <section className="container mx-auto px-4 lg:px-8">
          <SelfCare
            cardData1={cardData1}
            
          />
        </section>
        <section className="">
          <Featured
            cardData2={cardData2}
           
          />
        </section>
        <section className="container mx-auto px-4 lg:px-8">
          <Popular
            cardData3={cardData3}
            
          />
        </section>
        <section className="container mx-auto px-4 lg:px-8">
          <DailyNecessities
            cardData6={cardData6}
           
          />
        </section>
        <section className="container mx-auto px-4 lg:px-8">
          <Banner />
        </section>
        <section className="container mx-auto px-4 lg:px-8">
          <BannerImage />
        </section>
        <section className="container mx-auto px-4 lg:px-8">
          <Diabetic
            cardData5={cardData5}
           
          />
        </section>
        <section className="container mx-auto px-4 lg:px-8">
          <Brand cardData4={cardData4} />
        </section>
        <section className="container mx-auto px-4 lg:px-8">
          <SwapnoCoverage />
        </section>
        <section className="container mx-auto px-4 lg:px-8">
          <Services1 />
        </section>
        
        <CartSidebar />
        
      </main>

      {/* Footer Section */}
      <footer className="mt-10">
        <Footer />
        <FooterBottom />
        <Message />
      </footer>
      <CartBottom />
      <section className="mt-10">
        <Message />
      </section>
    </div>
  );
}

export default MyApp;
