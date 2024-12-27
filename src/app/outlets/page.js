"use client";

import { useState } from "react";
import Navbar from "../../component/Navbar";
import NavbarModal from "../../component/NavbarModal";
import Footer from "../../component/Footer";
import FooterBottom from "../../component/FooterBottom";
// Districts and outlets
const districts = [
  {
    name: "Dhaka",
    outlets: [
      "Banani",
      "Mirpur 1",
      "Mohammadpur",
      "Savar",
      "Wari",
      "Uttara",
      "Dhanmondi",
    ],
  },
  {
    name: "Chattogram",
    outlets: ["Kotwali", "Pahartoli", "Agrabad", "Panchlaish"],
  },
  {
    name: "Sylhet",
    outlets: ["Zindabazar", "Uposhohor", "Moulvibazar"],
  },
  {
    name: "Khulna",
    outlets: ["Boyra", "Shib Bari More"],
  },
  {
    name: "Barishal",
    outlets: ["Nathullabad", "Launch Ghat"],
  },
];

// Outlet details
const outletDetails = {
  Banani: "House 76/A, Block-M, WBC Tower, Road-11, Banani, Dhaka",
  "Mirpur 1": "Mirpur City Center, P-3/A, North East Darus Salam Rd, Dhaka",
  Mohammadpur: "House 04, Mohammadi Main Road, Mohammadia Housing, Dhaka",
  Savar: "House 13, New Market Road, Savar Bazar, Savar",
  Wari: "Rankin Street, Wari, Dhaka",
  Uttara: "House-01, Road-3, Sector-5, Uttara, Dhaka",
  Dhanmondi: "House-22, Satmasjid Road, Dhanmondi, Dhaka",
  Kotwali: "House 45, Andarkilla, Kotwali, Chattogram",
  Pahartoli: "CEPZ Main Road, Pahartoli, Chattogram",
  Agrabad: "House-23, Agrabad Access Road, Chattogram",
  Panchlaish: "Medina Square, Panchlaish, Chattogram",
  Zindabazar: "Zindabazar Main Road, Sylhet",
  Uposhohor: "House 23, Uposhohor Main Road, Sylhet",
  Moulvibazar: "Main Street, Moulvibazar, Sylhet",
  Boyra: "Boyra Bazar, Khulna",
  "Shib Bari More": "Shib Bari More, Khulna",
  Nathullabad: "House 12, Nathullabad Main Road, Barishal",
  "Launch Ghat": "Launch Ghat Area, Barishal",
};

const Outlets = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedOutlet, setSelectedOutlet] = useState("");

  return (
    <div>
      <Navbar />
      <NavbarModal />
    <div className="border container mx-auto py-8 px-4 lg:px-8 pt-32 pb-4 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">সপ্ন আউটলেট লোকেশন</h1>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <div className="bg-white p-6 shadow-md rounded-md">
          <label className="block mb-4 text-lg font-medium text-gray-700">
            জেলা নির্বাচন করুন
          </label>
          <select
            className="w-full p-3 border rounded-md text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setSelectedDistrict(e.target.value);
              setSelectedOutlet(""); // Reset outlet when district is changed
            }}
            value={selectedDistrict}
          >
            <option value="">জেলা নির্বাচন করুন</option>
            {districts.map((district) => (
              <option key={district.name} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>

          {/* Outlets */}
          {selectedDistrict && (
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-4">
                {selectedDistrict} জেলার আউটলেটসমূহ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {districts
                  .find((district) => district.name === selectedDistrict)
                  ?.outlets.map((outlet) => (
                    <div
                      key={outlet}
                      className={`p-4 border rounded-lg shadow-md cursor-pointer ${
                        selectedOutlet === outlet
                          ? "border-blue-500 bg-blue-100"
                          : "bg-gray-50"
                      }`}
                      onClick={() => setSelectedOutlet(outlet)}
                    >
                      <h3 className="font-semibold text-lg">{outlet}</h3>
                      <p className="text-sm text-gray-600">
                        {outletDetails[outlet] || "তথ্য আপডেট করা হচ্ছে..."}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Map */}
          {selectedOutlet && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">
                {selectedOutlet} এর লোকেশন
              </h3>
              <iframe
                className="w-full h-64 rounded-md"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  outletDetails[selectedOutlet]
                )}&output=embed`}
                allowFullScreen
                title={`${selectedOutlet} Map`}
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer />
    <FooterBottom />
    </div>
  );
};

export default Outlets;
