import blogs from "../data/blogs.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Blogs.css";

export default function Blogs() {
  const scope = useReveal();

  return (
    <section id="blogs" className="section" ref={scope}>
      <div className="container">
        <div className="section-intro reveal" data-reveal>
          <span className="section-index">Writing</span>
          <h2>
            Notes from
            <br />
            <span>the build process.</span>
          </h2>
        </div>

        <p className="blogs__lead reveal" data-reveal>
          Practical engineering challenges, real-world software solutions and
          lessons learned through hands-on projects - published on Medium.
        </p>

        <div className="blog-grid">
          {blogs.map((post) => (
            <a href={post.href} target="_blank" rel="noreferrer" className="blog-card glass" key={post.title}>
              <i className="bi bi-medium blog-card__icon" />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <span className="link-mark">Read on Medium</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
