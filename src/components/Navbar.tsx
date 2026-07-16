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

    // Added
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

    // Added
    useEffect(() => {
        const activeEl = navRefs.current[activeSection];

        if (activeEl) {
            setIndicator({
                left: activeEl.offsetLeft + (activeEl.offsetWidth - 50) / 2,
                width: 50,
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
            <nav className="sticky top-0 z-50 hidden lg:flex items-center px-6 lg:px-8 xl:px-16 2xl:px-30 py-5 font-mono font-medium bg-[#0F0F0F] text-[13px]">
                <div className="flex-1 flex-shrink-0">
                    <p className="whitespace-nowrap">A. BAYAS</p>
                </div>

                {/* Desktop nav links */}
                <ul className="relative hidden lg:flex flex-1 justify-center gap-4 xl:gap-8 2xl:gap-15 whitespace-nowrap">
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
                                className={`relative pb-2 text-[11px] xl:text-[13px] transition-colors duration-300 ease-in-out ${
                                    activeSection === link.id
                                        ? "text-[#FFF9D2]"
                                        : "text-white"
                                }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop right actions */}
                <div className="hidden lg:flex flex-1 flex-shrink-0 justify-end items-center gap-2 xl:gap-4 font-inter font-medium whitespace-nowrap">
                    <a
                        href="/alleahbayas-cv.pdf"
                        download
                        className="border-2 xl:border-3 rounded-full border-[#FFE3CD] px-3 xl:px-5 py-1.5 xl:py-2 text-[11px] xl:text-[13px] transition-all duration-300 hover:bg-[#FFE3CD] hover:text-black"
                    >
                        CV
                    </a>

                    <div className="rounded-full bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] p-[2px] xl:p-[3px]">
                        <a
                            href="#contact"
                            className="block rounded-full bg-[#0A0A0A] px-3 xl:px-5 py-1.5 xl:py-2 text-[11px] xl:text-[13px] transition-all duration-300 hover:bg-transparent hover:text-black"
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
                className={`fixed top-6 right-6 z-50 flex lg:hidden flex-col justify-center items-center gap-1.5 w-12 h-12 rounded-full bg-[#0F0F0F] border border-[#FFE3CD]/30 shadow-lg transition-opacity duration-300 ${
                    mobileOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            >
                <span className="block w-5 h-0.5 bg-white" />
                <span className="block w-5 h-0.5 bg-white" />
                <span className="block w-3.5 h-0.5 bg-white self-end mr-3.5" />
            </button>

            {/* Mobile overlay */}
            <div
                onClick={() => setMobileOpen(false)}
                className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 lg:hidden ${
                    mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            />

            {/* Mobile sidebar */}
            <aside
                className={`fixed top-0 right-0 z-50 h-full w-[75%] max-w-[320px] bg-[#0F0F0F] font-mono text-[13px] shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
                    mobileOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between px-6 py-5">
                    <p className="font-medium">A. BAYAS</p>
                    <button
                        type="button"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                        className="relative w-8 h-8"
                    >
                        <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-white -translate-x-1/2 -translate-y-1/2 rotate-45" />
                        <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-white -translate-x-1/2 -translate-y-1/2 -rotate-45" />
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
                                        ? "text-[#FFF9D2]"
                                        : "text-white"
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
                        className="text-center border-3 rounded-full border-[#FFE3CD] px-5 py-2 transition-all duration-300 hover:bg-[#FFE3CD] hover:text-black"
                    >
                        CV
                    </a>

                    <div className="rounded-full bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] p-[3px]">
                        <a
                            href="#contact"
                            onClick={() => handleMobileLinkClick("contact")}
                            className="block text-center rounded-full bg-[#0A0A0A] px-5 py-2 transition-all duration-300 hover:bg-transparent hover:text-black"
                        >
                            Let's Connect
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}