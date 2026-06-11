# Dumindu Malinga Portfolio

This is my personal portfolio website built with React, TypeScript, and Vite. It presents my background as an Android and software engineering undergraduate, along with my projects, skills, experience, and contact information.

## Overview

The site is designed as a single-page portfolio with a dark cinematic look, theme switching, reveal-on-scroll animations, and a scroll-to-top button. The navigation links jump to each section of the page, and the main content is driven from a central portfolio data file.

## Sections

- Hero banner with my name, tagline, and call-to-action links
- About section with profile details and highlights
- Skills section with technical skill bars and technology tags
- Projects section featuring selected Android, Java, Flutter, and Python work
- Experience section with academic and self-learning milestones
- Education section with my university background and coursework
- Contact section with email, phone, GitHub, and LinkedIn details

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS-based custom styling
- ESLint

## Featured Content

The portfolio content is defined in [src/data/portfolio.ts](src/data/portfolio.ts). It includes:

- Personal profile details and social links
- Skill groups and technology tags
- Project cards and filters
- Experience timeline entries
- Education history

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Project Assets

The app uses a few public assets, including the favicon, SVG icons, and hero image. The CV download link in [src/data/portfolio.ts](src/data/portfolio.ts) points to `/CV_Malinga_Bandara.pdf`, so that file should be present in [public](public) for the download button to work.

## Notes

The site is intended for GitHub Pages deployment, so the root files and public assets are structured for static hosting.
