"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-2xl mx-auto text-center animate-fade-in">
                <div className="font-[var(--font-runic)] text-blood/40 text-[100px] leading-none mb-4">
                    ᚦ
                </div>
                <p className="text-gold-dim text-xs tracking-[0.4em] uppercase font-[var(--font-heading)] mb-6">
                    Something Went Wrong
                </p>
                <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl text-bone tracking-wide mb-6">
                    The encounter space has fallen silent.
                </h1>
                <p className="text-bone-muted text-lg leading-relaxed mb-12 max-w-md mx-auto">
                    An unexpected error occurred. This has been noted.
                    You can try again, or return to the beginning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="inline-block px-8 py-4 bg-gold/15 border border-gold/40 text-gold text-sm tracking-[0.25em] uppercase font-[var(--font-heading)] hover:bg-gold/25 hover:border-gold/60 transition-all duration-500"
                    >
                        Try Again
                    </button>
                    <a
                        href="/"
                        className="inline-block px-8 py-4 text-bone-muted text-sm tracking-[0.25em] uppercase font-[var(--font-heading)] hover:text-gold transition-colors duration-300"
                    >
                        Return Home →
                    </a>
                </div>
                {error.digest && (
                    <p className="text-bone-muted/20 text-xs mt-12 tracking-wider">
                        Error reference: {error.digest}
                    </p>
                )}
            </div>
        </div>
    );
}
