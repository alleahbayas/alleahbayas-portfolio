"use client";

import { useState } from "react";
import { Icons, IconColors } from "@/lib/Icons";

type ToolCategoryProps = {
  icon: React.ReactNode;
  title: string;
  tags: string[];
  count: number;
};

export default function ToolsContent({ icon, title, tags, count }: ToolCategoryProps) {

  const [activeTag, setActiveTag] = useState<string | null>(null);

  const toggleTag = (tag: string) => {
    setActiveTag((prev) => (prev === tag ? null : tag));
  };

  return (
    <div className="mt-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-[#FFF9D2] to-[#E9585C] flex items-center justify-center text-accent text-rose-900">
          {icon}
        </div>
        <h4 className="font-medium font-inter text-[20px] text-foreground">{title}</h4>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => {
          const glowColor = IconColors[tag] ?? "#FFD8D9";
          const isActive = activeTag === tag;

          return (
            <span
              key={tag}
              onClick={() => toggleTag(tag)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleTag(tag);
                }
              }}
              className="group/tag relative overflow-hidden flex items-center gap-1.5 text-xs border border-[#B8235A] dark:border-white/15 rounded-lg px-3 py-1.5 text-neutral-600 dark:text-[#9F9F9F] cursor-pointer select-none transition-transform duration-300 ease-out hover:scale-105 active:scale-105"
            >
              <span className="text-sm">{Icons[tag]}</span>
              {tag}

              {/* Bottom glow line — slides in on hover/press, or stays on after a tap until tapped again, colored to match the icon */}
              <span
                className={`pointer-events-none absolute bottom-0 left-1/2 h-[1.5px] -translate-x-1/2 transition-all duration-500 ease-out group-hover/tag:w-4/5 group-hover/tag:opacity-100 ${
                  isActive ? "w-4/5 opacity-100" : "w-0 opacity-0"
                }`}
                style={{
                  background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
                  boxShadow: `0 0 12px 2px ${glowColor}20`,
                }}
              />
            </span>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-linear-to-r from-neutral-200 to-[#C2185B] dark:from-neutral-900 dark:to-[#FFF9D2]" />
        <span className="text-xs font-mono text-[#C2185B] dark:text-[#FFA1A3]">{count} TOOLS</span>
      </div>
    </div>
  );
}