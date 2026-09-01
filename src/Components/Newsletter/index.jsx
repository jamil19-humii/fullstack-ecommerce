// src/Components/Newsletter/index.jsx
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="newsletterSec">
      <div className="container">
        <div className="newsletterRow">
          <div className="newsletterInfo">
            <h2>Sign up for email</h2>
            <p>
              Sign up to receive Azuro emails and get first dibs on new
              arrivals, sales, exclusive content, events and more!
            </p>
          </div>

          <div className="newsletterFormWrap">
            {submitted ? (
              <p className="successMsg">Thanks for subscribing!</p>
            ) : (
              <form className="newsletterForm" onSubmit={handleSubmit}>
                <label htmlFor="newsletterEmail">Email address*</label>
                <div className="inputRow">
                  <input
                    id="newsletterEmail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">Submit</button>
                </div>
              </form>
            )}
          </div>
        </div>

        <p className="newsletterDisclaimer">
          By entering your email address, you agree to receive Azuro offers,
          promotions and other commercial messages. You can view our{" "}
          <a href="/privacy-policy">privacy policy here</a> and you may{" "}
          <a href="/unsubscribe">unsubscribe</a> at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;