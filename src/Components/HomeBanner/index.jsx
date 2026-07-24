import React, { useState } from "react";
import Home from "../../assets/Images/Home.png";
import banner1 from "../../assets/Images/banner1.png";
import banner2 from "../../assets/Images/banner2.png";
import banner3 from "../../assets/Images/banner3.png";
import banner4 from "../../assets/Images/banner4.png";
import bannerVideo from "../../assets/Images/banner-video.mp4";

const banners = [
  { type: "image", src: Home },
  { type: "image", src: banner1 },
   { type: "video", src: bannerVideo },
  { type: "image", src: banner2 },
  { type: "image", src: banner3 },
  { type: "image", src: banner4 },
  
];

const HomeBanner = () => {
  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const loopBanners = [banners[banners.length - 1], ...banners, banners[0]];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? prev : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === banners.length + 1 ? prev : prev + 1));
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
          {loopBanners.map((banner, index) => (
            <div
              className={`slide ${banner.type === "video" ? "videoSlide" : ""}`}
              key={`${banner.src}-${index}`}
              style={banner.type === "image" ? { backgroundImage: `url(${banner.src})` } : undefined}
            >
              {banner.type === "video" ? (
                <video autoPlay loop muted playsInline>
                  <source src={banner.src} type="video/mp4" />
                </video>
              ) : (
                <img src={banner.src} alt={`Banner ${index + 1}`} />
              )}
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
