import React from 'react';
import Slider from 'react-slick/lib/slider';
import { FaStar } from 'react-icons/fa';

const HomeProducts = () => {
  // Fix for Vite CJS module wrapping
  const SlickSlider = Slider.default || Slider;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const products = [
    {
      id: 1,
      name: "Basic Colored Sweatpants With Elastic Hems",
      image1: " https://images.unsplash.com/photo-1779675788296-e268de59beeb?w=600&auto=format&fit=crop", // Front sweatpants
      image2: "https://images.unsplash.com/photo-1779675789716-7f526166ba29?w=600&auto=format&fit=crop", // Back sweatpants
      discount: "24%",
      badge: null,
      reviews: "2 reviews",
      oldPrice: "$25.90",
      price: "$19.90"
    },
    {
      id: 2,
      name: "Basic High-Neck Puff Jacket",
      image1: "https://images.unsplash.com/photo-1767257586789-3b5d09748311?w=600&auto=format&fit=crop ",
      image2: "https://images.unsplash.com/photo-1767978292640-30ddee962a19?w=600&auto=format&fit=crop",
      discount: "23%",
      badge: "TRENDING",
      reviews: "1 review",
      oldPrice: "$89.00",
      price: "$69.00"
    },
    {
      id: 3,
      name: "Basic Relax Fit Leggings",
      image1: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=600&auto=format&fit=crop",
      image2: "https://images.unsplash.com/photo-1606903037631-f09fd0bd74b4?w=600&auto=format&fit=crop",
      discount: "17%",
      badge: null,
      reviews: "1 review",
      oldPrice: "$29.90",
      price: "$24.90"
    }
  ];

  return (
    <section className="homeProductsSec">
      <div className="container">
        
        <div className="hd text-center">
          <h2>Best Seller Products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="productSlider">
          <SlickSlider {...settings}>
            {products.map((item) => (
              <div key={item.id} className="productItemWrapper">
                <div className="productCard">
                  
                  {/* Image Container with Hover Swap */}
                  <div className="imgWrapper">
                    <img src={item.image1} alt={item.name} className="primaryImg" />
                    <img src={item.image2} alt={item.name} className="secondaryImg" />
                    
                    <div className="badgeList">
                      {item.discount && <span className="discountBadge">{item.discount}</span>}
                      {item.badge && <span className="trendingBadge">{item.badge}</span>}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="info">
                    <div className="rating">
                      <FaStar className="starIcon"/>
                      <span>{item.reviews}</span>
                    </div>

                    <h3 className="title">{item.name}</h3>

                    <div className="priceBox">
                      <span className="oldPrice">{item.oldPrice}</span>
                      <span className="newPrice">{item.price}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </SlickSlider>
        </div>

      </div>
    </section>
  );
};

export default HomeProducts;