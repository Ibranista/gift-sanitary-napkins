"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "Regular Flow",
    description:
      "Perfect for everyday comfort and protection with our signature softness",
    image: "/images/product-1.jpg",
    features: ["Ultra-soft cover", "Breathable wings", "8-hour comfort"],
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
  },
  {
    id: 2,
    name: "Ultra Thin",
    description: "Discreet protection that feels like wearing nothing at all",
    image: "/images/product-2.jpg",
    features: ["Super thin design", "Flexible fit", "All-day confidence"],
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    id: 3,
    name: "Night Protection",
    description: "Sleep peacefully through the night with extended coverage",
    image: "/images/product-3.jpg",
    features: ["Extra long back", "Maximum absorbency", "12-hour security"],
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50",
  },
];

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".product-card", {
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
      className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full text-rose-600 font-medium text-sm mb-4 shadow-sm"
          >
            <Sparkles size={16} />
            Our Collection
          </motion.div>
          <h2 className="font-serif text-4xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text mb-4 text-balance">
            Find Your Perfect Comfort
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed bg-white/50 rounded-2xl p-6 shadow-sm">
            Discover our beautiful range of premium feminine care designed for
            every need and moment of your life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card group"
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`${product.bgColor} rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:shadow-pink-200/30 transition-all duration-300 h-full flex flex-col border-2 border-transparent hover:border-white/50 backdrop-blur-sm`}
              >
                {/* Product Image with decorative background */}
                <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent rounded-2xl"></div>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Decorative corner */}
                  <div
                    className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${product.color} rounded-bl-2xl opacity-20`}
                  ></div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                  {product.description}
                </p>

                <ul className="space-y-3 mb-6 flex-grow">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700 font-medium"
                    >
                      <span
                        className={`w-2 h-2 bg-gradient-to-r ${product.color} rounded-full mr-3 shadow-sm`}
                      ></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/about" className="cursor-pointer">
                  <motion.button
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-6 py-3 bg-gradient-to-r ${product.color} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-md`}
                  >
                    Discover More
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 border-2 border-rose-400 text-rose-500 rounded-full font-semibold hover:bg-gradient-to-r hover:from-rose-400 hover:to-pink-500 hover:text-white transition-all duration-300 inline-flex items-center gap-2 bg-white/80 shadow-lg hover:shadow-pink-200/50"
            >
              We Have Awesome Products For You
              <Heart
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
            </motion.button>
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-5 top-1/3 w-16 h-16 bg-pink-300 rounded-full blur-2xl opacity-40"></div>
        <div className="absolute right-8 bottom-1/4 w-20 h-20 bg-rose-300 rounded-full blur-2xl opacity-30"></div>
      </div>
    </section>
  );
}
