import React, { useState } from "react";
import IndiaMapSVG from "./IndiaMapSVG";

const Youtube = () => {
  const [selectedState, setSelectedState] = useState("National Taekwondo Championship");

  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
    alert(`You clicked on ${stateName}`);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen p-6 gap-6">
      {/* Left Section */}
      <div className="w-full md:w-2/3 px-6 md:px-20 flex flex-col justify-center">
        <h2 className="text-green-500 font-bold text-lg">TAEKWONDO UNION</h2>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">Official Approvals</h1>
        <h3 className="text-orange-600 font-semibold text-xl md:text-2xl mt-2">{selectedState}</h3>
        <p className="text-gray-600 text-sm md:text-base">67 Official Approvals</p>

        {/* Approval List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[
            { name: "National Taekwondo Association", desc: "Official Registration for National Level Tournament", border: "border-orange-500" },
            { name: "State Taekwondo Federation", desc: "Membership & Coaching License Approval", border: "border-yellow-500" },
            { name: "Sports Ministry Approval", desc: "Application for National Team Selection", border: "border-orange-500" },
            { name: "Olympic Taekwondo Committee", desc: "Approval for International Events", border: "border-orange-500" }
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

        <div className="mt-6">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-bold w-full md:w-auto">
            VIEW ALL 67 APPROVALS
          </button>
        </div>
      </div>

      {/* Right Section - India Map */}
      <div className="w-full md:w-[40%] flex items-center justify-center">
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg flex items-center justify-center">
          <IndiaMapSVG onStateClick={handleStateClick} className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Youtube;
