import React, { useEffect, useRef, useState } from 'react';
import './opensource.css';
import { personal, githubFallback } from '../data/portfolio';

const GITHUB_API_URL = `https://api.github.com/users/${personal.github.split('/').pop()}`;

// Completed years since the account was created
const yearsSince = (date: string) => {
  const start = new Date(date);
  const now = new Date();
  const years = now.getFullYear() - start.getFullYear();
  const beforeAnniversary = now < new Date(new Date(date).setFullYear(now.getFullYear()));
  return beforeAnniversary ? years - 1 : years;
};

const OpenSource: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [github, setGithub] = useState(githubFallback);

  useEffect(() => {
    const controller = new AbortController();
    fetch(GITHUB_API_URL, { signal: controller.signal })
      .then(res => (res.ok ? res.json() : Promise.reject(new Error(`GitHub ${res.status}`))))
      .then(user => {
        if (typeof user.public_repos !== 'number' || typeof user.followers !== 'number') return;
        setGithub({
          publicRepos: user.public_repos,
          followers: user.followers,
          createdAt: user.created_at || githubFallback.createdAt,
        });
      })
      .catch(() => { /* offline or rate-limited: keep the fallback values */ });
    return () => controller.abort();
  }, []);

  const stats = [
    { number: String(github.publicRepos), label: 'Public Repos' },
    { number: String(github.followers), label: 'Followers' },
    { number: `${yearsSince(github.createdAt)}+`, label: 'Years on GitHub' },
  ];

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
          {stats.map(s => (
            <div key={s.label} className="os-stat-card glass-card">
              <div className="os-stat-num">{s.number}</div>
              <div className="os-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
