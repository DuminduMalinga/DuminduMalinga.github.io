

export const personal = {
  name: "Dumindu Malinga",
  initials: "DM",
  logo: "DM",
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

// Your own public GitHub repos, not counting forks, the profile README repo or
// this portfolio. The hero loads the live count; this is the backup value
// (last checked 2026-11-26).
export const projectCountFallback = 16;

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
  `📱 ${projectCountFallback}+ Projects on GitHub`,
  "🟢 Open to Internships",
  "💼 Immediate Availability",
  "🌍 Sri Lanka · Remote-friendly",
];

// ---- SKILLS ----

export interface SkillGroup {
  title: string;
  emoji: string;
  tags: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile App Development",
    emoji: "📱",
    tags: ["Flutter", "Dart", "Android (Java)", "Provider", "Riverpod", "go_router", "Responsive & Adaptive UI", "Material 3"],
  },
  {
    title: "Programming Languages",
    emoji: "💻",
    tags: ["Dart", "Java", "JavaScript", "TypeScript", "Python", "SQL", "C/C++"],
  },
  {
    title: "Web Development",
    emoji: "🌐",
    tags: ["HTML5", "CSS3", "React", "TypeScript", "Vite", "Tailwind CSS", "three.js"],
  },
  {
    title: "Databases",
    emoji: "🗃️",
    tags: ["SQLite (sqflite)", "Room", "PostgreSQL", "MySQL", "SharedPreferences", "Firebase Firestore"],
  },
  {
    title: "Backend & Cloud",
    emoji: "☁️",
    tags: ["Supabase (Auth, Postgres, Storage)", "REST APIs", "FastAPI (basics)", "Firebase Authentication"],
  },
  {
    title: "Tools & Practices",
    emoji: "🛠️",
    tags: ["Git", "GitHub", "VS Code", "Android Studio", "Figma", "Agile/Scrum (basics)"],
  },
];

// Official logos in public/tech/ (Devicon; Material Design from Simple Icons).
// Tags without an entry have no logo in those sets or aren't a single product.
export const techLogos: Record<string, string> = {
  "Flutter": "flutter",
  "Dart": "dart",
  "Android (Java)": "android",
  "Material 3": "materialdesign",
  "Java": "java",
  "JavaScript": "javascript",
  "TypeScript": "typescript",
  "Python": "python",
  "C/C++": "cplusplus",
  "HTML5": "html5",
  "CSS3": "css3",
  "React": "react",
  "Vite": "vitejs",
  "Tailwind CSS": "tailwindcss",
  "three.js": "threejs",
  "SQLite (sqflite)": "sqlite",
  "PostgreSQL": "postgresql",
  "MySQL": "mysql",
  "Firebase Firestore": "firebase",
  "Firebase Authentication": "firebase",
  "Supabase (Auth, Postgres, Storage)": "supabase",
  "FastAPI (basics)": "fastapi",
  "Git": "git",
  "GitHub": "github",
  "VS Code": "vscode",
  "Android Studio": "androidstudio",
  "Figma": "figma",
};

