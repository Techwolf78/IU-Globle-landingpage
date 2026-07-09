import { useEffect, useState, useRef } from "react";
import img1 from "../../assets/event2.avif";
import img2 from "../../assets/event3.avif";
import img3 from "../../assets/event5.avif";
import img4 from "../../assets/event4.avif";
import img5 from "../../assets/event1.avif";
import img6 from "../../assets/facilities2.avif";
import img7 from "../../assets/facilities3.avif";
import img8 from "../../assets/facilities5.avif";
import img9 from "../../assets/facilities4.avif";
import img10 from "../../assets/facilities1.avif";
import img11 from "../../assets/club2.avif";
import img12 from "../../assets/club3.avif";
import img13 from "../../assets/club5.avif";
import img14 from "../../assets/club4.avif";
import img15 from "../../assets/club1.avif";
import NPFWidget from "../NPFWidget";

const data = [
  {
    id: 1,
    title: "Campus Facilities and Infrastructure",
    description:
      "Indira University's modern campus features technology-enabled smart classrooms, a comprehensive library and digital resources, conference halls hosting guest lectures and industry seminars, a career development and placement cell, and sports facilities supporting all-round development in BBA International Business education with a global immersion programme, ensuring students secure their future with high placement.",
    images: [img11, img12, img13, img14, img15],
  },
  {
    id: 2,
    title: "Student Activities and Clubs",
    description:
      "Experience dynamic campus life through our Entrepreneurship and Innovation Cell connecting aspiring entrepreneurs with mentors, Marketing Club, Finance Club, Cultural Committee hosting annual festivals and talent shows, Technical and IT Club offering coding workshops; providing comprehensive co-curricular development alongside BBA International Business education with global immersion focus.",
    images: [img6, img7, img8, img9, img10],
  },
  {
    id: 3,
    title: "Events and Annual Celebrations",
    description:
      "Indira University hosts vibrant annual events featuring industry leaders and corporate networking; multi-day cultural festival with celebrity appearances and inter-college participation; sports week promoting fitness and team spirit; fresher's induction farewell ceremony for graduating batches; regular industry interaction through guest lectures from MNCs; and formal convocation ceremony for degree conferment.",
    images: [img1, img2, img3, img4, img5],
  },
];

export default function CampusFacilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const sectionRef = useRef(null);

  // Detect screen size properly
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Update desktop card from natural page scroll progress.
  useEffect(() => {
    if (!isDesktop) return;

    const updateActiveIndex = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;

      if (scrollableDistance <= 0) {
        setActiveIndex(0);
        return;
      }

      const progress = Math.min(
        1,
        Math.max(0, -rect.top / scrollableDistance),
      );
      const nextIndex = Math.min(
        data.length - 1,
        Math.floor(progress * data.length),
      );

      setActiveIndex((currentIndex) =>
        currentIndex === nextIndex ? currentIndex : nextIndex,
      );
    };

    updateActiveIndex();
    window.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      window.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-r from-[#990000] via-[#011E5A] to-[#051D58] py-8 md:py-10"
      style={{
        height: isDesktop ? `${data.length * 85}vh` : "auto",
      }}
    >
      {/* ================= DESKTOP ================= */}
      {isDesktop && (
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-6">
          <div className="container mx-auto w-full max-w-7xl relative">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-700 ${
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="flex items-center justify-between gap-8 min-h-[70vh]">
                  {/* Content */}
                  <div className="w-5/12">
                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black text-sm font-semibold rounded-full mb-4 shadow-lg">
                      Campus Highlights
                    </span>

                    <h2 className="text-5xl font-bold mb-4 text-white">
                      {item.title}
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-[#FCC409] to-[#FFD700] mb-6 rounded-full"></div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
                      <p className="text-lg text-white/90 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <button
                        type="button"
                        onClick={() => setIsFormOpen(true)}
                        className="px-6 py-3 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black font-semibold rounded-lg shadow-lg"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Images */}
                  <div className="w-7/12 space-y-4">
                    <div className="flex gap-4">
                      <img src={item.images[0]} className="w-1/2 h-40 object-cover rounded-xl" />
                      <img src={item.images[1]} className="w-1/2 h-40 object-cover rounded-xl" />
                    </div>

                    <img src={item.images[2]} className="w-full h-60 object-cover object-top rounded-2xl" />

                    <div className="flex gap-4">
                      <img src={item.images[3]} className="w-1/2 h-40 object-cover rounded-xl" />
                      <img src={item.images[4]} className="w-1/2 h-40 object-cover object-top rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= MOBILE ================= */}
      {!isDesktop && (
        <div className="container mx-auto px-4">
          <div className="mb-3 text-center">
            <span className="inline-block px-3 py-1 border border-[#FCC409]/40 bg-[#FCC409]/10 text-[#FFD700] text-sm font-semibold rounded-xl mb-3">
              Campus Highlights
            </span>
          </div>

          <div className="space-y-8">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>

                <div className="w-16 h-1 bg-gradient-to-r from-[#FCC409] to-[#FFD700] mb-4 rounded-full"></div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-xl">
                  <p className="text-sm text-white/90 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsFormOpen(true)}
                    className="w-full px-5 py-2.5 bg-gradient-to-r from-[#FCC409] to-[#FFD700] text-black text-sm font-semibold rounded-lg shadow-lg"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
                {item.images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${item.title} ${index + 1}`}
                    className="h-36 w-[70vw] max-w-[280px] flex-none object-cover rounded-xl"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
      )}

      {isFormOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-3 py-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-3 shadow-2xl md:p-5">
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-xl bg-[#011E5A] text-lg font-bold text-white shadow"
              aria-label="Close enquiry form"
            >
              &times;
            </button>

            <div className="mb-3 pr-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#990000]">
                Campus Highlights
              </p>
              <h3 className="text-lg font-bold leading-tight text-[#011E5A]">
                Learn more about campus life
              </h3>
            </div>

            <div className="max-h-[78vh] overflow-y-auto overscroll-contain rounded-xl border border-gray-100">
              <NPFWidget />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
