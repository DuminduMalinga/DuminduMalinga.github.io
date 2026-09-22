

export const personal = {
  name: "Dumindu Malinga",
  initials: "DM",
  logo: "DM.dev",
  tagline: "Available for Internships & Opportunities",
  bio: "Third-year undergraduate and intern mobile app developer with hands-on experience building and shipping Flutter/Dart apps backed by Firebase authentication and real-time data. I turn ideas into clean, functional, cross-platform experiences.",
  location: "Sri Lanka 🇱🇰",
  degree: "BSc. Information Technology",
  focus: "Flutter & Mobile App Dev",
  github: "https://github.com/DuminduMalinga",
  githubHandle: "@DuminduMalinga",
  linkedin: "https://www.linkedin.com/in/dumindu-malinga-357b4240a/",
  linkedinHandle: "dumindu-malinga",
  email: "malingabandara24256@gmail.com",
  phone: "+94 77 328 6562",
  cvUrl: "/Dumindu_Malinga_CV.pdf",
};

export const roles = [
  "Flutter Developer",
  "Mobile App Developer",
  "Software Engineer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

export const stats = [
  { number: "8+", label: "Projects Built" },
  { number: "12+", label: "Technologies" },
  { number: "SE", label: "Undergraduate" },
];

export const aboutCards = [
  {
    icon: "smartphone",
    color: "violet",
    title: "Flutter & Mobile Development",
    desc: "Building and shipping cross-platform Flutter/Dart apps with Firebase-backed authentication and real-time data, plus native Android (Java) experience.",
  },
  {
    icon: "layers",
    color: "purple",
    title: "Software Engineering",
    desc: "Applying OOP principles, design patterns, and software engineering best practices to build maintainable, scalable systems.",
  },
  {
    icon: "pen-tool",
    color: "blue",
    title: "UI/UX Design",
    desc: "Creating intuitive interfaces that balance visual appeal with usability, ensuring every interaction feels purposeful and smooth.",
  },
];

export const aboutDetails = [
  { label: "Location", value: personal.location },
  { label: "Degree", value: personal.degree },
  { label: "Focus", value: personal.focus },
  { label: "GitHub", value: personal.githubHandle },
];

export const aboutBadges = [
  "🎓 3rd-Year IT Undergraduate",
  "📱 8+ Mobile & Web Projects Shipped",
  "🟢 Open to Internships",
  "💼 Immediate Availability",
  "🌍 Sri Lanka · Remote-friendly",
];

// ---- SKILLS ----

export interface SkillBar {
  name: string;
  pct: number;
}

export interface SkillGroup {
  title: string;
  emoji: string;
  bars?: SkillBar[];
  tags?: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Flutter & Mobile",
    emoji: "📱",
    bars: [
      { name: "Flutter", pct: 88 },
      { name: "Dart", pct: 85 },
      { name: "Firebase Auth & Firestore", pct: 82 },
      { name: "Android (Java)", pct: 75 },
      { name: "State Management", pct: 78 },
      { name: "Responsive & Adaptive UI", pct: 80 },
    ],
  },
  {
    title: "Languages & Web",
    emoji: "💻",
    bars: [
      { name: "React / TypeScript", pct: 70 },
      { name: "SQL & SQLite", pct: 78 },
      { name: "HTML & CSS", pct: 75 },
      { name: "Python", pct: 72 },
      { name: "Git & GitHub", pct: 82 },
      { name: "Software Eng. Principles", pct: 80 },
    ],
  },
];

export const techTags = [
  "🐦 Flutter",
  "🎯 Dart",
  "🔥 Firebase",
  "☁️ Cloud Firestore",
  "🤖 Android Studio",
  "☕ Java",
  "🗃️ Room DB",
  "📦 SQLite",
  "🐍 Python",
  "🌐 HTML5",
  "🎨 CSS3",
  "⚡ JavaScript",
  "📘 TypeScript",
  "⚛️ React",
  "⚡ Vite",
  "🚀 Express.js",
  "🗄️ Supabase",
  "🐙 Git & GitHub",
  "📱 Material Design",
  "📊 ML / YOLOv8",
];

// ---- PROJECTS ----

