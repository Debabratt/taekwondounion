import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const textContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, duration: 0.8, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/flag.webm" type="video/mp4" />
      </video>

      {/* Black Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0f2658] to-[#05183d] opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full  mx-auto items-center">
        {/* Left Section - Animated Text */}
        <motion.div
  variants={textContainerVariants}
  initial="hidden"
  animate="visible"
  className="w-full md:w-[38%] text-white text-center md:text-left ml-20"
>
  <motion.h1
    className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-green-500"
    variants={textVariants}
  >
    Welcome to  
  </motion.h1>

  <motion.h2
    className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-green-500"
    variants={textVariants}
  >
    Indian Taekwondo Union
  </motion.h2>

  <motion.p
    className="text-lg text-gray-300 mb-6"
    variants={textVariants}
  >
    Forge your spirit. Master your strength. Embody the discipline of a true warrior. Rise with resilience, strike with precision, and embrace the journey of excellence.
  </motion.p>

  <motion.button
    className="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white text-lg font-medium rounded-md shadow-md transition-transform transform hover:scale-105"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
   Know More
  </motion.button>
</motion.div>


        {/* Right Section - Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-[55%] mr-10 lg:mr-20"
        >
          <Carousel
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            stopOnHover={false}
            swipeable={true}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            {["/c1.webp", "/c2.webp", "/sldr1.webp", "/sldr2.webp"].map(
              (src, index) => (
                <div key={index} className="w-full">
                  <img
                    src={src}
                    alt={`Taekwondo ${index + 1}`}
                    className="w-full h-[500px] rounded-3xl object-contain"
                  />
                </div>
              )
            )}
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
