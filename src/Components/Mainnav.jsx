import { Medal, Users, Book, UserCheck, Home, Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function Mainnav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex w-full h-auto">
      {/* Left Section - 20% width, Blue Background, Fully Rounded */}
      <div className="w-[20%]  bg-[#052053] flex items-center justify-center p-4 rounded-r-full min-h-[70px]">
        <img
          src="/itu3.jpg"
          alt="SDDI Logo"
          className="h-auto  md:ml-18 lg:ml-20 xl:ml-40 2xl:ml-56
 w-auto max-w-[50px] max-h-[50px] sm:max-w-[60px] sm:max-h-[60px] md:max-w-[80px] md:max-h-[80px] rounded-full shadow-md object-cover"
        />
      </div>

      {/* Right Section - Navigation */}
      <div className="w-[80%] bg-white flex relative items-center px-4 md:px-6 lg:px-12 py-4">
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black ml-auto">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center w-full justify-center">
          {[
            { icon: <Home size={24} className="text-[#052053]" />, title: "HOME" },
            { icon: <Medal size={24} className="text-[#052053]" />, title: "TOURNAMENTS", subtitle: "Upcoming events" },
            { icon: <Users size={24} className="text-[#052053]" />, title: "TRAINING & COACHING", subtitle: "Professional coaching" },
            { icon: <Book size={24} className="text-[#052053]" />, title: "RULEBOOK", subtitle: "Official guidelines" },
            { icon: <UserCheck size={24} className="text-[#052053]" />, title: "MEMBERSHIP" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 transition duration-300 hover:scale-105 cursor-pointer">
              {item.icon}
              <div>
                <div className="text-base font-semibold text-black">{item.title}</div>
                {item.subtitle && <div className="text-xs text-gray-600">{item.subtitle}</div>}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`lg:hidden absolute top-16 right-0 w-full bg-white md:mt-12 sm:mt-4  shadow-xl z-50 p-6 space-y-6 transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        {[
          { icon: <Home size={26} className="text-[#052053]" />, title: "HOME" },
          { icon: <Medal size={26} className="text-[#052053]" />, title: "TOURNAMENTS", subtitle: "Upcoming events" },
          { icon: <Users size={26} className="text-[#052053]" />, title: "TRAINING & COACHING", subtitle: "Professional coaching" },
          { icon: <Book size={26} className="text-[#052053]" />, title: "RULEBOOK", subtitle: "Official guidelines" },
          { icon: <UserCheck size={26} className="text-[#052053]" />, title: "MEMBERSHIP" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-4 cursor-pointer">
            {item.icon}
            <div>
              <div className="text-base font-semibold text-black">{item.title}</div>
              {item.subtitle && <div className="text-sm text-gray-600">{item.subtitle}</div>}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
