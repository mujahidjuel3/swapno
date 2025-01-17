"use client";

import Navbar from "../../component/Navbar";
import NavbarModal from "../../component/NavbarModal";
import Footer from "../../component/Footer";
import FooterBottom from "../../component/FooterBottom";
import CartSidebar from "../../component/CartSidebar";
import CartBottom from "../../component/CartBottom";
import NavTop from "../../component/NavTop";
import Message from "../../component/Message";


const Address = () => {
  return (
    <div>
      <NavTop />
         <Navbar />
         <NavbarModal />
    <div className='bg-slate-50 shadow-lg rounded-sm border container mx-auto py-8 px-4 lg:px-8 pt-12 lg:pt-32 pb-4'>
        <div className='justify-center text-center pt-4 '>
            <p className='font-bold text-xl underline'>Office Address</p>
        </div>
        <div className='pt-2'>
            <h1 className='font-bold text-xl'>NOVO TOWER, LEVEL 9, 270, TEJGAON I/A
            </h1>
            <p className='font-bold text-xl'>DHAKA-1208 BANGLADESH</p>
        </div>
    </div>
    <Footer />
    <FooterBottom />
    <CartSidebar />
    <CartBottom />
    <Message />
    </div>
  )
}

export default Address