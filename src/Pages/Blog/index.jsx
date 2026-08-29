import React from "react";
import { Link } from "react-router-dom";

// Mock Blog Data
const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Men's Winter Jacket Guide",
    excerpt: "Stay warm and stylish this season. We break down the best jackets for every budget and how to layer them properly.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop",
    date: "Oct 24, 2025",
    author: "Admin"
  },
  {
    id: 2,
    title: "5 Ways to Style Oversized Hoodies",
    excerpt: "Oversized hoodies are here to stay. Learn how to elevate this streetwear staple into a high-fashion outfit.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop",
    date: "Oct 18, 2025",
    author: "Fashion Team"
  },
  {
    id: 3,
    title: "Caring for Your Leather Goods",
    excerpt: "Leather shoes and bags can last a lifetime if treated right. Here is our ultimate maintenance guide.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop",
    date: "Oct 10, 2025",
    author: "Admin"
  }
];

const Blog = () => {
  return (
    <section className="homeProductsSec">
      <div className="container">
        
        {/* Clean Header without the big title, just a subtle one if you want, or remove entirely */}
        <div className="shopGrid" style={{ marginTop: "40px" }}>
          {blogPosts.map((post) => (
            <div key={post.id} className="productItemWrapper">
              <div className="productCard" style={{ cursor: "pointer" }}>
                <Link to={`/blog/${post.id}`}>
                  <div className="imgWrapper" style={{ aspectRatio: "3 / 2" }}>
                    <img src={post.image} alt={post.title} className="primaryImg" />
                  </div>
                </Link>
                <div className="info" style={{ padding: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#888", fontSize: "13px", marginBottom: "10px" }}>
                    <span>{post.date}</span>
                    <span>By {post.author}</span>
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "10px", color: "#111" }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.6" }}>
                    {post.excerpt}
                  </p>
                  <button style={{ background: "none", border: "none", color: "#2bbef9", fontWeight: "600", cursor: "pointer", padding: "10px 0 0 0" }}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;