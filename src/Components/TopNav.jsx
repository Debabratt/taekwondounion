import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Ensure styles are imported

const TopNav = () => {
  return (
    <header className="border-b border-gray-700 bg-[#011C4D] shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-8 lg:px-10">
        {/* Logo Section with Text & Animated Logos */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16">
            <Carousel
              showThumbs={false}
              showIndicators={false}
              showArrows={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={2500}
              stopOnHover={false}
            >
              {["/KLOGO.png", "/itu3.jpg", "/KLOGO.png", "/logo3.png", "/logo4.png"].map(
                (src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt="Taekwondo Logo"
                    className="h-16 w-auto rounded-full object-contain"
                  />
                )
              )}
            </Carousel>
          </div>

          <div className="text-white px-2">
            <p className="text-sm text-[#8699AE]">An ISO Certified Taekwondo Organization</p>
            <p className="text-sm text-[#8699AE]">KUKKIWON 2019 Top Ranked Taekwondo Organization</p>
            <p className="text-xs text-[#8699AE]">
              MEMBER & PROMOTED BY: KUKKIWON-WORLD TAEKWONDO HEADQUARTER (SOUTH KOREA)
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {[
              "About",
              "State Taekwondo Union",
              "Affiliated Unit",
              "Download Form",
              "Contact Us",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-sm font-medium text-[#8699AE] transition-colors duration-200 hover:text-gray-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TopNav;
