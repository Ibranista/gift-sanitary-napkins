"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

gsap.registerPlugin(ScrollTrigger)

const carouselItems = [
  {
    image: "/images/product-1.jpg",
    title: "Regular Flow",
    description: "Perfect for everyday comfort and protection",
  },
  {
    image: "/images/product-2.jpg",
    title: "Ultra Thin",
    description: "Discreet protection without compromise",
  },
  {
    image: "/images/product-3.jpg",
    title: "Night Protection",
    description: "Sleep peacefully with extended coverage",
  },
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".hero-image", {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-surface via-white to-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div className="hero-content space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-secondary/30 rounded-full text-primary font-medium text-sm"
            >
              ✨ Premium Feminine Care
            </motion.div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Let Us Take Care Of You
            </h1>

            <p className="text-lg text-muted leading-relaxed max-w-xl">
              Experience unparalleled comfort and protection with our eco-friendly sanitary napkins. Designed by women,
              for women, with your health and comfort as our priority.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-accent text-white rounded-full font-semibold hover:bg-accent-hover transition-colors shadow-lg shadow-accent/30"
              >
                Shop Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Learn More
              </motion.button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted">Organic Cotton</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted">Protection</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">Eco</div>
                <div className="text-sm text-muted">Friendly</div>
              </div>
            </div>
          </motion.div>

          {/* Right Carousel */}
          <motion.div className="hero-image relative">
            <div className="relative bg-surface-alt rounded-3xl p-8 shadow-2xl">
              <div className="relative h-96 flex items-center justify-center">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="relative w-64 h-64 mx-auto mb-6">
                    <Image
                      src={carouselItems[currentSlide].image || "/placeholder.svg"}
                      alt={carouselItems[currentSlide].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    {carouselItems[currentSlide].title}
                  </h3>
                  <p className="text-muted">{carouselItems[currentSlide].description}</p>
                </motion.div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                </motion.button>

                <div className="flex gap-2">
                  {carouselItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide ? "bg-primary w-8" : "bg-border"
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-colors"
                >
                  <ChevronRight size={20} />
                </motion.button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
