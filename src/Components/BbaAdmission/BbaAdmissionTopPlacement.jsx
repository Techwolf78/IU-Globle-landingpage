import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/New_Students/1.avif";
import img2 from "../../assets/New_Students/2.avif";
import img3 from "../../assets/New_Students/3.avif";
import img4 from "../../assets/New_Students/4.avif";
import img5 from "../../assets/New_Students/5.avif";
import img6 from "../../assets/New_Students/6.avif";
import img7 from "../../assets/New_Students/7.avif";
import img8 from "../../assets/New_Students/8.avif";
import img9 from "../../assets/New_Students/9.avif";
import img10 from "../../assets/New_Students/10.avif";

const students = [
  {
    name: "Mr. Aman Sawarkar",
    company: "Accenture",
    feedback:
      "Proud placement achieved through focused training and mentorship.",
    image: img1,
  },
  {
    name: "Mr. Akash Malpure",
    company: "Airtel",
    feedback:
      "Industry exposure at Indira helped me gain real-world confidence.",
    image: img2,
  },
  {
    name: "Ms. Manila Singh",
    company: "Airtel",
    feedback: "Supportive faculty and practical learning shaped my journey.",
    image: img3,
  },
  {
    name: "Mr. Aniket Pawar",
    company: "KPMG",
    feedback: "The placement process was smooth and professionally guided.",
    image: img4,
  },
  {
    name: "Ms. Rucha Baste",
    company: "KPMG",
    feedback:
      "Skill-based learning helped me transition into the corporate world.",
    image: img5,
  },
  {
    name: "Ms. Harshada Navale",
    company: "Amazon",
    feedback: "Indira provided the right platform to grow and succeed.",
    image: img6,
  },
  {
    name: "Ms. Aishwarya Verma",
    company: "KPMG",
    feedback: "Hands-on projects made learning meaningful and effective.",
    image: img7,
  },
  {
    name: "Mr. Amitesh Rao",
    company: "Cloudaeon",
    feedback:
      "Career-focused training prepared me for professional challenges.",
    image: img8,
  },
  {
    name: "Ms. Samiksha P.",
    company: "Ocman Realty",
    feedback: "Excellent mentorship and placement support throughout.",
    image: img9,
  },
  {
    name: "Ms. Shruti Gramkar",
    company: "Quickinsure",
    feedback: "A strong foundation that helped me start my career confidently.",
    image: img10,
  },
];

const TopPlacements = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const speed = 1;

    const animate = () => {
      if (!isHovered) {
        positionRef.current -= speed;

        if (Math.abs(positionRef.current) >= slider.scrollWidth / 2) {
          positionRef.current = 0;
        }

        slider.style.transform = `translateX(${positionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isHovered]);

  return (
    <div className="px-4 md:px-16 py-6 bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F] overflow-hidden">
      
      {/* 🔥 GRID UPDATED */}
      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_3.7fr] gap-10 items-center">
        
        {/* LEFT CONTENT (SMALLER) */}
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            <div className="text-white">TOP PLACEMENTS</div>

            <div className="h-3 md:h-4"></div>

            <div className="text-white/90 text-2xl md:text-3xl font-semibold">
              From Campus
            </div>
            <div className="text-white/80 text-2xl md:text-3xl font-semibold">
              to Corporate
            </div>
          </h2>

          <p className="text-white/90 text-lg md:text-xl mt-4">
            Our students secure top placements with strong industry exposure.
          </p>
        </div>

        {/* RIGHT SLIDER (BIGGER) */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={sliderRef} className="flex w-max">
            {[...students, ...students].map((student, i) => (
              <div
                key={i}
                className="mx-3 flex-shrink-0 w-[55vw] sm:w-[45vw] md:w-[26vw] lg:w-[16vw]"
              >
                <div className="group overflow-hidden">
                  <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 bg-white">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 text-center">
                      <p className="text-white text-sm">
                        {student.feedback}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 text-center">
                    <h3 className="text-lg font-semibold text-white">
                      {student.name}
                    </h3>
                    <p className="text-lg md:text-xl text-white bg-[#011E5A]">
                      {student.company || "Placement Achieved"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopPlacements;
