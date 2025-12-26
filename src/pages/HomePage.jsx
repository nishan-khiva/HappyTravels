import { Phone, MessageCircle, Car, MapPin, ShieldCheck, UserCheck, DollarSign, Clock, Book } from "lucide-react";
import { ImageSlider } from "../component/ImageSlider";
import Navbar from "../component/Navbar";
import { BookingForm } from "../component/BookingForm";

export default function LandingPage() {

    return (
        <div className="font-sans text-gray-900 bg-white">
            {/* Header */}
            <header className="flex justify-between items-center w-full   bg-yellow-400">
                <Navbar />
            </header>


            {/* Hero Section */}
            <section className="bg-[#fdc700] text-gray-900 py-20 px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">All India Taxi Service</h2>
                <p className="text-lg mb-6">Safe • Reliable • Affordable Rides Across India</p>
                <a
                    href="https://wa.me/8077424137"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-2xl text-lg font-semibold shadow"
                >
                    <MessageCircle /> Book on WhatsApp
                </a>
            </section>

            <section>
                <BookingForm />
            </section>

            {/* Services */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-2xl shadow-lg text-center bg-white border">
                        <Car className="mx-auto text-yellow-500 mb-4" size={40} />
                        <h4 className="font-semibold text-xl">Local Taxi</h4>
                        <p className="mt-2">Comfortable city rides with trusted drivers.</p>
                    </div>
                    <div className="p-6 rounded-2xl shadow-lg text-center bg-white border">
                        <MapPin className="mx-auto text-yellow-500 mb-4" size={40} />
                        <h4 className="font-semibold text-xl">Outstation Trips</h4>
                        <p className="mt-2">One-way & round trips across India.</p>
                    </div>
                    <div className="p-6 rounded-2xl shadow-lg text-center bg-white border">
                        <ShieldCheck className="mx-auto text-yellow-500 mb-4" size={40} />
                        <h4 className="font-semibold text-xl">Airport Pickup</h4>
                        <p className="mt-2">On-time airport pickup & drop service.</p>
                    </div>
                </div>
            </section>


            {/* Why Choose Us with Icons */}
            <section className="bg-gray-50 py-16 px-6">
                <h3 className="text-3xl font-bold text-center mb-10">Why Choose Happy Travels?</h3>
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center gap-4">
                        <UserCheck className="text-yellow-500" size={40} />
                        <span> Verified Drivers</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center gap-4">
                        <DollarSign className="text-yellow-500" size={40} />
                        <span> Transparent Pricing</span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center gap-4">
                        <Clock className="text-yellow-500" size={40} />
                        <span>24x7 Support</span>
                    </div>
                </div>
            </section>
            {/* Image Slider */}
            <section className="py-16 bg-gray-50 px-12">
                <h2 className="text-3xl font-bold text-center ">
                    Our Happy Customers on the Road
                </h2>
                <p className="text-center text-gray-600 mb-8 ">
                    Real journeys, real smiles — trusted by travelers across India.
                </p>

                <ImageSlider />
            </section>


            <section className="bg-gray-50 py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <p>“Driver polite aur time pe tha. Ride comfortable!”</p>
                        <h4 className="mt-4 font-semibold">Ramesh, Delhi</h4>
                        <p>⭐⭐⭐⭐⭐</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <p>“Airport pickup perfect, best taxi service.”</p>
                        <h4 className="mt-4 font-semibold">Anita, Mumbai</h4>
                        <p>⭐⭐⭐⭐⭐</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <p>“Outstation trip easy booking via WhatsApp.”</p>
                        <h4 className="mt-4 font-semibold">Vikram, Jaipur</h4>
                        <p>⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="bg-yellow-400 text-gray-900 text-center py-6">
                <p>📞 Call / WhatsApp: +91 8077424137</p>
                <p className="text-sm mt-2">© 2025 Happy Travels. All rights reserved.</p>
            </footer>
        </div>
    );
}
