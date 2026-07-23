import { Code, Palette, Layers, Monitor, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  palette: Palette,
  layers: Layers,
  monitor: Monitor,
};

type Feature = {
  icon: keyof typeof iconMap;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: "code",
    title: "Web Development",
    desc: "Building responsive and interactive web applications with modern frameworks.",
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    desc: "Designing clean, user-friendly interfaces that prioritize accessibility and great user experience.",
  },
  {
    icon: "layers",
    title: "System Development",
    desc: "Developing complete information systems and management platforms.",
  },
  {
    icon: "monitor",
    title: "Software Maintenance",
    desc: "Debugging, optimizing, and improving existing applications for better performance and reliability.",
  },
];

export default function About() {
  return (
    <section 
      id="about" 
      className="scroll-mt-4 sm:scroll-mt-24 mx-auto max-w-7xl px-4 pt-8 pb-12 sm:px-6 sm:py-16 tp:px-8 tp:py-14 sl:px-10 sl:py-10 sl:min-h-0 ml:px-6 ml:py-6 ml:min-h-0 lg:grid lg:min-h-[calc(100vh-90px)] lg:place-items-center lg:py-0"
    >
      <div className="w-full rounded-[1.5rem] border border-black/10 dark:border-white/10 bg-[#ffe4eb] dark:bg-[#141414] p-6 sm:p-8 md:p-10 tp:p-10 sl:p-8 ml:p-5 lg:rounded-[2rem] lg:p-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_3fr] md:gap-12 tp:gap-8 sl:grid-cols-[2fr_3fr] sl:gap-10 ml:gap-6">
          
          {/*LEFT COLUMN*/}
          <div>
            <h2 className="font-inter text-4xl font-medium text-foreground">
                More{" "}
                <span className="bg-gradient-to-r from-[#E8A93F] to-[#C2003F] dark:from-[#FFF1D5] dark:to-[#FB003F] bg-clip-text text-transparent">
                    about
                </span>{" "}
                me
            </h2>
            <div className="mt-3 h-[2px] w-15 bg-gradient-to-r from-[#E8A93F] to-[#C2003F] dark:from-[#FFF1D5] dark:to-[#FB003F]" />
            <p className="mt-6 text-[15px] leading-relaxed text-neutral-600 dark:text-[#9F9F9F]">
                I am a{" "}
                <span className="text-[#C2185B] dark:text-[#FFA1A3]">Computer Engineer</span> from{" "}
                <span className="text-[#C2185B] dark:text-[#FFA1A3]">Polytechnic University of the Philippines</span>{" "}
                with a passion for designing and developing practical digital
                solutions. I specialize in{" "}
                <span className="text-[#C2185B] dark:text-[#FFA1A3]">System Development</span>, where I
                transform ideas into functional, user-friendly applications that
                solve real-world problems.
            </p>

            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600 dark:text-[#9F9F9F]">
                I enjoy building systems that combine intuitive interfaces with
                reliable back-end functionality. Whether it's creating dashboards,
                developing web applications, or designing database-driven
                solutions, I'm always eager to learn new technologies and improve
                my craft.
            </p>

            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600 dark:text-[#9F9F9F]">
                My goal is to become a software engineer who develops innovative,
                scalable, and impactful systems that make everyday processes
                simpler and more efficient.
            </p>
          </div>

          {/*RIGHT COLUMN*/}
          <div className="border-t border-black/10 dark:border-white/15 pt-8 md:border-t-0 md:border-l md:pl-12 md:pt-0 sl:border-t-0 sl:border-l sl:pl-10 sl:pt-0 ml:pt-6">      
            <p className="font-mono text-[12px] text-[#C2185B] dark:text-[#FFA1A3]">
              WHAT I DO
            </p>

            <h3 className="mt-2 text-3xl font-inter font-medium text-foreground">
              creating with{" "} 
              <span className="font-serif font-semibold italic bg-gradient-to-r from-[#E8A93F] to-[#C2003F] dark:from-[#FFF1D5] dark:to-[#FB003F] bg-clip-text text-transparent">code</span>, 
              <br />
              designing with{" "} 
              <span className="font-serif font-semibold italic bg-gradient-to-r from-[#E8A93F] to-[#C2003F] dark:from-[#FFF1D5] dark:to-[#FB003F] bg-clip-text text-transparent">purpose</span>
            </h3>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 tp:gap-4 sl:gap-4 ml:mt-5 ml:gap-3">
              {features.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-[#0F0F0F] p-5 tp:p-4 sl:p-4 ml:p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FB5A74]/10 dark:bg-[#FB5A74]/15 text-[#FF5C8D]">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <h4 className="font-inter font-semibold text-foreground">
                        {item.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-neutral-500 dark:text-[#999999]">
                        {item.desc}
                      </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}