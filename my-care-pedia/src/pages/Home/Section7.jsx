import React from "react";
import secImg from "../../assets/images/sec.png"; // ✅ your uploaded image

const Section7 = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#eff2f5] via-[#b7cdd6] to-[#a7c6cd]">
      <div className="flex flex-col-reverse lg:flex-row items-center">
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2 px-6 lg:px-12 py-8 lg:py-16 text-center lg:text-left space-y-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#04285b] leading-snug">
            Experience The <br className="hidden md:block" /> 
            MyCarePedia Difference!
          </h2>

          <p className="text-gray-600 text-lg">
            At MyCarePedia, we're passionate about making healthcare easier and more accessible.
          </p>

          <a
            href="/auth/signup"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#04285b] text-white font-semibold rounded-full shadow-md hover:bg-[#00a7c6] transition duration-300"
          >
            SignUp For Free
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 group-hover:rotate-45 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10m0-10h10v10" />
            </svg>
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <img
            src={secImg}
            alt="Doctor"
            className="w-full h-full object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
};

export default Section7;