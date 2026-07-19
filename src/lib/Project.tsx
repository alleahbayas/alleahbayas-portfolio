export type Project = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
};

export const projects: Project[] = [
  {
    slug: "the-coche-events",
    title: "The Coche Events",
    description: "A web-based platform designed to streamline the process of booking and customizing surprise events, and to provide a centralized management system for the company, The Coche Events.",
    tags: [ "React", "SCSS", "Vite", "JavaScript" ]
  },
  {
    slug: "barangay-kiosk-system",
    title: "Barangay Kiosk System",
    description: "A self-service kiosk that automates document requests and equipment borrowing for Barangay Poblacion 1, Amadeo, Cavite — using RFID for resident records, camera capture for ID photos, and dual-language support.",
    tags: [ "Vue", "Node.js", "Vite", "Tailwind" ]
  },
  {
    slug: "hold-on",
    title: "HoldOn Dashboard",
    description: "A real-time trip-tracking dashboard for a motorcycle ride-hailing safety device — passengers start a trip and share a live GPS map link with contacts, no login required.",
    tags: [ "React", "SCSS", "Vite", "JavaScript" ]
  }, 
]; 

