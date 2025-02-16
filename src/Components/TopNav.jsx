import React from "react";
const TopNav = () => {
  return (
    <header className="border-b border-gray-700 bg-[#011C4D] shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-8 lg:px-10">
        
        {/* Logo Section with Text */}
        <div className="flex items-center gap-4">
          <img src="/itu3.jpg" alt="DPIIT Logo" className="h-12 w-auto rounded-full" />
          <div className="text-white">
            <h1 className="text-lg font-bold">Indian Taekwondo Union</h1>
            <p className="text-sm text-[#8699AE]">Recognized by the National Sports Federation</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {["About", "State Taekwondo Union", "Affiliated Unit", "Download Form", "Contact Us"].map((item, index) => (
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
