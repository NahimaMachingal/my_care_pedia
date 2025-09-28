import React from "react";
import familyImg from "../../assets/images/family.png";
import cardioImg from "../../assets/images/cardio.png";
import dermImg from "../../assets/images/derm.png";
import pediaImg from "../../assets/images/pedia7.png";

const Specialties = () => {
  const items = [
    {
      name: "Family Medicine",
      img: familyImg,
      desc: "From routine checkups to chronic condition management, find your trusted family doctor here.",
    },
    {
      name: "Cardiology",
      img: cardioImg,
      desc: "Listen to your heart's needs with the expertise of a trusted cardiologist, ensuring a healthy tomorrow.",
    },
    {
      name: "Dermatology",
      img: dermImg,
      desc: "Worried about rashes, acne, or aging skin? Find expert solutions for all your dermatological needs.",
    },
    {
      name: "Pediatrics",
      img: pediaImg,
      desc: "Growing healthy, growing happy: Expert care for your little ones, from newborns to teens.",
    },
  ];

  return (
    <section className="py-12 text-center">
      <h3 className="text-[#00a7c6] font-semibold mb-2">Specialties</h3>
      <h2 className="text-3xl md:text-4xl font-bold text-[#04285b] mb-10">
        Find the Right Care For You
      </h2>
<br />
<br />
<br />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative border border-[#00a7c6] rounded-2xl pt-14 pb-6 px-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
          >
            {/* ✅ Blue Circle with Image */}
            <div className="absolute -top-10 flex justify-center w-full">
              <div className="bg-[#04285b] rounded-full p-6 flex items-center justify-center">
                <img src={item.img} alt={item.name} className="w-10 h-10" />
              </div>
            </div>

            {/* Content */}
            <h4 className="text-lg font-bold text-[#04285b] mb-2 mt-4">
              {item.name}
            </h4>
            <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
            <button className="border border-[#04285b] px-4 py-1.5 rounded-full text-[#04285b] font-medium hover:bg-[#04285b] hover:text-white transition">
              See Providers
            </button>
          </div>
        ))}
      </div>

  {/* Explore Input */}
<div className="mt-10 flex justify-center">
  <div className="flex w-[500px] max-w-full border border-[#00a7c6] rounded-full overflow-hidden">
    <input
      type="text"
      placeholder="Enter Specialty"
      className="flex-1 px-4 py-3 bg-[#eff6ff] text-gray-600 placeholder:text-gray-400 outline-none rounded-l-full"
    />
    <button className="px-6 py-3 bg-[#04285b] text-white font-semibold hover:bg-[#00a7c6] transition whitespace-nowrap rounded-r-full">
      Explore This Speciality ↗
    </button>
  </div>
</div>



    </section>
  );
};

export default Specialties;
