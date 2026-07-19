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
    <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-card">
      <div className="h-30 bg-gradient-to-br from-rose-500/80 via-rose-900/40 to-card flex items-end p-6">
        <h3 className="text-2xl font-poppins font-medium leading-tight text-[#FFD8D9]">{title}</h3>
      </div>
      <div className="p-6">
        <p className="font-inter text-white text-sm leading-relaxed mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 text-xs font-mono border border-neutral-700 rounded-full px-3 py-1.5 text-[#9F9F9F]"
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