export interface Project {
  emoji: string;
  image: string;
  gradient: string;
  tags: string[];
  filterTags: string[];
  title: string;
  desc: string;
  links: { label: string; icon: string; href: string }[];
}

export const projects: Project[] = [
  {
    emoji: "💰",
    image: "/projects/wealthwise.svg",
    gradient: "linear-gradient(135deg, #052e16 0%, #14532d 100%)",
    tags: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
    filterTags: ["flutter", "firebase"],
    title: "WealthWise — Personal Finance Tracker",
    desc: "A personal finance management app for tracking income, expenses, and budgets in real time, with Firebase Authentication and Firestore integration behind a clean, responsive Flutter UI.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/WealthWise" },
    ],
  },
  {
    emoji: "🛋️",
    image: "/projects/livispace.svg",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)",
    tags: ["Flutter", "Dart", "UI/UX"],
    filterTags: ["flutter"],
    title: "LiviSpace — Interior Design App",
    desc: "A 9-screen AI-assisted interior design prototype covering auth, floor-plan upload, mock AI processing, room selection, and layout recommendations, structured into modular, dark-themed screen components.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Interior_Design_App" },
    ],
  },
  {
    emoji: "🏠",
    image: "/projects/interiorai.svg",
    gradient: "linear-gradient(135deg, #0c1a2e 0%, #1e3a5f 100%)",
    tags: ["React", "TypeScript", "Express", "Supabase"],
    filterTags: ["web"],
    title: "InteriorAI — Interior Design Platform",
    desc: "A full-stack floor-plan-to-3D design platform: a 12-page React/TypeScript frontend and an Express REST API secured with Helmet, CORS, and rate limiting, with Supabase auth, storage, and admin management.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Interior-Design-Web" },
    ],
  },
  {
    emoji: "🎶",
    image: "/projects/video-player.svg",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
    tags: ["Flutter", "Dart", "Media Playback"],
    filterTags: ["flutter"],
    title: "Video Player",
    desc: "A local video player app built with Flutter, featuring folder-based playlist auto-loading, seek/fast-forward/rewind controls, mute toggle, and automatic advance to the next video on playback completion.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Video_Player" },
    ],
  },
  {
    emoji: "🎵",
    image: "/projects/audio-player.svg",
    gradient: "linear-gradient(135deg, #042f2e 0%, #0f766e 100%)",
    tags: ["Flutter", "Dart", "Audio", "Cross-platform"],
    filterTags: ["flutter"],
    title: "Audio Player",
    desc: "A cross-platform Flutter audio player for local music. Includes playback and seek controls, playlist and favorites management, audio recording, real-time waveform visualization, and live pitch/speed sound-effect presets.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Audio_player" },
    ],
  },
  {
    emoji: "📝",
    image: "/projects/personal-reflection.svg",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    tags: ["Android", "Java", "Room DB", "Firebase"],
    filterTags: ["android", "firebase"],
    title: "Personal Reflection App",
    desc: "A native Android journaling app with Firebase-backed cloud data sync. Led a 3-person team building GoalReflect, a goal-tracking and reflection app with Room (SQLite) persistence, Google Sign-In, and a 5-channel reminder system.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Personal_Refelection" },
    ],
  },
  {
    emoji: "🚗",
    image: "/projects/vehicle-classification.svg",
    gradient: "linear-gradient(135deg, #1a0a2e 0%, #3b1170 100%)",
    tags: ["Python", "YOLOv8", "Machine Learning"],
    filterTags: ["python"],
    title: "Vehicle Classification Model",
    desc: "Fine-tuned a YOLOv8 model on a custom-labeled dataset to detect and classify four vehicle types: car, bus, truck, and motorcycle.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Vehicle_Classification" },
    ],
  },
  {
    emoji: "🌱",
    image: "/projects/plant-growth.svg",
    gradient: "linear-gradient(135deg, #14210f 0%, #365314 100%)",
    tags: ["Python", "OpenCV", "Data Science"],
    filterTags: ["python"],
    title: "Plant Growth Analyzer",
    desc: "A data analysis project using OpenCV-based image processing (HSV segmentation and contour detection) to measure plant height, leaf count, and health from daily photo captures.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Plant_Growth" },
    ],
  },
];

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Flutter", value: "flutter" },
  { label: "Android", value: "android" },
  { label: "Web", value: "web" },
  { label: "Python", value: "python" },
  { label: "Firebase", value: "firebase" },
];

