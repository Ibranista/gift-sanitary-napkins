"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Leaf, Shield, Sparkles } from "lucide-react";
import { cedarville, MontserratFont } from "@/lib/fonts";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Heart,
    title: "Comfortable Fit",
    description:
      "Soft, breathable materials that move with your body for all-day comfort and confidence.",
    color: "text-rose-500",
    bgColor: "bg-rose-100",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Made with 100% organic cotton and biodegradable materials to protect you and the planet.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-100",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: Shield,
    title: "Long-Lasting Protection",
    description:
      "Advanced absorption technology keeps you dry and protected for up to 24 hours.",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Dermatologically Tested",
    description:
      "Hypoallergenic and pH-balanced formula, gentle on sensitive skin and clinically tested.",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    gradient: "from-purple-400 to-pink-500",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative lg:py-20 py-10 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100"
      aria-labelledby="features-heading"
      role="region"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header
          className="text-center mb-16"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full text-rose-600 font-medium text-sm mb-5 shadow-sm"
          >
            <Sparkles size={16} aria-hidden="true" />
            <span>Our Promise to You</span>
          </motion.div>
          <h2
            id="features-heading"
            className={`font-poppins text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text mb-6 text-balance`}
            itemProp="slogan"
          >
            Why Choose <span itemProp="brand">Gift Sanitary Napkins</span>?
          </h2>
          <p
            className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed bg-white/50 rounded-2xl p-6 shadow-sm"
            itemProp="description"
          >
            We combine comfort, sustainability, and protection to give you the
            care you truly deserve — because every woman deserves to feel
            beautiful and confident.
          </p>
        </header>

        {/* Features Grid */}
        <article
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          itemProp="itemListElement"
        >
          {features.map((feature, index) => (
            <motion.article
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              className="feature-card group"
              role="listitem"
              itemScope
              itemType="https://schema.org/Product"
            >
              <div className="relative bg-white/80 rounded-3xl p-8 h-full border-2 border-transparent hover:border-pink-200 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-pink-200/30 backdrop-blur-sm">
                <figure
                  className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                  aria-hidden="true"
                >
                  <div className={`${feature.color}`}>
                    <feature.icon size={32} strokeWidth={1.5} />
                  </div>
                </figure>

                <h3
                  className="font-poppins text-xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text mb-3"
                  itemProp="name"
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-700 leading-relaxed font-medium"
                  itemProp="description"
                >
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <div
                  className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${feature.gradient} group-hover:w-16 transition-all duration-300 rounded-full`}
                ></div>
              </div>
            </motion.article>
          ))}
        </article>

        {/* Decorative Background Elements */}
        <div
          className="absolute left-10 top-1/4 w-20 h-20 bg-pink-300 rounded-full blur-2xl opacity-40"
          aria-hidden="true"
        ></div>
        <div
          className="absolute right-10 bottom-1/4 w-24 h-24 bg-rose-300 rounded-full blur-2xl opacity-30"
          aria-hidden="true"
        ></div>
      </div>
    </section>
  );
}
