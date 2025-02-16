import { CheckCircle, FileText, Clock, Repeat, HelpCircle, Play } from "lucide-react";
import React from "react";

const BenefitsSection = () => {
  return (
    <div className="bg-gray-100 py-12 flex flex-col lg:flex-row items-start justify-between px-4 md:px-12 lg:px-20">
      {/* Left Side Content - 40% width */}
      <div className="w-full lg:w-2/5 text-left">
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-md font-semibold text-sm md:text-base">
          BENEFITS
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
          How does NSWS help you?
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
          The National Single Window System (NSWS) is a digital platform to guide you in
          identifying and applying for approvals according to your business requirements.
          The Know Your Approvals (KYA) module includes guidance for 32 Central Departments
          and 34 States. You are advised to check the relevant Government portals for
          any other required approvals.
        </p>
        {/* Video Button */}
        <button className="mt-6 flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition text-lg">
          <Play className="w-6 h-6 md:w-7 md:h-7" />
          <span>PLAY VIDEO TO KNOW MORE</span>
        </button>
      </div>

      {/* Right Side Benefit Boxes - 60% width */}
      <div className="w-full lg:w-3/5 flex flex-wrap justify-between mt-8 lg:mt-0">
        {benefitsData.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-5 bg-white rounded-lg shadow-md w-full sm:w-[48%] lg:w-[32%] mb-4"
          >
            <item.icon className="text-green-500 w-10 h-10 md:w-12 md:h-12" />
            <div>
              <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-snug">{item.description}</p>
            </div>
          </div>
        ))}

        {/* Contact Box - Full width below boxes */}
        <div className="mt-6 bg-white p-5 rounded-md shadow-md text-center w-full">
          <p className="text-gray-800 font-semibold text-base md:text-lg">
            Connect with us from <span className="font-bold">3pm to 4pm, Monday - Friday</span> for
            grievance/query redressal. Hear directly from the National Single Window System technical team.
          </p>
          <a href="#" className="text-blue-600 font-bold underline text-base md:text-lg mt-3 inline-block">
            Click here to connect
          </a>
        </div>
      </div>
    </div>
  );
};

const benefitsData = [
  {
    title: "All approvals in one place",
    description: "Get everything you need in one place without going to different departments.",
    icon: CheckCircle,
  },
  {
    title: "Secure document repository",
    description: "Upload documents once and reuse them for multiple applications.",
    icon: FileText,
  },
  {
    title: "Fast query management",
    description: "Quick resolution to your queries from our dedicated team.",
    icon: HelpCircle,
  },
  {
    title: "Real-time status tracking",
    description: "Get real-time updates on the status of your applications.",
    icon: Clock,
  },
  {
    title: "Easy renewal",
    description: "Renew your approvals easily through a seamless interface.",
    icon: Repeat,
  },
  {
    title: "Know your approvals",
    description: "Use an intelligent questionnaire to find out required approvals.",
    icon: CheckCircle,
  },
];

export default BenefitsSection;
