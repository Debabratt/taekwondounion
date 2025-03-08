import { Home, Menu, X, MoreHorizontal, Shield, Info, Phone, Activity, Newspaper, Image, Users } from "lucide-react";
import React, { useState } from "react";

export default function Mainnav() {
  const [isOpen, setIsOpen] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);

  return (
    <>
      <header className="flex w-full h-auto relative z-10 bg-[#0B2545]">
        {/* Left Section */}
        <div className="w-[32%] md:w-[20%] flex items-center justify-center p-2 min-h-[70px]">
          <img
            src="/ITU LOGO.png"
            alt="SDDI Logo"
            className="h-auto w-auto max-w-[90px] max-h-[90px] sm:max-w-[100px] sm:max-h-[100px] md:max-w-[110px] md:max-h-[110px] rounded-full shadow-md object-cover"
          />
        </div>

        {/* Right Section - Navigation */}
        <div className="w-[70%] md:w-[80%] flex relative items-center px-4 md:px-6 lg:px-12 py-4">
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-100 ml-auto">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 items-center w-full justify-center">
            {[
              { icon: <Home size={20} className="text-white" />, title: "HOME", subtitle: "Welcome to ITU" },
              { icon: <Info size={20} className="text-white" />, title: "ABOUT", subtitle: "Learn about ITU" },
              { icon: <Shield size={20} className="text-white" />, title: "STATE TAEKWONDO UNION", subtitle: "State-level representation" },
              { icon: <Phone size={20} className="text-white" />, title: "CONTACT US", subtitle: "Get in touch" },
              { icon: <Activity size={20} className="text-white" />, title: "SELF DEFENCE", subtitle: "Training programs" },
            ].map((item, index) => (
              <div key={index} className="relative flex flex-col items-center cursor-pointer">
                <div className="flex items-center gap-2 transition duration-300">
                  {item.icon}
                  <div className="flex flex-col group">
                    <div className="text-sm font-semibold text-white relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-400 min-h-[16px]">{item.subtitle}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* OTHERS Section - Dropdown */}
            <div
              className="relative flex items-center gap-2 cursor-pointer"
              onMouseEnter={() => setOthersOpen(true)}
              onMouseLeave={() => setOthersOpen(false)}
            >
              <MoreHorizontal size={20} className="text-white" />
              <div className="flex flex-col group">
                <div className="text-sm font-semibold text-white relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                  OTHERS
                </div>
              </div>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-8 left-0 w-40 bg-white shadow-md rounded-md py-2 z-20 transition-all duration-300 origin-top ${
                  othersOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                }`}
              >
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Upcoming News</div>
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Gallery</div>
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Players</div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation - Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-[#0B2545] bg-opacity-75 z-50 flex flex-col items-center justify-center transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-white"
        >
          <X size={30} />
        </button>

        {/* Mobile Menu Items */}
        <nav className="flex flex-col gap-6 text-white text-lg">
          {[
            { icon: <Home size={24} />, title: "HOME" },
            { icon: <Info size={24} />, title: "ABOUT" },
            { icon: <Shield size={24} />, title: "STATE TAEKWONDO UNION" },
            { icon: <Phone size={24} />, title: "CONTACT US" },
            { icon: <Activity size={24} />, title: "SELF DEFENCE" },
            { icon: <Newspaper size={24} />, title: "UPCOMING NEWS" },  // 📰 News Icon
            { icon: <Image size={24} />, title: "GALLERY" },            // 🖼 Gallery Icon
            { icon: <Users size={24} />, title: "PLAYERS" },    
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 cursor-pointer">
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}

         
        </nav>
      </div>
    </>
  );
}
