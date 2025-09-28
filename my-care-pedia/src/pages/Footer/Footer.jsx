import React from "react";
import logo from "../../assets/images/logo.png"; // ✅ adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* ✅ Top Section (Logo + Newsletter) */}
      <div className="container mx-auto px-6 lg:px-12 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left - Logo */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img src={logo} alt="MyCarePedia Logo" className="h-20 w-auto" />
        </div>

        {/* Right - Newsletter */}
        <div className="w-full md:w-auto text-center md:text-right">
          <h3 className="text-lg font-semibold text-[#04285b]">
            Join Our Newsletter
          </h3>
          <form className="mt-3 flex items-center border border-[#04285b] rounded-full overflow-hidden w-full md:w-[350px]">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-grow px-4 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-[#04285b] text-white p-3 flex items-center justify-center hover:bg-[#00a7c6] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Divider Line */}
      <div className="flex items-center justify-center mt-6">
        <div className="w-4/5 border-t border-gray-300 relative" />
      </div>

      {/* ✅ Bottom Section (Copyright + Links) */}
<div className="flex flex-col md:flex-row items-center justify-between mt-6 mb-6 px-6 lg:px-32 text-gray-600 text-center md:text-left gap-4">
  {/* Left - Copyright */}
  <span className="font-semibold text-sm md:text-lg">
    © 2025 MyCarePedia. All Rights Reserved.
  </span>

  {/* Right - Links (always inline, wrap if needed) */}
  <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
    <a href="#" className="hover:underline">
      Terms & Condition
    </a>
    <a href="#" className="hover:underline">
      Sitemap
    </a>
    <a href="#" className="hover:underline">
      Privacy Policy
    </a>
  </div>
</div>

    </footer>
  );
};

export default Footer;
