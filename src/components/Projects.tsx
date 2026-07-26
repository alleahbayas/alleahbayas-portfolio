import ProjectCard from "./ProjectCard";
import { Icons } from "@/lib/Icons";
import ToolsContent from "./ToolsContent";
import { Terminal, Layers, Database, Wrench } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/Project";
import Link from "next/link";

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="px-4 py-10 sm:px-5 sm:py-12 md:px-8 md:py-14 lg:py-16 tp:px-6 tp:py-12 sl:px-8 sl:py-10 ml:px-6 ml:py-6 max-w-7xl mx-auto scroll-mt-[var(--nav-h)]"
      >

      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-8 lg:gap-12 tp:gap-8 sl:grid-cols-2 sl:gap-8 ml:gap-6 md:grid-cols-[3fr_2fr]">
        
        <div className="flex flex-col">        
          <p className="font-mono text-[#C2185B] dark:text-[#FFA1A3] text-[12px]">
            MY RECENT WORKS AND STACKS
          </p>

          <div className="contents sm:flex sm:items-end sm:justify-between sm:gap-6">
            <h1 className="mt-6 font-inter font-medium text-foreground text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
              Engineering in {" "}
              <span className="bg-gradient-to-r from-[#E8A93F] to-[#C2003F] dark:from-[#FFF1D5] dark:to-[#FB003F] bg-clip-text text-transparent">practice</span>
            </h1>

            <Link href="/projects"
              className="order-last self-center mt-6 sm:order-none sm:mt-2 font-mono text-[12px] sm:text-sm text-neutral-600 dark:text-neutral-600 hover:text-[#C2185B] dark:hover:text-[#FFD8D9] flex items-end sm:gap-1">
                SEE ALL <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* PROJECT CARDS */}
        <div className="order-1 sm:order-none mt-6 sm:mt-7 lg:mt-8 grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 sl:grid-cols-2 sl:gap-5 ml:gap-4 lg:grid-cols-2">
          {projects.slice(0,2).map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              tags={project.tags}
              />
          ))}
        </div>
      </div>

        {/* TOOLS */}
        <div className="pl-0 md:pl-10 border-t md:border-t-0 md:border-l border-black/10 dark:border-neutral-800 pt-10 md:pt-0 mt-10 md:mt-0 sl:border-t-0 sl:border-l sl:pl-8 sl:pt-0 sl:mt-0 ml:pt-6 ml:mt-6">
          <h2 className="mt-6 font-inter font-medium text-foreground text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
            Tools I've {" "}
            <span className="bg-gradient-to-r from-[#E8A93F] to-[#C2003F] dark:from-[#FFF1D5] dark:to-[#FB003F] bg-clip-text text-transparent">
              learned {" "}</span> so far
          </h2>

          <div className="mt-6">
            <ToolsContent
              icon={<Terminal size={18} strokeWidth={2.5} />}
              title="Languages"
              tags={["Python", "SQL", "PHP", "C++", "JavaScript", "TypeScript"]}
              count={6}
            />

            <ToolsContent
              icon={<Layers size={18} strokeWidth={2.5} />}
              title="Front-End"
              tags={["React", "HTML", "CSS", "SCSS", "Vue", "JavaScript", "TypeScript", "Tailwind"]}
              count={8}
            />

            <ToolsContent
              icon={<Database size={18} strokeWidth={2.5} />}
              title="Back-End"
              tags={["Laravel", "Node.js", "Next.js","MySQL", "Firebase", "PostgreSQL"]}
              count={6}
            />

            <ToolsContent
              icon={<Wrench size={18} strokeWidth={2.5} />}
              title="DevOps & Design Tools"
              tags={["Figma", "Git", "Vercel", "Vite"]}
              count={4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}