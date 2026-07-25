import React from 'react';
import Slider from 'react-slick/lib/slider';
import { FaStar } from 'react-icons/fa';

import prod1Front from "../../assets/Images/prod1Front.png";
import prod1Back from "../../assets/Images/prod1Back.png";
import prod2Front from "../../assets/Images/prod2Front.png";
import prod2Back from "../../assets/Images/prod2Back.png";
import prod3Front from "../../assets/Images/prod3Front.png";
import prod3Back from "../../assets/Images/prod3Back.png";

const HomeProducts = () => {
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

  // 2. Use imported variables in your products array
  const products = [
    {
      id: 1,
      name: "Basic Colored Sweatpants With Elastic Hems",
      image1: prod1Front,
      image2: prod1Back,
      discount: "24%",
      badge: null,
      reviews: "2 reviews",
      oldPrice: "$25.90",
      price: "$19.90"
    },
    {
      id: 2,
      name: "Basic High-Neck Puff Jacket",
      image1: prod2Front,
      image2: prod2Back,
      discount: "23%",
      badge: "TRENDING",
      reviews: "1 review",
      oldPrice: "$89.00",
      price: "$69.00"
    },
    {
      id: 3,
      name: "Basic Relax Fit Leggings",
      image1: prod3Front,
      image2: prod3Back,
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
          <Slider {...settings}>
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
                      <FaStar className="starIcon" />
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
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default HomeProducts;