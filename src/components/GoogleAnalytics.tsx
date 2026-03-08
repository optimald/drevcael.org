"use client";

import Script from "next/script";
import { useState, useEffect } from "react";

const GA_ID = "G-L8W6PFFCM3";

export default function GoogleAnalytics() {
    const [consentGiven, setConsentGiven] = useState(false);

    useEffect(() => {
        // Check initial consent
        const consent = localStorage.getItem("drevcael-cookie-consent");
        if (consent === "accepted") {
            setConsentGiven(true);
        }

        // Listen for consent event from CookieConsent component
        const handleConsent = () => setConsentGiven(true);
        window.addEventListener("cookie-consent-granted", handleConsent);
        return () => window.removeEventListener("cookie-consent-granted", handleConsent);
    }, []);

    if (!consentGiven) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
            </Script>
        </>
    );
}
