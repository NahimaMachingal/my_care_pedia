import React from "react";
import girlImg from "../../assets/images/im3.png"; // replace with your actual image path

const Home3 = () => {
  return (
    <section className="relative rounded-[30px] bg-[#E0EDFF] overflow-hidden my-10 w-[87%] mx-auto">
      {/* ✅ Wave Background - clipped to 3/4 width */}
      <div className="absolute left-0 top-0 h-full w-3/4 overflow-hidden">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#cfe0ff"
            d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,117.3C672,107,768,149,864,160C960,171,1056,149,1152,160C1248,171,1344,213,1392,234.7L1440,256L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row flex-wrap">
        {/* Left Side Image */}
        <div className="hidden w-full lg:w-1/2 md:flex justify-center items-center px-4">
          <img src={girlImg} alt="Nurse" className="max-w-full h-auto" />
        </div>

        {/* Right Side Content */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-start gap-5 px-4 py-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#04285b] capitalize leading-snug font-serif">
            Attract New Patients And <br />
            Build Your Online Reputation
          </h2>

          <a
            href="/auth/patient-registration"
            className="group flex items-center gap-2 px-6 sm:px-8 py-2 border border-[#04285b] bg-[#04285b] rounded-[30px] text-[16px] sm:text-[18px] text-white font-semibold transition duration-300 ease-in-out hover:bg-[#00a7c6] hover:border-[#00a7c6] w-fit tracking-[0.5px]"
          >
            <p className="mb-0">Try MyCarePedia Now</p>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300 hidden md:block group-hover:rotate-45 text-white"
            >
              <path
                d="M0.886643 11.4695C0.496119 11.8601 0.496119 12.4932 0.886643 12.8837C1.27717 13.2743 1.91033 13.2743 2.30086 12.8837L0.886643 11.4695ZM13.5938 1.17664C13.5938 0.624351 13.146 0.176636 12.5938 0.176636H3.59375C3.04147 0.176636 2.59375 0.624351 2.59375 1.17664C2.59375 1.72892 3.04147 2.17664 3.59375 2.17664H11.5938V10.1766C11.5938 10.7289 12.0415 11.1766 12.5938 11.1766C13.146 11.1766 13.5938 10.7289 13.5938 10.1766V1.17664ZM2.30086 12.8837L13.3009 1.88374L11.8866 0.469529L0.886643 11.4695L2.30086 12.8837Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home3;
