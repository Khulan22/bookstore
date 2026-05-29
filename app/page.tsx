"use client";

import {
  Book,
  MapPin,
  Clock,
  Phone,
  Mail,
  CreditCard,
  Truck,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

export function Footer() {
  return (
    <footer id="about" className="bg-primary text-primary-foreground">
      {/* Trust Badges */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary-foreground/10 rounded-full">
                <Truck className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium">Free Shipping</p>
              <p className="text-xs text-primary-foreground/60">
                On orders over $50
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary-foreground/10 rounded-full">
                <RefreshCw className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium">Easy Returns</p>
              <p className="text-xs text-primary-foreground/60">
                30-day return policy
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary-foreground/10 rounded-full">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium">Secure Checkout</p>
              <p className="text-xs text-primary-foreground/60">
                100% protected
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-primary-foreground/10 rounded-full">
                <CreditCard className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium">Gift Cards</p>
              <p className="text-xs text-primary-foreground/60">
                Perfect for book lovers
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-foreground/20 p-2.5 rounded-xl">
                <Book className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">
                  The Cozy Corner
                </h3>
                <p className="text-sm text-primary-foreground/70">Bookshop</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              A beloved neighborhood bookstore where every visit feels like
              coming home. We curate stories that inspire, comfort, and
              transform.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="p-2.5 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="p-2.5 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="p-2.5 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
                <div>
                  <p className="text-primary-foreground/80">
                    123 Bookworm Lane
                  </p>
                  <p className="text-primary-foreground/80">
                    Literary District, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
                <div>
                  <p className="text-primary-foreground/80 font-medium">
                    Store Hours
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    Mon-Sat: 9am - 9pm
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    Sun: 10am - 6pm
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <a
                  href="tel:+15551234567"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                <a
                  href="mailto:hello@cozycorner.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {" "}
                  hello@cozycorner.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <a
                href="#browse"
                className="block text-primary-foreground/80 hover:text-accent transition-colors py-1"
              >
                Browse Books
              </a>
              <a
                href="#"
                className="block text-primary-foreground/80 hover:text-accent transition-colors py-1"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="block text-primary-foreground/80 hover:text-accent transition-colors py-1"
              >
                Staff Picks
              </a>
              <a
                href="#"
                className="block text-primary-foreground/80 hover:text-accent transition-colors py-1"
              >
                Book Club
              </a>
              <a
                href="#"
                className="block text-primary-foreground/80 hover:text-accent transition-colors py-1"
              >
                Events Calendar
              </a>
              <a
                href="#"
                className="block text-primary-foreground/80 hover:text-accent transition-colors py-1"
              >
                Gift Cards
              </a>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Support</h4>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-primary-foreground/80 hover:text-accent transition-colors py-1"
              >
                {" "}
                Help Center
              </a>
              <a
                href="#"
                className="block text-primary-foreground/80 hover:text-accent transition-colors py-1"
              >
                Shipping Info
              </a>
              <a
                href="#"
                className="block text-primary-foreground/80 hover:text-accent transition-colors py-1"
              >
                Returns & Exchanges
              </a>
              <a
                href="#"
                className="block text-primary-foreground/80 hover:text-accent transition-colors py-1"
              >
                Track Order
              </a>
              <a
                href="#"
                className="block text-primary-foreground/80 hover:text-accent transition-colors py-1"
              >
                Careers
              </a>
              <a
                href="#"
                className="block text-primary-foreground/80 hover:text-accent transition-colors py-1"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60 text-center md:text-left">
            © {new Date().getFullYear()} The Cozy Corner Bookshop. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return <Footer />;
}
