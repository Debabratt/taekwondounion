import { Medal, Users, Book, UserCheck, Home, Menu, X, MoreHorizontal } from "lucide-react";
import React, { useState } from "react";

export default function Mainnav() {
  const [isOpen, setIsOpen] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);

  return (
    <>
      <header className="flex w-full h-auto relative z-10">
        {/* Left Section */}
        <div className="w-[20%] bg-[#0B2545] flex items-center justify-center p-2 min-h-[70px] relative overflow-hidden">
          <img
            src="/ITU LOGO.png"
            alt="SDDI Logo"
            className="h-auto w-auto max-w-[90px] max-h-[90px] sm:max-w-[100px] sm:max-h-[100px] md:max-w-[110px] md:max-h-[110px] rounded-full shadow-md object-cover"
          />
        </div>

        {/* Right Section - Navigation */}
        <div className="w-[80%] bg-[#0B2545] flex relative items-center px-4 md:px-6 lg:px-12 py-4">
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-100 ml-auto">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-10 items-center w-full justify-center">
            {[
              { icon: <Home size={20} className="text-white" />, title: "HOME" },
              { icon: <Medal size={20} className="text-white" />, title: "TOURNAMENTS", subtitle: "Upcoming events" },
              { icon: <Users size={20} className="text-white" />, title: "TRAINING & COACHING", subtitle: "Professional coaching" },
              { icon: <Book size={20} className="text-white" />, title: "RULEBOOK", subtitle: "Official guidelines" },
              { icon: <UserCheck size={20} className="text-white" />, title: "MEMBERSHIP" },
            ].map((item, index) => (
              <div key={index} className="relative flex flex-col items-center cursor-pointer">
                <div className="flex items-center gap-2 transition duration-300">
                  {item.icon}
                  <div className="flex flex-col group">
                    <div className="text-sm font-semibold md:mt-2 text-white relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-400 md:mt-1 min-h-[16px]">{item.subtitle}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* OTHERS Section - Fixed Dropdown */}
            <div
  className="relative flex items-center gap-2 transition duration-300 hover:scale-105 cursor-pointer"
  onMouseEnter={() => setOthersOpen(true)}
  onMouseLeave={() => setOthersOpen(false)}
>
  <MoreHorizontal size={20} className="text-white" />
  <div className="flex flex-col group">
    <div className="text-sm md:mb-4 font-semibold md:mt-2 text-white relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
      OTHERS
    </div>
  </div>

  {/* Animated Dropdown */}
  <div
    className={`absolute top-8 md:mt-12 left-0 w-40 bg-white shadow-md rounded-md py-2 z-20 transition-all duration-300 origin-top ${
      othersOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
    }`}
  >
    <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Affiliated Unit</div>
    <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Download Forms</div>
    <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">About ITU</div>
    <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Gallery</div>
    <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Contact</div>
  </div>
</div>

          </nav>
        </div>
      </header>
    </>
  );
}
