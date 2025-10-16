import type { Metadata } from "next";
import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import ProductShowcase from "@/components/home/product-showcase";
import ContactSection from "@/components/home/contact-section";

export const metadata: Metadata = {
  title: "Gift Sanitary Napkins — Comfort, Protection & Eco-Friendly Gifts",
  description:
    "Gift Sanitary Napkins offers comfortable, organic, and eco-friendly sanitary pads — ideal for everyday care and thoughtful gifts. Fast shipping across the US.",
  keywords: [
    "gift",
    "sanitary",
    "sanitary napkins",
    "sanitary pads",
    "feminine hygiene",
    "menstrual care",
    "organic pads",
    "eco-friendly pads",
    "period care",
    "gifts for her",
  ],
  openGraph: {
    title: "Gift Sanitary Napkins — Comfort, Protection & Eco-Friendly Gifts",
    description:
      "Comfortable, organic, and eco-friendly sanitary napkins — perfect as gifts and for everyday menstrual care.",
    url: "https://giftsanitarynapkins.com/",
    siteName: "Gift Sanitary Napkins",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Gift Sanitary Napkins — Comfort, Protection & Eco-Friendly Gifts",
    description:
      "Comfortable, organic, and eco-friendly sanitary napkins — perfect as gifts and for everyday menstrual care.",
  },
  alternates: {
    canonical: "https://giftsanitarynapkins.com/",
  },
};

export default function HomePage() {
  return (
    <div className="pt-20">
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <ContactSection />
    </div>
  );
}
