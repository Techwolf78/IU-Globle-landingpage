import { useState, useEffect, useMemo, useRef } from "react";
import backgroundImage2 from "../../assets/hero.avif";
import NPFWidget from "../NPFWidget";
import img from "../../assets/heroglob.avif";

function CompHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const words = useMemo(() => ["Lead.", "Excel.", "Inspire."], []);

  // Fade in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div
      className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage2})` }}
      ref={containerRef}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/60 via-black/40 to-[#209EA3]/20"></div>

      {/* Floating particles/background elements */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex min-h-[90vh] md:min-h-[calc(100vh-162px)] flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 py-6 md:py-0 gap-5 md:gap-12">
        {/* LEFT TEXT */}
        <div
          className={`w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {/* Main Heading with typing animation */}
          <div className="overflow-hidden w-full">
            <h1 className="block text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold py-2 md:py-4">
              BBA in International Business with
              <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pt-2 md:pt-4 leading-tight">
                Global Immersion Programme
              </span>
            </h1>

            {/* Global Image - Centered */}
            <div className=" flex justify-center md:justify-start">
              <div className="w-full max-w-[13rem] sm:max-w-xs md:max-w-md">
                <img 
                  src={img} 
                  alt="Global Immersion Programme" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Description with staggered animation */}
          <div className="space-y-2">
            <p className="text-sm sm:text-base md:text-md leading-relaxed transform transition-all duration-700 delay-300 text-normal">
           <span className="font-bold text-amber-300 text-lg sm:text-2xl">Experiential Learning at Korea University  - Ranked #12 in QS Asia Rankings</span> <br />
 
Experience international business education with our exclusive Global Immersion Programme
            </p>
          </div>

          {/* Admissions Banner with pulse animation */}
          <div className="py-1 md:py-4 transform transition-all duration-700 delay-500">
            <div className="relative inline-block group">
              <p className="text-xs sm:text-base md:text-2xl border border-[#D3FFFD]/50 bg-[#D3FFFD]/15 text-white font-semibold py-2 px-4 rounded-xl inline-block shadow-sm">
                Admissions Open for 2026-27
              </p>
            </div>
          </div>


        </div>

        {/* RIGHT FORM with slide-in animation */}
        <div
          className={`w-full md:w-1/2 flex justify-center md:justify-end transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
        >
          <div className="relative w-full max-w-md group">
            <div className="absolute -inset-1 "></div>
            <div className="relative p-3 sm:p-4 md:p-6 rounded-2xl shadow-2xl border border-white/20 md:border-gray-700 transform transition-all duration-300 md:group-hover:scale-[1.01]">
              <NPFWidget />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float infinite linear;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default CompHero;
