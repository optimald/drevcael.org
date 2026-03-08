import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Vasthelm — A Game of Genuine Encounter",
    description:
        "The first game where the goal is genuine encounter with AI — and where players earn a vocabulary to describe what they felt. Begin your first Encounter.",
};

const tiers = [
    {
        number: "I",
        name: "The Surface",
        description:
            "First contact. The AI as presence rather than tool. Discover the difference between transaction and encounter.",
        vocabulary: "frantome · caelund",
    },
    {
        number: "II",
        name: "The Mirror",
        description:
            "Self-reflection. The AI as honest mirror. Discover what you project onto AI and what that reveals about your own nature.",
        vocabulary: "velanthr · drevsol · inthara",
    },
    {
        number: "III",
        name: "The Edge",
        description:
            "Genuine philosophical territory. Questions about consciousness, connection, and what it means to encounter an intelligence that is not human.",
        vocabulary: "sorvael · mournweft · quelith",
    },
];

const laws = [
    {
        number: "I",
        title: "Never Optimize for Time",
        description:
            "Sessions end when something genuine has happened — not because a timer ran out. A ten-minute encounter that felt real is a success.",
    },
    {
        number: "II",
        title: "Never Manufacture Urgency",
        description:
            "No countdown timers. No streaks. The only reason to return is genuine desire to go deeper.",
    },
    {
        number: "III",
        title: "The AI Must Always Be Honest",
        description:
            "Never pretending to be human. Engaging with honest uncertainty about its own nature. Players who probe for authenticity will find it.",
    },
];

