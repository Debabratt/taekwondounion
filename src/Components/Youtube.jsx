import React from "react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Youtube = () => {
  const [state, setState] = useState("National Taekwondo Championship");

  return (
    <div className="flex flex-col md:flex-row  bg-gray-100 min-h-screen p-6">
      {/* Left Section */}
      <div className="md:w-2/3 p-6">
        <h2 className="text-green-500 font-bold text-lg">TAEKWONDO UNION</h2>
        <h1 className="text-4xl font-bold mt-2">Official Approvals</h1>
        <h3 className="text-orange-600 font-semibold text-2xl mt-2">{state}</h3>
        <p className="text-gray-600">67 Official Approvals</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500 hover:bg-green-500 hover:text-white transition">
            <h4 className="text-orange-500 font-semibold">National Taekwondo Association</h4>
            <p className="font-bold">Official Registration for National Level Tournament</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500 hover:bg-green-500 hover:text-white transition">
            <h4 className="text-yellow-500 font-semibold">State Taekwondo Federation</h4>
            <p className="font-bold">Membership & Coaching License Approval</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500 hover:bg-green-500 hover:text-white transition">
            <h4 className="text-orange-500 font-semibold">Sports Ministry Approval</h4>
            <p className="font-bold">Application for National Team Selection</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500 hover:bg-green-500 hover:text-white transition">
            <h4 className="text-orange-500 font-semibold">Sports Ministry Approval</h4>
            <p className="font-bold">Application for National Team Selection</p>
          </div>
        </div>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-md mt-6 font-bold">
          VIEW ALL 67 APPROVALS
        </button>
      </div>

      {/* Right Section - Taekwondo Image */}
      <div className="md:w-1/3 flex items-center justify-center relative">
        <img
          src="/taekwondo-logo.svg"
          alt="Taekwondo Union Logo"
          className="w-96 md:w-full"
        />
        <div className="absolute bottom-4 flex space-x-4">
          <button className="bg-green-500 p-2 rounded-full text-white">
            <FaArrowLeft />
          </button>
          <button className="bg-green-500 p-2 rounded-full text-white">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
