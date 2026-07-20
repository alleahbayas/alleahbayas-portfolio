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
      <div className="ml-24 flex-1 rounded-2xl border-[2px] border border-[#583636] bg-[#160E10] px-6 py-5">
        <div className="flex items-start justify-between gap-6">
            
          {/* HEADER & BULLETS */}
          <div className="flex-1 min-w-0">
            <div className="flex gap-4">
              <img
                src={icon}
                alt={org}
                className="w-12 h-12 rounded-lg object-cover bg-white p-1 shrink-0"
              />
              <div>
                <h3 className="font-inter font-semibold text-white text-lg">
                  {title}
                </h3>
                <p className="font-inter font-medium text-sm bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] bg-clip-text text-transparent">
                  {org}
                </p>
              </div>
            </div>

            <hr className="my-3 h-px w-1/2 border-0 bg-gradient-to-r from-[#FFE3CD] to-neutral-900" />

            <ul className="space-y-1.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#9F9F9F] whitespace-nowrap">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#FFF9D2] shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* DATE & NUMBER */}
          <div className="flex flex-col items-end shrink-0">
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#9F9F9F] border border-white/20 rounded-full px-3 py-1 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB0945]" />
              {date}
            </span>

            <span className="font-inter font-bold text-[100px] text-white/10 leading-none select-none">
              {number}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}