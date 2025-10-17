"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Heart, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    alert(
      "Thank you for your beautiful message! We'll get back to you soon. 💕"
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full text-rose-600 font-medium text-sm mb-4 shadow-sm"
          >
            <Sparkles size={16} />
            Let's Connect
          </motion.div>
          <h2
            id="contact-heading"
            className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text mb-4 text-balance leading-tight"
          >
            We'd Love to Hear Your Story
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed bg-white/50 rounded-2xl p-4 sm:p-6 shadow-sm">
            Have questions about our feminine care? We're here to listen and
            help you find your perfect comfort match.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 contact-content">
          {/* Contact Information */}
          <article className="space-y-6 sm:space-y-8">
            <section className="bg-white/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg backdrop-blur-sm border border-pink-100">
              <h3 className="font-poppins text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text mb-4 sm:mb-6">
                Let's Chat! 💬
              </h3>

              <ul className="space-y-3 sm:space-y-6">
                <li>
                  <motion.div
                    whileHover={{ x: 4, scale: 1.02 }}
                    className="flex items-start gap-2 sm:gap-4 p-2 sm:p-4 rounded-lg sm:rounded-2xl hover:bg-pink-50/50 transition-all duration-300 border border-transparent hover:border-pink-200"
                  >
                    <div className="p-1.5 sm:p-3 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full shadow-md flex-shrink-0 mt-0.5">
                      <Mail
                        className="text-white"
                        size={18}
                        aria-hidden="true"
                      />
                    </div>
                    <address className="not-italic flex-1 min-w-0">
                      <h4 className="font-poppins font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                        Email Us
                      </h4>
                      <a
                        href="mailto:hello@giftsanitarynapkins.com"
                        className="text-gray-700 text-sm sm:text-base break-all"
                      >
                        hello@giftsanitarynapkins.com
                      </a>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        We typically reply within 2 hours
                      </p>
                    </address>
                  </motion.div>
                </li>

                <li>
                  <motion.div
                    whileHover={{ x: 4, scale: 1.02 }}
                    className="flex items-start gap-2 sm:gap-4 p-2 sm:p-4 rounded-lg sm:rounded-2xl hover:bg-pink-50/50 transition-all duration-300 border border-transparent hover:border-pink-200"
                  >
                    <div className="p-1.5 sm:p-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-md flex-shrink-0 mt-0.5">
                      <Phone
                        className="text-white"
                        size={18}
                        aria-hidden="true"
                      />
                    </div>
                    <address className="not-italic flex-1 min-w-0">
                      <h4 className="font-poppins font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                        Call Us
                      </h4>
                      <a
                        href="tel:+251911258682"
                        className="text-gray-700 text-sm sm:text-base break-all"
                      >
                        +251 911-258682
                      </a>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        Mon-Fri, 24/7
                      </p>
                    </address>
                  </motion.div>
                </li>

                <li>
                  <motion.div
                    whileHover={{ x: 4, scale: 1.02 }}
                    className="flex items-start gap-2 sm:gap-4 p-2 sm:p-4 rounded-lg sm:rounded-2xl hover:bg-pink-50/50 transition-all duration-300 border border-transparent hover:border-pink-200"
                  >
                    <div className="p-1.5 sm:p-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-md flex-shrink-0 mt-0.5">
                      <MapPin
                        className="text-white"
                        size={18}
                        aria-hidden="true"
                      />
                    </div>
                    <address className="not-italic flex-1 min-w-0">
                      <h4 className="font-poppins font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                        Visit Us
                      </h4>
                      <p className="text-gray-700 text-sm sm:text-base">
                        Addis-Ababa
                      </p>
                      <p className="text-gray-700 text-sm sm:text-base">
                        Bole City
                      </p>
                    </address>
                  </motion.div>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-r from-pink-200/50 to-rose-200/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-pink-200/50">
              <h3 className="font-poppins text-base sm:text-lg md:text-xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text mb-3 sm:mb-4">
                When We're Here for You 🌸
              </h3>
              <dl className="space-y-2 sm:space-y-3 text-gray-700">
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-white/30 transition-colors text-sm sm:text-base">
                  <dt className="font-medium">Monday - Friday</dt>
                  <dd>24/7</dd>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-white/30 transition-colors text-sm sm:text-base">
                  <dt className="font-medium">Saturday</dt>
                  <dd>12:00 AM - 6:00 PM</dd>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-white/30 transition-colors text-rose-500 text-sm sm:text-base">
                  <dt className="font-medium">Sunday</dt>
                  <dd>Self-Care Day 💝</dd>
                </div>
              </dl>
            </section>
          </article>

          {/* Contact Form */}
          <article className="bg-white/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg backdrop-blur-sm border border-pink-100">
            <h3 className="font-poppins text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text mb-4 sm:mb-6">
              Share Your Thoughts ✨
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
              aria-label="Contact form"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Your Beautiful Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="What should we call you?"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-pink-200 rounded-xl sm:rounded-2xl focus:border-rose-400 focus:outline-none transition-colors bg-white/50 placeholder-gray-400 text-sm sm:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-pink-200 rounded-xl sm:rounded-2xl focus:border-rose-400 focus:outline-none transition-colors bg-white/50 placeholder-gray-400 text-sm sm:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="We'd love to hear what's on your mind... 💭"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-pink-200 rounded-xl sm:rounded-2xl focus:border-rose-400 focus:outline-none transition-colors bg-white/50 placeholder-gray-400 resize-none text-sm sm:text-base"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-pink-300/50 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending with love...
                  </div>
                ) : (
                  <>
                    Send Your Message
                    <Heart
                      size={16}
                      className="fill-white"
                      aria-hidden="true"
                    />
                  </>
                )}
              </motion.button>
            </form>
          </article>
        </div>

        {/* Decorative elements - hidden on mobile */}
        <div
          className="hidden sm:block absolute left-4 sm:left-10 top-1/4 w-16 h-16 sm:w-20 sm:h-20 bg-pink-300 rounded-full blur-2xl opacity-40"
          aria-hidden="true"
        ></div>
        <div
          className="hidden sm:block absolute right-4 sm:right-10 bottom-1/4 w-20 h-20 sm:w-24 sm:h-24 bg-rose-300 rounded-full blur-2xl opacity-30"
          aria-hidden="true"
        ></div>
        <div
          className="hidden sm:block absolute bottom-10 left-1/4 sm:left-1/3 w-12 h-12 sm:w-16 sm:h-16 bg-purple-300 rounded-full blur-2xl opacity-20"
          aria-hidden="true"
        ></div>
      </div>
    </section>
  );
}