// ---- OPEN SOURCE ----

export const githubStats = [
  { number: "13", label: "Public Repos" },
  { number: "5", label: "Followers" },
  { number: "2+", label: "Years on GitHub" },
];

export interface OpenSourceRepo {
  name: string;
  desc: string;
  tags: string[];
  href: string;
}

export const openSourceRepos: OpenSourceRepo[] = [
  {
    name: "SkillBridge",
    desc: "A university pilot platform (Rajarata University, Faculty of Applied Sciences) connecting student coursework with real industry requirements and project experience. React + TypeScript, Vite, Tailwind CSS v4, with separate student/company/institute dashboards.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    href: "https://github.com/DuminduMalinga/Skill_Bridge",
  },
  {
    name: "Virtusa Computers — E-Commerce Web",
    desc: "A 30-product tech retail storefront built with zero frameworks — vanilla HTML/CSS/JS. Live search, category filters, cart with localStorage persistence, and a full multi-step checkout flow.",
    tags: ["HTML5", "CSS3", "Vanilla JS"],
    href: "https://github.com/DuminduMalinga/E-commerce_web",
  },
];

// ---- EXPERIENCE ----

export interface TimelineItem {
  title: string;
  org: string;
  date: string;
  color: string;
  bullets: string[];
}

export const timeline: TimelineItem[] = [
  {
    title: "Flutter Mobile App Development",
    org: "Personal & Academic Projects",
    date: "2023 – Present",
    color: "violet",
    bullets: [
      "Built WealthWise, a personal finance tracker with Firebase Authentication and real-time Cloud Firestore sync.",
      "Developed LiviSpace, a 9-screen AI-assisted interior design prototype with a modular, dark-themed UI.",
      "Shipped a cross-platform Video Player and Audio Player in Flutter, including waveform visualization and playback FX.",
      "Applied Agile methodology and version control (Git) across all projects.",
    ],
  },
  {
    title: "Full-Stack & Android Development",
    org: "Independent Learning",
    date: "2022 – Present",
    color: "purple",
    bullets: [
      "Built InteriorAI, a full-stack React/TypeScript + Express platform with a Supabase-backed REST API.",
      "Studied Firebase Authentication, Firestore, and Realtime Database integration across mobile and web apps.",
      "Practised UI/UX design principles using Material Design 3 guidelines.",
      "Built native Android apps with Java, Room, and SQLite for local persistence.",
    ],
  },
  {
    title: "Open Source & GitHub Contributions",
    org: `GitHub — ${personal.githubHandle}`,
    date: "2022 – Present",
    color: "blue",
    bullets: [
      "Maintained public repositories showcasing Flutter, Android, React, and Python projects.",
      "Documented codebases with clear README files, contributing to the developer community.",
      "Practised clean code standards and meaningful commit history.",
    ],
  },
];

// ---- EDUCATION ----

export interface EducationItem {
  icon: string;
  degree: string;
  institution: string;
  year: string;
  courses: string[];
}

export const education: EducationItem[] = [
  {
    icon: "🎓",
    degree: "BSc. Information Technology",
    institution: "Rajarata University — Sri Lanka",
    year: "2022 – Present (Undergraduate)",
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management",
      "Mobile Application Development",
      "Software Engineering Principles",
      "Web Development",
      "Machine Learning",
      "Operating Systems",
      "Computer Networks",
      "Software Project Management",
    ],
  },
  {
    icon: "🎓",
    degree: "Bachelor of Information Technology",
    institution: "University of Colombo School of Computing - Sri Lanka",
    year: "2024 - Present (Undergraduate)",
    courses: [
      "Computer System",
      "Object-Oriented Programming",
      "Database Systems",
      "Web Application Development",
      "Software Engineering",
      "Agile Software Development",
      "Data Structures & Algorithms",
      "Enterprise Application Development",
      "User Experience Design",
      "Computer Networks",
    ],
  },
  {
    icon: "📚",
    degree: "Advanced Level — Technology Stream",
    institution: "St/Thomas' College — Sri Lanka",
    year: "Completed 2022",
    courses: ["Information Technology", "Science for Technology", "Engineering Technology"],
  },
];
