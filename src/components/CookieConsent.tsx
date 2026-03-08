"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("xenolexica-cookie-consent");
        if (!consent) {
            // Small delay so it doesn't flash on load
            const timer = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("xenolexica-cookie-consent", "accepted");
        setVisible(false);
        // Trigger GA load by dispatching a custom event
        window.dispatchEvent(new Event("cookie-consent-granted"));
    };

    const handleDecline = () => {
        localStorage.setItem("xenolexica-cookie-consent", "declined");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
            <div className="max-w-4xl mx-auto px-6 pb-6">
                <div className="glass-panel rounded-sm p-6 border-gold/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <p className="text-bone-muted text-sm leading-relaxed flex-1">
                        We use cookies for authentication and, with your consent, analytics to understand
                        how our site is used.{" "}
                        <a
                            href="/privacy"
                            className="text-gold hover:text-gold-light transition-colors"
                        >
                            Privacy Policy
                        </a>
                    </p>
                    <div className="flex gap-3 flex-shrink-0">
                        <button
                            onClick={handleDecline}
                            className="px-5 py-2 text-bone-muted text-xs tracking-[0.15em] uppercase font-[var(--font-heading)] hover:text-gold transition-colors duration-300"
                        >
                            Decline
                        </button>
                        <button
                            onClick={handleAccept}
                            className="px-5 py-2 bg-gold/15 border border-gold/30 text-gold text-xs tracking-[0.15em] uppercase font-[var(--font-heading)] hover:bg-gold/25 hover:border-gold/50 transition-all duration-300"
                        >
                            Accept
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
