import React from "react";
import { Plane, Clock, ShieldCheck } from "lucide-react";
import Navbar from "../component/Navbar";

export const Airport = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto py-12 px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">
                        Airport Pickup & Drop Service
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Reliable airport taxi service with on-time pickup, clean vehicles
                        and professional drivers. Travel stress-free to & from airports.
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <Feature
                        icon={<Plane size={32} />}
                        title="All Major Airports"
                        desc="Pickup & drop service from all nearby airports."
                    />
                    <Feature
                        icon={<Clock size={32} />}
                        title="24x7 Availability"
                        desc="Day or night — we’re always available."
                    />
                    <Feature
                        icon={<ShieldCheck size={32} />}
                        title="Safe & Reliable"
                        desc="Verified drivers and well-maintained cars."
                    />
                </div>

                {/* Airport Routes */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                        Popular Airport Taxi Routes
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <RouteCard title="Khatima to Delhi Airport Taxi" />
                        <RouteCard title="Delhi Airport to Khatima Taxi" />
                        <RouteCard title="Sitarganj to Pantnagar Airport Taxi" />
                        <RouteCard title="Pantnagar Airport to Sitarganj Taxi" />
                        <RouteCard title="Rudrapur to Delhi Airport Taxi" />
                        <RouteCard title="Delhi Airport to Rudrapur Taxi" />
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <h3 className="text-xl font-semibold mb-3">
                        Book Airport Taxi Instantly
                    </h3>
                    <p className="text-gray-600 mb-5">
                        Flight on time? We’ll get you there on time.
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
            On-time pickup & drop guaranteed
        </p>
    </div>
);
