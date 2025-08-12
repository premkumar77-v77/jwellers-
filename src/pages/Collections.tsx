import React from 'react';
import { ArrowRight, Crown, Heart, Star, Sparkles, Award, Gem } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import productNecklace from '@/assets/product-necklace.jpg';
import productEarrings from '@/assets/product-earrings.jpg';
import productBracelet from '@/assets/product-bracelet.jpg';

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: "Royal Collection",
      description: "Crowning glory of precious gems and rare diamonds, inspired by royal heritage and timeless elegance.",
      image: productNecklace,
      icon: Crown,
      weight: "From 500g",
      pieces: 24,
      badge: "Signature",
      highlights: ["Rare Diamonds", "Royal Heritage", "Limited Edition"],
      featured: true
    },
    {
      id: 2,
      name: "Eternal Love",
      description: "Romantic pieces for life's most precious moments, celebrating eternal bonds and cherished memories.",
      image: productEarrings,
      icon: Heart,
      weight: "From 250g",
      pieces: 18,
      badge: "Popular",
      highlights: ["Romantic Design", "Perfect for Proposals", "Customizable"],
      featured: true
    },
    {
      id: 3,
      name: "Signature Series",
      description: "Exclusively crafted statement pieces that embody luxury and sophistication in every detail.",
      image: productBracelet,
      icon: Star,
      weight: "From 800g",
      pieces: 12,
      badge: "Exclusive",
      highlights: ["Handcrafted", "One-of-a-Kind", "Master Artisan"],
      featured: true
    },
    {
      id: 4,
      name: "Celestial Dreams",
      description: "Inspired by the cosmos, featuring star and moon motifs with shimmering diamonds.",
      image: productEarrings,
      icon: Sparkles,
      weight: "From 180g",
      pieces: 20,
      badge: "New",
      highlights: ["Cosmic Design", "Diamond Stars", "Night Sky Theme"],
      featured: false
    },
    {
      id: 5,
      name: "Heritage Collection",
      description: "Timeless designs passed down through generations, reimagined for modern elegance.",
      image: productNecklace,
      icon: Award,
      weight: "From 420g",
      pieces: 16,
      badge: "Classic",
      highlights: ["Vintage Inspired", "Heirloom Quality", "Traditional Craft"],
      featured: false
    },
    {
      id: 6,
      name: "Precious Gems",
      description: "Featuring the world's most coveted gemstones in stunning contemporary settings.",
      image: productBracelet,
      icon: Gem,
      weight: "From 650g",
      pieces: 14,
      badge: "Premium",
      highlights: ["Rare Gemstones", "Certificate of Authenticity", "Museum Quality"],
      featured: false
    }
  ];

  const featuredCollections = collections.filter(c => c.featured);
  const otherCollections = collections.filter(c => !c.featured);

  const navigate = useNavigate();

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'Signature': return 'default';
      case 'Popular': return 'secondary';
      case 'Exclusive': return 'destructive';
      case 'New': return 'default';
      default: return 'outline';
    }
  };

  return (
    <div className="min-h-screen bg-luxury-gray-light pt-20">
      {/* Hero Section */}
      <div className="bg-white border-b border-luxury-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-primary mr-3" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Curated Collections
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-luxury font-bold text-luxury-black mb-6">
              Venkateswara Jewellers Collections
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated collections, each telling a unique story through 
              exceptional craftsmanship and timeless design. From royal heritage to modern elegance, 
              find the perfect piece that speaks to your soul.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Collections */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-luxury font-bold text-luxury-black mb-4">
              Venkateswara Jewellers Featured Collections
            </h2>
            <p className="text-lg text-muted-foreground">
              Our most beloved and exclusive collections
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCollections.map((collection, index) => (
              <div
                key={collection.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-elegant hover-glow transition-all duration-700 animate-luxury-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image Container */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge variant={getBadgeVariant(collection.badge)} className="bg-primary text-luxury-black font-medium">
                      {collection.badge}
                    </Badge>
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white">
                      <div className="flex items-center mb-3">
                        <collection.icon className="h-6 w-6 text-primary mr-2" />
                        <span className="font-medium tracking-wider uppercase text-sm">
                          {collection.pieces} Pieces
                        </span>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <collection.icon className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-2xl font-luxury font-bold text-luxury-black">
                      {collection.name}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {collection.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {collection.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-luxury">
                      {collection.weight}
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
        </div>

        {/* Other Collections */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-luxury font-bold text-luxury-black mb-4">
              All Collections
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our complete range of jewelry collections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCollections.map((collection, index) => (
              <div
                key={collection.id}
                className="group bg-white rounded-xl shadow-elegant hover-glow transition-all duration-500 overflow-hidden animate-luxury-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute top-4 left-4">
                    <Badge variant={getBadgeVariant(collection.badge)} className="bg-primary text-luxury-black font-medium">
                      {collection.badge}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <collection.icon className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-luxury font-semibold text-luxury-black">
                      {collection.name}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {collection.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {collection.highlights.slice(0, 2).map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-luxury block">
                        {collection.weight}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {collection.pieces} pieces
                      </span>
                    </div>
                    <Button variant="ghost" className="hover-luxury p-0">
                      Explore
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-12 shadow-elegant">
            <h3 className="text-3xl font-luxury font-bold text-luxury-black mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our master craftsmen can create a custom piece just for you. 
              From concept to creation, we'll bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-luxury text-lg px-8 py-3" onClick={() => navigate('/contact')}>
                Custom Design Consultation
              </Button>
              <Button variant="outline" className="text-lg px-8 py-3" onClick={() => navigate('/shop')}>
                Browse All Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
