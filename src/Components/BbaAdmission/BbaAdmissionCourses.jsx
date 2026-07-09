import React, { useRef } from "react";

const CareerSlider = () => {
  const sliderRef = useRef(null);

  const cards = [
    {
      title: "Consulting and Advisory",
      points: [
        "International Business Consultant",
        "Market Entry Strategy Analyst",
        "Cross-Cultural Training Specialist",
        "Global Business Research Analyst",
      ],
    },
    {
      title: "Financial Services",
      points: [
        "Foreign Exchange Dealer",
        "International Banking Officer",
        "Trade Finance Executive",
        "International Payment Specialist",
      ],
    },
    {
      title: "Entrepreneurship",
      points: [
        "Import-Export Business Owner",
        "International E-commerce Entrepreneur",
        "Cross-Border Trade Facilitator",
        "Global Sourcing Consultant",
      ],
    },
    {
      title: "Further Education Pathways",
      points: [
        "MBA / PGDM in International Business",
        "Master's in International Trade",
        "Master's programmes at Korean universities",
        "Specialised certifications in Export Management",
      ],
    },
    {
      title: "International Business Roles",
      points: [
        "International Business Development Manager",
        "Export-Import Manager / Executive",
        "Global Marketing Manager",
        "International Trade Compliance Officer",
      ],
    },
    {
      title: "Multinational Corporation Positions",
      points: [
        "Management Trainee in Korean Corporations",
        "Global Account Manager",
        "International Operations Coordinator",
        "Regional Business Development Executive",
      ],
    },
    {
      title: "Trading and Logistics",
      points: [
        "Freight Forwarding Executive",
        "International Logistics Coordinator",
        "Customs Clearance Specialist",
        "Global Supply Chain Planner",
      ],
    },
  ];

  const scroll = (dir) => {
    sliderRef.current.scrollBy({
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-8 md:py-14 bg-gradient-to-r from-[#990000] via-[#011E5A] to-[#051D58]">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-[white] mb-4 md:mb-8 px-4 leading-tight">
        Career Opportunities After Global Immersion
      </h2>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-3"
        >
          ◀
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-3 md:gap-6 overflow-x-auto scroll-smooth no-scrollbar px-1 sm:px-4 py-4 md:py-6 pb-2"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="min-w-[78vw] sm:min-w-[300px] bg-white rounded-2xl border border-[#2899A4]/40 shadow-lg p-4 md:p-6"
            >
              <h3 className="text-[#011E5A] font-bold text-lg mb-3">
                {card.title}
              </h3>
              <ul className="text-gray-600 text-sm space-y-1">
                {card.points.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-3"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default CareerSlider;
