import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedCollections from '@/components/FeaturedCollections';
import BestSellers from '@/components/BestSellers';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* SEO-optimized structure */}
      <Navigation />
      
      <HeroSection />
      
      <FeaturedCollections />
      
      <BestSellers />
      
      <Footer />
    </main>
  );
};

export default Index;
