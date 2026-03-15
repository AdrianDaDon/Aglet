import React, { useState, useEffect } from "react";

// scrollRef: ref attached to the scrollable container (passed from parent)
export default function HorizontalScrollBar({ scrollRef }) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const container = scrollRef?.current;
    if (!container) return;

    const handleScroll = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const percentage = maxScroll > 0 ? container.scrollLeft / maxScroll : 0;
      setScrollPercentage(percentage);
    };

    handleScroll(); // set initial value
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRef]);

  return (
    <div className="wrapper">
      <div className="scrollbar-container">
        <div
          className="scroll-fill"
          style={{ width: `${scrollPercentage * 100}%` }}
        />
      </div>
    </div>
  );
}
