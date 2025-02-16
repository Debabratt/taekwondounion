import React from "react";

const approvals = [
  {
    ministry: "Indian Taekwondo Federation",
    title: "National Taekwondo Championship Registration",
  },
  {
    ministry: "Ministry of Youth Affairs and Sports",
    title: "Recognition as a Certified Taekwondo Coach",
  },
  {
    ministry: "Indian Olympic Association",
    title: "Participation Approval for International Events",
  },
  {
    ministry: "Sports Authority of India",
    title: "Athlete Training & Sponsorship Program",
  },
];

const ApprovalsSection = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20 relative overflow-hidden">
      <div className="relative flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section - Blue Box with Right Skew */}
        <div className="relative w-full md:w-1/2 mt-10">
          <div className="bg-[#193A6C]  h-auto md:h-[400px] text-white p-6 md:p-12 rounded-lg z-10 transform md:skew-x-[-10deg] origin-right">
            <h3 className="text-lg uppercase tracking-wide transform md:-skew-x-[10deg]">
              Discover
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold my-4 transform md:-skew-x-[10deg]">
              Key Approvals in Indian Taekwondo Union
            </h2>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg mt-4 transition transform md:-skew-x-[10deg]">
              VIEW ALL APPROVALS
            </button>
          </div>
        </div>

        {/* Right Section - Approvals List */}
        <div className="relative md:absolute lg:mr-10 md:top-10 md:right-10 w-full md:w-1/2 mt-8 md:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {approvals.map((approval, index) => (
            <div
              key={index}
              className="bg-white shadow-lg  lg:mt-10 rounded-lg p-6 border-l-4 border-[#193A6C] hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <p className="text-[#f49912] text-sm font-semibold">
                {approval.ministry}
              </p>
              <h3 className="text-lg font-bold text-gray-800 mt-1">
                {approval.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApprovalsSection;
