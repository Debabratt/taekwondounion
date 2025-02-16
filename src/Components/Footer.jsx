import { Facebook, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Upper Footer with Background Image */}
      <div className="text-white py-10 p-8 bg-[url('/foo.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Organization Column */}
          <div>
            <h3 className="text-[#98FB98] font-semibold mb-4">Organization</h3>
            <ul className="space-y-2">
              {["About", "Guide", "FAQs", "Contact", "Query/Feedback"].map((item) => (
                <li key={item} className="flex items-center font-bold">
                  <span className="mr-2">◈</span>
                  <a href="#" className="hover:text-gray-300 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Approvals Column */}
          <div>
            <h3 className="text-[#98FB98] font-semibold mb-4">Approvals</h3>
            <ul className="space-y-2">
              {["Central Approvals", "State Approvals", "Government Schemes"].map((item) => (
                <li key={item} className="flex items-center font-bold">
                  <span className="mr-2">◈</span>
                  <a href="#" className="hover:text-gray-300 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Others Column */}
          <div>
            <h3 className="text-[#98FB98] font-semibold mb-4">Others</h3>
            <ul className="space-y-2">
              {["Terms of Use", "Privacy Policy", "Sitemap"].map((item) => (
                <li key={item} className="flex items-center font-bold">
                  <span className="mr-2">◈</span>
                  <a href="#" className="hover:text-gray-300 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ministries and States Section */}
 <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
  <div>
    <h3 className="text-[#98FB98] text-xl mb-4">
      <span className="font-bold">6</span> Essential Taekwondo Training Aspects
    </h3>
    <div className="grid grid-cols-3 gap-4 font-bold">
      {["Stamina", "Flexibility", "Strength", "Speed", "Focus", "Discipline"].map((aspect, index) => (
        <div
          key={index}
          className="bg-[rgba(137,151,169,0.3)] p-4 rounded-lg flex justify-center items-center text-sm"
        >
          {aspect}
        </div>
      ))}
    </div>
  </div>
  <div>
    <h3 className="text-[#98FB98] text-xl mb-4">
      <span className="font-bold">6</span> Famous Taekwondo Championships
    </h3>
    <div className="grid grid-cols-3 gap-4 font-bold">
      {[
        "Olympic Games",
        "World Taekwondo Championships",
        "Asian Games",
        "Pan American Games",
        "European Championships",
        "Grand Prix Series",
      ].map((championship, index) => (
        <div
          key={index}
          className="bg-[rgba(126,150,155,0.3)] p-4 rounded-lg flex justify-center items-center text-sm"
        >
          {championship}
        </div>
      ))}
    </div>
  </div>
</div>


      </div>

      {/* Bottom Footer with Blue Background */}
      <div className="bg-[#10304C] text-white py-8">
        <div className="max-w-7xl mx-auto border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400">
            <div className="flex items-center">
              <img src="/placeholder.svg" alt="India.gov.in" className="h-12 mr-4" />
              <span>india.gov.in</span>
            </div>
            <div className="text-center">
              <p>
                This site is best viewed in 1024 * 768 resolution with the latest version of Chrome, Firefox, Safari, and
                Internet Explorer
              </p>
            </div>
            <div className="text-right">
              <p>Last reviewed and updated on: 14-February-2025</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto text-center mt-8 text-sm text-gray-400">
          <p>© 2025 This site is designed, developed, and owned by Invest India,</p>
          <p>
            Department for Promotion of Industry and Internal Trade, Ministry of Commerce and Industry, Government of
            India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
