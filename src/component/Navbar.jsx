import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-yellow-400 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide"> Happy<span className="text-white">Travels</span> </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-white">
          <Link to="/home" className="hover:opacity-80 transition">Home</Link>
          <Link to="/destination" className="hover:opacity-80 transition">Destinations</Link>
          <Link to="/package" className="hover:opacity-80 transition">Packages</Link>
          <Link to="/customtrip" className="hover:opacity-80 transition">Custom Trip</Link>
          {/* <a href="/contact" className="hover:opacity-80 transition">Contact</a> */}

          <span className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition">

            {/* Left */}
            <span className="flex items-center gap-2 text-sm font-semibold">
              <IoMdCall className="text-[#fdc700]" size={18} />
              24×7
            </span>

            {/* Divider */}
            <span className="w-px h-6 bg-white/40"></span>

            {/* Phone */}
            <a
              href="tel:+918077424137"
              className="font-bold tracking-wide hover:text-[#fdc700] transition"
            >
              +91 8077424137
            </a>
          </span>

        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.facebook.com/satender.singh.5602728"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1877F2] hover:text-blue-800 transition transform hover:scale-110"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/satender13_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E4405F] hover:text-pink-600 transition transform hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://wa.me/918077424137"
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
        <div className="md:hidden mt-3 rounded-2xl bg-white shadow-xl border overflow-hidden animate-slideDown">

          {/* Menu Links */}
          <div className="divide-y">
            {[
              { name: "Home", link: "/home" },
              { name: "Destinations", link: "/destination" },
              { name: "Packages", link: "/packages" },
              { name: "Custom Trip", link: "/customtrip" },
              { name: "Contact", link: "/contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="flex items-center justify-between px-5 py-4 font-semibold text-gray-800 hover:bg-gray-50 transition"
              >
                {item.name}
                <span className="text-gray-400">›</span>
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 py-4 bg-gray-50">
            <a
              href="https://www.facebook.com/gurbeer.johal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:scale-110 transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://www.instagram.com/susrstrust/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4405F] hover:scale-110 transition"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:scale-110 transition"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>

          {/* Call Button */}
          <div className="p-4">
            <a
              href="tel:+918077424137"
              className="block w-full text-center bg-[#fdc700] text-white font-bold py-3 rounded-xl hover:bg-yellow-500 transition"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
