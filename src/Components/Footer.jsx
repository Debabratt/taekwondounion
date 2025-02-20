import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="bg-[url('/earth1.jpg')] bg-blue-900 bg-opacity-90 bg-cover bg-center text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center md:text-left">
  {/* Organization */}
  <div>
    <h3 className="text-green-400 font-semibold">Organization</h3>
    <ul className="mt-2 text-[#D2E3FB] font-semibold space-y-2">
      <li>About</li>
      <li>Guide</li>
      <li>FAQs</li>
      <li>Contact</li>
      <li>Query/Feedback</li>
    </ul>
  </div>

  {/* Approvals */}
  <div>
    <h3 className="text-green-400 font-semibold">Approvals</h3>
    <ul className="mt-2 text-[#D2E3FB] font-semibold space-y-2">
      <li>Central Approvals</li>
      <li>State Approvals</li>
      <li>Government Schemes</li>
    </ul>
  </div>

  {/* Others */}
  <div>
    <h3 className="text-green-400 font-semibold">Others</h3>
    <ul className="mt-2 text-[#D2E3FB] font-semibold space-y-2">
      <li>Terms of Use</li>
      <li>Privacy Policy</li>
      <li>Sitemap</li>
    </ul>
  </div>

  {/* Contact Info (Full Width Below) */}
  <div className="col-span-3 sm:col-span-3 md:col-span-1 flex flex-col items-center md:items-start">
    <img
      src="/footerarrow.svg"
      alt="Call Icon"
      className="w-auto h-6 sm:h-8 md:h-10 mb-2 brightness-125 drop-shadow-lg"
    />
    <h3 className="text-green-400 font-semibold">Call us at</h3>
    <p className="text-2xl sm:text-3xl text-[#D2E3FB] font-bold">1800 102 5841</p>
    <p className="text-[#D2E3FB] font-semibold">[Mon - Sat, 9am - 6pm]</p>
  </div>

  {/* Social Media (Full Width Below) */}
  <div className="col-span-3 sm:col-span-3 md:col-span-1 flex flex-col items-center md:items-start">
    <div className="flex space-x-4 sm:space-x-6">
      <Facebook size={24} className="cursor-pointer hover:text-blue-400" />
      <Instagram size={24} className="cursor-pointer hover:text-pink-400" />
      <Twitter size={24} className="cursor-pointer hover:text-blue-300" />
      <Youtube size={24} className="cursor-pointer hover:text-red-500" />
    </div>
    <p className="text-sm font-semibold text-[#D2E3FB] mt-6 text-center md:text-left">
      Join the Taekwondo Tribe & Keep Up with the Latest!
    </p>
  </div>
</div>


        {/* Ministries and States */}
        <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Ministries Section */}
          <div>
            <h3 className="text-green-400 font-semibold text-lg text-center md:text-left">
              32 Ministries/Departments are<span className="text-[#D2E3FB]">live on NSWS</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
              {[
                "Ministry of Home Affairs",
                "Ministry of Road Transport",
                "Ministry of Agriculture",
                "Ministry of Commerce",
                "Ministry of Science & Tech",
                "Ministry of Education",
              ].map((ministry, index) => (
                <div
                  key={index}
                  className="bg-[#11314F] opacity-70 p-4 rounded-lg flex items-center justify-center text-white"
                >
                  <p>{ministry}</p>
                </div>
              ))}
            </div>
          </div>

          {/* States Section */}
          <div>
            <h3 className="text-green-400 font-bold text-lg text-center md:text-left">
              29 States/UTs are  <span className="text-[#D2E3FB]">live on NSWS</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
              {[
                "Government of Tripura",
                "Government of Uttar Pradesh",
                "Government of Maharashtra",
                "Government of Uttarakhand",
                "Government of Jharkhand",
                "Government of Andaman & Nicobar Islands",
              ].map((state, index) => (
                <div
                  key={index}
                  className="bg-[#11314F] opacity-70 p-4 rounded-lg flex items-center justify-center text-white"
                >
                  <p>{state}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#0B2545] text-white text-sm py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-600 pb-4">
            <img src="/india-gov-logo.png" alt="India Gov Logo" className="h-8" />
            <p className="text-center md:text-right mt-2 md:mt-0">
              Last reviewed and updated on: <strong>19-February-2025</strong>
              <br />
              Best viewed in 1024 * 768 resolution with the latest versions of Chrome, Firefox, Safari, and Edge.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-4">
            <div className="flex items-center gap-4">
              <img src="/invest-india-logo.png" alt="Invest India" className="h-8" />
              <p className="text-center md:text-left">
                उद्योग संवर्धन और आंतरिक व्यापार विभाग
                <br />
                <strong>DEPARTMENT FOR PROMOTION OF INDUSTRY AND INTERNAL TRADE</strong>
              </p>
            </div>

            <p className="text-center md:text-right mt-2 md:mt-0 text-gray-400">
              © 2025 This site is designed, developed, and owned by Invest India,
              <br />
              Department for Promotion of Industry and Internal Trade, Ministry of Commerce and Industry, Government of India.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Help Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-2xl">?</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
