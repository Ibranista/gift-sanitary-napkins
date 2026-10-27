import type React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { courgette, fraunces, jakarta } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://giftsanitarynapkins.com"),
  title: "Gift Sanitary Napkins - Comfort & Care",
  description:
    "Experience comfort, protection, and eco-friendly care with Gift Sanitary Napkins",
  keywords: [
    "gift",
    "sanitary",
    "sanitary napkins",
    "sanitary pads",
    "menstrual care",
    "period care",
    "feminine hygiene",
    "organic sanitary napkins",
    "eco-friendly pads",
    "menstrual products",
    "pads for women",
    "overnight pads",
    "disposable pads",
    "sustainable period products",
    "women's health",
    "comfort",
    "protection",
    "gift for her",
    "care packages",
  ],
  openGraph: {
    title: "Gift Sanitary Napkins - Comfort & Care",
    description:
      "Comfortable, protective and eco-conscious sanitary napkins — perfect as gifts and everyday menstrual care.",
    url: "https://giftsanitarynapkins.com/",
    siteName: "Gift Sanitary Napkins",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://giftsanitarynapkins.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gift Sanitary Napkins - Comfort & Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift Sanitary Napkins - Comfort & Care",
    description:
      "Comfortable, protective and eco-conscious sanitary napkins — perfect as gifts and everyday menstrual care.",
    creator: "@YourTwitterHandle",
    images: ["https://giftsanitarynapkins.com/images/og-image.jpg"],
  },
  authors: [
    {
      name: "Gift Sanitary Napkins",
      url: "https://www.giftsanitarynapkins.com/",
    },
  ],
  applicationName: "Gift Sanitary Napkins",
  // Favicons come from the file conventions in app/: icon.svg, favicon.ico
  // and apple-icon.png.
  alternates: {
    canonical: "https://giftsanitarynapkins.com/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfafb" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e22" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${jakarta.variable} ${courgette.variable}`}
    >
      <body className="min-h-dvh antialiased">
        {/* Organization structured data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Gift Sanitary Napkins",
              url: "https://giftsanitarynapkins.com",
              logo: "https://giftsanitarynapkins.com/logo-512.png",
              sameAs: [
                "https://www.facebook.com/giftsanitarynapkins",
                "https://www.instagram.com/giftsanitarynapkins",
                "https://twitter.com/giftsanitarynapk",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+251-911258682",
                  contactType: "customer service",
                },
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
