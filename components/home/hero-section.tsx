import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets, Leaf, ShieldCheck } from "lucide-react";
import { Eyebrow } from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { cn } from "@/lib/utils";

const stats = [
  { value: "100%", label: "Organic cotton cover" },
  { value: "24h", label: "Long-lasting protection" },
  { value: "pH", label: "Balanced & skin-friendly" },
];

const highlights = [
  { icon: Droplets, title: "Ultra super dry", note: "Fast-absorbing core", tone: "rose" },
  { icon: Leaf, title: "Breathable", note: "Gentle on skin", tone: "navy" },
  { icon: ShieldCheck, title: "Tested", note: "Dermatologically", tone: "rose" },
];

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Soft brand glow behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_85%_20%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_70%),radial-gradient(50%_45%_at_0%_90%,color-mix(in_oklab,var(--navy-soft-foreground)_12%,transparent),transparent_70%)]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <Eyebrow>Made in Ethiopia · For every day</Eyebrow>

          <h1
            id="hero-heading"
            className="mt-6 text-[2.6rem] font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-[4.25rem]"
          >
            Everyday care that feels like{" "}
            <span className="italic text-primary">a gift.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Experience unparalleled comfort and protection with our
            eco-friendly sanitary napkins. Designed by women, for women, with
            your health and comfort as our priority.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#products"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_var(--primary)] transition-colors hover:bg-primary-hover"
            >
              Explore products
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Talk to us
            </Link>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Reveal className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-[0_30px_80px_-30px_rgba(30,42,120,0.45)]">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[1.25rem]">
              <Image
                src="/images/product-1.jpg"
                alt="A pack of Gift Ultra Super Dry sanitary napkins"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <li
                key={item.title}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3"
              >
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-xl",
                    item.tone === "rose"
                      ? "bg-rose-soft text-rose-soft-foreground"
                      : "bg-navy-soft text-navy-soft-foreground"
                  )}
                >
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
