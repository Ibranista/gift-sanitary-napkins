"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Heart, Sparkles } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return setIsMobileMenuOpen(false);

    // Calculate offset to avoid the fixed header covering the section.
    const header = document.querySelector(
      'header[role="banner"]'
    ) as HTMLElement | null;
    const headerHeight = header ? header.getBoundingClientRect().height : 80;

    const sectionTop =
      contactSection.getBoundingClientRect().top + window.scrollY;
    const scrollTo = Math.max(sectionTop - headerHeight - 12, 0);

    window.scrollTo({ top: scrollTo, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    // { href: "/products", label: "Products" },
    // { href: "/testimonials", label: "Testimonials" },
    // { href: "/faqs", label: "FAQs" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      role="banner"
      className={`mx-auto fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-pink-50/95 to-rose-50/95 backdrop-blur-md shadow-lg shadow-pink-100/50"
          : "bg-gradient-to-r from-pink-50 to-rose-50"
      }`}
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex items-center justify-between h-20 lg:px-5">
          {/* Brand / Logo */}
          <Link
            href="/"
            className="font-cursive lg:text-3xl text-sm font-bold text-transparent bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text flex items-center gap-1"
            itemScope
            itemType="https://schema.org/Brand"
            aria-label="Gift Sanitary Napkins Home"
          >
            <Sparkles size={20} className="text-pink-400" />
            <span itemProp="name">Gift Sanitary Napkins</span>
            <Heart size={16} className="text-rose-400 fill-rose-400" />
          </Link>

          {/* Contact Button */}
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer hidden md:block px-6 py-2.5 bg-rose-400 text-white rounded-full font-medium hover:from-rose-500 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-200 hover:shadow-pink-300"
            aria-label="Get in touch with Gift Sanitary Napkins"
          >
            Get in Touch 💕
          </motion.button>

          {/* Navigation Menu */}
          <nav
            className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
            role="navigation"
            aria-label="Main Navigation"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            <ul className="flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  whileHover={{ y: -2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-rose-500 transition-all duration-300 font-medium relative group"
                    itemProp="url"
                    aria-label={`Navigate to ${link.label} page`}
                  >
                    <span itemProp="name">{link.label}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-rose-500 hover:bg-pink-50 rounded-full transition-colors duration-200"
            aria-label="Toggle mobile navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </section>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.nav
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile Navigation Menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gradient-to-b from-pink-50 to-rose-50 border-t border-pink-200 max-h-[calc(100vh-80px)] overflow-y-auto"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
        >
          <ul className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:text-rose-500 hover:bg-white/50 rounded-xl transition-all duration-300 font-medium border border-transparent hover:border-pink-200"
                  itemProp="url"
                >
                  <span itemProp="name">{link.label}</span>
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="pt-4"
            >
              <motion.button
                onClick={scrollToContact}
                className="w-full px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-medium hover:from-rose-500 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-200"
                aria-label="Get in touch with Gift Sanitary Napkins"
              >
                Get in Touch 💕
              </motion.button>
            </motion.li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}
