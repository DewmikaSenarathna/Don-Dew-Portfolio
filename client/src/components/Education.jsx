import education from "../data/education.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Education.css";

export default function Education() {
  const scope = useReveal();

  return (
    <section id="education" className="section section--alt" ref={scope}>
      <div className="container">
        <div className="section-intro reveal" data-reveal>
          <span className="section-index">Journey</span>
          <h2>
            A foundation built
            <br />
            <span>through engineering.</span>
          </h2>
        </div>

        <div className="timeline">
          {education
            .slice()
            .reverse()
            .map((item, i) => (
              <article className={`timeline__item reveal delay-${Math.min(i + 1, 3)}`} data-reveal key={item.institution}>
                <div className="timeline__year eyebrow">{item.period}</div>
                <div className="timeline__marker" />
                <div className="timeline__body glass">
                  <span className="timeline__kicker">{item.stage}</span>
                  <h3>{item.institution}</h3>
                  <p className="timeline__program">
                    {item.program} - <em>{item.status}</em>
                  </p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
