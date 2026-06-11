import React, { useEffect, useRef, type JSX } from 'react';
import './about.css';
import { aboutCards, aboutDetails } from '../data/portfolio';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const iconColors = [
    { bg: 'rgba(0,184,217,0.12)', color: '#00b8d9' },
    { bg: 'rgba(120,80,250,0.12)', color: '#7858fa' },
    { bg: 'rgba(0,119,182,0.15)', color: '#0077b6' },
  ];

  return (
    <section id="about" ref={sectionRef} className="section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-split">

          {/* Left */}
          <div className="about-text-col">
            <div className="reveal">
              <p className="section-label">Who I am</p>
              <h2 className="about-section-title" id="about-heading">
                Building software that <span className="cyan">solves real problems</span>
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              <p className="about-body-text">
                Hi, I'm Malinga — a Software Engineering undergraduate with a deep
                passion for mobile application development. I love turning complex
                problems into clean, practical solutions.
              </p>
              <p className="about-body-text">
                My focus is Android development using Java and modern Android architecture
                components. I care deeply about UI/UX design principles, ensuring every
                app I build not only works well but feels great to use.
              </p>
            </div>
            <div className="about-details reveal reveal-delay-2">
              {aboutDetails.map(d => (
                <div key={d.label} className="detail-item">
                  <div className="detail-label">{d.label}</div>
                  <div className="detail-value">{d.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="about-cards-col">
            {aboutCards.map((card, i) => (
              <div key={card.title} className={`about-card glass-card reveal reveal-delay-${i + 1}`}>
                <div className="about-card-icon" style={{ background: iconColors[i].bg, color: iconColors[i].color }}>
                  <CardIcon name={card.icon} />
                </div>
                <div>
                  <p className="about-card-title">{card.title}</p>
                  <p className="about-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const icons: Record<string, JSX.Element> = {
  smartphone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
  layers: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
  'pen-tool': <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>,
};
const CardIcon: React.FC<{ name: string }> = ({ name }) => icons[name] ?? null;

export default About;
