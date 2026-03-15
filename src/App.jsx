import React, { useRef, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import HorizontalScrollBar from "./components/HorizontalScrollBar";
import { data } from "../public/data";

function App() {
  const stickyRef = useRef(null);

  function handleScroll(section) {
    if (!section) return;
    const scrollSection = section.querySelector(".scroll-section");
    if (!scrollSection) return;
    const offsetTop = section.parentElement.offsetTop;
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = Math.min(100, Math.max(0, percentage));
    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
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

        <section>
          <div className="container">
            <h1>Hybrid Scrolling Section</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident incidunt, quod amet placeat dolor accusamus? Excepturi modi optio quo, exercitationem delectus inventore doloribus amet similique molestiae, tempora adipisci facere?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident incidunt, quod amet placeat dolor accusamus? Excepturi modi optio quo, exercitationem delectus inventore doloribus amet similique molestiae, tempora adipisci facere?</p>
          </div>
        </section>


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
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
