import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import ProductShowcase from "@/components/home/product-showcase";
import ContactSection from "@/components/home/contact-section";

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
