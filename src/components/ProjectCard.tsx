"use client";

import { useId, useState, useSyncExternalStore } from "react";
import { Icons, IconColors } from "@/lib/Icons";

let activeCardId: string | null = null;
const listeners = new Set<() => void>();

function setActiveCardId(id: string | null) {
  activeCardId = id;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getActiveCardId() {
  return activeCardId;
}

type ProjectCardProps = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
};

export default function ProjectCard({ slug, title, description, tags, link }: ProjectCardProps) {

  const cardId = useId();
  const currentActiveId = useSyncExternalStore(
    subscribe,
    getActiveCardId,
    () => null
  );
  const isCardActive = currentActiveId === cardId;

  const destination = link ?? `/projects/${slug}`;
  const isExternal = Boolean(link);

  const handleCardClick = () => {
    setActiveCardId(isCardActive ? null : cardId);
    if (isExternal) {
      window.open(destination, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = destination;
    }
  };

  const [activeTag, setActiveTag] = useState<string | null>(null);

  const toggleTag = (tag: string) => {
    setActiveTag((prev) => (prev === tag ? null : tag));
  };

  return (
    <div
      onClick={handleCardClick}
      role="link"
      aria-label={`Open ${title}${isExternal ? " in a new tab" : ""}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick();
        }
      }}
      className="group relative h-full flex flex-col rounded-2xl overflow-hidden border border-[#B8235A] dark:border-neutral-800 bg-card cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] active:scale-[1.02]"
    >
      <div className="h-30 bg-gradient-to-br from-rose-500/60 via-rose-200/30 to-card dark:from-rose-500/80 dark:via-rose-900/40 dark:to-card flex items-end p-6">
        <h3 className="text-2xl font-poppins font-medium leading-tight text-[#B8235A] dark:text-[#FFD8D9]">{title}</h3>
      </div>
      <div className="flex-1 flex flex-col p-6 bg-white dark:bg-[#1C1C1C]">
        <p className="font-inter text-foreground text-sm leading-relaxed mb-6">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => {
            const glowColor = IconColors[tag] ?? "#FFD8D9";
            const isActive = activeTag === tag;

            return (
              <span
                key={tag}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTag(tag);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleTag(tag);
                  }
                }}
                className="group/tag relative overflow-hidden flex items-center gap-1.5 text-xs font-mono text-[#540d26] bg-[#fde7e8] border border-[#B8235A] dark:border-neutral-700 dark:bg-[#0F0F0F] rounded-lg px-3 py-1.5 dark:text-[#9F9F9F] cursor-pointer select-none"
              >
                <span className="text-sm">{Icons[tag]}</span>
                {tag}

                <span
                  className={`pointer-events-none absolute bottom-0 left-1/2 h-[1.5px] -translate-x-1/2 transition-all duration-500 ease-out group-hover/tag:w-4/5 group-hover/tag:opacity-100 ${
                    isActive ? "w-4/5 opacity-100" : "w-0 opacity-0"
                  }`}
                  style={{
                    background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
                    boxShadow: `0 0 12px 2px ${glowColor}`,
                  }}
                />
              </span>
            );
          })}
        </div>
      </div>

      <span
        className={`pointer-events-none absolute bottom-0 left-1/2 h-px -translate-x-1/2 transition-all duration-500 ease-out group-hover:w-3/4 group-hover:opacity-100 ${
          isCardActive ? "w-3/4 opacity-100" : "w-0 opacity-0"
        }`}
        style={{
          background: "linear-gradient(90deg, transparent, #FFD8D9, #FB0945, transparent)",
          boxShadow: "0 0 6px 0px #FFD8D9",
        }}
      />
    </div>
  );
}