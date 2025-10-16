import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-surface-alt border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Gift</h3>
            <p className="text-muted leading-relaxed mb-4">
              Providing comfort, care, and confidence to women everywhere with our premium sanitary products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-muted hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/products" className="block text-muted hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/testimonials" className="block text-muted hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link href="/faqs" className="block text-muted hover:text-primary transition-colors">
                FAQs
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted">
                <Phone size={18} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <Mail size={18} className="text-primary" />
                <span>hello@giftsanitary.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted">
                <MapPin size={18} className="text-primary" />
                <span>123 Wellness Street, CA 90210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-light text-center text-muted">
          <p>© 2025 Gift Sanitary Napkins. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
