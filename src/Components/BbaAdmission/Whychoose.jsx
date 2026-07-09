import React, { useEffect } from "react";
import Image1 from "../../assets/Building.avif";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaBullhorn,
  FaHandshake,
  FaChartLine,
  FaRegCalendarAlt,
  FaUsers,
  FaRegClipboard,
  FaUserTie,
  FaGraduationCap,
} from "react-icons/fa";

import { gsap } from "gsap";

function BbaAdmissionOverview() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const circles = document.querySelectorAll(".circle");
    const icons = document.querySelectorAll(".icon");

    circles.forEach((circle, index) => {
      const icon = icons[index];

      gsap.set(circle, { opacity: 0, x: -40 });

      circle.parentElement.addEventListener("mouseenter", () => {
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.3 });
        gsap.to(icon, { rotationY: 360, duration: 0.5 });
      });

      circle.parentElement.addEventListener("mouseleave", () => {
        gsap.to(circle, { opacity: 0, x: -40, duration: 0.3 });
        gsap.to(icon, { rotationY: 0, duration: 0.5 });
      });
    });
  }, []);

  const cardData = [
    { icon: FaBullhorn, title: "Industry-Aligned International Business Curriculum  " },
    { icon: FaHandshake, title: "Practical Learning for Real-World Global Business  " },
    { icon: FaRegCalendarAlt, title: "International Exposure & Global Immersion  " },
    { icon: FaChartLine, title: "Professional Certifications and Career Support  " },
    { icon: FaUsers, title: "Startup & Global Entrepreneurship Support" },
    { icon: FaRegClipboard, title: "Strong Industry & Alumni Network " },
    { icon: FaUserTie, title: "Global Exposure Through Internship in South Korea  " },
    { icon: FaGraduationCap, title: "Hands-On Real-World Learning  y" },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
     

      {/* ================= WHY CHOOSE US ================= */}
      <div className="px-4 md:px-16 py-8 md:py-10 bg-white" data-aos="fade-up">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8">
         WHY CHOOSE US? 
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-7xl mx-auto">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-[#011E5A] p-3 md:p-5 rounded-xl relative
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <item.icon
                size={32}
                className="text-white mb-3 md:mb-4 icon md:w-[42px] md:h-[42px]"
              />

              <p className="text-white font-semibold text-xs sm:text-sm md:text-lg leading-snug">
                {item.title}
              </p>

              <div className="circle absolute -bottom-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BbaAdmissionOverview;
