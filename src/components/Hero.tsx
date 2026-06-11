import React, { useEffect, useRef, useState } from 'react';
import './hero.css';
import { personal, roles, stats } from '../data/portfolio';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIdx, setRoleIdx]     = useState(0);
  const [charIdx, setCharIdx]     = useState(0);
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const delay   = deleting ? 50 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        setTypedText(current.substring(0, charIdx + 1));
        if (charIdx + 1 === current.length) setTimeout(() => setDeleting(true), 1800);
        else setCharIdx(c => c + 1);
      } else {
        setTypedText(current.substring(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setRoleIdx(r => (r + 1) % roles.length);
          setCharIdx(0);
        } else setCharIdx(c => c - 1);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, roleIdx]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" aria-label="Introduction">
      {/* Background atmosphere */}
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />
      <div className="hero-glow-3" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true" />

      <div className="container">
        <div className="hero-body">

          {/* ── Left column ── */}
          <div className="hero-left">
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-line" />
              <span className="hero-eyebrow-text">{personal.tagline}</span>
            </div>

            <h1 className="hero-name">
              <span className="hero-name-first">{personal.name.split(' ')[0]}</span>
              <span className="hero-name-last">{personal.name.split(' ')[1]}</span>
            </h1>

            <div className="hero-role-line">
              <span className="role-separator">//</span>
              <span className="typed-text">{typedText}</span>
              <span className="cursor" aria-hidden="true" />
            </div>

            <p className="hero-desc">{personal.bio}</p>

            <div className="hero-actions">
              <a href={personal.cvUrl} className="btn btn-primary" download>
                <DownloadIcon /> Download CV
              </a>
              <a href="#contact" className="btn btn-outline" onClick={handleContactClick}>
                <span>Let's Talk</span>
                <ArrowIcon />
              </a>
            </div>

            <div className="hero-stats-row">
              {stats.map(s => (
                <div key={s.label} className="hero-stat">
                  <span className="hero-stat-num">
                    {s.number.replace('+', '')}<span className="cyan">{s.number.includes('+') ? '+' : ''}</span>
                  </span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: Visual ── */}
          <div className="hero-right">
            {/* Crosshairs */}
            <div className="hero-cross-1 crosshair" aria-hidden="true" />
            <div className="hero-cross-2 crosshair" aria-hidden="true" />

            <div className="hero-visual-wrap">
              <div className="hero-orb" aria-hidden="true" />

              {/* Code card */}
              <div className="hero-code-card">
                <div className="code-card-header">
                  <div className="code-dot code-dot-r" />
                  <div className="code-dot code-dot-y" />
                  <div className="code-dot code-dot-g" />
                  <span className="code-card-title">MainActivity.java</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">public class </span>
                  <span className="code-class">MainActivity</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-keyword">extends </span>
                  <span className="code-cyan">AppCompatActivity</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-comment">// Firebase + Room DB</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-keyword">@Override </span>
                  <span className="code-string">onCreate()</span>
                </div>
                <div className="code-line code-indent" style={{ paddingLeft: '40px' }}>
                  <span className="code-cyan">syncWithFirebase</span>
                  <span className="code-string">()</span>
                </div>
                <div className="code-bar" />
              </div>

              {/* Floating badges */}
              <div className="hero-badge hero-badge-1">
                <div className="pill-dot" />
                <div>
                  <div className="badge-num">4+</div>
                  <div className="badge-label">Projects Built</div>
                </div>
              </div>

              <div className="hero-badge hero-badge-2">
                <div className="pill-dot" />
                <div>
                  <div className="badge-num">10+</div>
                  <div className="badge-label">Technologies</div>
                </div>
              </div>

              <div className="hero-badge hero-badge-3">
                <div className="pill-dot" />
                <span>Open to hire</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="scroll-line" />
        <span className="scroll-label">Scroll</span>
      </div>
    </section>
  );
};

const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default Hero;
