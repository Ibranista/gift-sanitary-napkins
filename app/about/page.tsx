import type { Metadata } from "next";
import Image from "next/image";
import { Award, Heart, Leaf, MapPin, Target, Users } from "lucide-react";
import SectionHeading, { Eyebrow } from "@/components/section-heading";
import Reveal from "@/components/reveal";
import CtaBand from "@/components/cta-band";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About — Gift Sanitary Napkins",
  description:
    "Learn why Gift Sanitary Napkins focuses on comfort, sustainability, and community. Our mission is to provide safe, organic feminine care that empowers women.",
  keywords: [
    "about",
    "gift",
    "sanitary napkins",
    "organic pads",
    "feminine hygiene",
    "sustainability",
  ],
  alternates: {
    canonical: "https://giftsanitarynapkins.com/about",
  },
};

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We believe every woman deserves products that make her feel comfortable, confident, and cared for during her menstrual cycle.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description:
      "Our commitment to sustainability means using organic, biodegradable materials that are gentle on both your body and the planet.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We're building a supportive community where women can share experiences, ask questions, and feel empowered together.",
  },
  {
    icon: Target,
    title: "Innovation Driven",
    description:
      "Constantly researching and developing better solutions for feminine hygiene that combine comfort, protection, and sustainability.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section
        aria-labelledby="about-heading"
        className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_70%)]"
        />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Eyebrow>Our story</Eyebrow>
          <h1
            id="about-heading"
            className="mt-6 text-4xl font-semibold leading-[1.08] text-foreground sm:text-6xl"
          >
            More than just <span className="italic text-primary">protection</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            At Gift Sanitary Napkins, we&apos;re redefining feminine care with
            products that celebrate womanhood, prioritize your comfort, and
            protect our planet — so you feel confident and cared for every day
            of the month.
          </p>
        </div>
      </section>

      <section aria-labelledby="mission-heading" className="pb-20 sm:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal className="relative order-last lg:order-first">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[2.5rem] border border-border bg-rose-soft">
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-navy/10 dark:bg-white/5"
              />
              <Image
                src="/images/gift-packs-cutout.png"
                alt="A woman holding a pack of Gift sanitary napkins next to a stack of packs"
                fill
                sizes="(min-width: 1024px) 448px, 90vw"
                className="object-contain p-6"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>Our mission</Eyebrow>
            <h2
              id="mission-heading"
              className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl"
            >
              Comfort shouldn&apos;t be a compromise
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                We started Gift Sanitary Napkins with a simple but powerful
                vision: to create feminine care products that make women feel
                empowered, comfortable, and confident during their menstrual
                cycle.
              </p>
              <p>
                Too many women settle for products that are uncomfortable,
                irritating, or harmful to the environment. We believe you
                shouldn&apos;t have to choose between your comfort and the
                planet&apos;s health.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              <li className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <Award className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">
                  Certified organic & dermatologically tested
                </span>
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <MapPin className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">
                  Proudly made in Ethiopia
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="values-heading"
        className="border-y border-border bg-card py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="values-heading"
            eyebrow="What we stand for"
            title="Our core values"
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <li key={value.title}>
                <Reveal delay={index * 0.08} className="h-full">
                  <article className="h-full rounded-2xl border border-border bg-background p-7">
                    <span
                      className={cn(
                        "flex size-12 items-center justify-center rounded-xl",
                        index % 2 === 0
                          ? "bg-rose-soft text-rose-soft-foreground"
                          : "bg-navy-soft text-navy-soft-foreground"
                      )}
                      aria-hidden="true"
                    >
                      <value.icon className="size-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="py-20 sm:py-24">
        <CtaBand />
      </div>
    </>
  );
}
