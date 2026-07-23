import Image from "next/image";

export default function Home() {
    return (
        <div className="relative w-full">
            <section
                id="home"
                className="relative scroll-mt-24 mx-auto flex w-full max-w-7xl flex-col text-center md:min-h-[calc(100vh-110px)] md:flex-row md:items-center md:justify-between md:gap-24 md:px-16 md:py-0 md:text-left tp:flex-col tp:min-h-0 tp:text-center tp:gap-10 tp:pt-16 tp:pb-12 tp:px-8 sl:flex-row sl:items-center sl:justify-between sl:text-left sl:min-h-0 sl:gap-10 sl:px-12 sl:py-10 ml:flex-row ml:items-center ml:justify-between ml:text-left ml:gap-6 ml:px-8 ml:py-8 ml:min-h-0"
            >
                {/* IMAGE */}
                <div className="relative order-1 h-[60vh] min-h-[340px] w-full z-0 md:order-2 md:flex md:h-auto md:w-auto md:-translate-x-20 md:flex-col md:items-center tp:order-1 tp:h-auto tp:min-h-0 tp:w-full tp:translate-x-0 tp:flex tp:flex-col tp:items-center sl:order-2 sl:flex sl:h-auto sl:w-auto sl:flex-col sl:items-center sl:-translate-x-0 ml:order-2 ml:flex ml:h-auto ml:min-h-0 ml:w-auto ml:flex-col ml:items-center ml:translate-x-0">
                    <div className="relative h-full w-full overflow-hidden md:mx-auto md:h-[460px] md:w-[350px] md:rounded-[2rem] tp:mx-auto tp:h-[480px] tp:w-full tp:max-w-[420px] tp:rounded-[2rem] sl:mx-auto sl:h-[440px] sl:w-[320px] sl:rounded-[2rem] ml:mx-auto ml:h-[440px] ml:w-[320px] ml:rounded-[2rem]">
                        <Image
                            src="/image1.png"
                            alt="Alleah Bayas"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent md:h-20" />
                    </div>
                </div>

                {/* TEXT */}
                <div className="relative order-2 -mt-16 flex flex-col z-10 items-center overflow-hidden px-6 pb-8 pt-0 md:order-1 md:mt-0 md:max-w-xl md:items-start md:overflow-visible md:bg-transparent md:px-0 md:py-0 tp:order-2 tp:mt-8 tp:overflow-visible tp:max-w-xl tp:items-center tp:px-0 tp:mx-auto sl:order-1 sl:mt-0 sl:items-start sl:overflow-visible sl:bg-transparent sl:px-0 sl:py-0 sl:max-w-lg ml:order-1 ml:mt-0 ml:items-start ml:overflow-visible ml:bg-transparent ml:px-0 ml:py-0 ml:max-w-sm">
                    <p className="font-mono text-xs tracking-[0.2em] text-[#8B4A50] dark:text-[#A66B6F] sm:text-sm tp:text-sm sl:text-sm">
                        MODEL NO. AMGB-2026 | CAVITE, PH
                    </p>

                    <h1 className="mt-3 font-inter text-4xl font-semibold leading-tight text-foreground sm:text-6xl md:mt-6 md:text-7xl md:leading-none tp:mt-6 tp:text-6xl tp:leading-[1.05] sl:mt-4 sl:text-6xl ml:mt-4 ml:text-6xl">
                        Hello! I'm{" "}
                        <span className="bg-gradient-to-r from-[#FF9A56] via-[#FF5C8D] to-[#FB0945] dark:from-[#FFE3CD] dark:via-[#FF5C8D] dark:to-[#FB0945] bg-clip-text text-transparent">
                            Alleah
                        </span>
                    </h1>

                    <p className="mt-3 max-w-xl font-inter text-[12px] leading-[1.6] text-foreground/70 sm:text-[15px] md:mt-8 md:text-[18px] md:leading-[1.7] tp:mt-5 tp:text-[16px] tp:leading-[1.7] tp:max-w-md sl:mt-4 sl:text-[15px] sl:leading-[1.65] ml:mt-4 ml:text-[15px] ml:leading-[1.65]">
                        a Computer Engineering graduate from Polytechnic
                        University of the Philippines that focuses on system and
                        software development. I design and build full-stack
                        systems — from interface design to production deployment
                        — with experience across public-sector systems and
                        client-facing web projects.
                    </p>

                    <div className="relative mt-6 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center md:mt-12 md:justify-start md:gap-6 tp:mt-10 tp:flex-row tp:justify-center tp:gap-5 sl:mt-8 sl:mb-10 sl:gap-4 ml:mt-8 ml:mb-10 ml:flex-row ml:justify-start ml:gap-3 mln:gap-2">
                        <a
                            href="#projects"
                            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FB0945] via-[#FF5C8D] to-[#FFE3CD] px-8 py-4 font-inter font-semibold text-black transition hover:scale-[1.02] sm:w-auto tp:w-auto tp:max-w-none sl:w-auto sl:max-w-none sl:whitespace-nowrap sl:px-5 sl:py-3 sl:text-sm ml:px-5 ml:py-2.5 ml:text-sm mln:whitespace-nowrap mln:px-3 mln:py-2 mln:text-xs"
                        >
                            View My Work
                            <span>→</span>
                        </a>

                        <div className="w-full max-w-xs rounded-full bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] p-[3px] sm:w-auto md:w-auto tp:w-auto tp:max-w-none sl:w-auto sl:max-w-none ml:max-w-none">
                            <a
                                href="/alleahbayas-cv.pdf"
                                download
                                className="flex items-center justify-center gap-2 rounded-full bg-background text-foreground px-8 py-4 font-inter transition hover:bg-transparent hover:text-black sl:whitespace-nowrap sl:px-5 sl:py-3 sl:text-sm ml:px-5 ml:py-2.5 ml:text-sm mln:whitespace-nowrap mln:px-3 mln:py-2 mln:text-xs"
                            >
                                Download CV
                                <span>↓</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Label — same corner style as tablet landscape */}
                <p className="relative z-20 order-3 mt-6 max-w-full whitespace-normal text-center text-[10px] tracking-[0.12em] font-mono text-[#C24565] dark:text-[#FFD8D9] sm:whitespace-nowrap sm:text-sm sm:tracking-[0.18em] md:absolute md:bottom-10 md:right-5 md:mt-0 md:-translate-x-1/2 tp:static tp:mt-8 tp:translate-x-0 tp:text-center tp:text-sm sl:absolute sl:bottom-4 sl:right-8 sl:mt-0 sl:-translate-x-1/2 sl:text-sm ml:absolute ml:bottom-8 ml:right-8 ml:mt-0 ml:-translate-x-1/2 ml:text-sm mln:right-4 mln:translate-x-0 mln:text-xs">
                    ALLEAH BAYAS | BSCPE | SYSTEM DEVELOPMENT
                </p>

                <div className="pointer-events-none absolute -left-52 top-[30%] hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#FB5A74]/15 dark:bg-[#FB5A74]/30 blur-[140px] md:block tp:block tp:-left-24 tp:top-[15%] tp:h-[320px] tp:w-[320px] sl:block sl:-left-24 sl:top-[15%] sl:h-[320px] sl:w-[320px]" />
            </section>

            {/* Desktop-only bottom-right glow */}
            <div className="pointer-events-none absolute right-0 bottom-[-200px] hidden h-[450px] w-[450px] translate-x-[70px] rounded-full bg-[#FFA6C1]/20 dark:bg-[#FFA6C1]/35 blur-[160px] md:block" />
        </div>
    );
}