// src/Components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";
import Button from '@mui/material/Button';
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="productItemWrapper">
      <div className="productCard">
        <Link to={`/product/${product.id}`}>
          <div className="imgWrapper">
            <img src={product.image} alt={product.name} className="primaryImg" />
            <img src={product.hoverImage} alt={product.name} className="secondaryImg" />
          </div>
        </Link>
        
        <div className="badgeList">
          {product.oldPrice && <span className="discountBadge">Sale</span>}
        </div>

        <div className="info">
          <div className="rating">
            <FaStar className="starIcon" /> 
            <span>{product.rating}</span>
          </div>
          <h4 className="title">
            <Link to={`/product/${product.id}`}>
              {product.name}
            </Link>
          </h4>
          <div className="priceBox">
            {product.oldPrice && <span className="oldPrice">${product.oldPrice.toFixed(2)}</span>}
            <span className="newPrice">${product.price.toFixed(2)}</span>
          </div>
          
          <Button 
            onClick={() => addToCart(product)} 
            fullWidth 
            className="addToCartBtn"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;