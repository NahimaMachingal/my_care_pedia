import React from "react";
import hhImg from "../../assets/images/hh.png"; // ✅ your uploaded image

const LeadRCMSection = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-6 lg:px-12 pt-32 flex flex-col lg:flex-row items-center gap-10">
        
        {/* ✅ Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-20">
          <img
            src={hhImg}
            alt="Lead RCM"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* ✅ Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <p className="text-[#00a7c6] font-semibold text-lg">
            Our Updates
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#04285b] leading-snug">
            Lead RCM - Your Billing Partner
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
  At LeadRCM, we are a trusted provider of comprehensive revenue <br />  
  cycle management services for Healthcare providers such as Doctors,<br />
  Dentists Therapists, Nursing Practitioners. With a deep understanding<br />
  of the complex healthcare landscape, we are dedicated to optimizing<br />
  your financial operations and maximizing your revenue potential. Our<br />
  commitment to excellence shines through in our meticulous<br />
  approach to billing, insurance follow-up, and ensure transparency by<br />
  providing insightful analysis about the practice performance.
</p>

          <a
            href="/lead-rcm"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#04285b] text-white text-lg lg:text-lg font-semibold rounded-full shadow-md hover:bg-[#00a7c6] transition duration-300"
          >
            Discover Lead RCM
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 transition-transform group-hover:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 7l-10 10m0-10h10v10"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeadRCMSection;
