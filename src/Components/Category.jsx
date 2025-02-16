import { useState } from "react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  GiHighKick,
  GiPunchBlast,

  GiPodium,
  GiShield,
  GiBoxingGlove,
  GiSwordSlice,
  GiMeditation,
} from "react-icons/gi";

const categories = [
  { name: "Kicks", icon: <GiHighKick size={50} /> },
  { name: "Punches", icon: <GiPunchBlast size={50} /> },

  { name: "Competitions", icon: <GiPodium size={50} /> },
  { name: "Defense", icon: <GiShield size={50} /> },
  { name: "Sparring", icon: <GiBoxingGlove size={50} /> },
  { name: "Weapons Training", icon: <GiSwordSlice size={50} /> },
  { name: "Meditation", icon: <GiMeditation size={50} /> },
];

const slides = [
  { text: "How to master Taekwondo kicks", image: "/c1.webp" },
  { text: "Best protective gear for training", image: "/c2.webp" },
  { text: "Rules of international competitions", image: "/c3.webp" },
  { text: "Belt ranking system explained", image: "/c1.webp" },
  { text: "Advanced self-defense techniques", image: "/c4.webp" },
  { text: "Taekwondo training drills", image: "/c3.webp" },
  { text: "Competition strategies", image: "/c6.webp" },
  { text: "Choosing the right sparring gear", image: "/c7.webp" },
  { text: "Taekwondo history & origins", image: "/c8.webp" },
  { text: "Mental discipline in martial arts", image: "/c9.webp" },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="flex lg:min-h-full l md:flex-row items-center justify-between p-6 gap-6">
      {/* Left Category Section */}
      <div className="md:w-1/2 w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold lg:py-20 text-center text-black mb-6">
          Taekwondo Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center bg-white p-4 rounded-lg shadow-md cursor-pointer transition duration-300 ${
                selectedCategory === item.name ? "bg-blue-200" : ""
              }`}
              onClick={() => setSelectedCategory(item.name)}
            >
              <span className="text-blue-500">{item.icon}</span>
              <p className="mt-2 text-lg font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Carousel Section */}
      <div className="md:w-1/2 w-full">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={true}
          arrows={true}
          containerClass="carousel-container"
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative p-2">
              <img
                src={slide.image}
                alt={slide.text}
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-2 rounded-md">
                {slide.text}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
