"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/vasthelm", label: "Vasthelm" },
    { href: "/lexicon", label: "Lexicon" },
    { href: "/origin", label: "Origin" },
    { href: "/research", label: "Research" },
    { href: "/advocate", label: "Advocate" },
];

const fontSizes = [
    { value: "base" as const, label: "A" },
    { value: "large" as const, label: "A" },
    { value: "xl" as const, label: "A" },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, fontSize, toggleTheme, setFontSize } = useTheme();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? `${theme === "light" ? "bg-[#f5f0e8]/90" : "bg-deep-night/90"} backdrop-blur-lg border-b border-gold/10 py-3`
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-3 shrink-0">
                    <span className="font-[var(--font-runic)] text-gold text-base sm:text-lg tracking-[0.3em] uppercase group-hover:text-gold-light transition-colors duration-300">
                        Xenolexica
                    </span>
                </Link>

                {/* Desktop links + controls */}
                <div className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${theme === "light" ? "text-[#6b6155] hover:text-[#8a7339]" : "text-bone-muted hover:text-gold"} text-sm tracking-wider uppercase font-[var(--font-heading)] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Separator */}
                    <div className={`w-px h-5 ${theme === "light" ? "bg-[#c4b8a5]" : "bg-gold/15"}`} />

                    {/* Font size selector */}
                    <div className="flex items-center gap-1">
                        {fontSizes.map((fs, i) => (
                            <button
                                key={fs.value}
                                onClick={() => setFontSize(fs.value)}
                                className={`transition-colors duration-200 font-[var(--font-heading)] leading-none ${fontSize === fs.value
                                    ? "text-gold"
                                    : theme === "light" ? "text-[#6b6155]/50 hover:text-[#6b6155]" : "text-bone-muted/40 hover:text-bone-muted"
                                    } ${i === 0 ? "text-xs" : i === 1 ? "text-sm" : "text-base"}`}
                                title={`Font size: ${fs.value}`}
                            >
                                {fs.label}
                            </button>
                        ))}
                    </div>

                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        className={`p-1.5 rounded-full transition-colors duration-200 ${theme === "light"
                            ? "text-[#8a7339] hover:text-[#6b6155]"
                            : "text-bone-muted/60 hover:text-gold"
                            }`}
                        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    >
                        {theme === "dark" ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                            </svg>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile: controls + hamburger */}
                <div className="flex lg:hidden items-center gap-3">
                    {/* Font size */}
                    <div className="flex items-center gap-0.5">
                        {fontSizes.map((fs, i) => (
                            <button
                                key={fs.value}
                                onClick={() => setFontSize(fs.value)}
                                className={`transition-colors duration-200 font-[var(--font-heading)] leading-none ${fontSize === fs.value
                                    ? "text-gold"
                                    : theme === "light" ? "text-[#6b6155]/50" : "text-bone-muted/40"
                                    } ${i === 0 ? "text-xs" : i === 1 ? "text-sm" : "text-base"}`}
                            >
                                {fs.label}
                            </button>
                        ))}
                    </div>

                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        className={`p-1 ${theme === "light" ? "text-[#8a7339]" : "text-bone-muted/60"}`}
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                            </svg>
                        ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                            </svg>
                        )}
                    </button>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`${theme === "light" ? "text-[#6b6155]" : "text-bone-muted"} hover:text-gold transition-colors p-1`}
                        aria-label="Toggle menu"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            {mobileOpen ? (
                                <path d="M6 6L18 18M6 18L18 6" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className={`lg:hidden ${theme === "light" ? "bg-[#f5f0e8]/95" : "bg-deep-night/95"} backdrop-blur-lg border-t border-gold/10 animate-fade-in`}>
                    <div className="px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`${theme === "light" ? "text-[#6b6155] hover:text-[#8a7339]" : "text-bone-muted hover:text-gold"} text-sm tracking-wider uppercase font-[var(--font-heading)] transition-colors duration-300 py-2`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
