import React, { useState } from 'react';
import { Eye, Heart, ShoppingBag, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import productEarrings from '@/assets/product-earrings.jpg';
import productBracelet from '@/assets/product-bracelet.jpg';
import productNecklace from '@/assets/product-necklace.jpg';
import { useCart } from '@/context/CartContext';

const BestSellers = () => {
  const [favorites, setFavorites] = useState(new Set());
  const { addToCart } = useCart();

  const products = [
    {
      id: 'pearl-essence-earrings-1',
      name: "Pearl Essence Earrings",
      weight: "12.5g",
      originalWeight: "15.0g",
      image: productEarrings,
      rating: 4.9,
      reviews: 128,
      badge: "Bestseller",
      category: "Earrings"
    },
    {
      id: 'diamond-infinity-bracelet-2',
      name: "Diamond Infinity Bracelet",
      weight: "32.0g",
      originalWeight: null,
      image: productBracelet,
      rating: 5.0,
      reviews: 89,
      badge: "New",
      category: "Bracelets"
    },
    {
      id: 'royal-tennis-necklace-3',
      name: "Royal Tennis Necklace",
      weight: "45.0g",
      originalWeight: "52.0g",
      image: productNecklace,
      rating: 4.8,
      reviews: 156,
      badge: "Limited",
      category: "Necklaces"
    },
    {
      id: 'elegance-drop-earrings-4',
      name: "Elegance Drop Earrings",
      weight: "8.9g",
      originalWeight: null,
      image: productEarrings,
      rating: 4.7,
      reviews: 203,
      badge: "Popular",
      category: "Earrings"
    },
    {
      id: 'luxury-chain-bracelet-5',
      name: "Luxury Chain Bracelet",
      weight: "21.0g",
      originalWeight: "24.0g",
      image: productBracelet,
      rating: 4.9,
      reviews: 95,
      badge: "Sale",
      category: "Bracelets"
    },
    {
      id: 'signature-diamond-necklace-6',
      name: "Signature Diamond Necklace",
      weight: "68.0g",
      originalWeight: null,
      image: productNecklace,
      rating: 5.0,
      reviews: 67,
      badge: "Exclusive",
      category: "Necklaces"
    }
  ];

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const getBadgeVariant = (badge) => {
    switch (badge) {
      case 'Bestseller': return 'default';
      case 'New': return 'secondary';
      case 'Limited': return 'destructive';
      case 'Sale': return 'default';
      default: return 'outline';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-luxury-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-primary mr-2" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Customer Favorites
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-luxury-black mb-4">
            Best Sellers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover why these exquisite pieces are loved by jewelry connoisseurs worldwide
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-elegant hover-glow transition-all duration-500 overflow-hidden animate-luxury-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant={getBadgeVariant(product.badge)} className="bg-primary text-luxury-black font-medium">
                    {product.badge}
                  </Badge>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-all duration-300 hover:scale-110"
                >
                  <Heart 
                    className={`h-5 w-5 transition-colors ${
                      favorites.has(product.id) 
                        ? 'text-red-500 fill-red-500' 
                        : 'text-gray-600 hover:text-red-500'
                    }`}
                  />
                </button>

                {/* Quick Actions Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <Button 
                      size="sm" 
                      className="btn-glass text-white hover:text-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/product/${product.id}`;
                      }}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Quick View
                    </Button>
                    <Button 
                      size="sm" 
                      className="btn-luxury"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          id: product.id,
                          name: product.name,
                          weight: product.weight,
                          image: product.image,
                        });
                      }}
                    >
                      <ShoppingBag className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-primary font-medium tracking-wider uppercase">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-luxury font-semibold text-luxury-black mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-primary fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-luxury">
                      ${(product.weight * 100).toLocaleString()}
                    </span>
                    {product.originalWeight && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${product.originalWeight.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  {product.originalWeight && (
                    <Badge variant="destructive" className="bg-red-100 text-red-700">
                      Save ${((product.originalWeight - product.weight) * 100).toLocaleString()}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="btn-luxury text-lg px-8 py-3">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;