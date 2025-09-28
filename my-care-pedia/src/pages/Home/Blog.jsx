import React, { useState } from "react";
import img1 from "../../assets/images/11.png";
import img2 from "../../assets/images/12.png";
import img3 from "../../assets/images/13.png";
import cal from "../../assets/images/cal.png";

const blogData = [
  {
    id: 1,
    category: "Peditrician",
    date: "31 Jan 2024",
    title: "Our Guide To Good Health: Exploring Today's Essential Healthcare",
    desc: "At LeadRCM, we are a trusted provider of comprehensive revenue cycle.....",
    image: img1,
  },
  {
    id: 2,
    category: "Dermatology",
    date: "31 Jan 2024",
    title: "Our Guide To Good Health: Exploring Today's Essential Healthcare",
    desc: "At LeadRCM, we are a trusted provider of comprehensive revenue cycle.....",
    image: img2,
  },
  {
    id: 3,
    category: "Category",
    date: "31 Jan 2024",
    title: "Our Guide To Good Health: Exploring Today's Essential Healthcare",
    desc: "At LeadRCM, we are a trusted provider of comprehensive revenue cycle.....",
    image: img3,
  },
];

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === blogData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#04285b] mb-12">
          Health Articles And Resources
        </h2>

        {/* Blog Cards Container */}
        <div className="hidden md:flex flex-row items-center justify-center gap-6">
          {blogData.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-black rounded-2xl shadow-sm overflow-hidden w-full md:w-[30%] flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover rounded-t-2xl border-[8px] border-white"
              />
              <div className="p-2 flex flex-col justify-between flex-grow">
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="ml-4 px-4 py-1 bg-[#e6f7fb] text-[#04285b] font-medium rounded-full">
                    {blog.category}
                  </span>
                  <span className="mr-6 text-black font-semibold flex items-center gap-3">
                    <img src={cal} alt="Calendar" className="w-4 h-4 object-contain" />
                    {blog.date}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-[#04285b] ml-5 leading-snug mt-2 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-base mb-4 ml-5">{blog.desc}</p>
                <a
                  href="#"
                  className="text-[#04285b] ml-4 text-lg font-bold inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View (1 card + arrows) */}
        <div className="md:hidden flex flex-col items-center">
          <div className="bg-white border border-black rounded-2xl shadow-sm overflow-hidden w-full flex flex-col">
            <img
              src={blogData[currentIndex].image}
              alt={blogData[currentIndex].title}
              className="w-full h-60 object-cover rounded-t-2xl border-[8px] border-white"
            />
            <div className="p-2 flex flex-col justify-between flex-grow">
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="ml-4 px-4 py-1 bg-[#e6f7fb] text-[#04285b] font-medium rounded-full">
                  {blogData[currentIndex].category}
                </span>
                <span className="mr-6 text-black font-semibold flex items-center gap-3">
                  <img src={cal} alt="Calendar" className="w-4 h-4 object-contain" />
                  {blogData[currentIndex].date}
                </span>
              </div>
              <h3 className="font-bold text-xl text-[#04285b] ml-5 leading-snug mt-2 mb-2">
                {blogData[currentIndex].title}
              </h3>
              <p className="text-gray-600 text-base mb-4 ml-5">
                {blogData[currentIndex].desc}
              </p>
              <a
                href="#"
                className="text-[#04285b] ml-4 text-lg font-bold inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>

        {/* Buttons row */}
        <div className="flex justify-between items-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 ml-12 px-8 py-3 bg-[#04285b] text-white font-semibold rounded-full shadow-md hover:bg-[#00a7c6] transition duration-300"
          >
            More Blogs ↗
          </a>

          {/* Show arrows only on mobile */}
<div className="flex gap-4 mr-12 md:hidden">
  <button
    onClick={prevSlide}
    className="bg-[#04285b] text-gray-300 w-12 h-12 flex items-center justify-center rounded-full shadow hover:bg-[#063073]"
  >
    {"<"}
  </button>
  <button
    onClick={nextSlide}
    className="bg-[#04285b] text-gray-300 w-12 h-12 flex items-center justify-center rounded-full shadow hover:bg-[#063073]"
  >
    {">"}
  </button>
</div>

        </div>
      </div>
    </section>
  );
};

export default Blog;
