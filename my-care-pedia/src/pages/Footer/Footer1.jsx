import React, { useState } from "react";
import footerImg from "../../assets/images/footer1.png";
import googlePlay from "../../assets/images/google.png";
import appStore from "../../assets/images/app.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import insta from "../../assets/images/insta.png";
import whatsapp from "../../assets/images/whatsapp.png";

const Footer1 = () => {
  const [showFooter, setShowFooter] = useState(true);

  return (
    <div className="relative rounded-t-3xl">
      {showFooter && (
        <div>
          {/* ✅ Top Section with Doctor */}
          <div className="relative">
            {/* Light Blue Background */}
            <div className="bg-[#e5eef2] rounded-3xl mx-4 md:mx-28 h-60 md:h-96"></div>

            <div className="absolute inset-0 flex flex-col md:flex-row items-center md:justify-between px-6 md:px-12 py-6 md:py-8">
              {/* Left Side - Text */}
              <div className="flex flex-col justify-center md:w-1/2 max-w-lg z-10">
                <h2 className="text-2xl md:text-4xl font-bold pl-8 md:pl-32 text-[#0c2340]">
                  Experience The Future <br /> Of Healthcare
                </h2>
                <button className="mt-6 ml-8 md:ml-32 bg-[#0c2340] hover:bg-blue-900 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 w-fit">
                  SignUp For Now ↗
                </button>
              </div>

              {/* Doctor Image - Hidden on small screens */}
              <div className="hidden md:flex md:mb-16 md:w-1/2 justify-center z-10">
                <img
                  src={footerImg}
                  alt="Doctor"
                  className="w-[300px] md:w-[400px] h-96 md:h-[28rem] object-cover"
                />
              </div>
            </div>
          </div>

          {/* ✅ Collapsible Footer */}
          <div className="bg-[#0c2340] text-white w-11/12 p-8 rounded-t-3xl mx-auto -mt-4">
            {/* 2 columns on small screens, 4 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-6 text-base">
                  <li>Home</li>
                  <li>Patient Feedback</li>
                  <li>Join a Televisit</li>
                  <li>List your Practice</li>
                  <li>Resource</li>
                  <li>Contact</li>
                </ul>
              </div>

              {/* Insurance Carriers */}
              <div>
                <h3 className="text-xl font-bold mb-4">Insurance Carriers</h3>
                <ul className="space-y-6 text-base">
                  <li>Aetna</li>
                  <li>Aetna Dental</li>
                  <li>Ambetter</li>
                  <li>Anthem Blue Cross Blue Shield</li>
                  <li>Blue Cross Blue Shield</li>
                  <li>Blue Cross Blue Shield Dental</li>
                  <li>Cigna</li>
                  <li>Cigna Dental</li>
                  <li>Delta Dental</li>
                  <li>Florida Blue Cross Blue Shield</li>
                </ul>
              </div>

              {/* Top Specialities */}
              <div>
                <h3 className="text-xl font-bold mb-4">Top Specialities</h3>
                <ul className="space-y-6 text-base">
                  <li>Primary Care Doctor</li>
                  <li>Dermatologist</li>
                  <li>Dentist</li>
                  <li>Psychiatrist</li>
                  <li>Podiatrist</li>
                  <li>Urologist</li>
                  <li>Cardiologist</li>
                  <li>Neurologist</li>
                  <li>Orthopedic</li>
                  <li>Ophthalmologist</li>
                  <li>Pediatrician</li>
                </ul>
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <ul className="space-y-6 text-base">
                  <li>📧 info@mycarepedia.com</li>
                  <li>📞 987-456-132</li>
                </ul>

                <h3 className="text-2xl font-bold mt-6 mb-3">Get Our App</h3>
                <div className="flex gap-3 mb-4">
                  <img src={googlePlay} alt="Google Play" className="h-10 cursor-pointer" />
                </div>
                <div className="flex gap-3 mb-4">
                  <img src={appStore} alt="App Store" className="h-10 cursor-pointer" />
                </div>

                <h3 className="font-semibold mb-3">Follow Us On</h3>
                <div className="flex gap-4">
                  <img src={facebook} alt="Facebook" className="h-6 cursor-pointer" />
                  <img src={twitter} alt="Twitter" className="h-6 cursor-pointer" />
                  <img src={insta} alt="Instagram" className="h-6 cursor-pointer" />
                  <img src={whatsapp} alt="WhatsApp" className="h-6 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Toggle Button (Below component, left side) */}
      <div className="flex justify-start mt-4 ml-4">
        <button
          onClick={() => setShowFooter(!showFooter)}
          className="bg-[#0c2340] text-white p-4 rounded-md shadow-lg"
        >
          {showFooter ? "↑" : "↓"}
        </button>
      </div>
    </div>
  );
};

export default Footer1;
