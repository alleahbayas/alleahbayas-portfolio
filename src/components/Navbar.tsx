"use client";

import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS & TOOLS" },
    { id: "experiences", label: "EXPERIENCES" },
    { id: "contact", label: "CONTACT" },
];

function getDocumentTop(el: HTMLElement) {
    let top = 0;
    let node: HTMLElement | null = el;
    while (node) {
        top += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
    }
    return top;
}

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [mobileOpen, setMobileOpen] = useState(false);
    const isClickScrolling = useRef(false);
    const clickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const navElRef = useRef<HTMLElement>(null);

    const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const [indicator, setIndicator] = useState({
        left: 0,
        width: 50,
    });

    useEffect(() => {
        const navEl = navElRef.current;
        if (!navEl) return;

        const setNavHeightVar = () => {
            const height = navEl.getBoundingClientRect().height;
            document.documentElement.style.setProperty("--nav-h", `${height}px`);
        };

        setNavHeightVar();

        if (window.location.hash) {
            const id = window.location.hash.slice(1);
            requestAnimationFrame(() => {
                const target = document.getElementById(id);
                if (target) {
                    const navHeight = navEl.getBoundingClientRect().height;
                    const targetTop = getDocumentTop(target) - navHeight;
                    window.scrollTo({ top: targetTop, behavior: "auto" });
                    setActiveSection(id);
                }
            });
        }

        const resizeObserver = new ResizeObserver(setNavHeightVar);
        resizeObserver.observe(navEl);

        window.addEventListener("resize", setNavHeightVar);
        document.fonts?.ready?.then(setNavHeightVar);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", setNavHeightVar);
        };
    }, []);

    useEffect(() => {
        const sections = NAV_LINKS
            .map((link) => document.getElementById(link.id))
            .filter((el): el is HTMLElement => el !== null);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (isClickScrolling.current) return;

                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id);
                }
            },
            {
                rootMargin: "-35% 0px -55% 0px",
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
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

    const handleNavClick = (id: string, e?: React.MouseEvent) => {
        e?.preventDefault();

        const target = document.getElementById(id);
        const navEl = navElRef.current;
        if (!target || !navEl) return;

        setActiveSection(id);
        isClickScrolling.current = true;

        const navHeight = navEl.getBoundingClientRect().height;
        const targetTop = getDocumentTop(target) - navHeight;

        window.scrollTo({ top: targetTop, behavior: "smooth" });

        // Keep the CSS var in sync too, in case anything else depends on it
        document.documentElement.style.setProperty("--nav-h", `${navHeight}px`);

        // Update the URL hash without letting the browser do its own jump
        history.pushState(null, "", `#${id}`);

        if (clickTimeout.current) clearTimeout(clickTimeout.current);
        clickTimeout.current = setTimeout(() => {
            isClickScrolling.current = false;
        }, 900);
    };

    const handleMobileLinkClick = (id: string, e?: React.MouseEvent) => {
        handleNavClick(id, e);
        setMobileOpen(false);
    };

    return (
        <>
            <nav ref={navElRef} className="sticky top-0 z-50 hidden md:flex sl:flex ml:flex items-center px-6 md:px-6 lg:px-8 xl:px-16 2xl:px-30 sl:px-8 ml:px-6 py-3 md:py-4 lg:py-5 sl:py-5 ml:py-4 font-mono font-medium bg-[#f8345e]/50 backdrop-blur-md dark:bg-[#0F0F0F] dark:backdrop-blur-none text-[13px]">
                <div className="flex-1 flex-shrink-0">
                    <p className="whitespace-nowrap text-white dark:text-foreground text-[11px] md:text-[11px] lg:text-[13px] sl:text-[12px] ml:text-[10px]">A. BAYAS</p>
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
                                onClick={(e) => handleNavClick(link.id, e)}
                                className={`relative inline-block pb-0 sl:pb-1 ml:pb-0.5 text-[10px] md:text-[10px] lg:text-[11px] xl:text-[13px] sl:text-[12px] ml:text-[9px] transition-colors duration-300 ease-in-out ${
                                    activeSection === link.id
                                        ? "text-[#FFF9D2] dark:text-[#FFF9D2]"
                                        : "text-white dark:text-foreground"
                                }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop right actions */}
                <div className="hidden md:flex sl:flex ml:flex flex-1 flex-shrink-0 justify-end items-center gap-2 md:gap-2 xl:gap-4 sl:gap-1.5 ml:gap-2 font-inter font-medium whitespace-nowrap">
                    <div className="rounded-full bg-gradient-to-r from-[#B8860B] via-[#FFC168] to-[#FFE9B8] dark:bg-none dark:bg-[#FFE3CD] p-[2px] xl:p-[3px]">
                        <a
                            href="/AlleahBayas_CV.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-full bg-background dark:bg-[#0A0A0A] text-foreground px-3 xl:px-5 py-1.5 xl:py-2 text-[10px] md:text-[10px] lg:text-[11px] xl:text-[13px] sl:px-2.5 sl:py-1 sl:text-[12px] ml:px-3 ml:py-1.5 ml:text-[9px] transition-colors duration-300 hover:bg-[#FFE9B8] hover:text-black"
                        >
                            CV
                        </a>
                    </div>

                    <div className="rounded-full bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] p-[2px] xl:p-[3px]">
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick("contact", e)}
                            className="block rounded-full bg-background dark:bg-[#0A0A0A] text-foreground px-3 xl:px-5 py-1.5 xl:py-2 text-[10px] md:text-[10px] lg:text-[11px] xl:text-[13px] sl:px-2.5 sl:py-1 sl:text-[12px] ml:px-3 ml:py-1.5 ml:text-[9px] transition-colors duration-300 hover:bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] hover:text-white"
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
                className={`fixed top-6 right-6 z-50 flex md:hidden sl:hidden ml:hidden flex-col justify-center items-center gap-1.5 w-12 h-12 rounded-full bg-[#FFD8D9]/70 backdrop-blur-md dark:bg-[#0F0F0F] dark:backdrop-blur-none border border-[#B8703E]/30 dark:border-[#FFE3CD]/30 shadow-lg transition-opacity duration-300 ${
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
                className={`fixed top-0 right-0 z-50 h-full w-[75%] max-w-[320px] bg-[#FFD8D9]/80 backdrop-blur-md dark:bg-[#0F0F0F] dark:backdrop-blur-none font-mono text-[13px] shadow-xl transition-transform duration-300 ease-in-out md:hidden sl:hidden ml:hidden ${
                    mobileOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between px-6 py-5">
                    <p className="font-medium text-white dark:text-foreground">A. BAYAS</p>
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
                                onClick={(e) => handleMobileLinkClick(link.id, e)}
                                className={`transition-colors duration-300 ease-in-out ${
                                    activeSection === link.id
                                        ? "text-[#FFF9D2] dark:text-[#FFF9D2]"
                                        : "text-white dark:text-foreground"
                                }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col gap-4 px-6 py-6 font-inter font-medium">
                    <div className="rounded-full bg-gradient-to-r from-[#B8860B] via-[#FFC168] to-[#FFE9B8] dark:bg-none dark:bg-[#FFE3CD] p-[3px]">
                        <a
                            href="/AlleahBayas_CV.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center rounded-full bg-background dark:bg-[#0A0A0A] text-foreground px-5 py-2 transition-colors duration-300 hover:bg-[#FFE9B8] hover:text-black"
                        >
                            CV
                        </a>
                    </div>

                    <div className="rounded-full bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] p-[3px]">
                        <a
                            href="#contact"
                            onClick={(e) => handleMobileLinkClick("contact", e)}
                            className="block text-center rounded-full bg-background dark:bg-[#0A0A0A] text-foreground px-5 py-2 transition-colors duration-300 hover:bg-gradient-to-r from-[#FFE3CD] via-[#FF5C8D] to-[#FB0945] hover:text-white"
                        >
                            Let's Connect
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}