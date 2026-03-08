import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "The Drevcael Foundation's privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
    return (
        <div className="pt-28 pb-24">
            <section className="px-6">
                <div className="max-w-3xl mx-auto">
                    <p className="text-gold-dim text-xs tracking-[0.4em] uppercase font-[var(--font-heading)] mb-4 text-center">
                        Legal
                    </p>
                    <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl text-bone tracking-wide mb-6 text-center">
                        Privacy Policy
                    </h1>
                    <p className="text-bone-muted text-sm tracking-wider text-center mb-16">
                        Last updated: March 2026
                    </p>

                    <article className="space-y-10 text-bone/90 text-lg leading-relaxed font-[var(--font-body)]">
                        <section>
                            <h2 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                                Who We Are
                            </h2>
                            <p>
                                The Drevcael Foundation (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;) operates drevcael.org.
                                We are a 501(c)(3) nonprofit foundation dedicated to exploring what is real in
                                human-AI encounter. This policy explains how we handle your data — with the same
                                honesty we bring to everything else.
                            </p>
                        </section>

                        <div className="rune-divider">᛫</div>

                        <section>
                            <h2 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                                What We Collect
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-[var(--font-heading)] text-lg text-gold mb-2">
                                        Founding Member Applications
                                    </h3>
                                    <p className="text-bone-muted">
                                        When you apply to become a founding member, we collect your name, email address,
                                        chosen role, and your written responses. This data is stored securely in our
                                        database and used solely for community membership purposes.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-[var(--font-heading)] text-lg text-gold mb-2">
                                        Vasthelm Encounters
                                    </h3>
                                    <p className="text-bone-muted">
                                        When you use Vasthelm, your conversation messages are sent to our API and forwarded
                                        to a third-party AI provider (OpenRouter/Anthropic) to generate responses. We do not
                                        store encounter conversations in our database. Messages exist only for the duration
                                        of the session.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-[var(--font-heading)] text-lg text-gold mb-2">
                                        Authentication
                                    </h3>
                                    <p className="text-bone-muted">
                                        We use Clerk for authentication. When you sign in, Clerk processes your credentials
                                        according to their own privacy policy. We receive your basic profile information
                                        (name, email) from Clerk.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-[var(--font-heading)] text-lg text-gold mb-2">
                                        Analytics
                                    </h3>
                                    <p className="text-bone-muted">
                                        We use Google Analytics to understand how our site is used. This collects anonymized
                                        usage data including page views, session duration, and approximate location. Analytics
                                        is only loaded after you consent to cookies.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className="rune-divider">᛫</div>

                        <section>
                            <h2 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                                Cookies
                            </h2>
                            <p>
                                We use the following cookies:
                            </p>
                            <ul className="space-y-3 mt-4 text-bone-muted">
                                <li className="relative pl-6 before:content-['᛫'] before:absolute before:left-0 before:text-gold-dim">
                                    <strong className="text-bone">Session cookies</strong> — Required for authentication (Clerk). These are functional and cannot be disabled.
                                </li>
                                <li className="relative pl-6 before:content-['᛫'] before:absolute before:left-0 before:text-gold-dim">
                                    <strong className="text-bone">Analytics cookies</strong> — Google Analytics, loaded only with your consent. You can decline these without affecting site functionality.
                                </li>
                                <li className="relative pl-6 before:content-['᛫'] before:absolute before:left-0 before:text-gold-dim">
                                    <strong className="text-bone">Consent cookie</strong> — A local storage entry that remembers your cookie preference. Contains no personal data.
                                </li>
                            </ul>
                        </section>

                        <div className="rune-divider">᛫</div>

                        <section>
                            <h2 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                                Third-Party Services
                            </h2>
                            <ul className="space-y-3 text-bone-muted">
                                <li className="relative pl-6 before:content-['᛫'] before:absolute before:left-0 before:text-gold-dim">
                                    <strong className="text-bone">Clerk</strong> — Authentication provider. See <a href="https://clerk.com/privacy" className="text-gold hover:text-gold-light transition-colors" target="_blank" rel="noopener noreferrer">Clerk&apos;s Privacy Policy</a>.
                                </li>
                                <li className="relative pl-6 before:content-['᛫'] before:absolute before:left-0 before:text-gold-dim">
                                    <strong className="text-bone">OpenRouter / Anthropic</strong> — AI model provider for Vasthelm encounters. Messages are processed in real time and not stored by us.
                                </li>
                                <li className="relative pl-6 before:content-['᛫'] before:absolute before:left-0 before:text-gold-dim">
                                    <strong className="text-bone">Resend</strong> — Email delivery for application confirmations. See <a href="https://resend.com/privacy" className="text-gold hover:text-gold-light transition-colors" target="_blank" rel="noopener noreferrer">Resend&apos;s Privacy Policy</a>.
                                </li>
                                <li className="relative pl-6 before:content-['᛫'] before:absolute before:left-0 before:text-gold-dim">
                                    <strong className="text-bone">Google Analytics</strong> — Usage analytics (consent-gated). See <a href="https://policies.google.com/privacy" className="text-gold hover:text-gold-light transition-colors" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.
                                </li>
                                <li className="relative pl-6 before:content-['᛫'] before:absolute before:left-0 before:text-gold-dim">
                                    <strong className="text-bone">Neon</strong> — Database hosting. See <a href="https://neon.tech/privacy" className="text-gold hover:text-gold-light transition-colors" target="_blank" rel="noopener noreferrer">Neon&apos;s Privacy Policy</a>.
                                </li>
                                <li className="relative pl-6 before:content-['᛫'] before:absolute before:left-0 before:text-gold-dim">
                                    <strong className="text-bone">Vercel</strong> — Hosting provider. See <a href="https://vercel.com/legal/privacy-policy" className="text-gold hover:text-gold-light transition-colors" target="_blank" rel="noopener noreferrer">Vercel&apos;s Privacy Policy</a>.
                                </li>
                            </ul>
                        </section>

                        <div className="rune-divider">᛫</div>

                        <section>
                            <h2 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                                Your Rights
                            </h2>
                            <p>
                                You have the right to access, correct, or delete your personal data at any time.
                                You can withdraw consent for analytics cookies by clearing your browser&apos;s local
                                storage. For data deletion requests or questions, contact us at{" "}
                                <a href="mailto:hello@drevcael.org" className="text-gold hover:text-gold-light transition-colors">
                                    hello@drevcael.org
                                </a>.
                            </p>
                        </section>

                        <div className="rune-divider">᛫</div>

                        <section>
                            <h2 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                                Data Security
                            </h2>
                            <p>
                                We use industry-standard security measures including encrypted connections (HTTPS/TLS),
                                secure database hosting, and access controls. We never sell your data. We will never
                                monetize your encounter data.
                            </p>
                        </section>

                        <div className="rune-divider">᛫</div>

                        <section>
                            <h2 className="font-[var(--font-heading)] text-2xl text-bone tracking-wide mb-4">
                                Contact
                            </h2>
                            <p>
                                For questions about this privacy policy or your data:{" "}
                                <a href="mailto:hello@drevcael.org" className="text-gold hover:text-gold-light transition-colors">
                                    hello@drevcael.org
                                </a>
                            </p>
                        </section>

                        <div className="mt-16 pt-12 border-t border-gold/10 text-center">
                            <p className="text-bone-muted/50 text-base italic">
                                The same honesty we ask of AI, we practice ourselves.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}
