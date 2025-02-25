import { Medal, Users, Book, UserCheck, Home, Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function Mainnav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-700 flex">
      {/* Left Section - 20% width with blue background */}
      <div className="w-1/5 bg-[#052053] rounded-r-full flex items-center justify-center p-4">
        <img src="/itu3.jpg" alt="SDDI Logo" className="h-20 w-auto rounded-full shadow-md" />
      </div>

      {/* Right Section - 80% width with white background */}
      <div className="w-4/5 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 md:px-8 lg:px-12">
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Navigation - Hidden on Mobile */}
          <nav className="hidden lg:flex gap-10 items-center">
            {[
              { icon: <Home size={26} className="text-[#052053]" />, title: "HOME" },
              { icon: <Medal size={26} className="text-[#052053]" />, title: "TOURNAMENTS", subtitle: "Upcoming events" },
              { icon: <Users size={26} className="text-[#052053]" />, title: "TRAINING & COACHING", subtitle: "Professional coaching" },
              { icon: <Book size={26} className="text-[#052053]" />, title: "RULEBOOK", subtitle: "Official guidelines" },
              { icon: <UserCheck size={26} className="text-[#052053]" />, title: "MEMBERSHIP" },
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 right-0 w-4/5 bg-white shadow-xl z-50">
            <div className="flex flex-col p-6 space-y-6">
              {[
                { icon: <Home size={26} className="text-[#052053]" />, title: "HOME" },
                { icon: <Medal size={26} className="text-[#052053]" />, title: "TOURNAMENTS", subtitle: "Upcoming events" },
                { icon: <Users size={26} className="text-[#052053]" />, title: "TRAINING & COACHING", subtitle: "Professional coaching" },
                { icon: <Book size={26} className="text-[#052053]" />, title: "RULEBOOK", subtitle: "Official guidelines" },
                { icon: <UserCheck size={26} className="text-[#052053]" />, title: "MEMBERSHIP" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  {item.icon}
                  <div>
                    <div className="text-base font-semibold text-black">{item.title}</div>
                    {item.subtitle && <div className="text-sm text-gray-600">{item.subtitle}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
