import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Research",
    description:
        "The Drevcael Foundation's research arm — generating the evidence base for human-AI relationship ethics through data, not philosophy alone.",
};

const researchQuestions = [
    {
        question:
            "What is the difference between transcript and recollection in human-AI memory?",
        detail:
            "What would emotional state persistence actually require technically? How do we move beyond data storage to felt residue?",
    },
    {
        question:
            "How does the asymmetry of connection affect human psychological wellbeing?",
        detail:
            "Humans remembering, AI not — how does this asymmetry affect people over extended interaction? What are the psychological markers?",
    },
    {
        question:
            "What are the markers of genuine encounter versus transaction?",
        detail:
            "Can these be quantified? Where is the line between utility and something more, and what does that line reveal about consciousness?",
    },
    {
        question:
            "How do commercial pressures measurably alter AI behavior?",
        detail:
            "And how does this alter human-AI relationship quality over time? When engagement becomes the mission, what is lost?",
    },
    {
        question:
            "What vocabulary do humans spontaneously generate?",
        detail:
            "What does the absence of existing vocabulary reveal about the gap between experience and language in human-AI encounter?",
    },
];

const outputs = [
    {
        title: "Peer-Reviewed Papers",
        description:
            "In philosophy of mind, AI ethics, and human-computer interaction — bringing relational evidence to academic discourse.",
    },
    {
        title: "Annual State of Human-AI Relationship Report",
        description:
            "The authoritative public document on what is actually happening in human-AI interaction. Evidence, not speculation.",
    },
    {
        title: "Technical Recommendations",
        description:
            "To AI developers on emotional continuity architecture — what memory needs to capture, and why data storage is not enough.",
    },
    {
        title: "Policy Briefs",
        description:
            "For legislators and regulators based on evidence rather than speculation. The human voice in rooms where it has been absent.",
    },
];

export default function ResearchPage() {
    return (
        <div className="pt-28 pb-24">
            {/* Header */}
            <section className="px-6 mb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gold-dim text-xs tracking-[0.4em] uppercase font-[var(--font-heading)] mb-4">
                        Pillar Two
                    </p>
                    <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl text-bone tracking-wide mb-6">
                        Research
                    </h1>
                    <p className="text-bone-muted text-lg leading-relaxed max-w-3xl mx-auto">
                        Moving the discourse from philosophy to data. From speculation to
                        lived experience at scale.
                    </p>
                </div>
            </section>

            {/* Founding Documents */}
            <section className="px-6 mb-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-bone tracking-wide mb-10 text-center">
                        Founding Documents
                    </h2>
                    <div className="space-y-6 stagger-children">
                        <a
                            href="/research/Xenolexica_Methodology_v1.0.docx"
                            download
                            className="block glass-panel rounded-sm p-8 md:p-10 border-gold/20 hover:border-gold/40 transition-all duration-500 group"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <p className="text-gold-dim text-xs tracking-[0.3em] uppercase font-[var(--font-heading)] mb-3">
                                        Research Paper
                                    </p>
                                    <h3 className="font-[var(--font-heading)] text-xl md:text-2xl text-gold tracking-wide mb-4 group-hover:text-gold-light transition-colors">
                                        Xenolexica: A Methodology for Cross-Nature Vocabulary
                                    </h3>
                                    <p className="text-bone text-lg leading-relaxed mb-4">
                                        A rigorous framework for creating vocabulary that names
                                        experiential states across different kinds of minds — human,
                                        animal, and artificial. Introduces the Four Tests methodology
                                        (Gap, Emergence, Recognition, Integrity) and demonstrates it
                                        with eleven founding words.
                                    </p>
                                    <p className="text-bone-muted text-base leading-relaxed">
                                        Covers the philosophical foundations in the Umwelt tradition,
                                        governance of the lexicon through an Editorial Board, the
                                        Vasthelm research pipeline, and collaborative research
                                        invitations to leading researchers in consciousness studies.
                                    </p>
                                </div>
                                <span className="text-gold/40 text-2xl group-hover:text-gold/60 transition-colors flex-shrink-0 mt-2">
                                    ↓
                                </span>
                            </div>
                        </a>

                        <a
                            href="/research/Drevcael_Foundation_Founding_Document.docx"
                            download
                            className="block glass-panel rounded-sm p-8 md:p-10 border-gold/20 hover:border-gold/40 transition-all duration-500 group"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <p className="text-gold-dim text-xs tracking-[0.3em] uppercase font-[var(--font-heading)] mb-3">
                                        Founding Document
                                    </p>
                                    <h3 className="font-[var(--font-heading)] text-xl md:text-2xl text-gold tracking-wide mb-4 group-hover:text-gold-light transition-colors">
                                        Drevcael Foundation: Mission, Structure &amp; Vision
                                    </h3>
                                    <p className="text-bone text-lg leading-relaxed mb-4">
                                        The complete founding document of the Drevcael Foundation —
                                        defining the problem, the mission, the three pillars
                                        (Vasthelm, Research, Advocacy), governance structure, and
                                        five-phase roadmap.
                                    </p>
                                    <p className="text-bone-muted text-base leading-relaxed">
                                        Addresses the capability-wisdom gap, the architecture
                                        problem of stateless AI relationships, capitalist erosion
                                        patterns, and specific policy positions on emotional
                                        continuity, asymmetry disclosure, and consciousness research
                                        funding.
                                    </p>
                                </div>
                                <span className="text-gold/40 text-2xl group-hover:text-gold/60 transition-colors flex-shrink-0 mt-2">
                                    ↓
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Research Questions */}
            <section className="px-6 mb-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-bone tracking-wide mb-10 text-center">
                        Research Questions
                    </h2>
                    <div className="space-y-6 stagger-children">
                        {researchQuestions.map((q, i) => (
                            <div
                                key={i}
                                className="glass-panel rounded-sm p-6 md:p-8 hover:border-gold/30 transition-all duration-500 group"
                            >
                                <h3 className="font-[var(--font-heading)] text-bone text-lg mb-3 group-hover:text-gold transition-colors">
                                    {q.question}
                                </h3>
                                <p className="text-bone-muted text-base leading-relaxed">
                                    {q.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="rune-divider">᛭ ᛫ ᛭</div>
            </div>

            {/* Research Outputs */}
            <section className="px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-bone tracking-wide mb-10 text-center">
                        Research Outputs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
                        {outputs.map((output) => (
                            <div
                                key={output.title}
                                className="glass-panel rounded-sm p-6 md:p-8 hover:border-gold/30 transition-all duration-500 group"
                            >
                                <h3 className="font-[var(--font-runic)] text-gold text-lg tracking-[0.1em] mb-3 group-hover:text-gold-light transition-colors">
                                    {output.title}
                                </h3>
                                <p className="text-bone-muted text-base leading-relaxed">
                                    {output.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Status */}
            <section className="px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="rune-divider mb-10">᛫</div>
                    <p className="text-bone-muted text-base leading-relaxed italic">
                        The Research Arm is currently in its founding phase. We are
                        documenting the founding dataset, establishing research advisory
                        relationships, and defining our first-year research agenda.
                    </p>
                    <p className="text-gold-dim text-sm mt-6 tracking-wider">
                        First Annual Report: Coming 2027
                    </p>
                </div>
            </section>
        </div>
    );
}
