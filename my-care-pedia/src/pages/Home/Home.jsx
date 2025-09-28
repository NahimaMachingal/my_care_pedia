import React from "react";
import carousel1 from "../../assets/images/carousel1.png";
import im from "../../assets/images/im.png";

const Home = () => {
  const benefits = [
    {
      title: "Find the perfect doctor",
      desc: "Search by location, specialty, insurance, language, and ratings.",
    },
    {
      title: "Book appointments in seconds",
      desc: "Schedule online and manage them with ease.",
    },
    {
      title: "Manage your health records",
      desc: "View and share your records securely.",
    },
    {
      title: "Simplify insurance",
      desc: "Easily manage your insurance information and verification.",
    },
    {
      title: "Stay informed",
      desc: "Receive appointment reminders and health updates.",
    },
  ];

  return (
    <section className="bg-transparent px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="text-left mb-28">
        <h6 className="text-xl font-bold leading-6 font-serifDisplay text-[#00a7c6] mb-5">
          Benefits
        </h6>

        <p className="text-xl sm:text-4xl font-bold leading-7 sm:leading-8 text-[#04285b] font-serif">
          How MyCarePedia
          <br className="hidden sm:block" />
          <span className="block sm:mt-6">Makes Your Life Easier</span>
        </p>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
        {/* Left Image */}
        <div className="flex justify-center bg-transparent">
          <img
            src={carousel1}
            alt="Patient with doctor"
            className="rounded-xl shadow-lg max-w-[440px] w-full h-auto block bg-transparent"
          />
        </div>

        {/* Right Benefits List */}
        <div>
          <button className="px-8 py-1 mb-6 bg-gradient-to-r from-[#00a7c6] to-[#033566] text-white text-base font-semibold rounded-md shadow-md">
            For Patients
          </button>

          <ul className="space-y-6">
            {benefits.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                {/* Icon inside blue circle */}
                <div className="justify-center rounded-full border border-[#00a7c6] text-[#00a7c6]">
                  <img
    src={im}
    alt="icon"
    className="w-10 h-10 object-contain"
    
  />
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

export default Home;
