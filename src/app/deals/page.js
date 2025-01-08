
"use client";

import Navbar from "../../component/Navbar";
import NavbarModal from "../../component/NavbarModal";
import Footer from "../../component/Footer";
import FooterBottom from "../../component/FooterBottom";
import Image from "next/image";
import CartSidebar from "../../component/CartSidebar";
import CartBottom from "../../component/CartBottom";
import NavTop from "../../component/NavTop";
import Message from "../../component/Message";


const Deals = () => {
  const deals = [
    { image: "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/67486f8e7e56121272ee57c4_BEST%20ONLINE%20DEALS%20card%20D_500.png" },
    { image: "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/6684fc12c63b25d58f14cb81_GREAT%20SAVINGS%20BANNER_M_500.jpeg" },
    { image: "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/662777361635c9c61ba7bd9c_Deal%20Banner%20CG%20copy_500.png" },
    { image: "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/6627774ef41af6a9b2b836a0_Deals%20on%20Toys%20&%20Household%20Items%20banner_500.png" },
    { image: "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/6666dba3bc689f9448e5651f_Deal%20Banner_%20fresh%20vegetables_500.png" },
    { image: "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/662a3e1b4e4f8663d0a95324_Deal%20Banner%20Commodity%20copy_500.png" },
  ];

  return (
    <div >
      <NavTop />
        <Navbar />
        <NavbarModal />
    <div className="pt-12 lg:pt-32 pb-4 container mx-auto py-8 px-4 lg:px-8">
      <div className="">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Our Deals
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition-transform duration-300"
            >
              <Image
                src={deal.image}
                alt={deal}
                height={100}
                width={100}
                className="w-full h-full "
              />
            </div>
          ))}
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

export default Deals;
