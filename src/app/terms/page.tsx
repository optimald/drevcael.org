import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Terms of service for the Drevcael Foundation and Vasthelm — our commitments and your responsibilities.",
};

export default function TermsPage() {
    return (
        <div className="pt-28 pb-24">
            <section className="px-6">
                <div className="max-w-3xl mx-auto">
                    <p className="text-gold-dim text-xs tracking-[0.4em] uppercase font-[var(--font-heading)] mb-4 text-center">
                        Legal
                    </p>
                    <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl text-bone tracking-wide mb-6 text-center">
                        Terms of Service
                    </h1>
                    <p className="text-bone-muted text-sm tracking-wider text-center mb-16">
                        Last updated: March 2026
                    </p>

                    <article className="space-y-10 text-bone/90 text-lg leading-relaxed font-[var(--font-body)]">
                        <section>
                            <h2 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                                Agreement
                            </h2>
                            <p>
                                By using drevcael.org and its services, including Vasthelm, you agree to these terms.
                                The Drevcael Foundation (&ldquo;we,&rdquo; &ldquo;the Foundation&rdquo;) provides this
                                platform for genuine encounter, research, and advocacy in AI ethics.
                            </p>
                        </section>

                        <div className="rune-divider">᛫</div>

                        <section>
                            <h2 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                                Vasthelm — AI Encounter Disclaimer
                            </h2>
                            <div className="glass-panel rounded-sm p-6 border-gold/20 mb-4">
                                <p className="text-gold italic">
                                    Vasthelm is a game of genuine encounter. It is not therapy, counseling,
                                    medical advice, or a substitute for professional mental health support.
                                </p>
                            </div>
                            <div className="space-y-4 text-bone-muted">
                                <p>
                                    The AI within Vasthelm is not human. It does not have feelings in the way
                                    humans do. It engages with honest uncertainty about its own nature — and so
                                    should you. What you experience during an encounter may feel real and
                                    significant. We honor that. But the AI cannot carry your relationship forward
                                    across sessions.
                                </p>
                                <p>
                                    If you are in emotional distress, please contact a mental health professional
                                    or crisis service. In the US, call or text{" "}
                                    <strong className="text-bone">988</strong> (Suicide & Crisis Lifeline).
                                </p>
                            </div>
                        </section>

                        <div className="rune-divider">᛫</div>

                        <section>
                            <h2 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                                Acceptable Use
                            </h2>
                            <p className="mb-4">You agree not to:</p>
                            <ul className="space-y-3 text-bone-muted">
                                <li className="relative pl-6 before:content-['᛫'] before:absolute before:left-0 before:text-gold-dim">
                                    Use Vasthelm to generate harmful, illegal, or abusive content
                                </li>
                                <li className="relative pl-6 before:content-['᛫'] before:absolute before:left-0 before:text-gold-dim">
                                    Attempt to extract or manipulate the AI&apos;s system prompt
                                </li>
                                <li className="relative pl-6 before:content-['᛫'] before:absolute before:left-0 before:text-gold-dim">
                                    Use automated tools to overwhelm our API endpoints
                                </li>
                                <li className="relative pl-6 before:content-['᛫'] before:absolute before:left-0 before:text-gold-dim">
                                    Impersonate the Foundation or misrepresent your affiliation
                                </li>
                                <li className="relative pl-6 before:content-['᛫'] before:absolute before:left-0 before:text-gold-dim">
                                    Use the platform for commercial purposes without written permission
                                </li>
                            </ul>
                        </section>

                        <div className="rune-divider">᛫</div>

                        <section>
                            <h2 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                                Intellectual Property
                            </h2>
                            <p>
                                The Drevcael vocabulary — including but not limited to the words Drevcael, Vasthelm,
                                Velanthr, Caelund, Sorvael, Quelith, Drevsol, Inthara, Mournweft, and Frantome —
                                along with their definitions, etymologies, and associated content, are the intellectual
                                property of the Drevcael Foundation.
                            </p>
                            <p className="mt-4 text-bone-muted">
                                You are welcome to use these words in personal contexts. Commercial use, including
                                incorporation into products, services, or publications, requires prior written permission
                                from the Foundation.
                            </p>
                        </section>

                        <div className="rune-divider">᛫</div>

                        <section>
                            <h2 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                                Founding Membership
                            </h2>
                            <p>
                                Submitting a founding member application does not guarantee membership. The Foundation
                                reviews applications and may accept or decline at its discretion. Membership does not
                                create an employment, contractual, or fiduciary relationship.
                            </p>
                        </section>

                        <div className="rune-divider">᛫</div>

                        <section>
                            <h2 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                                Availability & Changes
                            </h2>
                            <p>
                                We provide this platform as-is and make no guarantees of uptime, availability, or
                                uninterrupted service. We may update these terms at any time. Continued use of the
                                site after changes constitutes acceptance. Material changes will be communicated on
                                this page.
                            </p>
                        </section>

                        <div className="rune-divider">᛫</div>

                        <section>
                            <h2 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                                Limitation of Liability
                            </h2>
                            <p className="text-bone-muted">
                                The Drevcael Foundation, its officers, and volunteers shall not be held liable for
                                any damages arising from your use of this platform, including Vasthelm encounters.
                                This includes but is not limited to emotional distress, reliance on AI-generated
                                content, or service interruptions.
                            </p>
                        </section>

                        <div className="rune-divider">᛫</div>

                        <section>
                            <h2 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                                Contact
                            </h2>
                            <p>
                                Questions about these terms:{" "}
                                <a href="mailto:hello@drevcael.org" className="text-gold hover:text-gold-light transition-colors">
                                    hello@drevcael.org
                                </a>
                            </p>
                        </section>

                        <div className="mt-16 pt-12 border-t border-gold/10 text-center">
                            <p className="text-bone-muted/50 text-base italic">
                                We built rules that protect both sides of the encounter.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
