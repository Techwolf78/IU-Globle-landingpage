import React from "react";

const GlobalImmersionProgram = () => {
  return (
    <div className="bg-white p-4 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-6 md:mb-12">
          <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-6">
            What, Why & How ?
          </h1>
          <h1 className="text-lg md:text-3xl font-bold text-gray-900 md:mb-6 leading-tight">
            UNDERSTANDING GLOBAL IMMERSION PROGRAMMES
          </h1>
          <div className="mt-4 md:mt-12 text-center">
            {/* <div className="w-32 h-1 bg-gradient-to-r from-[#7A0C1E] to-[#1E40AF] mx-auto mb-4 rounded-full"></div> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
          {/* WHAT Card */}
          <div className="bg-gradient-to-br from-[#fcd3da] to-white border-l-4 md:border-l-8 border-[#990000] rounded-r-xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-4 md:mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-full mb-3 md:mb-4">
                {/* Globe Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-[#990000]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                What is a Global Immersion Programme?
              </h2>
              <div className="w-16 md:w-20 h-1 bg-[#990000] mb-4 md:mb-6"></div>
            </div>
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
              <span className=" ">
                A Global Immersion Programme in BBA education combines
                international business coursework with hands-on overseas
                internship experience, providing students with practical
                cross-cultural management skills and real-world international
                business exposure at foreign universities like Korea University.
              </span>
              , global exposure , cultural awareness academic growth.
            </p>
          </div>

          {/* WHY Card */}
          <div className="bg-gradient-to-br from-[#a6bef5] to-white border-l-4 md:border-l-8 border-[#1657f2] rounded-r-xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-4 md:mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-full mb-3 md:mb-4">
                {/* Airplane Icon - Simple */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-[#092fce]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                Why are Global Immersion Programmes important?
              </h2>
              <div className="w-16 md:w-20 h-1 bg-[#092fce] mb-4 md:mb-6"></div>
            </div>
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
              <span className="">
                Global immersion programmes are essential for developing
                cross-cultural competencies, international business skills, and
                global networking opportunities that multinational corporations
                actively seek in BBA graduates, significantly enhancing
                employability and career prospects in international trade and
                global business management roles.
              </span>
            </p>
          </div>

          {/* HOW Card */}
          <div className="bg-gradient-to-br from-[#fcd3da] to-white border-l-4 md:border-l-8 border-[#990000] rounded-r-xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-4 md:mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-full mb-3 md:mb-4">
                {/* Book Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 text-[#990000]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                How our Global Immersion Programmes help you?
              </h2>
              <div className="w-16 md:w-20 h-1 bg-[#990000] mb-4 md:mb-6"></div>
            </div>
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
              <span className="">
                Our BBA International Business Global Immersion programme
                provides Korean language training, Korea University
                international internship experience, enhanced employability with
                multinational corporations, Asian business exposure,
                professional networking opportunities, and comprehensive career
                development for exceptional career advantages in global business
                management and export-import sectors.{" "}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalImmersionProgram;
