

export const personal = {
  name: "Dumindu Malinga",
  initials: "DM",
  logo: "DM.dev",
  tagline: "Available for Internships & Opportunities",
  bio: "Software Engineering undergraduate passionate about building practical Android applications that improve productivity and user experience. I turn ideas into clean, functional code.",
  location: "Sri Lanka 🇱🇰",
  degree: "BSc. Information Technology",
  focus: "Android & Mobile Dev",
  github: "https://github.com/DuminduMalinga",
  githubHandle: "@DuminduMalinga",
  linkedin: "https://www.linkedin.com/in/dumindu-malinga-357b4240a/",
  linkedinHandle: "dumindu-malinga",
  email: "malingabandara24256@gmail.com",
  phone: "+94 77 328 6562",
  cvUrl: "/Dumindu_Malinga_CV.pdf",
};

export const roles = [
  "Android Developer",
  "Software Engineer",
  "Java Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

export const stats = [
  { number: "4+", label: "Projects Built" },
  { number: "10+", label: "Technologies" },
  { number: "SE", label: "Undergraduate" },
];

export const aboutCards = [
  {
    icon: "smartphone",
    color: "violet",
    title: "Android Development",
    desc: "Building native Android apps with Java, leveraging Room, Firebase, and Material Design to deliver polished, production-ready experiences.",
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
    title: "Android & Mobile",
    emoji: "📱",
    bars: [
      { name: "Java", pct: 75 },
      { name: "Android Development", pct: 85 },
      { name: "XML Layouts", pct: 85 },
      { name: "Firebase", pct: 78 },
      { name: "Room Database", pct: 75 },
      { name: "SQLite", pct: 80 },
    ],
  },
  {
    title: "Languages & Web",
    emoji: "💻",
    bars: [
      { name: "Python", pct: 75 },
      { name: "HTML & CSS", pct: 75 },
      { name: "JavaScript / TypeScript", pct: 60 },
      { name: "OOP Principles", pct: 88 },
      { name: "Git & GitHub", pct: 82 },
      { name: "Software Eng. Principles", pct: 80 },
    ],
  },
];

export const techTags = [
  "🤖 Android Studio",
  "☕ Java",
  "🔥 Firebase",
  "🗃️ Room DB",
  "📦 SQLite",
  "🐍 Python",
  "🌐 HTML5",
  "🎨 CSS3",
  "⚡ JavaScript",
  "📘 TypeScript",
  "⚛️ React",
  "⚡ Vite",
  "🐙 Git & GitHub",
  "🔧 Android SDK",
  "📱 Material Design",
  "🧪 JUnit",
  "🔄 RecyclerView",
  "📊 ML / Scikit-learn",
];

// ---- PROJECTS ----

export interface Project {
  emoji: string;
  gradient: string;
  tags: string[];
  filterTags: string[];
  title: string;
  desc: string;
  links: { label: string; icon: string; href: string }[];
}

export const projects: Project[] = [
  {
    emoji: "📝",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
    tags: ["Android", "Java", "Room DB", "Firebase"],
    filterTags: ["android", "java", "firebase"],
    title: "Personal Reflection App",
    desc: "A goal-tracking and personal reflection Android application. Users can log daily reflections, set goals, track progress over time, and sync data with Firebase for multi-device support.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Personal_Refelection" },
    ],
  },
  {
    emoji: "🎶",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
    tags: ["Android", "Flutter", "OOP"],
    filterTags: ["android"],
    title: "Video Player",
    desc: "A desktop-based video player application built with Flutter. Features include playback controls, playlist management, and a clean, modern interface.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Video_Player" },
    ],
  },
  {
    emoji: "🚗",
    gradient: "linear-gradient(135deg, #1a0a2e 0%, #3b1170 100%)",
    tags: ["Python", "Machine Learning", "NLP"],
    filterTags: ["python"],
    title: "Vehicle Classification Model",
    desc: "A vehicle classification model that classifies vehicles as positive, negative, or neutral. Uses Python with scikit-learn and NLTK.",
    links: [
      { label: "Source Code", icon: "github", href: "https://github.com/DuminduMalinga/Vehicle_Classification" },
    ],
  },
];

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Android", value: "android" },
  { label: "Java", value: "java" },
  { label: "Python", value: "python" },
  { label: "Firebase", value: "firebase" },
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
    title: "Academic Software Projects",
    org: "Rajarata University — Information Technology Degree",
    date: "2023 – Present",
    color: "violet",
    bullets: [
      "Designed and developed the Personal Reflection Mobile App with Firebase sync and Room Database persistence.",
      "Built a Student Management System applying relational database design and OOP principles.",
      "Implemented an NLP-based Sentiment Analysis system using Python and scikit-learn.",
      "Applied Agile methodology and version control (Git) across all projects.",
    ],
  },
  {
    title: "Android Development Self-Study",
    org: "Independent Learning",
    date: "2022 – Present",
    color: "purple",
    bullets: [
      "Completed advanced Android development courses covering MVVM architecture, LiveData, and ViewModels.",
      "Studied Firebase Authentication, Firestore, and Realtime Database integration for Android apps.",
      "Practised UI/UX design principles using Material Design 3 guidelines.",
      "Built personal side-projects to deepen hands-on experience with Room and SQLite.",
    ],
  },
  {
    title: "Open Source & GitHub Contributions",
    org: `GitHub — ${personal.githubHandle}`,
    date: "2022 – Present",
    color: "blue",
    bullets: [
      "Maintained public repositories showcasing Android, Java, and Python projects.",
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