// Logos that are black originally, shown in white on the dark theme
export const monoLogos = ["github", "threejs", "materialdesign"];

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
    emoji: "🛋️",
    image: "/projects/livispace.svg",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)",
    tags: ["Flutter", "Dart", "Supabase", "REST"],
    filterTags: ["flutter"],
    title: "LiviSpace — Interior Design App",
    desc: "A cross-platform app that turns a floor plan into AI-assisted interior designs: upload a plan, review detected rooms and compare layout recommendations by match score. Includes a 3D-style room viewer with GLB export, plus Supabase accounts and storage.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Interior_Design_App" },
    ],
  },
  {
    emoji: "🚆",
    image: "/projects/ceylongo.svg",
    gradient: "linear-gradient(135deg, #082f35 0%, #155e63 100%)",
    tags: ["Flutter", "Riverpod", "go_router", "Supabase", "flutter_map"],
    filterTags: ["flutter"],
    title: "CeylonGO — Sri Lanka Railway Companion",
    desc: "A bilingual (English/Sinhala) train companion with journey search, stop-by-stop timelines, route maps on OpenStreetMap and a searchable directory of 113 stations and 9 railway lines. Supports saved trains, guest mode and light/dark themes on a Supabase backend.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Lanka_Raill" },
    ],
  },
  {
    emoji: "🛍️",
    image: "/projects/velora.svg",
    gradient: "linear-gradient(135deg, #2a0a1f 0%, #831843 100%)",
    tags: ["Flutter", "Provider", "REST API", "PayHere SDK"],
    filterTags: ["flutter"],
    title: "Velora — Shopping App",
    desc: "A shopping app with a live paginated catalog, search, filters and product reviews, a persistent wishlist and stock-aware shopping bag, and PayHere Sandbox checkout with duplicate-payment protection. Includes unit tests for pricing and cart logic.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Velora" },
    ],
  },
  {
    emoji: "💰",
    image: "/projects/finora.svg",
    gradient: "linear-gradient(135deg, #052e16 0%, #14532d 100%)",
    tags: ["Flutter", "Dart", "SQLite", "Local Notifications"],
    filterTags: ["flutter"],
    title: "Finora — Personal Expense Tracker",
    desc: "An offline-first expense tracker with monthly budgets, per-category limits, over-budget warnings, filterable expense history, weekly and monthly report charts and budget alerts through local notifications.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Finora" },
    ],
  },
  {
    emoji: "🌤️",
    image: "/projects/skycast.svg",
    gradient: "linear-gradient(135deg, #0c1a2e 0%, #075985 100%)",
    tags: ["Flutter", "Dart", "WeatherAPI", "Geolocator"],
    filterTags: ["flutter"],
    title: "SkyCast — Weather App",
    desc: "A weather app with live conditions, a 24-hour temperature chart and a 5-day forecast. Offers city search with autocomplete, GPS location with an IP-based fallback, saved cities, themes and clear error states with retry.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Sky_Cast" },
    ],
  },
  {
    emoji: "✅",
    image: "/projects/taskflow.svg",
    gradient: "linear-gradient(135deg, #2a1503 0%, #7c2d12 100%)",
    tags: ["Flutter", "Dart", "Provider", "SQLite"],
    filterTags: ["flutter"],
    title: "TaskFlow (The Donezo) — Task Manager",
    desc: "An offline-first task manager with due dates and times, categories, and active and completed views. Uses Provider for state, with SQLite on native platforms and SharedPreferences on web behind a storage abstraction.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/TaskFlow" },
    ],
  },
  {
    emoji: "🏠",
    image: "/projects/interiorai.svg",
    gradient: "linear-gradient(135deg, #0c1a2e 0%, #1e3a5f 100%)",
    tags: ["React", "TypeScript", "FastAPI", "Supabase", "three.js"],
    filterTags: ["web"],
    title: "InteriorAI — Interior Design Web Platform",
    desc: "A floor-plan-to-3D platform: upload a 2D plan, detect rooms with YOLO and OCR, compare scored furniture layouts and explore them in a three.js view with PNG/GLB export. Backed by seven FastAPI services and Supabase auth with customer and admin roles.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Interior-Design-Web" },
    ],
  },
  {
    emoji: "📝",
    image: "/projects/personal-reflection.svg",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    tags: ["Android", "Java", "Room DB", "Firebase Auth", "Glide"],
    filterTags: ["android"],
    title: "GoalReflect — Personal Reflection App",
    desc: "Led a 3-person team building a native Android app for setting goals, writing reflections and tracking progress. Uses Room (SQLite) storage, Firebase Authentication with Google Sign-In, and scheduled reminders and weekly progress reports.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Personal_Refelection" },
    ],
  },
];

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Flutter", value: "flutter" },
  { label: "Android", value: "android" },
  { label: "Web", value: "web" },
];

// ---- OPEN SOURCE ----

// The Open Source section loads live numbers from GitHub. These values are
// shown while loading, or if GitHub can't be reached (last checked 2026-11-26).
export const githubFallback = {
  publicRepos: 19,
  followers: 6,
  createdAt: "2023-11-29T06:50:58Z",
};

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
      "Built CeylonGO, a bilingual Sri Lanka railway companion using Riverpod, go_router and Supabase.",
      "Developed LiviSpace, an AI-assisted interior design app with a 3D-style room viewer and Supabase accounts.",
      "Built Velora, Finora, SkyCast and TaskFlow, covering REST APIs, SQLite and Provider state management.",
      "Applied Agile methodology and version control (Git) across all projects.",
    ],
  },
  {
    title: "Full-Stack & Android Development",
    org: "Independent Learning",
    date: "2022 – Present",
    color: "purple",
    bullets: [
      "Built InteriorAI, a floor-plan-to-3D platform with React/TypeScript, FastAPI services and Supabase.",
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
