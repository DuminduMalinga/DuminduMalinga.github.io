import React, { useEffect, useRef } from 'react';
import './skills.css';
import { skillGroups, techLogos, monoLogos } from '../data/portfolio';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section" aria-labelledby="skills-heading">
      <div className="container">
        <div className="skills-header reveal">
          <p className="section-label">What I work with</p>
          <h2 className="display-md" id="skills-heading">
            Skills &amp; <span className="text-cyan">Technologies</span>
          </h2>
          <p>A collection of tools and technologies I've worked with across mobile development, backend systems, and web.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <div key={group.title} className={`skill-panel glass-card reveal reveal-delay-${(gi % 2) + 1}`}>
              <div className="skill-panel-header">
                <div className="skill-panel-icon" aria-hidden="true">{group.emoji}</div>
                <h3 className="skill-panel-title">{group.title}</h3>
              </div>
              <ul className="tech-grid">
                {group.tags.map(tag => {
                  const logo = techLogos[tag];
                  return (
                    <li key={tag} className="tech-chip">
                      {logo && (
                        <img
                          className={`tech-logo${monoLogos.includes(logo) ? ' tech-logo-mono' : ''}`}
                          src={`/tech/${logo}.svg`}
                          alt=""
                          width={18}
                          height={18}
                          loading="lazy"
                        />
                      )}
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
