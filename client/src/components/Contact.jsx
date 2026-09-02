import { socials } from "../data/site.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Contact.css";

const socialIcons = {
  Medium: "bi-medium",
  LinkedIn: "bi-linkedin",
  GitHub: "bi-github",
};

export default function Contact() {
  const scope = useReveal();

  return (
    <section id="contact" className="section section--alt" ref={scope}>
      <div className="container">
        <div className="contact-panel glass reveal" data-reveal>
          <div className="contact-panel__intro">
            <span className="section-index">Contact</span>
            <h2>
              Let's connect and
              <br />
              <span>build something great</span>
            </h2>
            <p>Feel free to reach out through any of these channels:</p>

            <div className="contact-panel__socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <i className={`bi ${socialIcons[s.label] || "bi-link-45deg"}`} />
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
