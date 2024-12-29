"use client";

import Navbar from "../../component/Navbar";
import NavbarModal from "../../component/NavbarModal";
import Footer from "../../component/Footer";
import FooterBottom from "../../component/FooterBottom";
import NavTop from "../../component/NavTop";

const Contact = () => {
  return (
    <div>
      <NavTop />
       <Navbar />
       <NavbarModal />
    <div className=' justify-center text-center pt-32 pb-4 container mx-auto py-8 px-4 lg:px-8'>
      <h1 className='font-bold text-2xl pt-8'>Contact Us</h1>
      <div className='pt-4 space-y-3'>
        <h1 className='text-2xl text-green-500'>Hotline</h1>
        <p className='text-xl'>16469 (9am - 9pm)</p>
      </div>
      <div className='space-y-3'>
        <h1 className='text-2xl text-green-500'>Facebook Support</h1>
        <p className='text-xl'>Join our 24/7 Facebook Group:<a href='https://www.facebook.com/groups/413467885829430'> Facebook</a></p>
      </div>
      <div className='space-y-3'>
        <h1 className='text-2xl text-green-500'>Email Support</h1>
        <p className='text-xl'>For queries, email us at: queries@acilogistics.net</p>
      </div>
    </div>
    <Footer />
    <FooterBottom />
       
    </div>
  )
}

export default Contact