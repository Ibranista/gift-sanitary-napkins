"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    id: 1,
    name: "Regular Flow",
    description: "Perfect for everyday comfort and protection",
    image: "/images/product-1.jpg",
    features: ["Ultra-soft", "Breathable", "8-hour protection"],
  },
  {
    id: 2,
    name: "Ultra Thin",
    description: "Discreet protection without compromise",
    image: "/images/product-2.jpg",
    features: ["Super thin", "Flexible", "All-day comfort"],
  },
  {
    id: 3,
    name: "Night Protection",
    description: "Sleep peacefully with extended coverage",
    image: "/images/product-3.jpg",
    features: ["Extra long", "Maximum absorbency", "12-hour protection"],
  },
]

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null)

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
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-secondary/30 rounded-full text-primary font-medium text-sm mb-4"
          >
            Our Products
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Choose Your Perfect Protection
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Discover our range of premium sanitary napkins designed for every need and lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-surface rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="relative h-64 mb-6 bg-white rounded-xl overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted mb-4 leading-relaxed">{product.description}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/products">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 group"
                  >
                    Learn More
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-colors inline-flex items-center gap-2"
            >
              View All Products
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
