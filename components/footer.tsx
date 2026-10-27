import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/logo";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Soft, breathable and dependable sanitary napkins — made in
              Ethiopia to keep you comfortable and confident every day of the
              month.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Explore
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 break-all transition-colors hover:text-primary"
                >
                  <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Made with care in Addis Ababa.</p>
        </div>
      </div>
    </footer>
  );
}
