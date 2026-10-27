import { Heart, Leaf, Shield, Sparkles } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Heart,
    title: "Comfortable Fit",
    description:
      "Soft, breathable materials that move with your body for all-day comfort and confidence.",
    tone: "rose",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Made with 100% organic cotton and biodegradable materials to protect you and the planet.",
    tone: "navy",
  },
  {
    icon: Shield,
    title: "Long-Lasting Protection",
    description:
      "Advanced absorption technology keeps you dry and protected for up to 24 hours.",
    tone: "rose",
  },
  {
    icon: Sparkles,
    title: "Dermatologically Tested",
    description:
      "Hypoallergenic and pH-balanced formula, gentle on sensitive skin and clinically tested.",
    tone: "navy",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="border-y border-border bg-card py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="features-heading"
          eyebrow="Our promise"
          title={
            <>
              Why choose <span className="italic text-primary">Gift</span>?
            </>
          }
          description="We combine comfort, sustainability, and protection to give you the care you truly deserve."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <li key={feature.title}>
              <Reveal delay={index * 0.08} className="h-full">
                <article className="group h-full rounded-2xl border border-border bg-background p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <span
                    className={cn(
                      "flex size-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105",
                      feature.tone === "rose"
                        ? "bg-rose-soft text-rose-soft-foreground"
                        : "bg-navy-soft text-navy-soft-foreground"
                    )}
                    aria-hidden="true"
                  >
                    <feature.icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
