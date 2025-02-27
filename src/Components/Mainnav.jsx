import { Medal, Users, Book, UserCheck, Home, Menu, X, Info, MoreHorizontal } from "lucide-react";
import React, { useState } from "react";

export default function Mainnav() {
  const [isOpen, setIsOpen] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);

  return (
    <header className="flex w-full h-auto">
      {/* Left Section */}
      <div className="w-[20%] bg-[#0B2545] flex items-center justify-center p-4 min-h-[70px] relative overflow-hidden">
        <img
          src="/itu3.jpg"
          alt="SDDI Logo"
          className="h-auto w-auto max-w-[50px] max-h-[50px] sm:max-w-[60px] sm:max-h-[60px] md:max-w-[80px] md:max-h-[80px] rounded-full shadow-md object-cover"
        />
      </div>

      {/* Right Section - Navigation */}
      <div className="w-[80%] bg-[#0B2545] flex relative items-center px-4 md:px-6 lg:px-12 py-4">
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-100 ml-auto">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center w-full justify-center">
          {[
            { icon: <Home size={20} className="text-white" />, title: "HOME" },
            { icon: <Medal size={20} className="text-white" />, title: "TOURNAMENTS", subtitle: "Upcoming events" },
            { icon: <Users size={20} className="text-white" />, title: "TRAINING & COACHING", subtitle: "Professional coaching" },
            { icon: <Book size={20} className="text-white" />, title: "RULEBOOK", subtitle: "Official guidelines" },
            { icon: <UserCheck size={20} className="text-white" />, title: "MEMBERSHIP" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 transition duration-300 hover:scale-105 cursor-pointer">
              {item.icon}
              <div className="flex flex-col">
                <div className="text-sm font-semibold md:mt-2 text-white">{item.title}</div>
                <div className="text-xs text-gray-400 min-h-[16px]">{item.subtitle}</div>
              </div>
            </div>
          ))}

          {/* OTHERS Section with Dropdown */}
          <div 
            className="relative flex items-center gap-2 transition duration-300 hover:scale-105 cursor-pointer"
            onMouseEnter={() => setOthersOpen(true)}
            onMouseLeave={() => setOthersOpen(false)}
            onClick={() => setOthersOpen(!othersOpen)}
          >
            <MoreHorizontal size={20} className="text-white" />
            <div className="flex flex-col">
              <div className="text-sm font-semibold md:mt-2 text-white">OTHERS</div>
            </div>
            {othersOpen && (
              <div className="relative top-8 left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2">
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Contact</div>
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Gallery</div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
