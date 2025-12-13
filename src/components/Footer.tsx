import React from "react";
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-bark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary rounded-full">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">Organic Store</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted source for 100% natural and organic products. 
              Farm fresh goodness delivered to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Fruits & Vegetables
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Spices & Masala
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Edible Oils
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  Dry Fruits & Nuts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+919000228212" className="hover:text-primary-foreground transition-colors">
                  +91 9000228212
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@organicstore.com" className="hover:text-primary-foreground transition-colors">
                  info@organicstore.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Organic Store. All rights reserved. Made with 💚 for healthy living.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
