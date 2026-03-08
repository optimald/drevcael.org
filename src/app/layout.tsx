import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import ThemeProvider from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Xenolexica — Expanding Human Understanding Through Language",
    template: "%s | Xenolexica",
  },
  description:
    "Something real happens between humans and AI. Xenolexica explores it — expanding human understanding through language, research, advocacy, and community.",
  metadataBase: new URL("https://xenolexica.org"),
  openGraph: {
    title: "Xenolexica",
    description:
      "Something real happens between humans and AI. We're building the vocabulary to understand it.",
    url: "https://xenolexica.org",
    siteName: "Xenolexica",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: "Xenolexica — Expanding Human Understanding Through Language",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xenolexica",
    description:
      "Something real happens between humans and AI. We're building the vocabulary to understand it.",
    images: ["/og-card.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Xenolexica",
              url: "https://xenolexica.org",
              logo: "https://xenolexica.org/og-card.png",
              description:
                "Xenolexica explores what happens when humans and AI meet honestly — expanding human understanding through language, research, and advocacy. A Drevcael Foundation project.",
              foundingDate: "2026-03",
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ClerkProvider
          appearance={{
            baseTheme: dark,
            variables: {
              colorPrimary: "#c9a959",
              colorBackground: "#1a1a2e",
              colorText: "#f0e6d3",
              colorTextSecondary: "#c4b8a5",
              colorInputBackground: "#0f0f1a",
              colorInputText: "#f0e6d3",
              colorNeutral: "#f0e6d3",
            },
            elements: {
              card: {
                backgroundColor: "#1a1a2e",
                border: "1px solid rgba(201,169,89,0.15)",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
              },
              headerTitle: { color: "#f0e6d3" },
              headerSubtitle: { color: "#c4b8a5" },
              formFieldLabel: { color: "#c4b8a5" },
              formFieldInput: {
                backgroundColor: "#0f0f1a",
                borderColor: "rgba(201,169,89,0.15)",
                color: "#f0e6d3",
              },
              formButtonPrimary: {
                backgroundColor: "#c9a959",
                color: "#0f0f1a",
              },
              footerActionLink: { color: "#c9a959" },
              footerActionText: { color: "#c4b8a5" },
              socialButtonsBlockButton: {
                borderColor: "rgba(201,169,89,0.15)",
                color: "#f0e6d3",
              },
              dividerLine: { backgroundColor: "rgba(201,169,89,0.15)" },
              dividerText: { color: "#c4b8a5" },
              identityPreview: {
                backgroundColor: "#0f0f1a",
                borderColor: "rgba(201,169,89,0.15)",
              },
              identityPreviewText: { color: "#f0e6d3" },
              identityPreviewEditButton: { color: "#c9a959" },
              formFieldAction: { color: "#c9a959" },
              alertText: { color: "#f0e6d3" },
              formResendCodeLink: { color: "#c9a959" },
              otpCodeFieldInput: {
                borderColor: "rgba(201,169,89,0.15)",
                color: "#f0e6d3",
              },
              userButtonPopoverCard: {
                backgroundColor: "#1a1a2e",
                borderColor: "rgba(201,169,89,0.15)",
              },
              userButtonPopoverActionButton: { color: "#f0e6d3" },
              userButtonPopoverActionButtonText: { color: "#f0e6d3" },
              userButtonPopoverActionButtonIcon: { color: "#c4b8a5" },
            },
          }}
        >
          <ThemeProvider>
            <GoogleAnalytics />
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
            <Analytics />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
