

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
  name: string;
  category: string;
  icon: string;
  role: string;
  year: string;
  featured?: boolean;
  desc: string;
  tags: string[];
  filterTags: string[];
  sourceUrl: string;
  previewImage?: string; // opens in a popup
  liveUrl?: string; // opens the running site
  note?: string;
}

export const projects: Project[] = [
  {
    name: "LiviSpace",
    category: "Interior Design",
    icon: "/app-icons/livispace.png",
    role: "Flutter App",
    year: "2026",
    featured: true,
    desc: "Turns a floor plan into AI-assisted interior designs: review detected rooms, compare layouts by match score and explore them in a 3D-style room viewer with GLB export and sharing.",
    tags: ["Flutter", "Dart", "Supabase", "REST"],
    filterTags: ["flutter"],
    sourceUrl: "https://github.com/DuminduMalinga/Interior_Design_App",
    previewImage: "/projects/livispace.svg",
    note: "Cross-platform Flutter app",
  },
  {
    name: "CeylonGO",
    category: "Railway Companion",
    icon: "/app-icons/ceylongo.png",
    role: "Flutter App",
    year: "2026",
    desc: "Bilingual (English/Sinhala) train companion with journey search, stop-by-stop timelines, route maps and a searchable directory of 113 stations and 9 railway lines.",
    tags: ["Flutter", "Riverpod", "go_router", "Supabase", "flutter_map"],
    filterTags: ["flutter"],
    sourceUrl: "https://github.com/DuminduMalinga/Lanka_Raill",
    previewImage: "/projects/ceylongo.svg",
    note: "Guest mode available, sign-in is optional",
  },
  {
    name: "Velora",
    category: "Shopping",
    icon: "/app-icons/velora.png",
    role: "Flutter App",
    year: "2026",
    desc: "Shopping app with a live paginated catalog, product reviews, a persistent wishlist and stock-aware bag, and sandbox checkout with duplicate-payment protection.",
    tags: ["Flutter", "Provider", "REST API", "PayHere SDK"],
    filterTags: ["flutter"],
    sourceUrl: "https://github.com/DuminduMalinga/Velora",
    previewImage: "/projects/velora.svg",
    note: "Payments use PayHere Sandbox only",
  },
  {
    name: "Finora",
    category: "Personal Finance",
    icon: "/app-icons/finora.png",
    role: "Flutter App",
    year: "2026",
    desc: "Expense tracker with monthly budgets, per-category limits, over-budget warnings, filterable history, report charts and local budget alerts.",
    tags: ["Flutter", "Dart", "SQLite", "Local Notifications"],
    filterTags: ["flutter"],
    sourceUrl: "https://github.com/DuminduMalinga/Finora",
    previewImage: "/projects/finora.svg",
    note: "Offline-first, data stored in SQLite",
  },
  {
    name: "SkyCast",
    category: "Weather",
    icon: "/app-icons/skycast.png",
    role: "Flutter App",
    year: "2026",
    desc: "Weather app with live conditions, a 24-hour temperature chart, a 5-day forecast, city search with autocomplete, GPS location and saved cities.",
    tags: ["Flutter", "Dart", "WeatherAPI", "Geolocator"],
    filterTags: ["flutter"],
    sourceUrl: "https://github.com/DuminduMalinga/Sky_Cast",
    previewImage: "/projects/skycast.svg",
    note: "Data from WeatherAPI and Open-Meteo",
  },
  {
    name: "TaskFlow",
    category: "Task Manager",
    icon: "/app-icons/taskflow.png",
    role: "Flutter App",
    year: "2026",
    desc: "Task manager (The Donezo) with due dates and times, categories, and active and completed views, backed by SQLite on native and SharedPreferences on web.",
    tags: ["Flutter", "Dart", "Provider", "SQLite"],
    filterTags: ["flutter"],
    sourceUrl: "https://github.com/DuminduMalinga/TaskFlow",
    previewImage: "/projects/taskflow.svg",
    note: "Offline-first with a local profile",
  },
  {
    name: "InteriorAI",
    category: "Web Platform",
    icon: "/app-icons/interiorai.png",
    role: "Web App",
    year: "2026",
    desc: "Floor-plan-to-3D platform: detect rooms with YOLO and OCR, compare scored furniture layouts and explore them in a three.js view, backed by seven FastAPI services.",
    tags: ["React", "TypeScript", "FastAPI", "Supabase", "three.js"],
    filterTags: ["web"],
    sourceUrl: "https://github.com/DuminduMalinga/Interior-Design-Web",
    liveUrl: "https://interior-design-web-mu.vercel.app/",
    note: "Web app deployed on Vercel",
  },
  {
    name: "GoalReflect",
    category: "Personal Growth",
    icon: "/app-icons/goalreflect.svg",
    role: "Team Lead",
    year: "2026",
    desc: "Native Android app for setting goals, writing reflections and tracking progress, with Room storage, Google Sign-In, scheduled reminders and weekly reports.",
    tags: ["Android", "Java", "Room DB", "Firebase Auth", "Glide"],
    filterTags: ["android"],
    sourceUrl: "https://github.com/DuminduMalinga/Personal_Refelection",
    note: "Team project built by 3 people",
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
