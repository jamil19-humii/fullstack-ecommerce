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
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&auto=format&fit=crop" alt="Big Patterns Trend"
              />https://klbtheme.com/clotya/wp-content/uploads/2022/04/banner-02.jpg
              https://klbtheme.com/clotya/wp-content/uploads/2022/04/banner-03.jpg
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
               src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&auto=format&fit=crop" alt="Latest Men Trends"
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
               src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&auto=format&fit=crop" alt="Summer Shoes"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
