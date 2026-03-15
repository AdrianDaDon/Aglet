import React, { useState, useEffect } from "react";


export default function HorizontalScrollBar({ scrollProgress, scrollRef }) {
  const [scrollPercentage, setScrollPercentage] = useState(0);


  const progressFromContainer = scrollProgress != null; //

  useEffect(() => {
    if (progressFromContainer) return;
    const container = scrollRef?.current;
    if (!container) return;

    const handleScroll = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const percentage = maxScroll > 0 ? container.scrollLeft / maxScroll : 0;
      setScrollPercentage(percentage);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRef, progressFromContainer]);

  const percentage = progressFromContainer ? scrollProgress : scrollPercentage;

  return (
    <div className="wrapper">
      <div className="scrollbar-container">
        <div
          className="scroll-fill"
          style={{ width: `${percentage * 100}%` }}
        />
      </div>
    </div>
  );
}
