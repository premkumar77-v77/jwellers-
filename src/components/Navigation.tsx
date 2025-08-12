import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, toggleCart } = useCart();

  const categories = [
    'Necklaces', 'Rings', 'Earrings', 'Bracelets', 'Watches', 'Custom Designs'
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-luxury-gray-light shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-luxury font-bold text-luxury">
              Venkateswara Jewellers
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-luxury-black hover-luxury font-medium">
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-luxury-black hover-luxury font-medium">
                    Shop <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  {categories.map((category) => (
                    <DropdownMenuItem key={category} className="hover:text-primary">
                      <Link to={`/shop?category=${category.toLowerCase()}`} className="w-full">
                        {category}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/collections" className="text-luxury-black hover-luxury font-medium">
                Collections
              </Link>
              <Link to="/about" className="text-luxury-black hover-luxury font-medium">
                About
              </Link>
              <Link to="/contact" className="text-luxury-black hover-luxury font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search jewelry..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-luxury-gray-light bg-luxury-gray-light/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover-luxury">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative hover-luxury" onClick={toggleCart}>
              <ShoppingBag className="h-5 w-5" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-luxury-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {state.items.length}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card border-t border-luxury-gray-light">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search jewelry..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-luxury-gray-light bg-luxury-gray-light/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <a href="/" className="block px-3 py-2 text-base font-medium text-luxury-black hover:text-primary">
              Home
            </a>
            <div className="px-3 py-2">
              <p className="text-sm font-medium text-muted-foreground mb-2">Shop Categories</p>
              {categories.map((category) => (
                <a
                  key={category}
                  href={`/shop/${category.toLowerCase()}`}
                  className="block py-1 text-sm text-luxury-black hover:text-primary"
                >
                  {category}
                </a>
              ))}
            </div>
            <a href="/collections" className="block px-3 py-2 text-base font-medium text-luxury-black hover:text-primary">
              Collections
            </a>
            <a href="/about" className="block px-3 py-2 text-base font-medium text-luxury-black hover:text-primary">
              About
            </a>
            <a href="/contact" className="block px-3 py-2 text-base font-medium text-luxury-black hover:text-primary">
              Contact
            </a>
            <div className="flex items-center space-x-4 px-3 py-2">
              <Button variant="ghost" size="icon" className="hover-luxury">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative hover-luxury">
                <ShoppingBag className="h-5 w-5" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-luxury-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {state.items.length}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;