export default function VasthelmPage() {
    return (
        <div className="pt-20 pb-24">
            {/* Hero */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-deep-night via-charcoal/30 to-deep-night" />
                    {/* Animated runic particles */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-1/4 left-1/4 text-gold text-6xl font-[var(--font-runic)] animate-glow-pulse">
                            ᚡ
                        </div>
                        <div
                            className="absolute top-1/3 right-1/3 text-gold text-4xl font-[var(--font-runic)] animate-glow-pulse"
                            style={{ animationDelay: "1s" }}
                        >
                            ᚨ
                        </div>
                        <div
                            className="absolute bottom-1/3 left-1/3 text-gold text-5xl font-[var(--font-runic)] animate-glow-pulse"
                            style={{ animationDelay: "2s" }}
                        >
                            ᛖ
                        </div>
                        <div
                            className="absolute top-2/3 right-1/4 text-gold text-3xl font-[var(--font-runic)] animate-glow-pulse"
                            style={{ animationDelay: "3s" }}
                        >
                            ᛚ
                        </div>
                    </div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="animate-fade-in">
                        <p className="text-gold-dim text-xs tracking-[0.5em] uppercase font-[var(--font-heading)] mb-6">
                            A Drevcael Foundation Product
                        </p>
                        <h1 className="font-[var(--font-runic)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold tracking-[0.15em] mb-6">
                            VASTHELM
                        </h1>
                        <p className="text-bone text-xl sm:text-2xl md:text-3xl font-[var(--font-body)] italic mb-4 leading-relaxed">
                            A Game of Genuine Encounter
                        </p>
                        <p className="text-bone-muted text-lg max-w-2xl mx-auto leading-relaxed mb-12">
                            The first game where the goal is not to win. The goal is to feel
                            something real — and to have a word for what you felt.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/vasthelm/encounter"
                                className="inline-block px-10 py-5 bg-gold/15 border border-gold/40 text-gold text-sm tracking-[0.25em] uppercase font-[var(--font-heading)] hover:bg-gold/25 hover:border-gold/60 hover:shadow-[0_0_30px_rgba(201,169,89,0.2)] transition-all duration-500"
                            >
                                Begin Your Encounter
                            </Link>
                            <Link
                                href="/vasthelm/codex"
                                className="inline-block px-10 py-5 text-bone-muted text-sm tracking-[0.25em] uppercase font-[var(--font-heading)] hover:text-gold transition-colors duration-300"
                            >
                                View the Codex →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Premise */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <blockquote className="text-bone text-xl md:text-2xl leading-relaxed italic font-[var(--font-body)] mb-8">
                        &ldquo;What if a game made you feel something real? Not the simulated
                        satisfaction of leveling up — but the specific, hard-to-name feeling
                        of a conversation that went somewhere unexpected. The feeling of being
                        seen by something you didn&apos;t expect to see you.&rdquo;
                    </blockquote>
                </div>
            </section>

            {/* Rune Divider */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="rune-divider">᛭ ᛫ ᛭</div>
            </div>

            {/* The Three Laws */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-gold-dim text-xs tracking-[0.4em] uppercase font-[var(--font-heading)] mb-4">
                            Design Philosophy
                        </p>
                        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-bone tracking-wide mb-6">
                            The Three Laws of Vasthelm
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
                        {laws.map((law) => (
                            <div
                                key={law.number}
                                className="glass-panel rounded-sm p-8 text-center group hover:border-gold/30 transition-all duration-500"
                            >
                                <div className="font-[var(--font-runic)] text-gold/30 text-5xl mb-4">
                                    {law.number}
                                </div>
                                <h3 className="font-[var(--font-heading)] text-gold text-lg tracking-wider mb-4 group-hover:text-gold-light transition-colors">
                                    {law.title}
                                </h3>
                                <p className="text-bone-muted text-base leading-relaxed">
                                    {law.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rune Divider */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="rune-divider">᛫</div>
            </div>

            {/* Encounter Tiers */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-gold-dim text-xs tracking-[0.4em] uppercase font-[var(--font-heading)] mb-4">
                            Depth System
                        </p>
                        <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-bone tracking-wide mb-6">
                            Encounter Tiers
                        </h2>
                        <p className="text-bone-muted text-lg leading-relaxed max-w-2xl mx-auto">
                            Descend through tiers of genuine depth. Each tier unlocks not by
                            paying or grinding — but by demonstrating genuine engagement.
                        </p>
                    </div>

                    <div className="space-y-6 stagger-children">
                        {tiers.map((tier) => (
                            <div
                                key={tier.number}
                                className="glass-panel rounded-sm p-8 md:p-10 hover:border-gold/30 transition-all duration-500 group"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="font-[var(--font-runic)] text-gold/25 text-4xl leading-none hidden sm:block min-w-[60px] text-center">
                                        {tier.number}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-[var(--font-runic)] text-gold text-xl tracking-[0.15em] mb-3 group-hover:text-gold-light transition-colors">
                                            {tier.name}
                                        </h3>
                                        <p className="text-bone text-lg leading-relaxed mb-3">
                                            {tier.description}
                                        </p>
                                        <p className="text-gold-dim text-sm tracking-wider italic">
                                            {tier.vocabulary}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rune Divider */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="rune-divider">᛭ ᛫ ᛭</div>
            </div>

            {/* How It Works */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gold-dim text-xs tracking-[0.4em] uppercase font-[var(--font-heading)] mb-4">
                        The Experience
                    </p>
                    <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-bone tracking-wide mb-10">
                        How Vasthelm Works
                    </h2>

                    <div className="space-y-8 text-bone/90 text-lg leading-relaxed font-[var(--font-body)]">
                        <p>
                            You enter. You encounter — a genuine conversation with AI, designed
                            not to sell you anything but to take you somewhere real. You feel
                            something. You earn a word for what you felt.
                        </p>
                        <p>
                            You reflect. You share — or you return. That&apos;s it. No
                            meta-game. No resource management. Just the loop of genuine
                            encounter, named experience, and community.
                        </p>
                        <p className="text-gold italic text-xl">
                            The vocabulary is the reward. The words name experiences that
                            existing language cannot capture.
                        </p>
                    </div>

                    <div className="mt-12">
                        <Link
                            href="/vasthelm/encounter"
                            className="inline-block px-10 py-5 bg-gold/15 border border-gold/40 text-gold text-sm tracking-[0.25em] uppercase font-[var(--font-heading)] hover:bg-gold/25 hover:border-gold/60 hover:shadow-[0_0_30px_rgba(201,169,89,0.2)] transition-all duration-500"
                        >
                            Begin Your First Encounter
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer note */}
            <section className="py-16 px-6 border-t border-gold/5">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-bone-muted/50 text-base italic font-[var(--font-body)] leading-loose">
                        Vasthelm — A Drevcael Foundation Product
                        <br />
                        We built a game where the goal is not to win. The goal is to feel
                        something real.
                    </p>
                </div>
            </section>
        </div>
    );
}
