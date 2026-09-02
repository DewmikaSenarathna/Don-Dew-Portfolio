import { motion } from "framer-motion";
import { brand } from "../data/site.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Hero.css";

export default function Hero() {
  const scope = useReveal();

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" className="hero" ref={scope}>
      <div className="hero__mesh" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow reveal" data-reveal>
            <span className="hero__eyebrow-dot" /> COMPUTER ENGINEERING · AI · ML · Intelligent Systems
          </p>
          <h1 className="hero__title reveal delay-1" data-reveal>
            I build <em>intelligent</em>
            <br />
            systems with purpose.
          </h1>
          <p className="hero__lede reveal delay-2" data-reveal>
            I'm <strong className="brand-highlight">{brand.fullName}</strong>;<br></br> the creator behind{" "}
            <strong className="brand-highlight">{brand.name}</strong>. I combine engineering discipline,
            artificial intelligence and product thinking to turn complex
            ideas into useful, working systems.
          </p>
          <div className="hero__cta reveal delay-3" data-reveal>
            <a className="btn" href="#projects">
              Explore my work <i className="bi bi-arrow-down-right" />
            </a>
            <a className="btn btn--ghost" href="#about">
              About <span className="brand-highlight">Don Dew</span>
            </a>
          </div>
          <div className="hero__meta reveal delay-3" data-reveal>
            <span>
              <i className="bi bi-geo-alt" /> Sri Lanka
            </span>
            <span>
              <i className="bi bi-mortarboard" /> B.Sc. (Hons) Computer Engineering
            </span>
            <span>
              <i className="bi bi-stars" /> AI &amp; Intelligent Systems
            </span>
          </div>
        </div>

        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hero__visual reveal delay-2"
          data-reveal
        >
          <div className="hero-profile-container">
            <div className="hero-image-circular">
              <img
                src="/assets/DonDew.jpg"
                alt="Dewmika Senarathna"
                className="circular-img"
              />
            </div>
            <div className="logo-badge">
              <img
                src="/assets/logo_new.png"
                alt="Don Dew Logo"
                className="badge-logo"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
