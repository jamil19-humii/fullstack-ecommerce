import React from 'react';
import{ LiaShippingFastSolid,LiaBoxSolid,LiaHeadsetSolid,LiaCreditCardSolid} from  "react-icons/lia";

const Services = () => {
  return (
    <section className="servicesSection">
      <div className="container">
        <div className="row">
          
          {/* Item 1 */}
          <div className="col-md-3 serviceBox">
            <div className="icon">
              <LiaShippingFastSolid size={40} />
            </div>
            <div className="info">
              <h4>Free Shipping</h4>
              <p>Free Shipping for orders over £130.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="col-md-3 serviceBox">
            <div className="icon">
              <LiaBoxSolid size={40} />
            </div>
            <div className="info">
              <h4>Money Guarantee</h4>
              <p>Within 30 days for an exchange.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="col-md-3 serviceBox">
            <div className="icon">
              <LiaHeadsetSolid size={40} />
            </div>
            <div className="info">
              <h4>Online Support</h4>
              <p>Within 30 days for an exchange.</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="col-md-3 serviceBox">
            <div className="icon">
              <LiaCreditCardSolid size={40} />
            </div>
            <div className="info">
              <h4>Flexible Payment</h4>
              <p>Pay with Multiple Credit Cards.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;