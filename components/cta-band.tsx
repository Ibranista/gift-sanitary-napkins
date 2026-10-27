import { Mail, Phone } from "lucide-react";
import Reveal from "@/components/reveal";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section aria-labelledby="cta-heading" className="px-4 sm:px-6 lg:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-navy px-6 py-14 text-navy-foreground sm:px-12 sm:py-16 dark:border dark:border-border">
        {/* Ribbon detail echoing the packaging */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-[18%] hidden w-3 bg-primary/80 md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/25 blur-3xl"
        />

        <div className="relative max-w-2xl">
          <h2
            id="cta-heading"
            className="text-3xl font-semibold sm:text-4xl"
          >
            Not sure which pad is right for you?
          </h2>
          <p className="mt-4 text-lg text-navy-foreground/75">
            Tell us a little about your flow and routine — we&apos;re happy to
            help you find your perfect match.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#1e2a78] transition-colors hover:bg-white/90"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-navy-foreground transition-colors hover:bg-white/10"
            >
              <Mail className="size-4" aria-hidden="true" />
              Email us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
