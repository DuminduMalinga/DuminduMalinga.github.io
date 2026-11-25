import React, { useEffect, useRef, useState } from 'react';
import './projects.css';
import { projects, projectFilters, type Project } from '../data/portfolio';

const normalizeFilter = (value: string) => value.trim().toLowerCase();

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState('all');
  const [preview, setPreview] = useState<Project | null>(null);
  const normalizedActive = normalizeFilter(active);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [active]);

  useEffect(() => {
    if (preview && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [preview]);

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
            <article key={proj.name} className={`project-card${proj.featured ? ' project-card-featured' : ''}`}>
              <div className="project-head">
                <img className="project-icon" src={proj.icon} alt="" width={52} height={52} loading="lazy" />
                <div>
                  <h3 className="project-title">{proj.name}</h3>
                  <p className="project-category">{proj.category}</p>
                </div>
              </div>
              <p className="project-role">{proj.role} · {proj.year}</p>
              {proj.featured && <p className="project-badge">★ Flagship</p>}
              <p className="project-desc">{proj.desc}</p>
              <ul className="project-tags">
                {proj.tags.map(t => <li key={t} className="project-tag">{t}</li>)}
              </ul>
              <div className="project-actions">
                <a href={proj.sourceUrl} target="_blank" rel="noopener noreferrer" className="project-btn" aria-label={`${proj.name} source code`}>
                  <GithubIcon size={14} /> Source Code
                </a>
                {proj.liveUrl && (
                  <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-solid" aria-label={`${proj.name} live preview`}>
                    <EyeIcon /> Live preview
                  </a>
                )}
                {proj.previewImage && (
                  <button type="button" className="project-btn project-btn-solid" onClick={() => setPreview(proj)} aria-label={`${proj.name} preview`}>
                    <EyeIcon /> Preview
                  </button>
                )}
              </div>
              {proj.note && <p className="project-note">{proj.note}</p>}
            </article>
          ))}
        </div>

        <div className="projects-cta reveal">
          <a href="https://github.com/DuminduMalinga?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <GithubIcon /> View All on GitHub
          </a>
        </div>
      </div>

      {/* Closes with the button, Escape, or a click outside the image */}
      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-label={preview ? `${preview.name} preview` : 'Project preview'}
        onClose={() => setPreview(null)}
        onClick={e => { if (e.target === e.currentTarget) e.currentTarget.close(); }}
      >
        {preview && (
          <div className="project-dialog-body">
            <button type="button" className="project-dialog-close" onClick={() => dialogRef.current?.close()} aria-label="Close preview">✕</button>
            <img src={preview.previewImage} alt={`${preview.name} preview`} />
          </div>
        )}
      </dialog>
    </section>
  );
};

const EyeIcon: React.FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const GithubIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);
export default Projects;
