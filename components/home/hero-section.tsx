import Image from "next/image";
import HeroCarouselLoader from "./hero-carousel-loader";
import { MontserratFont } from "@/lib/fonts";

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
  // Server-rendered hero content. Heavy interactive bits (carousel/animations)
  // are deferred to the client via `HeroCarousel` which is dynamically
  // imported. This reduces initial JS and improves LCP.

  return (
    <section
      className={`${MontserratFont.className} min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-12 lg:pt-20 lg:pb-12 py-10 font-montserrat">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content (static, server-rendered) */}
          <div className="hero-content space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full text-rose-600 font-medium text-sm shadow-sm">
              <span className="text-lg">✨</span>
              Premium Self Care
            </div>

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
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-300 hover:shadow-pink-400 flex items-center justify-center gap-2"
              >
                Contact Us
                <span className="text-lg">💌</span>
              </a>
              <a
                href="/about"
                className="w-full sm:w-auto px-8 py-3.5 border-2 border-rose-400 text-rose-500 rounded-full font-semibold hover:bg-rose-400 hover:text-white transition-all duration-300 bg-white/80 flex items-center justify-center"
              >
                Learn More
              </a>
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
              <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-pink-300 to-rose-300" />
              <div className="text-center flex-1">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text">
                  24h
                </div>
                <div className="text-sm text-gray-700 font-medium">
                  All-Day Protection
                </div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-pink-300 to-rose-300" />
              <div className="text-center flex-1">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text">
                  Eco
                </div>
                <div className="text-sm text-gray-700 font-medium">
                  Planet Friendly
                </div>
              </div>
            </div>
          </div>

          {/* Right: lightweight placeholder + client carousel that lazy loads animations */}
          <div className="hero-image relative overflow-visible">
            <div className="relative bg-white/90 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-pink-200/50 border border-pink-100">
              {/* Use Next/Image with priority on the first image for good LCP */}
              <div className="relative w-full flex items-center justify-center">
                <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-md mx-auto mb-6 h-64 sm:h-80 lg:h-72">
                  <div className="relative w-full h-full mx-auto rounded-2xl overflow-hidden">
                    <Image
                      src={carouselItems[0].image}
                      alt={carouselItems[0].title}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                      sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, 500px"
                    />
                  </div>
                </div>
              </div>

              {/* Dynamically loaded carousel (client) replaces the static hero image when ready */}
              <div className="mt-2">
                <HeroCarouselLoader items={carouselItems} />
              </div>
            </div>

            {/* Decorative Elements (pure CSS) */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 bg-pink-300 rounded-full blur-2xl opacity-60 pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-32 h-32 bg-rose-300 rounded-full blur-2xl opacity-50 pointer-events-none" />
            <div className="hidden sm:block absolute top-1/2 -right-8 w-16 h-16 bg-pink-200 rounded-full blur-xl opacity-70 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
