import { Search, Medal, Users, Book, UserCheck, Home, Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function Mainnav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-700 bg-[#052053]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation - Hidden on Mobile */}
          <nav className="hidden lg:flex gap-8 items-center">
            {[
              { icon: <Home size={24} className="text-[#a5b4c5]" />, title: "HOME" },
              { icon: <Medal size={24} className="text-[#a5b4c5]" />, title: "TOURNAMENTS", subtitle: "Upcoming events" },
              { icon: <Users size={24} className="text-[#a5b4c5]" />, title: "TRAINING & COACHING", subtitle: "Professional coaching" },
              { icon: <Book size={24} className="text-[#a5b4c5]" />, title: "RULEBOOK", subtitle: "Official guidelines" },
              { icon: <UserCheck size={24} className="text-[#a5b4c5]" />, title: "MEMBERSHIP" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.icon}
                <div>
                  <div className="text-sm font-medium text-[#e2eefb]">{item.title}</div>
                  {item.subtitle && <div className="text-xs text-gray-400">{item.subtitle}</div>}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute mt-5 top-16 left-0 w-full bg-[#052053] shadow-lg z-50">
          <div className="flex flex-col p-4 space-y-4">
            {[
              { icon: <Home size={24} className="text-[#a5b4c5]" />, title: "HOME" },
              { icon: <Medal size={24} className="text-[#a5b4c5]" />, title: "TOURNAMENTS", subtitle: "Upcoming events" },
              { icon: <Users size={24} className="text-[#a5b4c5]" />, title: "TRAINING & COACHING", subtitle: "Professional coaching" },
              { icon: <Book size={24} className="text-[#a5b4c5]" />, title: "RULEBOOK", subtitle: "Official guidelines" },
              { icon: <UserCheck size={24} className="text-[#a5b4c5]" />, title: "MEMBERSHIP" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {item.icon}
                <div>
                  <div className="text-sm font-medium text-[#e2eefb]">{item.title}</div>
                  {item.subtitle && <div className="text-xs text-gray-400">{item.subtitle}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
