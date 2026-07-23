import React, { useState } from "react";
import Home from "../../assets/Images/Home.png";
import banner1 from "../../assets/Images/banner1.png";
import banner2 from "../../assets/Images/banner2.png";
import banner3 from "../../assets/Images/banner3.png";

const banners = [Home, banner1, banner2, banner3];

const HomeBanner = () => {
  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const loopBanners = [banners[banners.length - 1], ...banners, banners[0]];

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    let resetTo = null;

    if (current === 0) resetTo = banners.length;
    if (current === banners.length + 1) resetTo = 1;
    if (resetTo === null) return;

    setIsAnimating(false);
    setCurrent(resetTo);
    requestAnimationFrame(() => requestAnimationFrame(() => setIsAnimating(true)));
  };

  return (
    <div className="homeBannerSection">
      <div className="sliderWrapper">
        <button className="sliderNav prev" onClick={prevSlide}>
          &#10094;
        </button>

        <div
          className="slides"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: isAnimating ? "transform 0.45s ease" : "none",
          }}
        >
          {loopBanners.map((src, index) => (
            <div
              className="slide"
              key={`${src}-${index}`}
              style={{ backgroundImage: `url(${src})` }}
            >
              <img src={src} alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className="sliderNav next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="dots">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current - 1 ? "active" : ""}`}
            onClick={() => setCurrent(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
