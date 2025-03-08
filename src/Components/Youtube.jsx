import React, { useState } from "react";
import IndiaMapSVG from "./IndiaMapSVG";

const Youtube = () => {
  const [selectedState, setSelectedState] = useState("Organizations");

  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
    alert(`You clicked on ${stateName}`);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen ">
      {/* Left Section */}
      <div className="w-full md:w-2/3 px-4 md:px-6 lg:px-12 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-green-500 font-bold text-lg">Certified</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2"> By Indian Govt.</h1>
        <h3 className="text-orange-600 font-semibold text-lg md:text-xl lg:text-2xl mt-2">{selectedState}</h3>
       

        {/* Approval List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {[

  { name: "MSME", desc: "Facilitating small and medium enterprises in sports infrastructure development.", border: "border-orange-500" },
  { name: "SPEEL-SC", desc: "Empowering athletes through skill development and coaching certifications.", border: "border-orange-500" },
  { name: "NITI AYOG", desc: "Strategic planning and policy support for national sports development.", border: "border-orange-500" },
  { name: "FIT-INDIA", desc: "Promoting fitness and sports participation across the nation.", border: "border-orange-500" }

          ].map((item, index) => (
            <div
              key={index}
              className={`bg-white p-4 rounded-lg shadow-md border-l-4 ${item.border} hover:bg-green-500 hover:text-white transition`}
              onMouseEnter={() => setSelectedState(item.name)}
              onMouseLeave={() => setSelectedState("National Taekwondo Championship")}
            >
              <h4 className={`font-semibold ${item.border.replace("border-", "text-")}`}>{item.name}</h4>
              <p className="text-sm md:text-base font-bold">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center md:justify-start">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-bold w-full sm:w-auto">
            VIEW ALL APPROVALS
          </button>
        </div>
      </div>

      {/* Right Section - India Map */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-10 ">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex items-center justify-center">
          <IndiaMapSVG onStateClick={handleStateClick} className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Youtube;
