import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedCollections from '@/components/FeaturedCollections';
import BestSellers from '@/components/BestSellers';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      
      <FeaturedCollections />
      
      <BestSellers />
      
      <Footer />
    </main>
  );
};

export default Index;
