import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image2.jpeg";
import img3 from "../assets/image3.jpeg";
import img4 from "../assets/image4.jpeg";
import img5 from "../assets/image5.jpeg";
import img6 from "../assets/image6.jpeg";
import img7 from "../assets/image7.jpeg";
import img8 from "../assets/image8.jpeg";
import img12 from "../assets/image12.jpeg";
import img10 from "../assets/image10.jpeg";
import img11 from "../assets/image11.jpeg";

const images = [img1, img2, img3, img5, img6, img7,img8,img10, img12];

export const ImageSlider = () => {
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);

  // 📱 detect mobile
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (!paused) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          duration: isMobile ? 14 : 25, // 🔥 mobile faster
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [paused, controls, isMobile]);

  return (
    <div className="w-full overflow-hidden py-8 px-4">
      <motion.div className="flex gap-4" animate={controls}>
        {[...images, ...images].map((img, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => {
              setPaused(true);
              controls.stop();
            }}
            onMouseLeave={() => setPaused(false)}
            whileHover={!isMobile ? { scale: 1.1 } : {}}
            className="min-w-[200px] sm:min-w-[240px] h-[220px] sm:h-[270px] rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={img}
              alt="Happy Travels"
              loading="lazy"   // 🚀 mobile performance boost
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}