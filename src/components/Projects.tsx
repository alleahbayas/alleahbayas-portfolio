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
      className="px-[clamp(1rem,4vw,1.5rem)] py-[clamp(10,6vw,4rem)] max-w-7xl mx-auto scroll-mt-14">

      <div className="grid grid-cols-1 gap-[clamp(2rem,5vw,3rem)] md:grid-cols-[3fr_2fr]">
        
        <div>        
          <p className="font-mono text-[#FFA1A3] text-[12px]">
            MY RECENT WORKS AND STACKS
          </p>

          <div className="flex items-end sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <h1 className="mt-6 font-inter font-medium text-white text-2xl mt-6 font-inter font-medium text-white text-[clamp(1.75rem,5vw,2.25rem)]">
              Engineering in {" "}
              <span className="bg-gradient-to-r from-[#FFF1D5] to-[#FB003F] bg-clip-text text-transparent">practice</span>
            </h1>

            <Link href="/projects"
              className="font-mono text-[12px] sm:text-sm text-neutral-600 hover:text-[#FFD8D9] flex items-end sm:gap-1 mt-2">
                SEE ALL <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* PROJECT CARDS */}
        <div className="mt-[clamp(1.5rem,4vw,2rem)] grid grid-cols-1 md:grid-cols-2 gap-[clamp(1rem,3vw,1.5rem)]">
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
        <div className="pl-0 md:pl-10 border-t md:border-t-0 md:border-l border-neutral-800 pt-10 md:pt-0 mt-10 md:mt-0">
          <h2 className="mt-6 font-inter font-medium text-white text-2xl mt-6 font-inter font-medium text-white text-[clamp(1.75rem,5vw,2.25rem)]">
            Tools I've {" "}
            <span className="bg-gradient-to-r from-[#FFF1D5] to-[#FB003F] bg-clip-text text-transparent">
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