import certifications from "../data/certifications.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Certifications.css";

export default function Certifications() {
  const scope = useReveal();

  return (
    <section id="certifications" className="section" ref={scope}>
      <div className="container">
        <div className="section-intro reveal" data-reveal>
          <span className="section-index">Credentials</span>
          <h2>
            Learning is part of
            <br />
            <span>the craft.</span>
          </h2>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <article className="cert-card glass" key={cert.title}>
              <div className="cert-card__figure framed">
                <img src={cert.image} alt={cert.title} loading="lazy" />
              </div>
              <div className="cert-card__body">
                <h3>{cert.title}</h3>
                <p className="cert-card__issuer eyebrow">{cert.issuer}</p>
                <p className="cert-card__desc">{cert.description}</p>
                <a className="link-mark" href={cert.href} target="_blank" rel="noreferrer">
                  View credential
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
