import React, { useRef, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import HorizontalScrollBar from "./components/HorizontalScrollBar";
import { data } from "../public/data";

function App() {
  const stickyRef = useRef(null);

  function handleScroll(section) {

    if (!section) return; // ends the function if the section is undefined/null
    const scrollSection = section.querySelector(".scroll-section");

    if (!scrollSection) return; // ends  the function if the scrollSection is undefined/null
    const stickySection = section.parentElement;
    const offsetTop = stickySection.offsetTop;


    const scrollRange = 3.5 * window.innerHeight; // 450vh in px
    const scrolled = window.scrollY - offsetTop; // geting the value of how far the user has scrolled
    const progress = Math.min(1, Math.max(0, scrolled / scrollRange));

    
    const maxTranslateVw = 350;
    const translateVw = progress * maxTranslateVw;
    scrollSection.style.transform = `translate3d(${-translateVw}vw, 0, 0)`;
  }

  useEffect(() => {
    const section = stickyRef.current;
    if (!section) return;
    handleScroll(section);
    const onScroll = () => handleScroll(section);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="container"></div>

        <section className="sticky-section">
          <div className="sticky" ref={stickyRef}>
            <div className="horizontal-scroll-section scroll-section">
              {data.map((content, index) => {
                return (
                  <Card
                    key={index}
                    thumbnail={content.thumbnail}
                    videoUrl={content.video}
                    title={content.title}
                    subtitle={content.subtitle}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
