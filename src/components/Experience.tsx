import { experiences } from "@/lib/WorkExperience";
import ExperienceCard from "@/components/ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experiences"
      className="px-4 py-10 sm:px-5 sm:py-12 md:px-8 md:py-14 lg:py-16 max-w-7xl mx-auto scroll-mt-14"
    >
      <h1 className="font-inter font-medium text-4xl text-white">
        Built through{" "}
        <span className="bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] bg-clip-text text-transparent">
          experience
        </span>
      </h1>

      <p className="mt-4 font-mono text-xs text-[#FFA1A3]">
        EXPERIENCES THAT SHAPED THE WAY I DESIGN AND BUILD
      </p>

      <div className="relative mt-13 flex">
        <div className="absolute left-[52px] top-4 bottom-4 w-px bg-white/20" />
        <div className="flex flex-col gap-8 w-full">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.number} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}