import { JetBrains_Mono, Inter, Playfair_Display, Poppins } from "next/font/google";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
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
    <div className={`${jetBrainsMono.variable} ${inter.variable} ${serif.variable} ${poppins.variable} min-h-screen font-inter`}>
      <Navbar />
      <main className="overflow-x-clip">
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <footer className="px-6 py-8 max-w-4xl mx-auto border-t border-[var(--bg-line)]">
          <p className="text-xs text-[var(--muted)] font-mono">
            Built with Next.js · Deployed on Vercel
          </p>
        </footer>
      </main>
    </div>
  );
}