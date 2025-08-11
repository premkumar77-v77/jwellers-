import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-16 text-center">
          <h3 className="text-3xl font-luxury font-bold mb-4">
            Stay Connected with <span className="text-luxury">Lumière</span>
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Be the first to discover our latest collections, exclusive offers, and jewelry care tips
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button className="btn-luxury whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Get 10% off your first purchase when you subscribe
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-luxury font-bold text-luxury mb-6">
              Lumière
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting extraordinary jewelry pieces that celebrate life's most precious moments with unparalleled elegance and timeless beauty.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Collections', 'Custom Design', 'Gift Cards', 'Size Guide', 'Care Instructions'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              {['Contact Us', 'Shipping Info', 'Returns & Exchanges', 'Warranty', 'FAQ', 'Live Chat'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Luxury Avenue</p>
                  <p className="text-gray-300">Beverly Hills, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-gray-300">hello@lumiere.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon - Sat: 10AM - 8PM</p>
                  <p className="text-gray-300">Sunday: 12PM - 6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; {currentYear} Lumière Jewelry. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Certified by GIA | Conflict-Free Diamonds | Lifetime Warranty</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;