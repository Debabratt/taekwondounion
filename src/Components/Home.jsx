import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
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
      <div className="absolute top-0 left-0 w-full h-full bg-[#0f2658] opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center gap-10 px-6">
        {/* Left Section - Animated Text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-[40%] text-white text-center md:text-left"
        >
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.span
              animate={{
                color: ["#FF9933", "#FFFFFF", "#138808"],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            >
              Welcome to
            </motion.span>{" "}
            <br /> <span className="text-3xl">Indian Taekwondo Union</span> 
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Unlock your full potential with the Indian Taekwondo Union! Master
            the art of discipline, strength, and self-defense while building
            confidence and resilience.
          </motion.p>

          <motion.button
            className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-lg font-semibold rounded-full shadow-lg transform transition duration-300 hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </motion.button>
        </motion.div>

        {/* Right Section - Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-[60%]"
        >
          <Carousel
            showThumbs={false}
            showArrows={false}
            showIndicators={false} // Hides dots
            showStatus={false} // Hides slide number
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            stopOnHover={false}
            swipeable={true}
            className="rounded-2xl overflow-hidden"
          >
            {["/c1.webp", "/c2.webp", "/sldr1.webp", "/sldr2.webp"].map((src, index) => (
              <div key={index} className="w-full">
                <img
                  src={src}
                  alt={`Taekwondo ${index + 1}`}
                  className="w-full h-[500px] object-contain"
                />
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
