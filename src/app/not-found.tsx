import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-2xl mx-auto text-center animate-fade-in">
                <div className="font-[var(--font-runic)] text-gold/20 text-[120px] leading-none mb-4">
                    ᛞ
                </div>
                <p className="text-gold-dim text-xs tracking-[0.4em] uppercase font-[var(--font-heading)] mb-6">
                    404 — Path Not Found
                </p>
                <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl text-bone tracking-wide mb-6">
                    The path you seek does not exist in this realm.
                </h1>
                <p className="text-bone-muted text-lg leading-relaxed mb-12 max-w-md mx-auto">
                    Perhaps the runes have shifted, or this way was never meant to be walked.
                    Return to familiar ground.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-block px-8 py-4 bg-gold/15 border border-gold/40 text-gold text-sm tracking-[0.25em] uppercase font-[var(--font-heading)] hover:bg-gold/25 hover:border-gold/60 transition-all duration-500"
                    >
                        Return Home
                    </Link>
                    <Link
                        href="/vasthelm"
                        className="inline-block px-8 py-4 text-bone-muted text-sm tracking-[0.25em] uppercase font-[var(--font-heading)] hover:text-gold transition-colors duration-300"
                    >
                        Enter Vasthelm →
                    </Link>
                </div>
            </div>
        </div>
    );
}
