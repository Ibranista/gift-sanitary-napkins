"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, Users, Sparkles, Target, Award } from "lucide-react";
import Image from "next/image";

export default function page() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We believe every woman deserves products that make her feel comfortable, confident, and cared for during her menstrual cycle.",
      color: "from-rose-400 to-pink-500",
    },
    {
      icon: Leaf,
      title: "Eco-Conscious",
      description:
        "Our commitment to sustainability means using organic, biodegradable materials that are gentle on both your body and the planet.",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "We're building a supportive community where women can share experiences, ask questions, and feel empowered together.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Target,
      title: "Innovation Driven",
      description:
        "Constantly researching and developing better solutions for feminine hygiene that combine comfort, protection, and sustainability.",
      color: "from-blue-400 to-cyan-500",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      image: "/team/sarah.jpg",
      bio: "After struggling to find comfortable, eco-friendly feminine care products, Sarah founded Belle to create the solutions she wished existed.",
    },
    {
      name: "Dr. Maya Rodriguez",
      role: "Chief Medical Officer",
      image: "/team/maya.jpg",
      bio: "Board-certified gynecologist with 15+ years experience, ensuring our products meet the highest health and safety standards.",
    },
    {
      name: "Emily Thompson",
      role: "Product Innovation Lead",
      image: "/team/emily.jpg",
      bio: "Materials scientist passionate about developing sustainable alternatives that don't compromise on comfort or performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full text-rose-600 font-medium text-sm mb-6 shadow-sm"
            >
              <Sparkles size={16} />
              Our Story
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text mb-6 text-balance"
            >
              More Than Just Protection
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed bg-white/50 rounded-2xl p-6 shadow-sm"
            >
              At Gift Sanitary Napkins, we're redefining feminine care with
              products that celebrate womanhood, prioritize your comfort, and
              protect our beautiful planet. Because you deserve to feel
              beautiful, confident, and cared for every day of the month. 🌸
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text">
                Our Beautiful Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We started Gift Sanitary Napkins with a simple but powerful
                vision: to create feminine care products that make women feel
                empowered, comfortable, and beautiful during their menstrual
                cycle.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Too many women settle for products that are uncomfortable,
                irritating, or harmful to the environment. We believe you
                shouldn't have to choose between your comfort and the planet's
                health.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <Award className="text-rose-500" size={32} />
                <span className="text-gray-700 font-semibold">
                  Certified Organic & Dermatologically Tested
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/80 rounded-3xl p-8 shadow-xl backdrop-blur-sm border border-pink-100">
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/mission.jpg"
                    alt="Our mission - empowering women through comfortable, sustainable feminine care"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-300 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-rose-300 rounded-full blur-2xl opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full text-rose-600 font-medium text-sm mb-4 shadow-sm"
            >
              <Heart size={16} />
              What We Stand For
            </motion.div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white/80 rounded-3xl p-6 h-full border-2 border-transparent hover:border-pink-200 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                  >
                    <value.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full text-rose-600 font-medium text-sm mb-4 shadow-sm"
            >
              <Users size={16} />
              Meet Our Family
            </motion.div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text mb-4">
              The Beautiful Minds Behind Belle
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Our diverse team of passionate women is dedicated to creating
              products we're proud to share with our own sisters, mothers, and
              friends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white/80 rounded-3xl p-6 h-full border-2 border-transparent hover:border-pink-200 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text mb-2">
                    {member.name}
                  </h3>
                  <p className="text-rose-500 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Beautiful Community
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Ready to experience the Belle difference? Discover products
              designed with love, care, and your comfort in mind.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-white text-rose-500 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Shop Our Collection
                <Heart size={18} className="fill-rose-500" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-rose-500 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Decorative elements */}
      <div className="absolute left-5 top-1/4 w-20 h-20 bg-pink-300 rounded-full blur-2xl opacity-40"></div>
      <div className="absolute right-10 top-1/2 w-24 h-24 bg-rose-300 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute left-1/3 bottom-1/4 w-16 h-16 bg-purple-300 rounded-full blur-2xl opacity-20"></div>
    </div>
  );
}
