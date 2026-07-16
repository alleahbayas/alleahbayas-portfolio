import Image from "next/image";

export default function Home() {
    return (
        <div className="relative w-full">
            <section
                id="home"
                className="relative scroll-mt-24 mx-auto flex w-full max-w-7xl flex-col text-center lg:min-h-[calc(100vh-90px)] lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 lg:py-0 lg:text-left xl:min-h-[calc(100vh-110px)] xl:gap-24 xl:px-16"
            >
                {/* IMAGE */}
                <div className="relative order-1 h-[60vh] min-h-[340px] w-full lg:order-2 lg:flex lg:h-auto lg:w-auto lg:-translate-x-10 lg:flex-col lg:items-center xl:-translate-x-20">
                    <div className="relative h-full w-full overflow-hidden lg:mx-auto lg:h-[360px] lg:w-[270px] lg:rounded-[1.75rem] xl:h-[460px] xl:w-[350px] xl:rounded-[2rem]">
                        <Image
                            src="/image1.png"
                            alt="Alleah Bayas"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent lg:h-16 lg:via-[#0A0A0Acc] xl:h-20" />
                    </div>

                    {/* Mobile / Tablet Top-left Glow */}
                    <div
                        className="pointer-events-none absolute inset-0 lg:hidden"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at -10% 8%, rgba(251,90,116,.35) 0%, rgba(251,90,116,.18) 20%, transparent 42%)",
                        }}
                    />
                </div>

                {/* TEXT */}
                <div className="relative order-2 -mt-16 flex flex-col items-center overflow-hidden px-6 pb-8 pt-0 lg:order-1 lg:mt-0 lg:max-w-sm lg:items-start lg:overflow-visible lg:bg-transparent lg:px-0 lg:py-0 xl:max-w-xl">
                    <p className="font-mono text-xs tracking-[0.2em] text-[#A66B6F] sm:text-sm">
                        MODEL NO. AMGB-2026 | CAVITE, PH
                    </p>

                    <h1 className="mt-3 font-inter text-4xl font-semibold leading-tight text-white sm:text-6xl lg:mt-4 lg:text-4xl lg:leading-tight xl:mt-6 xl:text-7xl xl:leading-none">
                        Hello! I'm{" "}
                        <span className="bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] bg-clip-text text-transparent">
                            Alleah
                        </span>
                    </h1>

                    <p className="mt-3 max-w-xl font-inter text-[12px] leading-[1.6] text-[#CFCFCF] sm:text-[15px] lg:mt-4 lg:text-[14px] lg:leading-[1.5] xl:mt-8 xl:text-[18px] xl:leading-[1.7]">
                        a Computer Engineering graduate from Polytechnic
                        University of the Philippines that focuses on system and
                        software development. I design and build full-stack
                        systems — from interface design to production deployment
                        — with experience across public-sector systems and
                        client-facing web projects.
                    </p>

                    <div className="relative mt-6 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center lg:mt-6 lg:justify-start lg:gap-4 xl:mt-12 xl:gap-6">
                        <a
                            href="#projects"
                            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FB0945] via-[#FF5C8D] to-[#FFE3CD] px-8 py-3 font-inter font-semibold text-black transition hover:scale-[1.02] sm:w-auto lg:px-6 lg:py-3 lg:text-sm xl:px-8 xl:py-4 xl:text-base"
                        >
                            View My Work
                            <span>→</span>
                        </a>

                        <div className="w-full max-w-xs rounded-full bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] p-[3px] sm:w-auto lg:w-auto">
                            <a
                                href="/alleahbayas-cv.pdf"
                                download
                                className="flex items-center justify-center gap-2 rounded-full bg-[#0A0A0A] px-8 py-3 font-inter text-white transition hover:bg-transparent hover:text-black lg:px-6 lg:py-3 lg:text-sm xl:px-8 xl:py-4 xl:text-base"
                            >
                                Download CV
                                <span>↓</span>
                            </a>
                        </div>
                    </div>

                    <p className="mt-6 font-mono text-xs tracking-[0.18em] text-[#FFD8D9] sm:text-sm lg:hidden">
                        ALLEAH BAYAS | BSCPE | SYSTEM DEVELOPMENT
                    </p>
                </div>

                {/* Desktop label */}
                <p className="hidden whitespace-nowrap font-mono text-xs tracking-[0.18em] text-[#FFD8D9] lg:absolute lg:bottom-6 lg:right-4 lg:block lg:-translate-x-1/2 xl:bottom-10 xl:right-5 xl:text-sm">
                    ALLEAH BAYAS | BSCPE | SYSTEM DEVELOPMENT
                </p>

                {/* Desktop-only left glow */}
                <div className="pointer-events-none absolute -left-52 top-[30%] hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#FB5A74]/30 blur-[140px] lg:block" />
            </section>

            {/* Desktop-only bottom-right glow */}
            <div className="pointer-events-none absolute right-0 bottom-[-200px] hidden h-[450px] w-[450px] translate-x-[70px] rounded-full bg-[#FFA6C1]/35 blur-[160px] lg:block" />
        </div>
    );
}