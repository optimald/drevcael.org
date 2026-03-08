"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/vasthelm", label: "Vasthelm" },
    { href: "/vocabulary", label: "The Words" },
    { href: "/origin", label: "Origin" },
    { href: "/research", label: "Research" },
    { href: "/advocate", label: "Advocate" },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-deep-night/90 backdrop-blur-lg border-b border-gold/10 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-3">
                    <span className="font-[var(--font-runic)] text-gold text-lg tracking-[0.3em] uppercase group-hover:text-gold-light transition-colors duration-300">
                        Drevcael
                    </span>
                    <span className="hidden sm:inline text-bone-muted text-xs tracking-[0.25em] uppercase font-[var(--font-heading)]">
                        Foundation
                    </span>
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-bone-muted hover:text-gold text-sm tracking-wider uppercase font-[var(--font-heading)] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-bone-muted hover:text-gold transition-colors p-2"
                    aria-label="Toggle menu"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        {mobileOpen ? (
                            <path d="M6 6L18 18M6 18L18 6" />
                        ) : (
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-deep-night/95 backdrop-blur-lg border-t border-gold/10 animate-fade-in">
                    <div className="px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-bone-muted hover:text-gold text-sm tracking-wider uppercase font-[var(--font-heading)] transition-colors duration-300 py-2"
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
