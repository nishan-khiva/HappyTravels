import { Phone, MessageCircle, Car, MapPin, ShieldCheck, UserCheck, DollarSign, Clock, Book } from "lucide-react";
import { ImageSlider } from "../component/ImageSlider";
import Navbar from "../component/Navbar";
import { BookingForm } from "../component/BookingForm";
import { Link } from "react-router-dom";

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

  <Link to="/local-taxi" className="group">
    <div
      className="
        px-5 py-6 rounded-2xl text-center bg-white border
        shadow-lg cursor-pointer
        transition-all duration-300 ease-in-out
        hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-400
      "
    >
      <Car
        className="
          mx-auto mb-4 text-yellow-500
          transition-transform duration-300
          group-hover:scale-110 group-hover:-translate-y-1
        "
        size={40}
      />
      <h4 className="font-semibold text-xl transition-colors group-hover:text-yellow-600">
        Local Taxi
      </h4>
      <p className="mt-2 text-gray-600">
        Comfortable city rides with trusted drivers.
      </p>
    </div>
  </Link>

  <Link to="/outstation" className="group">
    <div
      className="
        p-6 rounded-2xl text-center bg-white border
        shadow-lg cursor-pointer
        transition-all duration-300 ease-in-out
        hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-400
      "
    >
      <MapPin
        className="
          mx-auto mb-4 text-yellow-500
          transition-transform duration-300
          group-hover:scale-110 group-hover:-translate-y-1
        "
        size={40}
      />
      <h4 className="font-semibold text-xl transition-colors group-hover:text-yellow-600">
        Outstation Trips
      </h4>
      <p className="mt-2 text-gray-600">
        One-way & round trips across India.
      </p>
    </div>
  </Link>

  <Link to="/airport" className="group">
    <div
      className="
        p-6 rounded-2xl text-center bg-white border
        shadow-lg cursor-pointer
        transition-all duration-300 ease-in-out
        hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-400
      "
    >
      <ShieldCheck
        className="
          mx-auto mb-4 text-yellow-500
          transition-transform duration-300
          group-hover:scale-110 group-hover:-translate-y-1
        "
        size={40}
      />
      <h4 className="font-semibold text-xl transition-colors group-hover:text-yellow-600">
        Airport Pickup
      </h4>
      <p className="mt-2 text-gray-600">
        On-time airport pickup & drop service.
      </p>
    </div>
  </Link>

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
                        <span>24x7 aSupport</span>
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

       
    
        </div>
    );
}
