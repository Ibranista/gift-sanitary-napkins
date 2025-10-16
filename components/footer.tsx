import Link from "next/link";
import { Mail, Phone, MapPin, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 border-t border-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-pink-400" />
              <h3 className="font-serif text-2xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text">
                Gift Sanitary Napkins
              </h3>
              <Heart size={16} className="text-rose-400 fill-rose-400" />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4 bg-white/50 rounded-2xl p-4 shadow-sm">
              Providing beautiful comfort, gentle care, and radiant confidence
              to women everywhere with our premium feminine products. Because
              every woman deserves to feel beautiful. 🌸
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text mb-4">
              Explore More
            </h4>
            <div className="space-y-3">
              <Link
                href="/about"
                className="block text-gray-700 hover:text-rose-500 transition-all duration-300 hover:translate-x-2 font-medium"
              >
                About Us
              </Link>
              {/* <Link
                href="/products"
                className="block text-gray-700 hover:text-rose-500 transition-all duration-300 hover:translate-x-2 font-medium"
              >
                Our Products
              </Link> */}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-transparent bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text mb-4">
              Let's Connect 💕
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700 group">
                <div className="p-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Phone size={16} className="text-white" />
                </div>
                <span className="group-hover:text-rose-500 transition-colors">
                  +251 911-258682
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 group">
                <div className="p-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <Mail size={16} className="text-white" />
                </div>
                <span className="group-hover:text-rose-500 transition-colors">
                  hello@giftsanitarynapkins.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 group">
                <div className="p-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  <MapPin size={16} className="text-white" />
                </div>
                <span className="group-hover:text-rose-500 transition-colors">
                  Addis Ababa, Ethiopia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-pink-200 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">
              © 2025 Gift Sanitary Napkins.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="hover:text-rose-500 transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="w-1 h-1 bg-pink-300 rounded-full"></span>
              <span className="hover:text-rose-500 transition-colors cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-10 bottom-10 w-16 h-16 bg-pink-300 rounded-full blur-2xl opacity-30"></div>
        <div className="absolute right-10 bottom-20 w-20 h-20 bg-rose-300 rounded-full blur-2xl opacity-20"></div>
      </div>
    </footer>
  );
}
