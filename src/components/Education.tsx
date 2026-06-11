import React, { useEffect, useRef } from 'react';
import './education.css';
import { education } from '../data/portfolio';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="section" aria-labelledby="edu-heading">
      <div className="container">
        <div className="edu-header reveal">
          <p className="section-label">Background</p>
          <h2 className="display-md" id="edu-heading">
            <span className="text-cyan">Education</span> &amp; Training
          </h2>
        </div>

        <div className="edu-grid">
          {education.map((edu, i) => (
            <div key={edu.degree} className={`edu-card glass-card reveal reveal-delay-${i + 1}`}>
              <div className="edu-icon">{edu.icon}</div>
              <div>
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-institution">{edu.institution}</p>
                <p className="edu-year">{edu.year}</p>
                <div className="edu-courses">
                  {edu.courses.map(c => <span key={c} className="course-tag">{c}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
