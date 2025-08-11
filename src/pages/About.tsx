import React from 'react';
import { Award, Users, Heart, Sparkles, Shield, Globe, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { label: "Years of Excellence", value: "50+", icon: Clock },
    { label: "Master Craftsmen", value: "25", icon: Users },
    { label: "Countries Served", value: "40+", icon: Globe },
    { label: "Awards Won", value: "15", icon: Award },
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Exceptional Craftsmanship",
      description: "Every piece is meticulously handcrafted by our master artisans using traditional techniques passed down through generations."
    },
    {
      icon: Heart,
      title: "Emotional Connection",
      description: "We understand that jewelry represents life's most precious moments. Each piece is designed to celebrate and commemorate your unique story."
    },
    {
      icon: Shield,
      title: "Uncompromising Quality",
      description: "We source only the finest materials and diamonds, ensuring each piece meets our rigorous standards for beauty and durability."
    },
    {
      icon: Star,
      title: "Timeless Design",
      description: "Our designs transcend trends, creating timeless pieces that will be treasured for generations to come."
    }
  ];

  const team = [
    {
      name: "Elena Marchetti",
      role: "Master Designer & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "With over 30 years of experience, Elena's vision has shaped Lumière into the prestigious brand it is today."
    },
    {
      name: "Marcus Thompson",
      role: "Head of Craftsmanship",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      bio: "Marcus leads our team of master craftsmen, ensuring every piece meets our exacting standards of excellence."
    },
    {
      name: "Sophia Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      bio: "Sophia brings fresh perspectives to our designs while honoring our heritage of timeless elegance."
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-gray-light pt-20">
      {/* Hero Section */}
      <div className="bg-white border-b border-luxury-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-primary mr-3" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Our Story
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-luxury font-bold text-luxury-black mb-6">
              About Lumière
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over five decades, Lumière has been synonymous with exceptional luxury jewelry, 
              creating pieces that celebrate life's most precious moments with unparalleled artistry and elegance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center bg-white rounded-xl p-6 shadow-elegant animate-luxury-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-luxury font-bold text-luxury-black mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-luxury-slide-up">
            <h2 className="text-4xl font-luxury font-bold text-luxury-black mb-6">
              Our Heritage
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1973 by master jeweler Elena Marchetti, Lumière began as a small atelier 
                in the heart of Paris. What started as a passion for creating exceptional jewelry 
                has evolved into one of the world's most respected luxury jewelry houses.
              </p>
              <p>
                Our commitment to excellence has remained unwavering throughout the decades. Every piece 
                that bears the Lumière name is a testament to our dedication to superior craftsmanship, 
                ethical sourcing, and timeless design.
              </p>
              <p>
                Today, our creations grace the most prestigious occasions worldwide, yet we never forget 
                our roots in traditional craftsmanship and our mission to create jewelry that tells 
                your unique story.
              </p>
            </div>
          </div>
          
          <div className="relative animate-luxury-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square bg-primary/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="h-24 w-24 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-luxury font-bold text-luxury-black">
                  Crafting Dreams
                </h3>
                <p className="text-muted-foreground mt-2">
                  Since 1973
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-luxury font-bold text-luxury-black mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-white rounded-xl p-8 shadow-elegant hover-glow transition-all duration-500 animate-luxury-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-luxury font-semibold text-luxury-black mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-luxury font-bold text-luxury-black mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate artisans behind every Lumière creation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="text-center bg-white rounded-xl p-8 shadow-elegant hover-glow transition-all duration-500 animate-luxury-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-luxury font-semibold text-luxury-black mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="bg-white rounded-2xl p-12 shadow-elegant text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-luxury font-bold text-luxury-black mb-6">
              Our Commitment to You
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When you choose Lumière, you're not just purchasing jewelry – you're investing in 
              a legacy of excellence. Every piece comes with our lifetime warranty and the 
              assurance that it has been created with the utmost care and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-luxury text-lg px-8 py-3">
                Explore Our Collections
              </Button>
              <Button variant="outline" className="text-lg px-8 py-3">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;