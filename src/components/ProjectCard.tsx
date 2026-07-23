import { Icons } from "@/lib/Icons";

type Tag = {
    label: string;
    icon: React.ReactNode;
};

type ProjectCardProps = {
    title: string;
    description: string;
    tags: string[];
};

export default function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-[#B8235A] dark:border-neutral-800 bg-card">
      <div className="h-30 bg-gradient-to-br from-rose-500/60 via-rose-200/30 to-card dark:from-rose-500/80 dark:via-rose-900/40 dark:to-card flex items-end p-6">
        <h3 className="text-2xl font-poppins font-medium leading-tight text-[#B8235A] dark:text-[#FFD8D9]">{title}</h3>
      </div>
      <div className="p-6 bg-white dark:bg-[#1C1C1C]">
        <p className="font-inter text-foreground text-sm leading-relaxed mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 text-xs font-mono text-[#540d26] bg-[#fde7e8] border border-[#B8235A] dark:border-neutral-700 dark:bg-[#0F0F0F] rounded-lg px-3 py-1.5 dark:text-[#9F9F9F]"
            >
              <span className="text-sm">{Icons[tag]}</span>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}