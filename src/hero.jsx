import hero1 from "./assets/1.png";
import hero2 from "./assets/2.jpg";
import { useState, useEffect } from "react";


function Hero() {
  const slides = [hero1, hero2];
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);


  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);


  const goToProducts = () => {
    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <section className="hero" id="home">
      <div className="slider">
        <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous slide">
          ❮
        </button>


        <div className="slide-wrapper">
          <img
            src={slides[currentSlide]}
            alt="Luxury Jewellery"
            className="hero-image"
            key={currentSlide}
          />
        </div>


        <button className="slider-btn next" onClick={nextSlide} aria-label="Next slide">
          ❯
        </button>


        <div className="slide-dots">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`slide-dot${i === currentSlide ? " active" : ""}`}
              onClick={() => setCurrentSlide(i)}
              role="button"
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>


      <div className="hero-text">
        <span className="eyebrow">Est. 2010 &nbsp;·&nbsp; Hyderabad</span>


        <h1>Hari Jewels</h1>


        <p>Timeless Elegance, Crafted in Every Piece</p>


        <button className="hero-btn" onClick={goToProducts}>
          <span>Explore Collection</span>
          <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
}


export default Hero;