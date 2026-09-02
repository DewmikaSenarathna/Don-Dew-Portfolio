import skills from "../data/skills.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Skills.css";

const accents = ["accent-brand", "accent-violet", "accent-cyan"];

export default function Skills() {
  const scope = useReveal();

  return (
    <section id="skills" className="section" ref={scope}>
      <div className="container">
        <div className="section-intro reveal" data-reveal>
          <span className="section-index">Capabilities</span>
          <h2>
            Technical range,
            <br />
            <span>engineering mindset.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              className={`skill-card glass ${accents[i % accents.length]} reveal delay-${(i % 3) + 1}`}
              data-reveal
              key={skill.title}
            >
              <span className="skill-card__index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="skill-card__title">{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
