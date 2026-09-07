import { Link } from "react-router-dom";
import blogPosts from "../../data/blogPosts";




const Blog = () => {
  return (
    <section className="blogSec">
      <div className="container">
        <div className="hd">
          <h1>From the journal</h1>
          <p>Style guides, care tips, and everything in between.</p>
        </div>

        <div className="blogGrid">
          {blogPosts.map((post) => (
            <article className="blogCard" key={post.id}>
              <Link to={`/blog/${post.id}`} className="blogImgWrapper">
                <img src={post.image} alt={post.title} />
              </Link>

              <div className="blogInfo">
                <div className="blogMeta">
                  <span>{post.date}</span>
                  <span>By {post.author}</span>
                </div>
                <h3>
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="blogReadMore">
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;