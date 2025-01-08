"use client";

import Image from "next/image";
import Navbar from "../../component/Navbar";
import NavbarModal from "../../component/NavbarModal";
import Footer from "../../component/Footer";
import FooterBottom from "../../component/FooterBottom";
import CartSidebar from "../../component/CartSidebar";
import CartBottom from "../../component/CartBottom";
import NavTop from "../../component/NavTop";
import Message from "../../component/Message";


const HelpLine = () => {
  return (
    <div>
      <NavTop />
      <Navbar />
      <NavbarModal />
      <div className="border container mx-auto py-8 px-4 lg:px-8 pt-16 lg:pt-32 pb-4">
        <h1 className="text-xl justify-center text-center font-bold pb-4 underline">
          Help Line
        </h1>
        <div className="relative justify-center flex items-center">
          {/* Background Image */}
          <Image
            src="/contact.png"
            alt="Cover Image"
            width={1200}
            height={100}
            className="rounded-lg "
          />

          {/* Text Container */}
          <div className="absolute left-80 md:left-[650px] xl:left-[1020px] text-justify ">
            <h1 className="text-gray-800 rounded shadow-lg py-3 px-2 font-bold text-3xl mb-4">
              HELPLINE
            </h1>
            <p className="text-white text-lg mb-2">
              <span className="font-bold text-red-600 text-xl">@</span>{" "}
              queries@acilogistics.net
            </p>
            <p className="text-white text-lg">
              <span className="font-bold">📞</span> 16469 (9am - 9pm)
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <FooterBottom />
      <CartSidebar />
      <CartBottom />
      <Message />
    </div>
  );
};

export default HelpLine;
