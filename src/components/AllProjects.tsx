"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { projects } from "@/lib/Project";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AllProjects() {
    // Page transition: fade + rise in on mount
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // rAF ensures the initial (hidden) styles paint first,
        // so the browser actually animates the transition
        const raf = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <section
            className="px-6 py-6 sm:py-16 tp:pt-10 tp:pb-16 max-w-7xl mx-auto"
            style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 500ms ease-out, transform 500ms ease-out",
            }}
        >
            <Link href="/#projects"
              className="font-mono text-sm text-neutral-600 hover:text-[#FFD8D9] flex items-end gap-3 mt-2">
                <ArrowLeft size ={16} /> BACK TO HOME 
            </Link>

            <Reveal direction="up">
                <h1 className="mt-6 font-inter font-medium text-black dark:text-white text-4xl">
                    Everything I've {" "}
                    <span className="bg-gradient-to-r from-[#FF9A56] via-[#FF5C8D] to-[#FB0945] dark:from-[#FFF1D5] to-[#FB003F] bg-clip-text text-transparent">
                        worked {" "}</span>on
                </h1>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 tp:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <Reveal key={project.slug} direction="up" delay={index * 100} distance={24}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                        />
                    </Reveal>
                ))}
            </div>
        </section>
    )
}