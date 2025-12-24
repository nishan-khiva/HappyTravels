import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image2.jpeg";
import img3 from "../assets/image3.jpeg";
import img4 from "../assets/image4.jpeg";
import img5 from "../assets/image5.jpeg";
import img6 from "../assets/image6.jpeg";
import img7 from "../assets/image7.jpeg";
import img8 from "../assets/image8.jpeg";
import img10 from "../assets/image10.jpeg";
import img11 from "../assets/image11.jpeg";
import img12 from "../assets/image12.jpeg";

const images = [img1, img2, img3, img5, img6, img7, img8, img10, img12];

export const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const controls = useAnimation();

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile auto-slide
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3000); // every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  // Desktop continuous scroll
  useEffect(() => {
    if (!isMobile) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [controls, isMobile]);

  // Mobile navigation
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  // ===== Mobile Carousel =====
  if (isMobile) {
    return (
      <div className="relative w-full overflow-hidden py-8 px-4">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="min-w-full h-[220px] rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    );
  }

  // ===== Desktop Continuous Scroll =====
  return (
    <div className="w-full overflow-hidden py-8 px-4">
      <motion.div
        className="flex gap-4"
        animate={controls}
        style={{ display: "flex" }}
      >
        {[...images, ...images].map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="min-w-[240px] h-[270px] rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
