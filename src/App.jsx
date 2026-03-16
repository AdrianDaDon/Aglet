import React, { useRef, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import Card from "./app/components/Card";
import HorizontalScrollBar from "./app/components/HorizontalScrollBar";
import Contact from "./app/Contact";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { data } from "../public/data";

function App() {
  const stickyRef = useRef(null);
  // keep track of hovered card to add overlay on every other card
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCardID, setHoveredCardID] = useState(null);

  // 0–1 progress for card strip and HorizontalScrollBar
  const [scrollProgress, setScrollProgress] = useState(0);

  function handleScroll(section) {
    // ends the function if the section is undefined/null
    if (!section) return;
    const scrollSection = section.querySelector(".scroll-section");

    // ends  the function if the scrollSection is undefined/null
    if (!scrollSection) return;

    const stickySection = section.parentElement;
    const offsetTop = stickySection.offsetTop;

    const scrollRange = 3.5 * window.innerHeight;
    // geting the value of how far the user has scrolled
    const scrolled = window.scrollY - offsetTop;
    // calculation of the scroll progress
    const progress = Math.min(1, Math.max(0, scrolled / scrollRange));

    setScrollProgress(progress);

    const maxTranslateVw = 350;
    const translateVw = progress * maxTranslateVw;
    scrollSection.style.transform = `translate3d(${-translateVw}vw, 0, 0)`;
  }

  // Sync scrollProgress to card strip transform
  useEffect(() => {
    const section = stickyRef.current;
    if (!section) return;
    const scrollSection = section.querySelector(".scroll-section");
    if (!scrollSection) return;
    const maxTranslateVw = 350;
    const translateVw = scrollProgress * maxTranslateVw;
    scrollSection.style.transform = `translate3d(${-translateVw}vw, 0, 0)`;
  }, [scrollProgress]);

  useEffect(() => {

    const rightArrow = document.querySelector(".right-arrow");
    const leftArrow = document.querySelector(".left-arrow");

    const section = stickyRef.current;
    if (!section) return;
    handleScroll(section);
    const onScroll = () => handleScroll(section);

    // adding an event to listen for scrolling on the window
    // passive ensure that the browser continues scrolling without having to call preventDefault()
    window.addEventListener("scroll", onScroll, { passive: true });

    const onRightClick = () => {
      setScrollProgress((prev) => Math.min(1, prev + 0.1));
    };
    const onLeftClick = () => {
      setScrollProgress((prev) => Math.max(0, prev - 0.1));
    };
    rightArrow?.addEventListener("click", onRightClick);
    leftArrow?.addEventListener("click", onLeftClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      rightArrow?.removeEventListener("click", onRightClick);
      leftArrow?.removeEventListener("click", onLeftClick);
    };
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <div className="container"></div>
              <section className="sticky-section">
                <SlArrowLeft className="scroll-arrow left-arrow" />
                <SlArrowRight className="scroll-arrow right-arrow" />
                <div className="sticky" ref={stickyRef}>
                  <div className={`horizontal-scroll-section scroll-section`}>
                    {data.map((content, index) => {
                      return (
                        <Card
                          key={index}
                          thumbnail={content.thumbnail}
                          videoUrl={content.video}
                          title={content.title}
                          subtitle={content.subtitle}
                          id={index}
                          isHovered={isHovered}
                          setHoveredID={setHoveredCardID}
                          setIsHovered={setIsHovered}
                          hoveredCardID={hoveredCardID}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="scroll-progress">
                  <HorizontalScrollBar scrollProgress={scrollProgress} />
                </div>
              </section>
            </main>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
