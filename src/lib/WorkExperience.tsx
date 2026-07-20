export interface Experience {
  number: string;
  icon: string;
  title: string;
  org: string;
  date: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    number: "01",
    icon: "/icons/sk-logo.png",
    title: "1st Councilor (Head, Environmental and Publication Committee)",
    org: "Sangguniang Kabataan of Poblacion I, Amadeo, Cavite",
    date: "OCT 2023 - PRESENT",
    bullets: [
      "Designed and developed digital informative publication materials for events, announcements, and promotional campaigns.",
      "Leveraged online platforms to promote youth engagement and local tourism initiatives in the municipality.",
    ],
  },
  {
    number: "02",
    icon: "/icons/dost-logo.png",
    title: "Software Development Intern",
    org: "Department of Science and Technology (DOST-CO-PES)",
    date: "JULY - SEP 2025",
    bullets: [
      "Built a WordPress plugin with full CRUD functionality and role-based access control for a multi-agency data management system.",
      "Redesigned a statistical website's homepage in Figma, benchmarking government sites to deliver a modern, user-friendly layout.",
    ],
  },
  {
    number: "03",
    icon: "/icons/roc-ph-logo.jpg",
    title: "Software Development Intern",
    org: "ROC.PH Digital Services",
    date: "AUG - SEP 2024",
    bullets: [
      "Delivered responsive, cross-browser front-end interfaces for multiple client projects using WordPress and Laravel.",
      "Converted Figma UI/UX designs into production-ready code as part of a full-stack web development team.",
    ],
  },
];