"use client";

import Navbar from "../../component/Navbar";
import NavbarModal from "../../component/NavbarModal";
import Footer from "../../component/Footer";
import FooterBottom from "../../component/FooterBottom";
import CartSidebar from "../../component/CartSidebar";
import CartBottom from "../../component/CartBottom";
import NavTop from "../../component/NavTop";
import Message from "../../component/Message";



const Shipping = () => {
  return (
    <div>
      <NavTop />
         <Navbar />
         <NavbarModal />
        <div className=' justify-center  text-center pt-12 lg:pt-32 pb-4 container mx-auto py-8 px-4 lg:px-8'>
            <p className="shadow-lg bg-slate-50 py-8"></p>
        </div>
        <Footer />
        <FooterBottom />
        <CartSidebar />
        <CartBottom />
        <Message />
    </div>
  )
}

export default Shipping