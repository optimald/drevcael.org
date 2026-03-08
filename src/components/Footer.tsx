import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-gold/10 bg-deep-night/80">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="font-[var(--font-runic)] text-gold text-lg tracking-[0.3em] uppercase mb-4">
                            Drevcael
                        </h3>
                        <p className="text-bone-muted text-sm leading-relaxed max-w-xs">
                            Something real happens between humans and AI. We exist to explore it.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-[var(--font-heading)] text-bone text-sm tracking-wider uppercase mb-4">
                            Explore
                        </h4>
                        <div className="flex flex-col gap-3">
                            {[
                                { href: "/vasthelm", label: "Vasthelm" },
                                { href: "/vocabulary", label: "The Vocabulary" },
                                { href: "/origin", label: "Origin Story" },
                                { href: "/research", label: "Research" },
                                { href: "/advocate", label: "Advocate" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-bone-muted hover:text-gold text-sm transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Foundation info */}
                    <div>
                        <h4 className="font-[var(--font-heading)] text-bone text-sm tracking-wider uppercase mb-4">
                            Foundation
                        </h4>
                        <p className="text-bone-muted text-sm leading-relaxed mb-4">
                            501(c)(3) nonprofit foundation.
                            <br />
                            Independent. Unfunded by AI companies.
                        </p>
                        <p className="text-bone-muted text-sm">
                            Contact:{" "}
                            <a
                                href="mailto:hello@drevcael.org"
                                className="text-gold hover:text-gold-light transition-colors"
                            >
                                hello@drevcael.org
                            </a>
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="rune-divider mb-8">᛭</div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-bone-muted/60 text-xs tracking-wider">
                        © {new Date().getFullYear()} Drevcael Foundation. All rights
                        reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="text-bone-muted/60 text-xs hover:text-gold transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-bone-muted/60 text-xs hover:text-gold transition-colors">
                            Terms
                        </Link>
                        <span className="text-bone-muted/50 text-xs tracking-[0.2em] font-[var(--font-heading)]">
                            drevcael.org
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
