import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowRight, Crown, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import productEarrings from '@/assets/product-earrings.jpg';
import productBracelet from '@/assets/product-bracelet.jpg';
import productNecklace from '@/assets/product-necklace.jpg';

const FeaturedCollections = () => {
  const navigate = useNavigate();
  const collections = [
    {
      id: 1,
      name: "Royal Collection",
      description: "Crowning glory of precious gems and rare diamonds",
      image: productNecklace,
      icon: Crown,
      price: "From $5,000",
      pieces: "24 pieces"
    },
    {
      id: 2,
      name: "Eternal Love",
      description: "Romantic pieces for life's most precious moments",
      image: productEarrings,
      icon: Heart,
      price: "From $2,500",
      pieces: "18 pieces"
    },
    {
      id: 3,
      name: "Signature Series",
      description: "Exclusively crafted statement pieces",
      image: productBracelet,
      icon: Star,
      price: "From $8,000",
      pieces: "12 pieces"
    }
  ];

  return (
    <section className="py-20 bg-luxury-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-luxury-fade-in">
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-luxury-black mb-4">
            Featured Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most coveted pieces, each crafted with exceptional attention to detail and uncompromising quality
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-2xl glass-card hover-glow animate-luxury-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Container */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-white">
                    <div className="flex items-center mb-2">
                      <collection.icon className="h-5 w-5 text-primary mr-2" />
                      <span className="text-sm font-medium tracking-wider uppercase">
                        {collection.pieces}
                      </span>
                    </div>
                    <Button className="btn-luxury" onClick={() => navigate('/collections')}>
                      Explore Collection
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <collection.icon className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-luxury font-semibold text-luxury-black">
                    {collection.name}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {collection.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-luxury">
                    {collection.price}
                  </span>
                  <Button variant="ghost" className="hover-luxury p-0">
                    View All
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Collections Button */}
        <div className="text-center mt-12">
          <Button className="btn-luxury text-lg px-8 py-3" onClick={() => navigate('/collections')}>
            View All Collections
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;