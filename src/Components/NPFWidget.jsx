import { useEffect, useState } from "react";

const NPFWidget = () => {
  const [widgetHeight, setWidgetHeight] = useState("450px");

  useEffect(() => {
    const updateWidgetHeight = () => {
      setWidgetHeight(window.innerWidth >= 768 ? "560px" : "510px");
    };

    updateWidgetHeight();
    window.addEventListener("resize", updateWidgetHeight);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in5.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);

    return () => {
      window.removeEventListener("resize", updateWidgetHeight);
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return (
    <div
      className="npf_wgts w-full"
      data-height={widgetHeight}
      data-w="fa696c7c8f761369fe613b07551b1bf3"
    ></div>
  );
};

export default NPFWidget;
