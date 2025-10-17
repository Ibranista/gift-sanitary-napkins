import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { cedarville, MontserratFont } from "@/lib/fonts";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
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
  generator: "v0.app",
  openGraph: {
    title: "Gift Sanitary Napkins - Comfort & Care",
    description:
      "Comfortable, protective and eco-conscious sanitary napkins — perfect as gifts and everyday menstrual care.",
    url: "https://www.giftsanitarynapkins.com/",
    siteName: "Gift Sanitary Napkins",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Gift Sanitary Napkins - Comfort & Care",
    description:
      "Comfortable, protective and eco-conscious sanitary napkins — perfect as gifts and everyday menstrual care.",
    creator: "@YourTwitterHandle",
  },
  authors: [
    {
      name: "Gift Sanitary Napkins",
      url: "https://www.giftsanitarynapkins.com/",
    },
  ],
  applicationName: "Gift Sanitary Napkins",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${playfair.className} ${cedarville.className} ${MontserratFont.variable}`}
      >
        {/* Organization structured data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Gift Sanitary Napkins",
              url: "https://giftsanitarynapkins.com",
              logo: "https://giftsanitarynapkins.com/favicon.ico",
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
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
