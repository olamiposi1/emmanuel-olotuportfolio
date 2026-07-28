import fiveStarCoverImg from './assets/images/5star-website-mockup_.png';
import betalkstechCoverImg from './assets/images/betalkstech-cover.png';
import tracklyImg from './assets/images/trackly_project_mock_1784659238678.jpg';
import mechalinkCoverImg from './assets/images/mechalink_cover.jpg';
import mechalink2Img from './assets/images/mechalink2.webp';
import mechalink3Img from './assets/images/mechalink3.webp';
import mobileMechalinkImg from './assets/images/mobile_mechalink.png';
import mobileMechalink1Img from './assets/images/mobile_mechalink1.png';
import revTalksTechCoverImg from './assets/images/Rev-Talks-banner.jpg';
import briefClarityCoverImg from './assets/images/brief-clarity-cover.png';
import fundflowCoverImg from './assets/images/fundflow-cover.jpg';
import fundflowHifiImg from './assets/images/fundflow-hifi.png';
import fundflowHifi1Img from './assets/images/fundflow-hifi1.png';
import fundflow1Img from './assets/images/fundflow1.webp';
import fundflow2Img from './assets/images/fundflow2.webp';





export interface ProjectSection {
  title: string;
  description: string;
  image?: string;
}

export interface ProjectDetail {
  industry: string;
  year: string;
  tool: string;
  overview: string;
  problem: string;
  solution: string;
  sections: ProjectSection[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web/Mobile App' | 'Websites';
  badgeColor: string; // Tailwind background style for the description card
  textColor: string;  // Title text color
  cardBg: string;     // Top preview image wrapper bg
  image: string;
  shortDescription: string;
  actionText: 'View Live Site' | 'Explore Project';
  actionUrl?: string;
  details: ProjectDetail;
}

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'mechalink',
    title: 'MechaLink – Roadside Assistance Mobile App',
    category: 'Web/Mobile App',
    badgeColor: 'bg-emerald-50/80 border border-emerald-100/60 text-emerald-950 dark:bg-emerald-950/40 dark:border-emerald-800/40 dark:text-emerald-100',
    textColor: 'text-emerald-800 dark:text-emerald-400',
    cardBg: 'bg-emerald-50/40',
    image: mechalinkCoverImg,
    shortDescription: "A mobile roadside assistance app designed to help drivers quickly access reliable help during vehicle emergencies, simplifying how users request, track, and manage roadside services from one intuitive platform.",
    actionText: 'Explore Project',
    details: {
      industry: 'Automotive / Roadside Assistance',
      year: '2026',
      tool: 'Figma',
      overview: "MechaLink is a mobile roadside assistance (RSA) app designed to help drivers quickly access reliable help during vehicle emergencies. The goal of this project was to simplify how users request, track, and manage roadside services, all from one intuitive platform.",
      problem: "Vehicle breakdowns often happen unexpectedly, leaving drivers stranded and stressed. Through research, key challenges emerged: difficulty finding trusted mechanics during emergencies, delays caused by calling multiple contacts, uncertainty around pricing and service quality, and no structured way to track assistance progress. Many existing solutions rely on manual phone calls or fragmented services, creating confusion and wasted time during already stressful situations.",
      solution: "MechaLink provides a streamlined digital platform where users can request roadside assistance instantly, choose specific issues such as a flat tire, engine problem, or unknown issue, track mechanic arrival in real time, view transparent pricing before confirmation, opt for a car rental if the vehicle is irreparable, and manage open and completed service orders. The app focuses on speed, clarity, and trust, ensuring users feel safe and in control during high-stress situations.",
      sections: [
        {
          title: "Research & Wireframing",
          description: "User interviews and survey responses revealed that speed is critical during emergencies, simplicity reduces panic, transparency builds trust, and real-time tracking significantly lowers user anxiety. These insights shaped the early wireframes, mapping out flows for emergency requests, issue-based service selection, and order tracking before any visual design began.",
          image: mechalink2Img
        },
        {
          title: "Refining the Flow",
          description: "Additional wireframe iterations focused on tightening the emergency request flow, from vehicle detail capture through to confirming a mechanic, making sure each screen reduced decision fatigue for a stressed, time-pressured user.",
          image: mechalink3Img
        },
        {
          title: "High-Fidelity UI Design",
          description: "The final interface prioritizes clean layouts, strong visual hierarchy, and clear call-to-action buttons to minimize friction during emergency interactions. Key screens include smart onboarding with vehicle detail capture, real-time mechanic tracking, in-app communication, transparent cost breakdowns, and an orders page for managing open and completed services. Modern typography using DM Sans keeps the experience calm and structured even under stress.",
          image: mobileMechalinkImg
        },
        {
          title: "Design Detail",
          description: "Further high-fidelity screens show how transparent pricing, service confirmation, and the car rental fallback option come together, keeping the user informed and in control at every step of the emergency flow.",
          image: mobileMechalink1Img
        }
      ]
    }
  },
  {
    id: 'brief-clarity',
    title: 'Briefly – Turn Messy Client Messages Into Clear Briefs',
    category: 'Web/Mobile App',
    badgeColor: 'bg-indigo-50/80 border border-indigo-100/60 text-indigo-950 dark:bg-indigo-950/40 dark:border-indigo-800/40 dark:text-indigo-100',
    textColor: 'text-indigo-800 dark:text-indigo-400',
    cardBg: 'bg-indigo-50/40',
    image: briefClarityCoverImg,
    shortDescription: "A freelance productivity tool that transforms messy, unstructured client messages into clear, organized project briefs, helping freelancers save time and avoid miscommunication before work even begins.",
    actionText: 'View Live Site',
    actionUrl: 'https://brief-clarity.vercel.app/',
    details: {
      industry: 'Productivity / Freelance Tools',
      year: '2026',
      tool: 'React / Vite',
      overview: "A freelance productivity tool that transforms messy, unstructured client messages into clear, organized project briefs.",
      problem: "",
      solution: "",
      sections: []
    }
  },
  {
    id: 'revtalkstech',
    title: 'RevTalksTech – Tech News & Digital Innovation Blog',
    category: 'Websites',
    badgeColor: 'bg-orange-50/80 border border-orange-100/60 text-orange-950 dark:bg-orange-950/40 dark:border-orange-800/40 dark:text-orange-100',
    textColor: 'text-amber-700 dark:text-amber-400',
    cardBg: 'bg-amber-50/30',
    image: revTalksTechCoverImg,
    shortDescription: "A modern tech-focused blog platform delivering content across technology news, gadgets, digital finance, cybersecurity, AI, and practical tech guides, designed and launched as a clean, scalable, SEO-optimized publication built for organic growth.",
    actionText: 'View Live Site',
    actionUrl: 'https://revtalkstech.com.ng/',
    details: {
      industry: 'Media / Content Publishing',
      year: '2026',
      tool: 'WordPress',
      overview: "A modern tech-focused blog platform built to deliver high-quality content across technology news, gadgets, digital finance, cybersecurity, AI, and practical tech guides.",
      problem: "",
      solution: "",
      sections: []
    }
  },
  {
    id: 'fundflow',
    title: 'Fundflow – Fintech Mobile App',
    category: 'Web/Mobile App',
    badgeColor: 'bg-purple-50/80 border border-purple-100/60 text-purple-950 dark:bg-purple-950/40 dark:border-purple-800/40 dark:text-purple-100',
    textColor: 'text-purple-800 dark:text-purple-400',
    cardBg: 'bg-purple-50/40',
    image: fundflowCoverImg,
    shortDescription: "A fintech mobile application designed to simplify money management, transfers, savings, and financial tracking for both young and older users, built to make everyday transactions seamless and stress-free.",
    actionText: 'Explore Project',
    details: {
      industry: 'FinTech / Mobile App',
      year: '2026',
      tool: 'Figma',
      overview: "Fundflow is a fintech mobile application designed to simplify money management, transfers, savings, and financial tracking for both young and older users. The goal was to create a secure, intuitive, and accessible financial platform that makes everyday transactions seamless and stress-free.",
      problem: "Many fintech apps overwhelm users with complex interfaces, unclear transaction flows, and poor accessibility, especially for older users who may not be tech-savvy. There was a need for a clean, simple, and secure solution that works for users across different age groups.",
      solution: "Fundflow simplifies money transfers and bill payments, improves financial visibility and tracking, prioritizes security and trust, and remains accessible for both young and older users. Key features include a clean dashboard with clear account balance visibility, a quick transfer and bill payment flow, transaction history tracking, savings and goal management, secure authentication, and an accessible UI with readable typography and strong contrast.",
      sections: [
        {
          title: "Research & Wireframing",
          description: "The process began with user research, persona development, and empathy mapping to identify pain points across different age groups. These insights shaped early low-fidelity wireframes, mapping out information architecture and user flows for transfers, tracking, and savings before any visual design began.",
          image: fundflow1Img
        },
        {
          title: "Refining the Flow",
          description: "Wireframes were iterated on to tighten the core transaction and savings flows, focusing on reducing cognitive load and minimizing errors during money transfers and bill payments.",
          image: fundflow2Img
        },
        {
          title: "High-Fidelity UI Design",
          description: "The final interface uses structured layouts and strong visual hierarchy to reduce cognitive load and improve financial confidence. The dashboard, transfer flow, and savings tracking were designed with a full design system and style guide, prioritizing accessibility with readable typography and strong contrast.",
          image: fundflowHifiImg
        },
        {
          title: "Design Detail",
          description: "Additional high-fidelity screens show the transaction history, savings and goal management, and secure authentication experience, completing the end-to-end journey from onboarding through everyday use.",
          image: fundflowHifi1Img
        }
      ]
    }
  },
  {
    id: 'betalkstech',
    title: 'BetalksTech – Technology News & Insights Blog',
    category: 'Websites',
    badgeColor: 'bg-emerald-50/80 border border-emerald-100/60 text-emerald-950 dark:bg-emerald-950/40 dark:border-emerald-800/40 dark:text-emerald-100',
    textColor: 'text-emerald-800 dark:text-emerald-400',
    cardBg: 'bg-emerald-50/40',
    image: betalkstechCoverImg,
    shortDescription: "A technology news and insights website covering innovation, AI, gadgets, cybersecurity, and digital trends, built to make complex tech topics clear, engaging, and easy to follow for everyday readers.",
    actionText: 'View Live Site',
    actionUrl: 'https://betalkstech.site/',
    details: {
      industry: 'Media / Content Publishing',
      year: '2026',
      tool: 'WordPress',
      overview: "A technology news and insights website covering innovation, AI, gadgets, cybersecurity, and digital trends.",
      problem: "",
      solution: "",
      sections: []
    }
  },

   {
    id: 'five-star',
    title: '5 Star Septic and Sewer Website',
    category: 'Websites',
    badgeColor: 'bg-cyan-50/80 border border-cyan-100/60 text-cyan-950 dark:bg-cyan-950/40 dark:border-cyan-800/40 dark:text-cyan-100',
    textColor: 'text-cyan-800 dark:text-cyan-400',
    cardBg: 'bg-cyan-50/40',
    image: fiveStarCoverImg,
    shortDescription: "A modern, conversion-focused website for a septic and sewer service company, transforming their online presence from a basic informational site into a fully functional service booking platform.",
    actionText: 'View Live Site',
    actionUrl: 'https://5starsepticsewer.com/',
   details: {
      industry: 'Home Services / Web Design',
      year: '2026',
      tool: 'WordPress',
      overview: "A modern, conversion-focused website for a septic and sewer service company.",
      problem: "",
      solution: "",
      sections: []
   
    }
  },

  {
    id: 'trackly',
    title: 'Trackly',
    category: 'Websites',
    badgeColor: 'bg-amber-50/80 border border-amber-100/60 text-amber-950 dark:bg-amber-950/40 dark:border-amber-800/40 dark:text-amber-100',
    textColor: 'text-amber-800 dark:text-amber-400',
    cardBg: 'bg-amber-50/40',
    image: tracklyImg,
    shortDescription: "A mobile app that helps users track, monitor, and manage all their recurring subscriptions in one place.",
    actionText: 'Explore Project',
    details: {
      industry: 'SaaS / Consumer FinTech',
      year: '2026',
      tool: 'Figma / React Native',
      overview: "A mobile app that helps users track, monitor, and manage all their recurring subscriptions in one place.",
      problem: "Subscription fatigue causes consumers to lose hundreds of dollars yearly on forgotten free trials and unwanted recurring auto-renews.",
      solution: "Trackly connects with user bank feeds or card SMS notifications to automatically detect recurring payments, send renewal warnings 3 days prior, and enable one-tap cancellation.",
      sections: [
        {
          title: "Smart Subscription Analytics & Reminders",
          description: "Get proactive notification alerts before trial periods end or annual renewals charge, complete with monthly category breakdown charts.",
          image: tracklyImg
        }
      ]
    }
  },
 
];