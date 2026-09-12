import Slider from "react-slick/lib/slider";
import { products } from "../../data/products";
import ProductCard from "../ProductCard";

const HomeProducts = () => {
  const SlickSlider = Slider.default || Slider;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  // Pick 3 real products to feature as "best sellers"
  const bestSellers = products.filter(p => [10, 14, 25].includes(p.id));

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
           {bestSellers.map((product) => (
  <ProductCard key={product.id} product={product} showAddToCart={false} />
))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;