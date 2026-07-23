"use client";

import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS & TOOLS" },
    { id: "experiences", label: "EXPERIENCES" },
    { id: "contact", label: "CONTACT" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [mobileOpen, setMobileOpen] = useState(false);

    const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const [indicator, setIndicator] = useState({
        left: 0,
        width: 50,
    });

    useEffect(() => {
        const sections = NAV_LINKS
            .map((link) => document.getElementById(link.id))
            .filter((el): el is HTMLElement => el !== null);

        const handleScroll = () => {
            if (window.scrollY < 10) {
                setActiveSection(sections[0]?.id ?? "home");
                return;
            }

            const scrollPos = window.scrollY + window.innerHeight / 2;

            let current = sections[0]?.id ?? "home";
            for (const section of sections) {
                if (section.offsetTop <= scrollPos) {
                    current = section.id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        const raf = requestAnimationFrame(handleScroll);
        window.addEventListener("load", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("load", handleScroll);
            cancelAnimationFrame(raf);
        };
    }, []);

    useEffect(() => {
        const activeEl = navRefs.current[activeSection];

        if (activeEl) {
            const isMobileLandscape =
                typeof window !== "undefined" &&
                window.matchMedia("(orientation: landscape) and (max-height: 500px)").matches;
            const underlineWidth = isMobileLandscape ? 24 : 50;

            setIndicator({
                left: activeEl.offsetLeft + (activeEl.offsetWidth - underlineWidth) / 2,
                width: underlineWidth,
            });
        }
    }, [activeSection]);

    // Lock body scroll while the mobile sidebar is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const handleMobileLinkClick = (id: string) => {
        setActiveSection(id);
        setMobileOpen(false);
    };

    return (
        <>
            <nav className="sticky top-0 z-50 hidden md:flex sl:flex ml:flex items-center px-6 md:px-6 lg:px-8 xl:px-16 2xl:px-30 sl:px-8 ml:px-6 py-3 md:py-4 lg:py-5 sl:py-5 ml:py-4 font-mono font-medium bg-white/70 backdrop-blur-md dark:bg-[#0F0F0F] dark:backdrop-blur-none text-[13px]">
                <div className="flex-1 flex-shrink-0">
                    <p className="whitespace-nowrap text-foreground text-[11px] md:text-[11px] lg:text-[13px] sl:text-[12px] ml:text-[10px]">A. BAYAS</p>
                </div>

                {/* Desktop nav links */}
                <ul className="relative hidden md:flex sl:flex ml:flex flex-1 justify-center gap-3 ml:gap-9 md:gap-9 lg:gap-8 xl:gap-9 2xl:gap-15 sl:gap-6 whitespace-nowrap pb-1 sl:pb-0 ml:pb-0">
                    {/* Sliding underline */}
                    <span
                        className="absolute bottom-[-10px] h-0.5 bg-[#FB003F] transition-all duration-300 ease-in-out"
                        style={{
                            left: indicator.left,
                            width: indicator.width,
                        }}
                    />

                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <a
                                ref={(el) => {
                                    navRefs.current[link.id] = el;
                                }}
                                href={`#${link.id}`}
                                onClick={() => setActiveSection(link.id)}
                                className={`relative inline-block pb-0 sl:pb-1 ml:pb-0.5 text-[10px] md:text-[10px] lg:text-[11px] xl:text-[13px] sl:text-[12px] ml:text-[9px] transition-colors duration-300 ease-in-out ${
                                    activeSection === link.id
                                        ? "text-[#B8860B] dark:text-[#FFF9D2]"
                                        : "text-foreground"
                                }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop right actions */}
                <div className="hidden md:flex sl:flex ml:flex flex-1 flex-shrink-0 justify-end items-center gap-2 md:gap-2 xl:gap-4 sl:gap-1.5 ml:gap-2 font-inter font-medium whitespace-nowrap">
                    <a
                        href="/alleahbayas-cv.pdf"
                        download
                        className="border-2 xl:border-3 rounded-full border-[#B8703E] dark:border-[#FFE3CD] text-foreground px-3 xl:px-5 py-1.5 xl:py-2 text-[10px] md:text-[10px] lg:text-[11px] xl:text-[13px] sl:px-2.5 sl:py-1 sl:text-[12px] ml:px-3 ml:py-1.5 ml:text-[9px] transition-all duration-300 hover:bg-[#FFE3CD] hover:text-black"
                    >
                        CV
                    </a>

                    <div className="rounded-full bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] p-[2px] xl:p-[3px]">
                        <a
                            href="#contact"
                            className="block rounded-full bg-background text-foreground dark:bg-[#0A0A0A] px-3 xl:px-5 py-1.5 xl:py-2 text-[10px] md:text-[10px] lg:text-[11px] xl:text-[13px] sl:px-2.5 sl:py-1 sl:text-[12px] ml:px-3 ml:py-1.5 ml:text-[9px] transition-all duration-300 hover:bg-transparent hover:text-black"
                        >
                            Let's Connect
                        </a>
                    </div>
                </div>
            </nav>
            
            <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className={`fixed top-6 right-6 z-50 flex md:hidden sl:hidden ml:hidden flex-col justify-center items-center gap-1.5 w-12 h-12 rounded-full bg-white/70 backdrop-blur-md dark:bg-[#0F0F0F] dark:backdrop-blur-none border border-[#B8703E]/30 dark:border-[#FFE3CD]/30 shadow-lg transition-opacity duration-300 ${
                    mobileOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            >
                <span className="block w-5 h-0.5 bg-foreground" />
                <span className="block w-5 h-0.5 bg-foreground" />
                <span className="block w-3.5 h-0.5 bg-foreground self-end mr-3.5" />
            </button>

            {/* Mobile overlay */}
            <div
                onClick={() => setMobileOpen(false)}
                className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 md:hidden sl:hidden ml:hidden ${
                    mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            />

            {/* Mobile sidebar */}
            <aside
                className={`fixed top-0 right-0 z-50 h-full w-[75%] max-w-[320px] bg-white/80 backdrop-blur-md dark:bg-[#0F0F0F] dark:backdrop-blur-none font-mono text-[13px] shadow-xl transition-transform duration-300 ease-in-out md:hidden sl:hidden ml:hidden ${
                    mobileOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between px-6 py-5">
                    <p className="font-medium text-foreground">A. BAYAS</p>
                    <button
                        type="button"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                        className="relative w-8 h-8"
                    >
                        <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-foreground -translate-x-1/2 -translate-y-1/2 rotate-45" />
                        <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-foreground -translate-x-1/2 -translate-y-1/2 -rotate-45" />
                    </button>
                </div>

                <ul className="flex flex-col gap-6 px-6 py-6">
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={() => handleMobileLinkClick(link.id)}
                                className={`transition-colors duration-300 ease-in-out ${
                                    activeSection === link.id
                                        ? "text-[#B8860B] dark:text-[#FFF9D2]"
                                        : "text-foreground"
                                }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col gap-4 px-6 py-6 font-inter font-medium">
                    <a
                        href="/alleahbayas-cv.pdf"
                        download
                        className="text-center border-3 rounded-full border-[#B8703E] dark:border-[#FFE3CD] text-foreground px-5 py-2 transition-all duration-300 hover:bg-[#FFE3CD] hover:text-black"
                    >
                        CV
                    </a>

                    <div className="rounded-full bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] p-[3px]">
                        <a
                            href="#contact"
                            onClick={() => handleMobileLinkClick("contact")}
                            className="block text-center rounded-full bg-background text-foreground dark:bg-[#0A0A0A] px-5 py-2 transition-all duration-300 hover:bg-transparent hover:text-black"
                        >
                            Let's Connect
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}