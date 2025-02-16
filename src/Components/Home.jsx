import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <div className="relative w-full min-h-[600px]  overflow-hidden flex items-center justify-center">
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
      <div className="relative px-6 z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center gap-10">
        {/* Left Section - Text (50% width) */}
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Shifted more left
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-white  text-center md:text-left"
        >
          {/* Animated Text with Indian Flag Colors */}
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            animate={{ color: ["#FF9933", "#FFFFFF", "#138808"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          >
            Welcome to the Indian Taekwondo Union
          </motion.h1>

          <p className="text-base md:text-lg leading-relaxed mb-4">
            Unlock your full potential with the Indian Taekwondo Union! Master
            the art of discipline, strength, and self-defense while building
            confidence and resilience. Join a community of passionate martial
            artists and take your skills to the next level.
          </p>
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-lg font-semibold rounded-full shadow-lg transform transition duration-300 hover:scale-105">
            Join Now
          </button>
        </motion.div>

        {/* Right Section - Wider Carousel (50% width, images fully fitting) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }} // Shifted more right
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 "
        >
          <Carousel
            showThumbs={false}
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            stopOnHover={false}
            swipeable={false}
            className="rounded-xl overflow-hidden"
          >
            {["/c1.webp", "/c2.webp", "/c3.webp", "/c5.webp"].map((src, index) => (
              <div key={index} className="w-full h-[400px] md:h-[400px]">
                <img
                  src={src}
                  alt={`Taekwondo ${index + 1}`}
                  className="w-full h-full object-cover"
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
