import React, { useEffect, useRef } from 'react';
import './skills.css';
import { skillGroups, techTags } from '../data/portfolio';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const barsAnimated = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    const skillObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !barsAnimated.current) {
          barsAnimated.current = true;
          sectionRef.current?.querySelectorAll<HTMLElement>('.skill-fill').forEach(bar => {
            const pct = bar.getAttribute('data-width') || '0';
            setTimeout(() => { bar.style.width = `${pct}%`; }, 200);
          });
        }
      });
    }, { threshold: 0.2 });
    if (sectionRef.current) skillObs.observe(sectionRef.current);
    return () => { obs.disconnect(); skillObs.disconnect(); };
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
            <div key={group.title} className={`skill-panel glass-card reveal reveal-delay-${gi + 1}`}>
              <div className="skill-panel-header">
                <div className="skill-panel-icon">{group.emoji}</div>
                <p className="skill-panel-title">{group.title}</p>
              </div>
              {group.bars?.map(bar => (
                <div key={bar.name} className="skill-item">
                  <div className="skill-meta">
                    <span className="skill-name">{bar.name}</span>
                    <span className="skill-pct">{bar.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-width={bar.pct} />
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className="tech-panel glass-card reveal">
            <div className="skill-panel-header">
              <div className="skill-panel-icon">🛠️</div>
              <p className="skill-panel-title">Tools &amp; Frameworks</p>
            </div>
            <div className="tech-grid">
              {techTags.map(tag => <span key={tag} className="tech-chip">{tag}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
