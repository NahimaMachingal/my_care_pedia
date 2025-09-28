import React, { useState } from "react";
import Section4 from "./Section4";
import Blog from "./Blog";
import Specialities from "./Specialities";

const Carousel = () => {
  const components = [
    <Section4 key="section4" />,
    <Blog key="blog" />,
    <Specialities key="specialities" />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="hidden xl:block relative w-full overflow-hidden">
      {/* ✅ Sliding Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {components.map((comp, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {comp}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-800 w-12 h-20 flex items-center justify-center shadow hover:bg-gray-300 rounded-lg"
      >
        {"<"}
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-800 w-12 h-20 flex items-center justify-center shadow hover:bg-gray-300 rounded-lg"
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
