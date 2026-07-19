import Image from "next/image";

export default function Home() {
    return (
        <div className="relative w-full">
            <section
                id="home"
                className="relative scroll-mt-24 mx-auto flex w-full max-w-7xl flex-col text-center md:min-h-[calc(100vh-110px)] md:flex-row md:items-center md:justify-between md:gap-24 md:px-16 md:py-0 md:text-left"
            >
                {/* IMAGE */}
                <div className="relative order-1 h-[60vh] min-h-[340px] w-full md:order-2 md:flex md:h-auto md:w-auto md:-translate-x-20 md:flex-col md:items-center">
                    <div className="relative h-full w-full overflow-hidden md:mx-auto md:h-[460px] md:w-[350px] md:rounded-[2rem]">
                        <Image
                            src="/image1.png"
                            alt="Alleah Bayas"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent md:h-20" />
                    </div>

                    {/* Mobile-only Top-left Glow */}
                    <div
                        className="pointer-events-none absolute inset-0 md:hidden"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at -10% 8%, rgba(251,90,116,.35) 0%, rgba(251,90,116,.18) 20%, transparent 42%)",
                        }}
                    />
                </div>

                {/* TEXT */}
                <div className="relative order-2 -mt-16 flex flex-col items-center overflow-hidden px-6 pb-8 pt-0 md:order-1 md:mt-0 md:max-w-xl md:items-start md:overflow-visible md:bg-transparent md:px-0 md:py-0">
                    <p className="font-mono text-xs tracking-[0.2em] text-[#A66B6F] sm:text-sm">
                        MODEL NO. AMGB-2026 | CAVITE, PH
                    </p>

                    <h1 className="mt-3 font-inter text-4xl font-semibold leading-tight text-white sm:text-6xl md:mt-6 md:text-7xl md:leading-none">
                        Hello! I'm{" "}
                        <span className="bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] bg-clip-text text-transparent">
                            Alleah
                        </span>
                    </h1>

                    <p className="mt-3 max-w-xl font-inter text-[12px] leading-[1.6] text-[#CFCFCF] sm:text-[15px] md:mt-8 md:text-[18px] md:leading-[1.7]">
                        a Computer Engineering graduate from Polytechnic
                        University of the Philippines that focuses on system and
                        software development. I design and build full-stack
                        systems — from interface design to production deployment
                        — with experience across public-sector systems and
                        client-facing web projects.
                    </p>

                    <div className="relative mt-6 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center md:mt-12 md:justify-start md:gap-6">
                        <a
                            href="#projects"
                            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FB0945] via-[#FF5C8D] to-[#FFE3CD] px-8 py-4 font-inter font-semibold text-black transition hover:scale-[1.02] sm:w-auto"
                        >
                            View My Work
                            <span>→</span>
                        </a>

                        <div className="w-full max-w-xs rounded-full bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] p-[3px] sm:w-auto md:w-auto">
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

                    <p className="mt-6 font-mono text-xs tracking-[0.18em] text-[#FFD8D9] sm:text-sm md:hidden">
                        ALLEAH BAYAS | BSCPE | SYSTEM DEVELOPMENT
                    </p>
                </div>

                {/* Desktop label */}
                <p className="hidden whitespace-nowrap font-mono text-sm tracking-[0.18em] text-[#FFD8D9] md:absolute md:bottom-10 md:right-5 md:block md:-translate-x-1/2">
                    ALLEAH BAYAS | BSCPE | SYSTEM DEVELOPMENT
                </p>

                {/* Desktop-only left glow */}
                <div className="pointer-events-none absolute -left-52 top-[30%] hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#FB5A74]/30 blur-[140px] md:block" />
            </section>

            {/* Desktop-only bottom-right glow */}
            <div className="pointer-events-none absolute right-0 bottom-[-200px] hidden h-[450px] w-[450px] translate-x-[70px] rounded-full bg-[#FFA6C1]/35 blur-[160px] md:block" />
        </div>
    );
}