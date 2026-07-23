import { Experience } from "@/lib/WorkExperience";

export default function ExperienceCard({
  number,
  icon,
  title,
  org,
  date,
  bullets,
}: Experience) {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-[52px] -translate-x-1/2 flex items-center justify-center">
        
        {/* GLOW */}
        <div className="absolute w-6 h-6 rounded-full bg-[radial-gradient(circle,#FF5C6E_0%,transparent_70%)] blur-sm" />

        {/* DOT */}
        <div className="relative w-2.5 h-2.5 rounded-full bg-[#FF5C6E]" />
      </div>

      {/* CARD */}
      <div className="ml-24 flex-1 min-w-0 rounded-2xl border-[2px] border border-[#E8B4BC] dark:border-[#583636] bg-white dark:bg-[#160E10] px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            
          {/* HEADER & BULLETS */}
          <div className="flex-1 min-w-0">
            <div className="flex gap-3 sm:gap-4">
              <img
                src={icon}
                alt={org}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover bg-white p-1 shrink-0"
              />
              <div className="min-w-0">
                <h3 className="font-inter font-semibold text-foreground text-base sm:text-lg">
                  {title}
                </h3>
                <p className="font-inter font-medium text-xs sm:text-sm bg-gradient-to-r from-[#D97A4E] via-[#E0447A] to-[#C2003F] dark:from-[#FFE3CD] dark:via-[#FF5C8D] dark:to-[#FB0945] bg-clip-text text-transparent">
                  {org}
                </p>
              </div>
            </div>

            <hr className="my-3 h-px w-1/2 border-0 bg-gradient-to-r from-[#D97A4E] to-neutral-200 dark:from-[#FFE3CD] dark:to-neutral-900" />

            <ul className="space-y-1.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-xs sm:text-sm text-neutral-600 dark:text-[#9F9F9F]">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#C2185B] dark:bg-[#FFF9D2] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DATE & NUMBER */}
          <div className="flex flex-row items-center justify-between w-full sm:flex-col sm:items-end sm:justify-between sm:self-stretch sm:w-auto shrink-0">
            <span className="flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] bg-[#f6d3db] text-white dark:bg-[#0F0F0F] dark:text-[#9F9F9F] border border-black/15 dark:border-white/20 rounded-full px-2.5 py-1 sm:px-3 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFF9D2] dark:bg-[#FB0945]" />
              {date}
            </span>

            <span className="font-inter font-bold text-[40px] sm:text-[64px] tp:text-[72px] sl:text-[88px] ml:text-[70px] md:text-[100px] text-[#aa0b336f] dark:text-white/10 leading-none select-none">
              {number}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}