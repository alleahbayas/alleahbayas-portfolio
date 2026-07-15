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

    return (
        <nav className="flex items-center px-16 py-9 font-mono font-medium">
            <div className="flex-1">
                <p>A. BAYAS</p>
            </div>

            <ul className="relative flex flex-1 justify-center gap-15 whitespace-nowrap">
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
                            className={`relative pb-2 transition-colors duration-300 ease-in-out ${
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

            <div className="flex flex-1 justify-end items-center gap-4 font-sans font-medium">
                <a
                    href="/alleahbayas-cv.pdf"
                    download
                    className="border-3 rounded-full border-[#FFE3CD] px-5 py-2 transition-all duration-300 hover:bg-[#FFE3CD] hover:text-black"
                >
                    CV
                </a>

                <div className="rounded-full bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] p-[3px]">
                    <a
                        href="#contact"
                        className="block rounded-full bg-[#0A0A0A] px-5 py-2 transition-all duration-300 hover:bg-transparent hover:text-black"
                    >
                        Let's Connect
                    </a>
                </div>
            </div>
        </nav>
    );
}