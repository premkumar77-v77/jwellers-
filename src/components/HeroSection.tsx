import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import heroImage1 from '@/assets/hero-jewelry-1.jpg';
import heroImage2 from '@/assets/hero-jewelry-2.jpg';
import heroImage3 from '@/assets/hero-jewelry-3.jpg';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: heroImage1,
      title: "Exquisite Diamond Collection",
      subtitle: "Discover our finest selection of premium diamonds",
      cta: "Shop Diamonds"
    },
    {
      image: heroImage2,
      title: "Luxury Engagement Rings",
      subtitle: "Create moments that last forever",
      cta: "Find Your Ring"
    },
    {
      image: heroImage3,
      title: "Timepieces of Excellence",
      subtitle: "Swiss craftsmanship meets modern elegance",
      cta: "Explore Watches"
    }
  ];

  // Auto-play slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slideshow Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-hero-gradient" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="animate-luxury-fade-in">
                  <div className="flex items-center justify-center mb-4">
                    <Sparkles className="h-8 w-8 text-primary mr-3" />
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">
                      Premium Luxury
                    </span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-luxury font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button className="btn-luxury text-lg px-8 py-3" onClick={() => navigate('/shop')}>
                      {slide.cta}
                    </Button>
                    <Button variant="outline" className="btn-glass text-white border-white hover:bg-white/10 text-lg px-8 py-3" onClick={() => navigate('/collections')}>
                      View Collection
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full glass-card hover:bg-white/20 transition-all group"
      >
        <ChevronLeft className="h-6 w-6 text-white group-hover:text-primary" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full glass-card hover:bg-white/20 transition-all group"
      >
        <ChevronRight className="h-6 w-6 text-white group-hover:text-primary" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-primary scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-20 hidden md:block">
        <div className="text-white/80 text-sm tracking-wider">
          <div className="flex items-center space-x-2">
            <div className="w-px h-12 bg-primary"></div>
            <span className="rotate-90 origin-left whitespace-nowrap">SCROLL TO EXPLORE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;