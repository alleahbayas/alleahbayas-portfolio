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
      className="px-4 py-10 sm:px-5 sm:py-12 md:px-8 md:py-14 lg:py-16 max-w-7xl mx-auto scroll-mt-14">

      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-8 lg:gap-12 md:grid-cols-[3fr_2fr] [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:md:grid-cols-2">
        
        <div>        
          <p className="font-mono text-[#FFA1A3] text-[12px]">
            MY RECENT WORKS AND STACKS
          </p>

          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <h1 className="mt-6 font-inter font-medium text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
              Engineering in {" "}
              <span className="bg-gradient-to-r from-[#FFF1D5] to-[#FB003F] bg-clip-text text-transparent">practice</span>
            </h1>

            <Link href="/projects"
              className="font-mono text-[12px] sm:text-sm text-neutral-600 hover:text-[#FFD8D9] flex items-end sm:gap-1 mt-2">
                SEE ALL <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* PROJECT CARDS */}
        <div className="mt-6 sm:mt-7 lg:mt-8 grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:grid-cols-2 lg:grid-cols-2">
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
          <h2 className="mt-6 font-inter font-medium text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
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