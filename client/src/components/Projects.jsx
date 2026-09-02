import { useMemo, useState } from "react";
import projects from "../data/projects.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Projects.css";

const filters = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI" },
  { key: "software", label: "Software" },
  { key: "embedded", label: "Embedded" },
];

const categoryLabel = { ai: "AI", software: "Software", embedded: "Embedded" };

export default function Projects() {
  const scope = useReveal();
  const [active, setActive] = useState("all");

  const visible = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="section section--alt" ref={scope}>
      <div className="container">
        <div className="section-intro section-intro--split reveal" data-reveal>
          <div>
            <span className="section-index">Selected Work</span>
            <h2>
              Ideas made
              <br />
              <span>tangible.</span>
            </h2>
          </div>
          <div className="project-filter" role="group" aria-label="Filter projects by category">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                className={`filter-btn ${active === f.key ? "filter-btn--active" : ""}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid">
          {visible.map((project) => (
            <article className={`project-card glass cat-${project.category}`} key={project.title}>
              <div className="project-card__figure framed">
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className="project-card__tag">{categoryLabel[project.category]}</span>
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p className="project-card__subtitle">{project.subtitle}</p>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__links">
                  <a className="link-mark" href={project.readMore} target="_blank" rel="noreferrer">
                    Read more
                  </a>
                  <a className="link-mark" href={project.repo} target="_blank" rel="noreferrer">
                    Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
