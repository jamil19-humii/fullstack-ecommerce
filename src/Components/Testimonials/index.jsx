// src/Components/Testimonials/index.jsx

const testimonials = [
  {
    id: 1,
    name: "Amara K.",
    rating: 5,
    text: "I wasn't sure about the fit at first, but the sizing guide was spot on. The sweatpants are the softest thing I own now.",
  },
  {
    id: 2,
    name: "Brian M.",
    rating: 5,
    text: "Ordered on a Tuesday, had it by Friday. Wasn't expecting shipping that fast for standard delivery.",
  },
  {
    id: 3,
    name: "Faith N.",
    rating: 5,
    text: "The jacket photos don't even do it justice — looks way more expensive in person.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonialsSec">
      <div className="container">
        <div className="hd">
          <h2>What our customers say</h2>
          <p>Real feedback from people shopping at Azuro.</p>
        </div>

        <div className="testimonialGrid">
          {testimonials.map((review) => (
            <div className="testimonialCard" key={review.id}>
              <div className="stars">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <p className="quote">{review.text}</p>
              <div className="customer">
                <div className="avatar">{review.name.charAt(0)}</div>
                <h5>{review.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;