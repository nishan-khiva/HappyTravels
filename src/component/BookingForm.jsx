import React, { useState } from "react";

export const BookingForm = () => {
  const [tripType, setTripType] = useState("oneway");

  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT SIDE – FORM */}
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">
            Book Your Cab
          </h2>
          <p className="text-gray-600 mb-6">
            Safe, Reliable & Affordable Taxi Service
          </p>

          {/* Trip Type */}
          <div className="flex gap-6 mb-5">
            <label className="flex items-center gap-2 cursor-pointer font-medium">
              <input
                type="radio"
                checked={tripType === "oneway"}
                onChange={() => setTripType("oneway")}
              />
              One Way
            </label>

            <label className="flex items-center gap-2 cursor-pointer font-medium">
              <input
                type="radio"
                checked={tripType === "round"}
                onChange={() => setTripType("round")}
              />
              Round Trip
            </label>
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Pickup Location"
              className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            <input
              type="text"
              placeholder="Drop Location"
              className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="p-4 border rounded-xl"
              />
              <input
                type="time"
                className="p-4 border rounded-xl"
              />
            </div>
          </div>

          {/* Button */}
          <button className="w-full mt-6 bg-[#fdc700] text-white py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition">
            Search Cabs
          </button>

          {/* Contact */}
          <div className="mt-5 flex items-center gap-3 text-sm text-gray-600">
            <span className="font-semibold">24×7 Support</span>
            <span className="w-px h-4 bg-gray-400"></span>
            <span className="font-medium">+91 8077424137</span>
          </div>
        </div>

        {/* RIGHT SIDE – IMAGE (Hidden on Mobile) */}
        <div className="hidden md:block relative">
          <img
            src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023"
            alt="Taxi"
            className="w-full h-[80vh] object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>
    </section>
  );
};
