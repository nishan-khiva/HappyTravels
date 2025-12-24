import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-yellow-400 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide"> Happy<span className="text-white">Travels</span> </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-white">
          <a href="/" className="hover:opacity-80 transition">Home</a>
          <a href="/destinations" className="hover:opacity-80 transition">Destinations</a>
          <a href="/packages" className="hover:opacity-80 transition">Packages</a>
          <a href="/custom-trip" className="hover:opacity-80 transition">Custom Trip</a>
          <a href="/contact" className="hover:opacity-80 transition">Contact</a>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.facebook.com/gurbeer.johal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1877F2] hover:text-blue-800 transition transform hover:scale-110"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/susrstrust/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E4405F] hover:text-pink-600 transition transform hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:text-green-600 transition transform hover:scale-110"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-yellow-300 rounded-xl p-4 space-y-4">
          <a href="/" className="block font-medium">Home</a>
          <a href="/destinations" className="block font-medium">Destinations</a>
          <a href="/packages" className="block font-medium">Packages</a>
          <a href="/custom-trip" className="block font-medium">Custom Trip</a>
          <a href="/contact" className="block font-medium">Contact</a>

          {/* Mobile Social Icons */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://www.facebook.com/gurbeer.johal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:text-blue-800 transition transform hover:scale-110"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/susrstrust/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4405F] hover:text-pink-600 transition transform hover:scale-110"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-green-600 transition transform hover:scale-110"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>

          <a
            href="tel:+918077424137"
            className="block w-full text-center bg-white text-yellow-400 font-semibold py-2 rounded-xl hover:bg-gray-100 transition"
          >
            Call
          </a>
        </div>
      )}
    </header>
  );
}
