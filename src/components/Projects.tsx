  import React, { useEffect, useRef, useState } from 'react';
import './projects.css';
import { projects, projectFilters } from '../data/portfolio';

const normalizeFilter = (value: string) => value.trim().toLowerCase();

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState('all');
  const normalizedActive = normalizeFilter(active);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [active]);

  const filtered = projects.filter((project) => {
    if (normalizedActive === 'all') return true;
    return project.filterTags.some((tag) => normalizeFilter(tag) === normalizedActive);
  });

  return (
    <section id="projects" ref={sectionRef} className="section" aria-labelledby="projects-heading">
      <div className="container">
        <div className="projects-header">
          <div className="projects-header-left reveal">
            <p className="section-label">Things I've built</p>
            <h2 className="display-md" id="projects-heading">
              Featured <span className="text-cyan">Projects</span>
            </h2>
          </div>
          <div className="projects-header-right reveal reveal-delay-1">
            <div className="projects-filters">
              {projectFilters.map(f => (
                <button
                  key={f.value}
                  type="button"
                  className={`filter-btn ${normalizedActive === normalizeFilter(f.value) ? 'active' : ''}`}
                  onClick={() => setActive(f.value)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="projects-grid">
          {filtered.map((proj) => (
            <article key={proj.title} className="project-card glass-card">
              <div className="project-thumb">
                <div className="project-thumb-bg" style={{ background: proj.gradient }}>{proj.emoji}</div>
                <div className="project-overlay">
                  {proj.links.map(link => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="project-overlay-btn">
                      <GithubIcon size={14} /> {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {proj.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                <div style={{ display: 'flex', gap: '16px' }}>
                  {proj.links.map(link => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="project-link">
                      <GithubIcon size={13} /> {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta reveal">
          <a href="https://github.com/DuminduMalinga?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <GithubIcon /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

const GithubIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

export default Projects;
