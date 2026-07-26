import { experiences } from "@/lib/WorkExperience";
import ExperienceCard from "@/components/ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experiences"
      className="px-4 py-10 sm:px-5 sm:py-12 md:px-8 md:py-14 lg:py-16 tp:px-6 tp:py-12 sl:px-8 sl:py-10 ml:px-6 ml:py-6 max-w-7xl mx-auto scroll-mt-[var(--nav-h)]"
    >
      <h1 className="font-inter font-medium text-4xl text-foreground">
        Built through{" "}
        <span className="bg-gradient-to-r from-[#D97A4E] via-[#E0447A] to-[#C2003F] dark:from-[#FFE3CD] dark:via-[#FF5C8D] dark:to-[#FB0945] bg-clip-text text-transparent">
          experience
        </span>
      </h1>

      <p className="mt-4 font-mono text-xs text-[#C2185B] dark:text-[#FFA1A3]">
        EXPERIENCES THAT SHAPED THE WAY I DESIGN AND BUILD
      </p>

      <div className="relative mt-13 tp:mt-10 sl:mt-10 ml:mt-8 flex">
        <div className="absolute left-[52px] top-4 bottom-4 w-px bg-black/15 dark:bg-white/20" />
        <div className="flex flex-col gap-8 sl:gap-6 ml:gap-5 w-full">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.number} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}