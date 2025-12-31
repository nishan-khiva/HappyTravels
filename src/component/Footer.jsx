import React from "react";
import { Link } from "react-router-dom";
import { Phone, Home } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-2">
            Happy Travels
          </h3>
          <p className="text-sm text-gray-400">
            Reliable taxi services for local, outstation & airport travel.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-400 transition"
              >
                <Home size={16} /> Home
              </Link>
            </li>
            <li>
              <Link to="/local-taxi" className="hover:text-yellow-400 transition">
                Local Taxi
              </Link>
            </li>
            <li>
              <Link to="/outstation" className="hover:text-yellow-400 transition">
                Outstation
              </Link>
            </li>
            <li>
              <Link to="/airport" className="hover:text-yellow-400 transition">
                Airport Pickup
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Contact Us</h4>
          <a
            href="tel:+918077424137"
            className="flex items-center justify-center md:justify-start gap-2 text-yellow-400 font-semibold"
          >
            <Phone size={16} /> +91 8077424137
          </a>
          <p className="text-sm text-gray-400 mt-2">
            Call or WhatsApp for instant booking
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2025 Happy Travels. All rights reserved.
      </div>
    </footer>
  );
};
