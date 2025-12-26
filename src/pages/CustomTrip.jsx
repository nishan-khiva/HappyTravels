import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationInput from "../component/LocationInput";
// import MapPicker from "../component/MapPicker";
import Navbar from "../component/Navbar";

export default function CustomTrip() {
    const [pickup, setPickup] = useState(null);
    const [drop, setDrop] = useState(null);
    const [location, setLocation] = useState("");
    return (
        <>
            <Navbar />
            <section className="bg-gray-50 py-14 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* LEFT FORM */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h2 className="text-3xl font-bold mb-2">
                            Plan Your <span className="text-yellow-500">Custom Trip</span>
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Tell us your travel details & get best taxi price
                        </p>

                        <div className="space-y-4">
                            <LocationInput
                                placeholder="Pickup Location"
                                onSelect={(place) => setPickup(place)}
                            />

                            <LocationInput
                                placeholder="Drop Location"
                                onSelect={(place) => setDrop(place)}
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="date"
                                    className="w-full border rounded-xl px-4 py-3"
                                />
                                <input
                                    type="number"
                                    placeholder="Passengers"
                                    className="w-full border rounded-xl px-4 py-3"
                                />
                            </div>

                            <textarea
                                rows="3"
                                placeholder="Any special requirement?"
                                className="w-full border rounded-xl px-4 py-3"
                            />

                            <a
                                href="https://wa.me/918077424137?text=Hi, I want to plan a custom taxi trip"
                                target="_blank"
                                className="block text-center bg-yellow-400 text-white font-semibold py-3 rounded-xl hover:bg-yellow-500 transition"
                            >
                                Get Price on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* RIGHT MAP */}
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <MapContainer
                            center={[28.6139, 77.209]}
                            zoom={6}
                            className="h-[450px] w-full"
                        >
                            <TileLayer
                                attribution="&copy; OpenStreetMap contributors"
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </MapContainer>
                    </div>

                </div>
            </section>
        </>
    );
}
