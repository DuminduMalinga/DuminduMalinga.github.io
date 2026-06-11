import React, { useEffect, useRef, useState } from 'react';
import './contact.css';
import { personal } from '../data/portfolio';

type Fb = { type: 'none' | 'success' | 'error'; msg: string };

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm]   = useState({ name: '', email: '', subject: '', message: '' });
  const [fb, setFb]       = useState<Fb>({ type: 'none', msg: '' });

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setFb({ type: 'error', msg: 'Please fill in all required fields.' });
      return;
    }
    setFb({ type: 'success', msg: `Thanks ${form.name}! I'll get back to you soon.` });
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const links = [
    { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: <MailIcon />, bg: 'rgba(0,184,217,0.1)', color: '#00b8d9' },
    { label: 'LinkedIn', value: 'dumindu-malinga', href: personal.linkedin, icon: <LinkedInIcon />, bg: 'rgba(10,102,194,0.1)', color: '#0a66c2' },
    { label: 'GitHub', value: 'github.com/DuminduMalinga', href: personal.github, icon: <GithubIcon />, bg: 'rgba(255,255,255,0.06)', color: '#f0f8ff' },
    { label: 'Phone', value: personal.phone, href: `tel:${personal.phone}`, icon: <PhoneIcon />, bg: 'rgba(0,200,100,0.08)', color: '#00c864' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="section" aria-labelledby="contact-heading">
      <div className="container">

        {/* Section headline */}
        <div className="contact-headline reveal">
          <h2 id="contact-heading">
            Let's <span className="cyan">Work Together</span>
          </h2>
          <p className="contact-sub">
            I'm actively looking for internship opportunities. Whether you have a project or just want to connect — my inbox is always open.
          </p>
          <div className="contact-pills">
            <div className="pill"><div className="pill-dot" />Open to opportunities</div>
            <div className="pill"><div className="pill-dot" />Available now</div>
          </div>
        </div>

        <div className="contact-grid">
          {/* Left: links */}
          <div className="contact-links-col reveal">
            <p className="contact-links-title">Get in touch</p>
            <div className="contact-links">
              {links.map(l => (
                <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-link-item">
                  <div className="contact-link-icon" style={{ background: l.bg, color: l.color }}>{l.icon}</div>
                  <div className="contact-link-info">
                    <div className="contact-link-label">{l.label}</div>
                    <div className="contact-link-value">{l.value}</div>
                  </div>
                  <div className="contact-link-arrow"><ArrowIcon /></div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal reveal-delay-1">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="form-name">Name <span className="req">*</span></label>
                  <input className="form-input" type="text" id="form-name" placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="form-email">Email <span className="req">*</span></label>
                  <input className="form-input" type="email" id="form-email" placeholder="you@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="form-subject">Subject</label>
                <input className="form-input" type="text" id="form-subject" placeholder="Internship / Collaboration" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="form-message">Message <span className="req">*</span></label>
                <textarea className="form-textarea" id="form-message" placeholder="Tell me about your opportunity..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
              </div>
              {fb.type !== 'none' && <div className={`form-feedback ${fb.type}`}>{fb.msg}</div>}
              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                <SendIcon /> Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

const MailIcon     = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const LinkedInIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const GithubIcon   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;
const PhoneIcon    = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 5.37 5.37l1.07-.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const SendIcon     = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
const ArrowIcon    = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;

export default Contact;
