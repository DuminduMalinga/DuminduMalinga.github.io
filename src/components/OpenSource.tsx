import React, { useEffect, useRef } from 'react';
import './opensource.css';
import { personal, githubStats, openSourceRepos } from '../data/portfolio';

const OpenSource: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="opensource" ref={sectionRef} className="section" aria-labelledby="opensource-heading">
      <div className="container">
        <div className="os-header reveal">
          <p className="section-label">Building in public</p>
          <h2 className="display-md" id="opensource-heading">
            Open <span className="text-cyan">Source</span>
          </h2>
          <p>Public repositories spanning Flutter, Android, and full-stack web — documented and maintained on GitHub.</p>
        </div>

        <div className="os-stats-row reveal reveal-delay-1">
          {githubStats.map(s => (
            <div key={s.label} className="os-stat-card glass-card">
              <div className="os-stat-num">{s.number}</div>
              <div className="os-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="os-repos-grid">
          {openSourceRepos.map((repo, i) => (
            <a
              key={repo.name}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`os-repo-card glass-card reveal reveal-delay-${i + 2}`}
            >
              <div className="os-repo-header">
                <span className="os-repo-name">{repo.name}</span>
                <GithubIcon />
              </div>
              <p className="os-repo-desc">{repo.desc}</p>
              <div className="os-repo-tags">
                {repo.tags.map(t => <span key={t} className="os-repo-tag">{t}</span>)}
              </div>
            </a>
          ))}
        </div>

        <div className="os-cta reveal">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <GithubIcon /> View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

const GithubIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default OpenSource;
