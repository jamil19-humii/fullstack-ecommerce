// src/Pages/Shop/index.jsx
import React from "react";
import { products } from "../../data/products";
import ProductCard from "../../Components/ProductCard";
import { useCart } from "../../CartContext";

const Shop = () => {
  const { cartCount } = useCart();

  return (
    <section className="homeProductsSec">
      <div className="container">
        <div className="hd text-center">
          <h2>Best Sellers</h2>
          <p>You currently have {cartCount} item(s) in your cart.</p>
        </div>

        {/* Using the CSS class instead of inline styles */}
        <div className="shopGrid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Shop;