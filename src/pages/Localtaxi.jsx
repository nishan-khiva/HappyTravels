import React from "react";
import Navbar from "../component/Navbar";


export const Localtaxi = () => {
    return (
        <>
        <Navbar/>

            <div className="max-w-6xl mx-auto py-12 px-4">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-3 text-gray-800">
                        Local Taxi Service in Uttarakhand
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Reliable, safe & affordable local and intercity taxi services.
                        We provide comfortable rides with experienced drivers for all routes.
                    </p>
                </div>

                {/* Routes Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                        Popular Taxi Routes
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                        <RouteCard title="Sitarganj to Delhi Taxi" />
                        <RouteCard title="Rudrapur to Delhi Taxi" />
                        <RouteCard title="Haldwani to Delhi Taxi" />
                        <RouteCard title="Khatima to Delhi Taxi" />
                        <RouteCard title="Khatima to Haldwani Taxi" />
                        <RouteCard title="Rudrapur to Kashipur Taxi" />
                        <RouteCard title="Rudrapur to Jaspur Taxi" />
                        <RouteCard title="Khatima to Rishikesh Taxi" />
                        <RouteCard title="Khatima to Haridwar Taxi" />
                        <RouteCard title="Rudrapur to Haridwar Taxi" />
                        <RouteCard title="Rudrapur to Nainital Taxi" />
                        <RouteCard title="Rudrapur to Kainchi Dham Taxi" />

                    </div>
                </div>

                {/* Bottom Text */}
                <div className="mt-10 text-center text-gray-600">
                    <p>
                        📞 Book your taxi now for one-way & round trips at best prices.
                    </p>
                </div>
            </div>
        </>
    );

};

/* Reusable Card */
const RouteCard = ({ title }) => {
    return (
        <div className="border rounded-xl p-4 hover:shadow-md transition bg-gray-50">
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">
                Comfortable & on-time taxi service
            </p>
        </div>
    );

};
