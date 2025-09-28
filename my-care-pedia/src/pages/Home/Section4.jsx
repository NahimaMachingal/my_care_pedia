import React from "react";
import doctor1 from "../../assets/images/doctor1.jpg";
import doctor2 from "../../assets/images/doctor2.jpg";

const Section4 = () => {
  const doctors = [
    {
      id: 1,
      name: "ARACELI ZAMORA",
      title: "Behavior Technician",
      img: doctor1,
    },
    {
      id: 2,
      name: "HAOTIAN CAI",
      title: "Physical Therapist",
      img: doctor2,
    },
    {
      id: 3,
      name: "KAREN FIFE",
      title: "Family Nurse Practitioner",
      img: doctor1,
    },
  ];

  return (
    <section className="py-12 px-[120px] bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-start mb-10 flex flex-col gap-2">
          <h5 className="text-2xl text-[#00b3d0] font-header-serif font-bold">
      Featured Doctors
    </h5>
    <h3 className="text-4xl font-bold font-header-serif text-[#04285b] mt-2">
      Find Your Health Match Today
    </h3>
          <p className="text-main w-full sm:w-1/2 text-lg mt-2">
            Find your ideal doctor effortlessly on MyCarePedia's Featured
            Doctors section for top-rated and new healthcare professionals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border flex flex-col"
            >
              {/* Doctor Image with Recommended tag overlay */}
<div className="relative bg-gray-100 h-90 w-full">
  <img
    src={doc.img}
    alt={doc.name}
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-3 left-0 bg-gray-200 text-gray-800 text-sm font-semibold px-5 py-1 rounded-r-lg shadow">
    Recommended
  </div>
</div>


              {/* Info */}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-2xl font-semibold text-gray-800 uppercase">
                  {doc.name}
                </h3>
                <p className="text-gray-600 text-base font-semibold">{doc.title}</p>

                <div className="flex items-center text-sm font-semibold text-gray-400">
  <img
    src="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.28027%2016.5947C10.402%2016.5947%2012.4368%2015.7519%2013.9371%2014.2516C15.4374%2012.7513%2016.2803%2010.7165%2016.2803%208.59473C16.2803%206.47299%2015.4374%204.43816%2013.9371%202.93787C12.4368%201.43758%2010.402%200.594727%208.28027%200.594727C6.15854%200.594727%204.12371%201.43758%202.62342%202.93787C1.12313%204.43816%200.280273%206.47299%200.280273%208.59473C0.280273%2010.7165%201.12313%2012.7513%202.62342%2014.2516C4.12371%2015.7519%206.15854%2016.5947%208.28027%2016.5947ZM11.9873%207.30173L7.98427%2011.3017C7.8914%2011.3947%207.78111%2011.4685%207.65971%2011.5188C7.53832%2011.5691%207.40819%2011.595%207.27677%2011.595C7.14536%2011.595%207.01523%2011.5691%206.89383%2011.5188C6.77244%2011.4685%206.66215%2011.3947%206.56927%2011.3017L4.57227%209.30173C4.38477%209.11395%204.27953%208.85938%204.27972%208.59402C4.2799%208.32866%204.3855%208.07423%204.57327%207.88673C4.76105%207.69922%205.01562%207.59398%205.28098%207.59417C5.54634%207.59436%205.80077%207.69995%205.98827%207.88773L7.27827%209.18073L10.5733%205.88773C10.7619%205.70557%2011.0145%205.60477%2011.2767%205.60705C11.5389%205.60933%2011.7897%205.7145%2011.9751%205.89991C12.1605%206.08532%2012.2657%206.33613%2012.2679%206.59833C12.2702%206.86052%2012.1694%207.11312%2011.9873%207.30173Z'%20fill='%23B0B0B0'/%3e%3c/svg%3e"
    alt="Available Icon"
    className="w-4 h-4 mr-2"
  />
  Available Today
</div>


                <div className="flex items-center justify-between text-sm w-full mt-2">
                  <div className="flex items-center">
  <span className="text-yellow-400 mr-1">★</span>
  <span className="text-black font-semibold">0</span>
  <span className="text-gray-400 ml-1 font-semibold">(0 Reviews)</span>

</div>

                <button className="px-4 py-1.5 rounded-full bg-[#04285b] text-white font-medium text-sm hover:bg-[#00a7c6] transition">
    Book Appointment
  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20">
            <button className="px-10 py-2 rounded-full border border-[#04285b] text-[#04285b] font-semibold text-lg hover:bg-[#00b3d0] hover:text-white transition-colors duration-200 flex items-center gap-2">
              Explore More Doctors
              <span aria-hidden="true">↗</span>
            </button>
          </div>
      </div>
    </section>
  );
};

export default Section4;
