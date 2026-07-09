import React from "react";
import { BookOpen } from "lucide-react";
import ProgramImg from "../../assets/Overview.avif"; // <-- apni image ka path

const BBAProgramOverview = () => {
  return (
    <>
      {/* CONTENT SECTION */}
      <section className="bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F]">
        <div className="px-6 md:px-16 py-10">
          {/* Main Title */}

          {/* LEFT TEXT + RIGHT IMAGE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* LEFT – Programme Description */}
            <div>
              <h3 className="text-2xl text-center md:text-start md:text-3xl font-bold text-white py-4">
                <span className=" text-[#D3FFFD] ">BBA</span> IN INTERNATIONAL
                BUSINESS WITH{" "}
                <span className="text-[#D3FFFD]">GLOBAL IMMERSION</span>
              </h3>

              <div className="space-y-5 text-center md:text-start text-base md:text-lg leading-relaxed text-white/90">
                <p>
                  The{" "}
                  <span className="font-semibold text-white">
                    Bachelor of Business Administration in International
                    Business (Global Immersion)
                  </span>{" "}
                  at Indira University provides a strong academic foundation in
                  international business, strategic management, global
                  marketing, cross-cultural communication, and international
                  trade. A defining feature of this programme is the structured
                  international exposure through an immersive internship at{" "}
                  <span className="font-semibold text-white">
                    Korea University, South Korea
                  </span>
                  , enabling students to experience global business environments
                  first-hand. Designed for students aspiring to succeed in the
                  global job market, the curriculum is further enhanced with
                  Korean language training and a two-week intensive business
                  internship in Seoul during the third semester.
                </p>
              </div>
            </div>

            {/* RIGHT – IMAGE */}
            <div className="flex justify-center md:justify-end">
              <div
                className="
      w-full
      max-w-md
      sm:max-w-lg
      md:max-w-xl
      lg:max-w-2xl
    "
              >
                <img
                  src={ProgramImg}
                  alt="Global Immersion Programme"
                  className="
        w-full
        h-auto
        object-contain
        drop-shadow-xl
      "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BBAProgramOverview;
