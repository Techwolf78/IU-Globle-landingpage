import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center p-8">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-b-[#b1124a]/10 border-l-[#b1124a]/50 border-r-[#b1124a]/30 border-t-[#b1124a]"></div>
        <div
          className="absolute inset-2 animate-spin rounded-full border-4 border-b-[#fcc409] border-l-[#fcc409]/50 border-r-[#fcc409]/10 border-t-[#fcc409]/30"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>
      </div>
      <p className="mt-4 animate-pulse text-lg font-semibold tracking-wide text-[#b1124a]">
        Loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;
