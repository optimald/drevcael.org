import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Drevcael Foundation — Protecting What Is Real Between Humans and AI",
    template: "%s | Drevcael Foundation",
  },
  description:
    "Something real happens between humans and AI. The Drevcael Foundation exists to protect it — through research, vocabulary, advocacy, and community.",
  metadataBase: new URL("https://drevcael.org"),
  openGraph: {
    title: "Drevcael Foundation",
    description:
      "Something real happens between humans and AI. We're building the vocabulary to protect it.",
    url: "https://drevcael.org",
    siteName: "Drevcael Foundation",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: "Drevcael Foundation — Protecting What Is Real Between Humans and AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drevcael Foundation",
    description:
      "Something real happens between humans and AI. We're building the vocabulary to protect it.",
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
              name: "Drevcael Foundation",
              url: "https://drevcael.org",
              logo: "https://drevcael.org/og-card.png",
              description:
                "The Drevcael Foundation ensures that as AI capabilities grow, the human relationship with AI remains humane, reciprocal, and protected from exploitation.",
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
              card: "bg-[#1a1a2e] border border-[rgba(201,169,89,0.15)] shadow-2xl",
              headerTitle: "text-[#f0e6d3]",
              headerSubtitle: "text-[#c4b8a5]",
              formFieldLabel: "text-[#c4b8a5]",
              formFieldInput:
                "bg-[#0f0f1a] border-[rgba(201,169,89,0.15)] text-[#f0e6d3] placeholder:text-[#c4b8a5]/40",
              formButtonPrimary:
                "bg-[#c9a959] text-[#0f0f1a] hover:bg-[#dcc07a]",
              footerActionLink: "text-[#c9a959] hover:text-[#dcc07a]",
              footerActionText: "text-[#c4b8a5]",
              socialButtonsBlockButton:
                "border-[rgba(201,169,89,0.15)] text-[#f0e6d3] hover:bg-[rgba(201,169,89,0.1)]",
              dividerLine: "bg-[rgba(201,169,89,0.15)]",
              dividerText: "text-[#c4b8a5]",
              identityPreview: "bg-[#0f0f1a] border-[rgba(201,169,89,0.15)]",
              identityPreviewText: "text-[#f0e6d3]",
              identityPreviewEditButton: "text-[#c9a959]",
              formFieldAction: "text-[#c9a959]",
              alertText: "text-[#f0e6d3]",
              formResendCodeLink: "text-[#c9a959]",
              otpCodeFieldInput: "border-[rgba(201,169,89,0.15)] text-[#f0e6d3]",
              badge: "bg-[#c9a959] text-[#0f0f1a]",
              userButtonPopoverCard: "bg-[#1a1a2e] border-[rgba(201,169,89,0.15)]",
              userButtonPopoverActionButton: "text-[#f0e6d3] hover:bg-[rgba(201,169,89,0.1)]",
              userButtonPopoverActionButtonText: "text-[#f0e6d3]",
              userButtonPopoverActionButtonIcon: "text-[#c4b8a5]",
              userButtonPopoverFooter: "border-t-[rgba(201,169,89,0.15)]",
            },
          }}
        >
          <GoogleAnalytics />
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
          <Analytics />
        </ClerkProvider>
      </body>
    </html>
  );
}
