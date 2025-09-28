import React from "react";
import search1 from "../../assets/images/search1.png";
import search2 from "../../assets/images/search2.png";
import search3 from "../../assets/images/search3.png";
import search5 from "../../assets/images/search5.png";
import search6 from "../../assets/images/search6.png";
import search7 from "../../assets/images/search7.png";
import search8 from "../../assets/images/search8.png";

const Section6 = () => {
  const features = [
    {
      id: 1,
      icon: search1,
      title: "Comprehensive Search And Match",
      desc: "Go beyond the basics with advanced filters for specialty, language, insurance, doctor ratings, and even availability. Discover the perfect doctor for your specific needs.",
    },
    {
      id: 2,
      icon: search2,
      title: "Seamless Appointment Management",
      desc: "No more juggling phone calls or emails. Schedule, reschedule, and confirm appointments online 24/7, with real-time integration to various practice management systems.",
    },
    {
      id: 3,
      icon: search3,
      title: "Secure And Centralized Records",
      desc: "Protect your health information with HIPAA-compliant security. Store and access all your medical records, reports, images, and lab results in one convenient location.",
    },
    {
      id: 4,
      icon: search5,
      title: "Family-Friendly Features",
      desc: "Easily manage medical records for dependents (children and parents) within your account, simplifying healthcare for the entire family.",
    },
    {
      id: 5,
      icon: search6,
      title: "Empowering Communication",
      desc: "Receive appointment reminders, health updates, and personalized educational resources. Connect with your doctor through secure messaging tools.",
    },
    {
      id: 6,
      icon: search7,
      title: "Beyond Appointments",
      desc: "MyCarePedia is more than just booking appointments. We offer a valuable platform for managing insurance information, validating coverage, and simplifying claims processing through LeadRCM integration.",
    },
    {
      id: 7,
      icon: search8,
      title: "Community And Trust",
      desc: "Build trust with doctor reviews and ratings. Access reliable health information through our curated library of resources.",
    },
    {
      id: 8,
      icon: search5, // reuse or replace with another icon if available
      title: "Focus On Affordability",
      desc: "Choose from free and premium features to fit your needs and budget.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-28">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-[#00b3d0] font-bold text-xl">What makes us unique?</p>
          <h2 className="text-[22px] sm:text-[36px] md:text-[40px] text-[#04285b] text-main font-header-serif font-bold capitalize mt-2">
  MyCarePedia: Your Family’s Health Heaven
</h2>

         <p className="mt-4 text-[18px] md:text-[18px] text-[#04285b] max-w-4xl leading-relaxed">
  MyCarePedia isn&apos;t just a doctor&apos;s portal; it&apos;s a comprehensive healthcare hub
  designed to simplify life for everyone in the family. Whether you&apos;re managing your
  child&apos;s well-being or navigating your own health journey, MyCarePedia offers
  unique features and benefits that make a real difference:
</p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl shadow-md p-8 text-center transition-all duration-300 hover:bg-[#04285b] hover:shadow-lg"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-20 h-20 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>
              <h3 className="text-xl font-bold text-[#04285b] mb-2 transition-colors duration-300 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 transition-colors duration-300 group-hover:text-gray-200">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
