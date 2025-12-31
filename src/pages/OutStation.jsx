import React from "react";
import { MapPin, Clock, IndianRupee } from "lucide-react";
import Navbar from "../component/Navbar";

export const Outstation = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto py-12 px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">
                        Outstation Taxi Service
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Affordable and reliable outstation taxi service for one-way and round trips.
                        Travel comfortably with professional drivers across Uttarakhand & India.
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <Feature
                        icon={<MapPin size={32} />}
                        title="Long Distance Trips"
                        desc="Smooth & safe long-distance outstation travel."
                    />
                    <Feature
                        icon={<Clock size={32} />}
                        title="On-Time Pickup"
                        desc="Guaranteed on-time pickup for every trip."
                    />
                    <Feature
                        icon={<IndianRupee size={32} />}
                        title="Best Pricing"
                        desc="Transparent pricing with no hidden charges."
                    />
                </div>

                {/* Popular Routes */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                        Popular Outstation Routes
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <RouteCard title="Khatima to Delhi Taxi" />
                        <RouteCard title="Sitarganj to Delhi Taxi" />
                        <RouteCard title="Rudrapur to Delhi Taxi" />
                        <RouteCard title="Haldwani to Delhi Taxi" />
                        <RouteCard title="Khatima to Dehradun Taxi" />
                        <RouteCard title="Sitarganj to Haldwani Taxi" />
                        <RouteCard title="Rudrapur to Haridwar Taxi" />
                        <RouteCard title="Rudrapur to Nainital Taxi" />
                        <RouteCard title="Rudrapur to Kainchi Dham Taxi" />
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <h3 className="text-xl font-semibold mb-3">
                        Book Your Outstation Taxi Now
                    </h3>
                    <p className="text-gray-600 mb-5">
                        One-way or round trip — we’ve got you covered.
                    </p>

                    <div className="flex justify-center gap-4 flex-wrap">
                        <a
                            href="tel:+918077424137"
                            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl hover:bg-yellow-600 transition"
                        >
                            Call Now
                        </a>
                        <a
                            href="https://wa.me/918077424137"
                            className="px-6 py-3 border border-yellow-500 text-yellow-600 font-semibold rounded-xl hover:bg-yellow-50 transition"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
};

/* Feature Card */
const Feature = ({ icon, title, desc }) => (
    <div className="bg-white border rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition">
        <div className="text-yellow-500 mb-4 flex justify-center">
            {icon}
        </div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
    </div>
);

/* Route Card */
const RouteCard = ({ title }) => (
    <div className="border rounded-xl p-4 bg-gray-50 hover:shadow-md transition">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">
            One-way & round trip available
        </p>
    </div>
);
