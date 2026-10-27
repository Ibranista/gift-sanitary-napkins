"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" || href === "/about" ? pathname === href : false;

  return (
    <header
      role="banner"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        isScrolled || isMenuOpen
          ? "border-b border-border bg-background/85 shadow-[0_8px_30px_-12px_rgba(22,26,51,0.12)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-border bg-card/70 p-1 backdrop-blur">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-navy text-navy-foreground dark:bg-navy-soft dark:text-navy-soft-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary-hover md:inline-flex"
          >
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      isActive(link.href)
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
