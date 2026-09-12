import { useParams, useSearchParams, Link } from "react-router-dom";
import Fuse from "fuse.js";
import { products } from "../../data/products";
import ProductCard from "../../Components/ProductCard";

const Shop = () => {
  const { category, subcategory } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  let displayedProducts = category
    ? products.filter((p) => p.category.toLowerCase() === category.toLowerCase())
    : products;

  if (subcategory) {
    displayedProducts = displayedProducts.filter(
      (p) => p.subcategory && p.subcategory.toLowerCase() === subcategory.toLowerCase()
    );
  }

  if (searchQuery) {
    const fuse = new Fuse(products, {
      keys: ["name", "category", "subcategory"],
      threshold: 0.4, // lower = stricter, higher = looser matching
    });
    displayedProducts = fuse.search(searchQuery).map((result) => result.item);
  }

  const formatTitle = (str) => (str ? str.charAt(0).toUpperCase() + str.slice(1) : "All Products");
  const pageTitle = searchQuery
    ? `Search results for "${searchQuery}"`
    : subcategory
    ? formatTitle(subcategory)
    : formatTitle(category);

  return (
    <section className="homeProductsSec">
      <div className="container">
        <h2 style={{ marginBottom: "30px" }}>{pageTitle}</h2>

        <div className="shopMain">
          <div className="shopGrid">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div style={{ textAlign: "center", padding: "50px", width: "100%" }}>
                <h4>No products found.</h4>
                <Link to="/" style={{ color: "#2bbef9", textDecoration: "none" }}>
                  Back to Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;