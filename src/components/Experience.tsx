import React, { useEffect, useRef } from 'react';
import './experience.css';
import { timeline } from '../data/portfolio';

const dotColors: Record<string, string> = {
  violet: '#6366f1',
  purple: '#a855f7',
  blue:   '#0077b6',
};
const orgColors: Record<string, string> = {
  violet: 'var(--cyan)',
  purple: '#a855f7',
  blue:   '#60a5fa',
};

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section" aria-labelledby="exp-heading">
      <div className="container">
        <div className="exp-layout">

          {/* Sticky left header */}
          <div className="exp-header-col reveal">
            <p className="section-label">Track record</p>
            <h2 className="exp-section-title" id="exp-heading">
              Experience &amp; <span className="cyan">Achievements</span>
            </h2>
            <p className="exp-sub">
              Academic projects, self-directed learning, and open-source contributions that have shaped my engineering mindset.
            </p>
          </div>

          {/* Timeline */}
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={item.title} className={`timeline-item reveal reveal-delay-${i + 1}`}>
                <div
                  className="timeline-dot"
                  style={{ background: dotColors[item.color], boxShadow: `0 0 10px ${dotColors[item.color]}` }}
                />
                <div className="timeline-card glass-card">
                  <div className="timeline-header">
                    <div className="timeline-title-group">
                      <p className="timeline-title">{item.title}</p>
                      <p className="timeline-org" style={{ color: orgColors[item.color] }}>{item.org}</p>
                    </div>
                    <span className="timeline-date">{item.date}</span>
                  </div>
                  <ul className="timeline-body">
                    {item.bullets.map(b => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
