import { brand } from "../data/site.js";
import { useReveal } from "../hooks/useReveal.js";
import "./About.css";

export default function About() {
  const scope = useReveal();

  return (
    <section id="about" className="section about" ref={scope}>
      <div className="container">
        <div className="section-intro reveal" data-reveal>
          <span className="section-index">About</span>
          <h2>
            Technology is most valuable
            <br />
            <span>when it serves a purpose.</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__quote-col reveal" data-reveal>
            <p className="about__lead">
              <strong className="brand-highlight">{brand.name}</strong> is my personal brand - the foundation of everything I do, and it is powered by my slogan:
            </p>
            <div className="about__quote glass">
              <span className="about__quote-mark">“</span>
              <p>{brand.slogan}</p><br></br>
              <span className="about__quote-mark">”</span>
            </div>
          </div>

          <div className="about__body-col reveal delay-1" data-reveal>
            <div className="about__copy">
              <p>
                I am a Computer Engineering undergraduate at the University of
                Jaffna and a creator passionate about building solutions that
                truly make a difference.
                 My journey spans <strong className="brand-highlight">Machine Learning, Deep Learning, 
                 Data-Driven Modeling and Full Stack Development </strong>
                 with a consistent focus on solving real-world challenges.
              </p>
              <p>
                I am deeply passionate about <strong className="brand-highlight"> Generative AI, 
                Agentic AI with Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) </strong> 
                where I explore building intelligent systems that can reason, adapt and interact with contextual awareness. 
                Through these technologies, I aim to transform my ideas into practical solutions 
                that align with my vision and personal brand.
              </p>
              <p>
                Currently, my research explores the application of Machine Learning on 
                genomic data to distinguish between Eating Disorders and Obsessive-Compulsive Disorder (OCD), 
                a space where computational intelligence meets human complexity and meaningful impact.
              </p>
              <p>
                I am driven by curiosity, discipline and the pursuit of purposeful innovation. 
                I use my knowledge, skills and ideas to create projects that stay true to my brand and bring my slogan into action, 
                building systems that not only advance technology but also make a lasting difference.
              </p>
              <p>
                My path is shaped by a commitment to creating intelligent systems that learn, 
                adapt and contribute to shaping a better future.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
