import React from "react";
import im2 from "../../assets/images/im2.png"; // 👈 replace with actual doctor image path
import im from "../../assets/images/im.png"; // 👈 replace with your icon

const Home2 = () => {
  const providerBenefits = [
    {
      title: "Make your patient's life easy",
      desc: "Offer convenient online booking, appointment reminders, and secure communication, fostering a positive patient experience.",
    },
    {
      title: "Effortlessly manage appointments",
      desc: "Schedule, reschedule, and confirm appointments online.",
    },
    {
      title: "Streamline insurance billing",
      desc: "Integrate with LeadRCM for hassle-free claims management.",
    },
    {
      title: "Build your online reputation",
      desc: "Receive and respond to patient reviews.",
    },
    {
      title: "Focus on what matters",
      desc: "Spend less time on administrative tasks and more time with patients.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Right Image (show first on mobile) */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src={im2}
            alt="Doctor pointing"
            className="rounded-xl shadow-lg max-w-[450px] w-full h-auto object-contain"
          />
        </div>

        {/* Left Benefits List (show second on mobile) */}
        <div className="order-2 md:order-1">
          {/* Button */}
          <button className="px-8 py-1 mb-6 bg-gradient-to-r from-[#00a7c6] to-[#033566] text-white text-base font-semibold rounded-md shadow-md">
            For Providers
          </button>

          {/* Benefits */}
          <ul className="space-y-6">
            {providerBenefits.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                {/* Icon in circle */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full flex-shrink-0">
                  <img src={im} alt="icon" className="w-10 h-10 object-contain" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-bold text-xl text-[#04285b]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base mt-1">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="px-10 py-2 rounded-full border border-[#04285b] text-[#04285b] font-semibold text-lg hover:bg-[#00b3d0] hover:text-white transition-colors duration-200 flex items-center gap-2">
              Try MyCarePedia Now
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2;
