import React from "react";
import aboutImage from "../../assets/about.jpg";
import indiraLogo from "../../assets/IU.png";
import koreaLogo from "../../assets/Korea.png";

const UniversityComparison = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl md:text-4xl font-bold text-center text-black mb-2 md:mb-8">
          ABOUT US
        </h1>
      </div>

      {/* Desktop - Background Image */}
      <div className="hidden md:block h-auto bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="w-full mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
            {/* Left - Indira University */}
            <div className="flex-1">
              <div className="p-6 md:p-8 lg:p-10 relative">
                {/* LOGO TOP RIGHT */}
                <div className="absolute top-6 right-6">
                  <img src={indiraLogo} alt="Indira University Logo" className="h-12 object-contain" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  INDIRA UNIVERSITY
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Leading BBA College in India
                </h3>
                <div className="space-y-4">
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    Indira University ranks amongst India's most progressive
                    institutions offering Bachelor of Business Administration
                    programmes in Pune, Maharashtra's educational hub. Our School
                    of Business (SOB) delivers comprehensive undergraduate
                    business administration courses in international trade,
                    global marketing, cross-cultural management, and
                    multinational business operations with state-of-the-art
                    infrastructure, experienced faculty holding international
                    qualifications, and strong industry partnerships.
                  </p>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    Our BBA in International Business programme prepares
                    graduates for leadership roles in global organisations with
                    essential business skills, intercultural competencies, and
                    practical industry experience through corporate visits,
                    guest lectures, and comprehensive career development support
                    across our extensive alumni network in multinational
                    corporations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Korea University */}
            <div className="flex-1">
              <div className="p-6 md:p-8 lg:p-10 relative">
                {/* LOGO TOP RIGHT */}
                <div className="absolute top-6 right-6">
                  <img src={koreaLogo} alt="Korea University Logo" className="h-23 object-contain" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  KOREA UNIVERSITY
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  International Partner for Global Education
                </h3>
                <div className="space-y-4">
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    Korea University, established in 1905, ranks amongst Asia's
                    most prestigious educational institutions and South Korea's
                    leading research university. Consistently featured in QS
                    World University Rankings and Times Higher Education
                    Rankings, Korea University's renowned Business School in
                    Seoul offers exposure to business practices, technological
                    innovation, and dynamic international trade environments.
                  </p>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    Through our exclusive partnership, Indira University's BBA
                    International Business (Global Immersion) students gain
                    direct access to global academic resources, international
                    business networks, and cross-cultural learning experiences.
                    Located in Seoul's global business hub with strong
                    connections to leading corporations, Korea University provides competitive
                    advantages in understanding Asian business dynamics,
                    international trade practices, and multicultural business
                    environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile - Gradient Background */}
      <div className="block md:hidden">
        <div className="w-full mx-auto">
          <div className="flex flex-col gap-6">
            {/* Left - Indira University */}
            <div className="relative  overflow-hidden shadow-lg"
              style={{
                background: "linear-gradient(135deg, #990000 0%, #011E5A 50%, #1e40af 100%)"
              }}
            >
              <div className="p-6 relative">
                {/* LOGO TOP RIGHT */}
                <div className="absolute top-6 right-6">
                  <img src={indiraLogo} alt="Indira University Logo" className="h-12 object-contain" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  INDIRA UNIVERSITY
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Leading BBA College in India
                </h3>
                <div className="space-y-4">
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    Indira University ranks amongst India's most progressive
                    institutions offering Bachelor of Business Administration
                    programmes in Pune, Maharashtra's educational hub. Our School
                    of Business (SOB) delivers comprehensive undergraduate
                    business administration courses in international trade,
                    global marketing, cross-cultural management, and
                    multinational business operations with state-of-the-art
                    infrastructure, experienced faculty holding international
                    qualifications, and strong industry partnerships.
                  </p>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    Our BBA in International Business programme prepares
                    graduates for leadership roles in global organisations with
                    essential business skills, intercultural competencies, and
                    practical industry experience through corporate visits,
                    guest lectures, and comprehensive career development support
                    across our extensive alumni network in multinational
                    corporations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Korea University */}
            <div className="relative  overflow-hidden shadow-lg"
              style={{
                background: "linear-gradient(135deg, #990000 0%, #011E5A 50%, #1e40af 100%)"
              }}
            >
              <div className="p-6 relative">
                {/* LOGO TOP RIGHT */}
                <div className="absolute top-6 right-6">
                  <img src={koreaLogo} alt="Korea University Logo" className="h-23 object-contain" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  KOREA UNIVERSITY
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  International Partner for Global Education
                </h3>
                <div className="space-y-4">
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    Korea University, established in 1905, ranks amongst Asia's
                    most prestigious educational institutions and South Korea's
                    leading research university. Consistently featured in QS
                    World University Rankings and Times Higher Education
                    Rankings, Korea University's renowned Business School in
                    Seoul offers exposure to business practices, technological
                    innovation, and dynamic international trade environments.
                  </p>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    Through our exclusive partnership, Indira University's BBA
                    International Business (Global Immersion) students gain
                    direct access to global academic resources, international
                    business networks, and cross-cultural learning experiences.
                    Located in Seoul's global business hub with strong
                    connections to leading corporations, Korea University provides competitive
                    advantages in understanding Asian business dynamics,
                    international trade practices, and multicultural business
                    environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityComparison;