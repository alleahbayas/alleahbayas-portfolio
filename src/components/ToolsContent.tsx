import { Icons } from "@/lib/Icons";

type ToolCategoryProps = {
  icon: React.ReactNode;
  title: string;
  tags: string[];
  count: number;
};

export default function ToolsContent({ icon, title, tags, count }: ToolCategoryProps) {
  return (
    <div className="mt-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-[#FFF9D2] to-[#E9585C] flex items-center justify-center text-accent text-rose-900">
          {icon}
        </div>
        <h4 className="font-medium font-inter text-[20px] text-foreground">{title}</h4>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1.5 text-xs border border-[#B8235A] dark:border-white/15 rounded-lg px-3 py-1.5 text-neutral-600 dark:text-[#9F9F9F]"
          >
            <span className="text-sm">{Icons[tag]}</span>
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-linear-to-r from-neutral-200 to-[#C2185B] dark:from-neutral-900 dark:to-[#FFF9D2]" />
        <span className="text-xs font-mono text-[#C2185B] dark:text-[#FFA1A3]">{count} TOOLS</span>
      </div>
    </div>
  );
}