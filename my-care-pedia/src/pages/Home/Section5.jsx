import React, { useState } from "react";
import avatar from "../../assets/images/avatar.jpg";

const Section5 = () => {
  const testimonials = [
    {
      id: 1,
      name: "Annie Rose",
      role: "Patient",
      text: "MyCarePedia has revolutionized the way I manage my patients. The appointment booking system is seamless, and the secure communication tools make it easy to stay connected with them. I also love the featured doctor section - it helps me attract new patients and showcase my expertise.",
    },
    {
      id: 2,
      name: "Maria Jacob",
      role: "Patient",
      text: "MyCarePedia has been a game-changer! Finding a doctor used to be a hassle, but now it's just a few clicks away. I love being able to read reviews and schedule appointments online. My doctor is fantastic, and I feel so much more in control of my health. I feel pleasure in this platform as well as the opportunity.",
    },
    {
      id: 3,
      name: "James Lee",
      role: "Patient",
      text: "MyCarePedia makes healthcare accessible and easy. Scheduling appointments, reading reviews, and finding trusted doctors has never been simpler. It gives me confidence in my healthcare journey.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#021633] to-[#04285b] text-white px-4 sm:px-6 md:px-[110px]">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center lg:text-left">
          <p className="text-[#00b3d0] font-bold font-header-serif text-lg sm:text-xl">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-snug">
            Hear What Others Are Saying
          </h2>
          <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0">
            At MyCarePedia, we're passionate about making healthcare easier and
            more accessible. But don't just take our word for it! Hear what our
            satisfied patients and providers have to say.
          </p>
        </div>

        {/* Desktop: grid | Mobile/Medium: slider */}
        <div className="relative">
          {/* Desktop view */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white text-[#04285b] rounded-2xl p-8 xl:p-14 shadow-md flex flex-col justify-between relative"
              >
                <span className="absolute top-4 right-6 text-5xl xl:text-8xl text-[#04285b] font-bold">
                  ”
                </span>
                <p className="text-sm sm:text-base text-gray-700 mb-6 text-left leading-relaxed">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 text-left">
                  <img
                    src={avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full border"
                  />
                  <div>
                    <p className="font-semibold text-[#04285b]">{t.name}</p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile slider */}
          <div className="lg:hidden">
            <div className="bg-white text-[#04285b] rounded-2xl p-6 shadow-md flex flex-col justify-between relative">
              <span className="absolute top-4 right-6 text-4xl text-[#04285b] font-bold">
                ”
              </span>
              <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                {testimonials[currentIndex].text}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-10 h-10 rounded-full border"
                />
                <div>
                  <p className="font-semibold text-[#04285b]">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Arrows */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="w-10 h-10 flex items-center justify-center bg-white text-[#04285b] rounded-lg shadow hover:bg-gray-100"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center bg-white text-[#04285b] rounded-lg shadow hover:bg-gray-100"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
