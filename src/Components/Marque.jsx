import { motion } from "framer-motion";
import React from "react";

function Marque() {
  const brandImages = [
  
    "/spel.png",
    "/KLOGO.png",
    "/taeko.png",
    "/nitiayog.png",
    "FIT INDIA.png",
    "/KCC.png",
  ];

  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed=".1" 
      className="w-full max-w-full py-2 bg-[#F3F4F6]"
    >
      <div className="border-t-2 py-5 border-b-2 border-slate-50 flex overflow-hidden whitespace-nowrap px-4 sm:px-6">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex items-center"
        >
          {Array(10).fill(brandImages).flat().map((src, index) => (
            <img key={index} src={src} alt={`${index + 1}`} className="h-12  gap-20 md:h-16 mx-4" />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Marque;
