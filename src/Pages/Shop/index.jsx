import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "../../Components/ProductCard";

const Shop = () => {
const { category, subcategory } = useParams(); 
  
// 1. Filter by Category
let displayedProducts = category 
  ? products.filter(p => p.category.toLowerCase() === category.toLowerCase())
  : products;

// 2. Filter by Subcategory
if (subcategory) {
  displayedProducts = displayedProducts.filter(p => 
    p.subcategory && p.subcategory.toLowerCase() === subcategory.toLowerCase()
  );
}

  // Clean Title
  const formatTitle = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1) : "All Products";
  const pageTitle = subcategory ? formatTitle(subcategory) : formatTitle(category);

  return (
    <section className="homeProductsSec">
      <div className="container">
        
        <div className="hd text-center" style={{ marginBottom: "40px" }}>
          <h2>{pageTitle}</h2>
        </div>

        <div className="shopMain">
          <div className="shopGrid">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div style={{ textAlign: "center", padding: "50px", width: "100%" }}>
                <h4>No products found.</h4>
                <Link to="/" style={{ color: "#2bbef9", textDecoration: "none" }}>Back to Home</Link>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Shop;