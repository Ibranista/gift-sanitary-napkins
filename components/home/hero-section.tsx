"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MontserratFont } from "@/lib/fonts";

gsap.registerPlugin(ScrollTrigger);

const carouselItems = [
  {
    image: "/images/product-1.jpg",
    title: "Regular Flow",
    description: "Perfect for everyday comfort and protection",
  },
  {
    image: "/images/product-2.png",
    title: "Ultra Thin",
    description: "Discreet protection without compromise",
  },
  {
    image: "/images/product-3.png",
    title: "Night Protection",
    description: "Sleep peacefully with extended coverage",
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return setIsMobileMenuOpen(false);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-image", {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const intervalRef = useRef<number | null>(null);

  const startInterval = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000) as unknown as number;
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselItems.length]);

  return (
    <section
      ref={sectionRef}
      className={`${MontserratFont.className} min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-12 lg:pt-20 lg:pb-12 py-10 font-montserrat">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div className="hero-content space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full text-rose-600 font-medium text-sm shadow-sm"
            >
              <span className="text-lg">✨</span>
              Premium Self Care
            </motion.div>

            <h1
              className={`${MontserratFont.className} font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text leading-tight text-balance`}
              style={{ lineHeight: 1.05 }}
            >
              Let Us Take Care Of You
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl font-medium bg-white/50 rounded-2xl p-5 sm:p-6 shadow-sm">
              Experience unparalleled comfort and protection with our
              eco-friendly sanitary napkins. Designed by women, for women, with
              your health and comfort as our priority.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto cursor-pointer px-8 py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-300 hover:shadow-pink-400 flex items-center justify-center gap-2"
                onClick={scrollToContact}
              >
                Contact Us
                <span className="text-lg">💌</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto cursor-pointer px-8 py-3.5 border-2 border-rose-400 text-rose-500 rounded-full font-semibold hover:bg-rose-400 hover:text-white transition-all duration-300 bg-white/80 flex items-center justify-center"
                onClick={() => router.push("/about")}
              >
                Learn More
              </motion.button>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8 pt-6 bg-white/60 rounded-3xl p-4 sm:p-6 shadow-sm">
              <div className="text-center flex-1">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text">
                  100%
                </div>
                <div className="text-sm text-gray-700 font-medium">
                  Organic Cotton
                </div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-pink-300 to-rose-300"></div>
              <div className="text-center flex-1">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text">
                  24h
                </div>
                <div className="text-sm text-gray-700 font-medium">
                  All-Day Protection
                </div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-pink-300 to-rose-300"></div>
              <div className="text-center flex-1">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text">
                  Eco
                </div>
                <div className="text-sm text-gray-700 font-medium">
                  Planet Friendly
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Carousel - UPDATED: No blur background, clear images */}
          <motion.div className="hero-image relative overflow-visible">
            <div className="relative bg-white/90 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-pink-200/50 backdrop-blur-sm border border-pink-100">
              <div className="relative w-full flex items-center justify-center">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="text-center w-full"
                >
                  {/* UPDATED: Larger image container without blur background */}
                  <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-md mx-auto mb-6 h-64 sm:h-80 lg:h-72">
                    <div className="relative w-full h-full mx-auto rounded-2xl overflow-hidden">
                      <Image
                        src={
                          carouselItems[currentSlide].image ||
                          "/placeholder.svg"
                        }
                        alt={carouselItems[currentSlide].title}
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority={true}
                        sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, 500px"
                      />
                    </div>
                  </div>

                  {/* UPDATED: Text with better contrast */}
                  <div className="px-4">
                    <h3 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                      {carouselItems[currentSlide].title}
                    </h3>
                    <p className="text-gray-700 font-medium text-lg sm:text-xl bg-white/80 rounded-xl py-2 px-4 inline-block">
                      {carouselItems[currentSlide].description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Carousel Controls */}
              <div
                className="flex items-center justify-center gap-3 mt-8 flex-wrap"
                role="tablist"
                aria-label="Carousel slides"
              >
                <div className="flex gap-2" role="presentation">
                  {carouselItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentSlide(index);
                        startInterval();
                      }}
                      aria-current={index === currentSlide}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rose-300 ${
                        index === currentSlide
                          ? "bg-gradient-to-r from-rose-500 to-pink-500 w-8 shadow-sm"
                          : "bg-pink-300 hover:bg-pink-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 bg-pink-300 rounded-full blur-2xl opacity-60 pointer-events-none"></div>
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-32 h-32 bg-rose-300 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
            <div className="hidden sm:block absolute top-1/2 -right-8 w-16 h-16 bg-pink-200 rounded-full blur-xl opacity-70 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
