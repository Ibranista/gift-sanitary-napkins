"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Heart, Leaf, Shield, Sparkles } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Heart,
    title: "Comfortable Fit",
    description: "Soft, breathable materials that move with your body for all-day comfort and confidence.",
    color: "text-accent",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Made with 100% organic cotton and biodegradable materials to protect you and the planet.",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Long-Lasting Protection",
    description: "Advanced absorption technology keeps you dry and protected for up to 24 hours.",
    color: "text-accent",
  },
  {
    icon: Sparkles,
    title: "Dermatologically Tested",
    description: "Hypoallergenic and pH-balanced formula, gentle on sensitive skin and clinically tested.",
    color: "text-primary",
  },
]

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)

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
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-surface rounded-full text-primary font-medium text-sm mb-4"
          >
            Our Promise
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Gift Sanitary Napkins?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            We combine comfort, sustainability, and protection to give you the care you deserve.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} whileHover={{ y: -8 }} className="feature-card group">
              <div className="bg-surface rounded-2xl p-8 h-full border-2 border-transparent hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-xl">
                <div
                  className={`w-16 h-16 rounded-2xl bg-surface-alt flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}
                >
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
