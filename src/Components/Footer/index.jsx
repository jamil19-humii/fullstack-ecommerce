// src/Components/Footer/index.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerSec">
      <div className="container">
        <div className="footerTop">
          <div className="footerCol footerBrand">
            <h3>Azuro</h3>
            <p>
              Everyday essentials designed with comfort and quality in mind.
              Built for how you actually live.
            </p>
          </div>

          <div className="footerCol">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/shop?cat=men">Men</Link></li>
              <li><Link to="/shop?cat=women">Women</Link></li>
              <li><Link to="/shop?cat=kids">Kids</Link></li>
              <li><Link to="/shop?cat=bags-luggage">Bags & luggage</Link></li>
            </ul>
          </div>

          <div className="footerCol">
            <h4>Customer service</h4>
            <ul>
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="/shipping">Shipping info</Link></li>
              <li><Link to="/returns">Returns & exchanges</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footerCol">
            <h4>Follow us</h4>
            <div className="footerSocial">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="TikTok">TT</a>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <p>&copy; {new Date().getFullYear()} Azuro. All rights reserved.</p>
          <div className="footerPayments">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;