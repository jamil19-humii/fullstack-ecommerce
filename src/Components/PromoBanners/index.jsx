import React from 'react';


const PromoBanners = () => {
  return (
    <section className="promoSection">
      <div className="container">
        <div className="row">
          
          {/* LEFT COLUMN - Tall Banner */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="bannerCard tallCard">
              <div className="info">
                <span className="subtitle">NEW SEASON</span>
                <h2>Big patterns are back in fashion</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="/shop" className="shopLink">Shop Now &rarr;</a>
              </div>
              <img 
                src="/Images/Promobanner1.png" alt="Big Patterns Trend"
              />
            </div>
          </div>

          {/* RIGHT COLUMN - Two Stacked Banners */}
          <div className="col-md-6 d-flex flex-column justify-content-between gap-4">
            
            {/* Right Top Banner */}
            <div className="bannerCard shortCard bg-light-gray">
              <div className="info">
                <span className="subtitle">NEW SEASON</span>
                <h3>The latest men's trends this season</h3>
                <p>Don't miss the opportunity.</p>
                <a href="/shop" className="shopLink">Shop Now &rarr;</a>
              </div>
              <img 
               src="/Images/Promobanner2.png" alt="Latest Men Trends"
              />
            </div>

            {/* Right Bottom Banner */}
            <div className="bannerCard shortCard bg-pinkish">
              <div className="info">
                <span className="subtitle">NEW SEASON</span>
                <h3>Show your fashion with summer shoes</h3>
                <p>Don't miss the opportunity.</p>
                <a href="/shop" className="shopLink">Shop Now &rarr;</a>
              </div>
              <img 
                src="/Images/Promobanner3.png" alt="Summer Shoes"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
