import { ExperienceItem, TrackItem, WorkStep, BookInfo } from './types';

// Importing generated assets
import avatarImg from './assets/images/Posi.jpeg';
import dieterRamsCover from './assets/images/dieter_rams_book_1784657427378.jpg';
import astroworldCover from './assets/images/album_art_1784657442610.jpg';
import montrealMapImg from './assets/images/montreal_map_1784657457397.jpg';

export const ASSETS = {
  avatar: avatarImg,
  dieterBook: dieterRamsCover,
  albumCover: astroworldCover,
  montrealMap: montrealMapImg,
};

export const PROFILE_DATA = {
  name: "Emmanuel Olotu",
  email: "emmanuelolamiposi1@gmail.com",
  role: "Product Designer & Website Designer",
  company: "Product & Web Design",
  status: "Open to work",
  subtext: "I design thoughtful digital experiences and build high-performing websites that help startups and businesses grow with clarity and confidence.",
  location: "LAGOS, NIGERIA",
  coordinates: "6.5244° N, 3.3792° E",
};

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "UX/UI Designer",
    company: "Amakre Blofintech Firm",
    period: "2025 - Present",
    type: "On site",
    commitment: "Full time",
    description: "Designing intuitive digital experiences, translating requirements into functional interfaces, and improving product usability."
  },
  {
    id: "exp-2",
    role: "UI/UX Design Intern",
    company: "Micotech",
    period: "2025 - Present",
    type: "Lagos, Nigeria",
    commitment: "Internship",
    description: "Designing visually appealing and user-friendly interfaces for digital products, including websites and mobile apps."
  },
  {
    id: "exp-3",
    role: "UI/UX Design Intern",
    company: "I4G Zuri",
    period: "Mar 2022 - Sept 2022",
    type: "Remote",
    commitment: "Internship",
    description: "Designed visually appealing interfaces for websites and mobile apps, conducting user research and wireframing."
  },
];

export const TRACK_LIST: TrackItem[] = [
  {
    id: "track-1",
    title: "SICKO MODE",
    artist: "Travis Scott",
    album: "ASTROWORLD",
    duration: "5:12",
    coverUrl: astroworldCover,
    spotifyUrl: "https://open.spotify.com",
  },
  {
    id: "track-2",
    title: "STARGAZING",
    artist: "Travis Scott",
    album: "ASTROWORLD",
    duration: "4:30",
    coverUrl: astroworldCover,
    spotifyUrl: "https://open.spotify.com",
  },
  {
    id: "track-3",
    title: "Feather",
    artist: "Nujabes",
    album: "Modal Soul",
    duration: "2:55",
    coverUrl: astroworldCover,
    spotifyUrl: "https://open.spotify.com",
  },
];

export const BOOK_DATA: BookInfo = {
  title: "Dieter Rams the Complete Works",
  author: "Klaus Klemp",
  coverUrl: dieterRamsCover,
  status: "Currently reading",
  progressPercent: 78,
  favoriteQuote: "Good design is as little design as possible. Less, but better – because it concentrates on the essential aspects.",
  description: "An exhaustive catalog of every product designed by Dieter Rams for Braun and Vitsœ, exploring the 10 principles of good design.",
};

export const WORK_STEPS: WorkStep[] = [
  {
    id: "step-1",
    stepNumber: "Step 01",
    title: "01 Discovery Call",
    description: "We start with a quick call or message to understand your goals, challenges, and vision.",
    deliverables: ["Project scope document", "User alignment goals", "Timeline & milestones roadmap"]
  },
  {
    id: "step-2",
    stepNumber: "Step 02",
    title: "02 Strategy & Concept",
    description: "I turn your ideas into a clear plan, defining the user experience, structure, and project direction.",
    deliverables: ["User flow diagrams", "Low-fi interactive prototypes", "Design system primitives"]
  },
  {
    id: "step-3",
    stepNumber: "Step 03",
    title: "03 Design & Prototype",
    description: "I create intuitive, high-fidelity designs focused on usability, clarity, and business goals.",
    deliverables: ["Figma UI component library", "High-fidelity interactive prototype", "Design token definitions"]
  },
  {
    id: "step-4",
    stepNumber: "Step 04",
    title: "04 Testing & Refinement",
    description: "I bring the designs to life, test everything, and refine the experience based on feedback.",
    deliverables: ["Usability testing report", "WCAG accessibility audit", "Responsive layout adjustments"]
  },
  {
    id: "step-5",
    stepNumber: "Step 05",
    title: "05 Final Handoff",
    description: "Once everything is polished, I deliver the final product, documentation, and support you need to move forward.",
    deliverables: ["Developer handoff spec", "Component documentation", "Post-launch support plan"]
  }
];