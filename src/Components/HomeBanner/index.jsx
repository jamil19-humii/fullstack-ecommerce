import React, { useState } from "react";

const banners = [
  { 
    type: "image", 
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&auto=format&fit=crop" 
  },
  { 
    type: "image", 
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop" 
  },
  { 
    type: "image", 
    src: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&auto=format&fit=crop" 
  },
  { 
    type: "image", 
    src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&auto=format&fit=crop" 
  },
  { 
    type: "image", 
    src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&auto=format&fit=crop" 
  },
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
              style={
                banner.type === "image"
                  ? { backgroundImage: `url('${banner.src}')` }
                  : undefined
              }
            >
              {banner.type === "video" ? (
                <video autoPlay loop muted playsInline key={banner.src}>
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
