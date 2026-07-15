import { JetBrains_Mono, Inter, Playfair_Display, Poppins } from "next/font/google";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export default function Main() {
  return (
    <div className={`${mono.variable} ${sans.variable} ${serif.variable} ${poppins.variable} min-h-screen`}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <footer className="px-6 py-8 max-w-4xl mx-auto border-t bprder-(--bg-line)]">
        <p className="text-xs text-(--muted)] font-mono]">
          Built with Next.js · Deployed on Vercel
        </p>
      </footer>
    </div>
  );
}