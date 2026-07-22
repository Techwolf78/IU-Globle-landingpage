import { useEffect, useState } from "react";

const NPFWidget = () => {
  const [widgetHeight, setWidgetHeight] = useState("450px");

  useEffect(() => {
    const updateWidgetHeight = () => {
      setWidgetHeight(window.innerWidth >= 768 ? "550px" : "600px");
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

  const redirectUrl = encodeURIComponent("https://bba-sob.indirauniversity.edu.in/thankyou");

  return (
    <div
      className="npf_wgts w-full"
      data-height={widgetHeight}
      data-w="485adad5d85a233b731dd5cc763e58ba"
      data-r={redirectUrl}
    ></div>
  );
};

export default NPFWidget;
