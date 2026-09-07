import { useParams, Link } from "react-router-dom";
import blogPosts from "../../data/blogPosts";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="container" style={{ padding: "60px 0" }}>
        <h1>Post not found</h1>
        <Link to="/blogs">Back to journal</Link>
      </div>
    );
  }

  return (
    <section className="blogDetailSec">
      <div className="container">
        <Link to="/blogs" className="blogBackLink">← Back to journal</Link>

        <div className="blogDetailMeta">
          <span>{post.date}</span>
          <span>By {post.author}</span>
        </div>

        <h1>{post.title}</h1>

        <div className="blogDetailImgWrapper">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="blogDetailContent">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;