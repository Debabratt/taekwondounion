import React from "react";

const TopNav = () => {
  return (
    <header className="border-b border-gray-700 bg-[#011C4D] shadow-md">
      <div className="mx-auto max-w-7xl py-3 px-2 text-center md:px-2 lg:px-2">
        {/* Logo Section with Text */}
        <div className="text-white flex flex-col gap-1 sm:gap-2 md:flex-row md:justify-center md:gap-4">
          <p className="text-sm sm:text-sm font-serif text-[#8699AE]">
            An ISO Certified Taekwondo Organization !! 
          </p>
          <p className="text-sm sm:text-sm text-[#8699AE]">
            KUKKIWON 2019 Top Ranked Taekwondo Organization !!
          </p>
          <p className="text-sm sm:text-sm text-[#8699AE]">
            MEMBER & PROMOTED BY: KUKKIWON - WORLD TAEKWONDO HEADQUARTER (SOUTH KOREA) 
          </p>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
