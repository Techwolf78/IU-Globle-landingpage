import React, { useEffect } from "react";
import Image1 from "../../assets/plain.avif";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

function BbaAdmissionOverview() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="overflow-hidden poppins-regular">
      <div className="w-full px-4 md:px-8 py-8 bg-[#EEF2FF]">
        <div className="max-w-7xl mx-auto">

          {/* ===== TOP LINE HEADING ===== */}
          <div className="mb-3" data-aos="fade-down">
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Your Global Immersion Experience at
            </h1>
          </div>

          {/* ===== CONTENT ROW ===== */}
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* LEFT CONTENT */}
            <div
              className="md:w-1/2 text-left"
              data-aos="fade-right"
            >
              <h2 className="text-[#740716] text-3xl md:text-4xl font-bold mb-4">
                KOREA UNIVERSITY
              </h2>

              <p className="text-base md:text-lg text-black leading-relaxed">
                During your two-week international internship programme at Korea
                University, you will participate in intensive business lessons,
                educational site visits, and practical project work. This immersive
                experience provides invaluable insights into international business
                operations, Asian market dynamics, and global trade practices whilst
                building your professional network across borders.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="md:w-1/2 flex justify-center"
              data-aos="fade-left"
            >
              <img
                src={Image1}
                alt="Korea University"
                className="w-full max-w-2xl object-contain"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default BbaAdmissionOverview;
