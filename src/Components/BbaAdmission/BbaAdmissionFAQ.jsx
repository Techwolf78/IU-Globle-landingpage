import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

/* ---------------- FAQ DATA ---------------- */
const FAQ_DATA = [
  {
    question: "Can I apply if my 12th results are not yet declared?",
    answer:
      "Yes, you may apply with your latest available mark sheets (11th standard or 12th mid-term). Final admission will be subject to meeting eligibility criteria in final 12th results.",
  },
  {
    question:" Is work experience required for admission?",
    answer:
      "No, the BBA programme is designed for students immediately after 12th standard. Work experience is not required or expected.",
  },
  {
    question: "What if I don't have a passport currently?",
    answer:
      "You can apply and confirm admission without a passport. However, you must obtain a passport before the Semester 3 international internship (approximately 18 months after admission commencement), which provides sufficient time for passport processing. ",
  },
  {
    question: " When does the South Korea internship take place?",
    answer: "The two-week intensive international internship at Korea University occurs during Semester 3 (typically January-February of the second academic year), allowing students eighteen months to complete passport formalities and prepare adequately for international travel.",
  },
  {
    question: "Is mathematics mandatory in 12th standard for BBA admission?",
    answer:
      " No, mathematics in 12th standard is not mandatory. Students from any stream (Commerce, Science, or Arts) with any subject combination meeting the minimum percentage criteria are eligible for admission.",
  },
  {
    question: "Can I pursue MBA abroad after this BBA programme?",
    answer:
      "Absolutely. The BBA degree from Indira University is recognised for admission to master's programmes globally. International exposure through the Korea University internship, documented international experience, and Korean language skills actually strengthen applications for foreign universities.",
  },
  
];

/* ---------------- SUB-COMPONENT ---------------- */

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      className={`h-full border border-gray-100 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col ${
        isOpen ? "shadow-md ring-1 ring-blue-100" : ""
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between px-5 py-4 text-left focus:outline-none flex-shrink-0"
        aria-expanded={isOpen}
      >
        <span
          className={`text-base font-semibold pr-8 transition-colors duration-300 flex-1 ${
            isOpen
              ? "text-[#990000]"
              : "text-gray-800 group-hover:text-[#990000]"
          }`}
        >
          {item.question}
        </span>

        {/* Icon Container */}
        <span
          className={`flex-shrink-0 ml-2 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-[#990000] text-white rotate-180"
              : "bg-gray-50 text-[#990000] group-hover:bg-[#990000]/10"
          }`}
        >
          <FaArrowDown size={10} />
        </span>
      </button>

      {/* CSS Grid Trick for Height Animation */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out flex-1 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-dashed border-gray-100 pt-3">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

function BbaAdmissionFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative px-4 sm:px-6 md:px-12 py-16 bg-gradient-to-r from-[#990000] via-[#011E5A] to-[#051D58] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-100 blur-3xl mix-blend-multiply filter" />
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-indigo-100 blur-3xl mix-blend-multiply filter" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-white max-w-3xl mx-auto">
Get answers to the most common questions about BBA course of Indira University, Maharashtra.           </p>
        </div>

        {/* 3 Column Grid for FAQ Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default BbaAdmissionFAQ;