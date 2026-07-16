import Image from "next/image";

export default function Home() {
    return (
        <div className="relative w-full">
            <section
                id="home"
                className="relative scroll-mt-24 mx-auto flex w-full max-w-7xl flex-col text-center lg:min-h-[calc(100vh-110px)] lg:flex-row lg:items-center lg:justify-between lg:gap-24 lg:px-16 lg:py-0 lg:text-left"
            >
                {/* IMAGE */}
                <div className="relative order-1 h-[46vh] min-h-[340px] w-full lg:order-2 lg:flex lg:h-auto lg:w-auto lg:-translate-x-20 lg:flex-col lg:items-center">
                    <div className="relative h-full w-full overflow-hidden lg:mx-auto lg:h-[460px] lg:w-[350px] lg:rounded-[2rem]">
                        <Image
                            src="/image1.png"
                            alt="Alleah Bayas"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent lg:h-20 lg:via-[#0A0A0Acc]" />
                    </div>

                    {/* Top-left warm glow — mobile/tablet only, attached to photo */}
                    <div className="pointer-events-none absolute -left-16 -top-10 h-[220px] w-[220px] rounded-full bg-[#E8A968]/40 blur-[80px] lg:hidden" />
                </div>

                {/* TEXT */}
                <div className="relative order-2 -mt-8 flex flex-col items-center bg-[#0A0A0A] px-6 pb-12 pt-0 lg:order-1 lg:mt-0 lg:max-w-xl lg:items-start lg:bg-transparent lg:px-0 lg:py-0">
                    <p className="font-mono text-xs tracking-[0.2em] text-[#A66B6F] sm:text-sm">
                        MODEL NO. AMGB-2026 | CAVITE, PH
                    </p>

                    <h1 className="mt-4 font-inter text-4xl font-semibold leading-tight text-white sm:text-6xl lg:mt-6 lg:text-7xl lg:leading-none">
                        Hello! I'm{" "}
                        <span className="bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] bg-clip-text text-transparent">
                            Alleah
                        </span>
                    </h1>

                    <p className="mt-4 max-w-xl font-inter text-[15px] leading-[1.7] text-[#CFCFCF] sm:text-[17px] lg:mt-8 lg:text-[18px] lg:leading-[1.7]">
                        a Computer Engineering graduate from Polytechnic
                        University of the Philippines that focuses on system and
                        software development. I design and build full-stack
                        systems — from interface design to production deployment
                        — with experience across public-sector systems and
                        client-facing web projects.
                    </p>

                    <div className="relative mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center lg:mt-12 lg:justify-start lg:gap-6">
                        <a
                            href="#projects"
                            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FB0945] via-[#FF5C8D] to-[#FFE3CD] px-8 py-4 font-inter font-semibold text-black transition hover:scale-[1.02] sm:w-auto"
                        >
                            View My Work
                            <span>→</span>
                        </a>

                        <div className="w-full max-w-xs rounded-full bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] p-[3px] sm:w-auto">
                            <a
                                href="/alleahbayas-cv.pdf"
                                download
                                className="flex items-center justify-center gap-2 rounded-full bg-[#0A0A0A] px-8 py-4 font-inter text-white transition hover:bg-transparent hover:text-black"
                            >
                                Download CV
                                <span>↓</span>
                            </a>
                        </div>
                    </div>

                    <p className="mt-6 font-mono text-xs tracking-[0.18em] text-[#FFD8D9] sm:text-sm lg:hidden">
                        ALLEAH BAYAS | BSCPE | SYSTEM DEVELOPMENT
                    </p>

                    {/* Bottom-right pink glow — visible on mobile now */}
                    <div className="pointer-events-none absolute -bottom-16 -right-10 h-[260px] w-[260px] rounded-full bg-[#FFA6C1]/35 blur-[90px] lg:hidden" />
                </div>

                {/* Desktop label */}
                <p className="hidden whitespace-nowrap font-mono text-sm tracking-[0.18em] text-[#FFD8D9] lg:absolute lg:bottom-10 lg:right-5 lg:block lg:-translate-x-1/2">
                    ALLEAH BAYAS | BSCPE | SYSTEM DEVELOPMENT
                </p>

                {/* Desktop-only left glow — positioned against the full section, not the image */}
                <div className="pointer-events-none absolute -left-52 top-[30%] hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#FB5A74]/30 blur-[140px] lg:block" />
            </section>

            {/* Desktop-only bottom-right glow (unchanged) */}
            <div className="pointer-events-none absolute right-0 bottom-[-200px] hidden h-[450px] w-[450px] translate-x-[70px] rounded-full bg-[#FFA6C1]/35 blur-[160px] lg:block" />
        </div>
    );
}