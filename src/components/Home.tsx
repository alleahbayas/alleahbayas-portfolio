import Image from "next/image";

export default function Home() {
    return (
        <div className="relative w-full">
            <section
                id="home"
                className="relative scroll-mt-24 mx-auto flex min-h-[calc(100vh-110px)] max-w-7xl items-center justify-between gap-24 px-16"
            >
                {/* LEFT */}
                <div className="relative max-w-xl">
                    <p className="font-mono text-sm tracking-[0.2em] text-[#A66B6F]">
                        MODEL NO. AMGB-2026 | CAVITE, PH
                    </p>

                    <h1 className="mt-6 font-inter text-7xl font-semibold leading-none text-white">
                        Hello! I'm{" "}
                        <span className="bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] bg-clip-text text-transparent">
                            Alleah
                        </span>
                    </h1>

                    <p className="mt-8 font-inter text-[18px] leading-[1.7] text-[#CFCFCF]">
                        a Computer Engineering graduate from Polytechnic University
                        of the Philippines that focuses on system and software
                        development. I design and build full-stack systems — from
                        interface design to production deployment — with experience
                        across public-sector systems and client-facing web projects.
                    </p>

                    <div className="mt-12 flex items-center gap-6">
                        <a
                            href="#projects"
                            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FB0945] via-[#FF5C8D] to-[#FFE3CD] px-8 py-4 font-inter font-semibold text-black transition hover:scale-[1.02]"
                        >
                            View My Work
                            <span>→</span>
                        </a>

                        <div className="rounded-full bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] p-[3px]">
                            <a
                                href="/alleahbayas-cv.pdf"
                                download
                                className="flex items-center gap-2 rounded-full bg-[#0A0A0A] px-8 py-4 font-inter text-white transition hover:bg-transparent hover:text-black"
                            >
                                Download CV
                                <span>↓</span>
                            </a>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#FB5A74]/30 blur-[140px]" />
                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-center -translate-x-20">
                    <div className="relative h-[460px] w-[350px] overflow-hidden rounded-[2rem]">
                        <Image
                            src="/image1.png"
                            alt="Alleah Bayas"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0Acc] to-transparent" />
                    </div>
                </div>

                <p className="absolute bottom-10 right-5 -translate-x-1/2 whitespace-nowrap font-mono text-sm tracking-[0.18em] text-[#FFD8D9]">
                    ALLEAH BAYAS | BSCPE | SYSTEM DEVELOPMENT
                </p>
            </section>

            {/* Bottom-right glow, anchored to the window edge */}
            <div className="pointer-events-none absolute right-0 bottom-[-200px] h-[450px] w-[450px] translate-x-[70px] rounded-full bg-[#FFA6C1]/35 blur-[160px]" />
        </div>
    );
}