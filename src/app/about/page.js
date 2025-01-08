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
const About = () => {
  return (
    <div>
      <NavTop />
        <Navbar/>
        <NavbarModal />
      <div className="rounded-sm border container mx-auto py-8 px-4 lg:px-8 pt-12 lg:pt-32 pb-4">
        <div className="justify-center text-center space-y-4">
          <h1 className="text-xl font-bold pb-4 underline">About Us</h1>
          <Image
            src="/cover.png"
            alt="Cover Image"
            width={1600}
            height={900}
            className="rounded-sm object-cover"
          />
          <p>
            Discover a world of freshness, warm service and value With a network
            of 507 outlets, comprising 82 own and 425 franchise stores, Shwapno
            stands as the largest retail chain in Bangladesh. As part of the
            Shwapno family, your satisfaction and well-being are what we work
            diligently to ensure. Most of all, we always want you to leave with
            a smile. Whether you visit our stores or order online, we are happy
            to serve you in every way we can. So expect more. Come and discover
            a different shopping experience. Welcome to Shwapno!
          </p>
          <h1 className="text-xl font-bold space-y-3">Shwapno Family</h1>
          <p>
            Since 2008, Shwapno has been providing our customers with the very
            best fresh produce, local and imported household needs, as well as
            an exquisite range of fashions, home accessories, appliances, and
            more. In 2016, Shwapno was recognized as the Best Retail Brand in
            the country, as awarded jointly by Kantar Millward Brown and
            Bangladesh Brand Forum
          </p>
          <h1 className="text-xl font-bold space-y-3">
            Achievements & Recognition
          </h1>
          <p>
            GLOBAL G.A.P. INITIAL MEMBERSHIP (2016) BEST RETAIL BRAND AWARD
            (KANTAR MILLWARD BROWN & BANGLADESH BRAND FROM, 2016)
          </p>
          <div className="flex justify-center items-center py-4">
  <Image
    src="/demo.png"
    alt="Demo Image"
    width={400}
    height={400}
    className="rounded-lg"
  />
</div>
          <h1 className="text-xl font-bold space-y-3">Seed to Shelf</h1>
          <p>
            By partnering directly with farmers, Shwapno is changing the way
            food is brought from pristine fields to your table, to give you that
            authentic farm fresh taste. Our dedicated food safety and nutrition
            teams make sure that what you take back to your family is safe,
            healthy and wholesome. Shwapno has also been a leader in the
            movement against unsafe food and a major advocate in promoting
            healthy living.
          </p>
          <p>
            In 2016, Shwapno joined <span className="text-blue-600 font-semibold">Global G.A.P</span>, the leading private sector
            body addressing the crucial objectives of ensuring safe, sustainable
            agriculture worldwide. Our partnerships with thousands of suppliers
            and growers ensure fair prices and inclusive growth for all our
            stakeholders.
          </p>
          <h1 className="text-xl font-bold space-y-3">Shwapno.com</h1>
          <p>All of Shwapno, now at your fingertips</p>
          <h1 className="text-xl font-bold space-y-3">Always Here for You</h1>
          <p>
            Shwapno is dedicated to ensuring your complete satisfaction, and we
            are always happy to hear from you. If you have any questions or
            comments or want share your thoughts,
          </p>
          <p className="text-gray-600 font-semibold">Call our customer service hotline at <span className="text-red-600 font-bold">16469</span></p>
          <p className="text-gray-600 font-semibold">Email us at <span className="text-red-600 font-bold">queries@acilogistics.net</span></p>
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

export default About;
