import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Boutique",
      details: ["123 Luxury Avenue", "Beverly Hills, CA 90210"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Toll-free: 1-800-LUMIERE"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@lumiere.com", "support@lumiere.com"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 10AM - 8PM", "Sunday: 12PM - 6PM"],
      action: "Schedule Visit"
    }
  ];

  const services = [
    {
      icon: MessageCircle,
      title: "Personal Consultation",
      description: "One-on-one sessions with our jewelry experts to find your perfect piece."
    },
    {
      icon: Award,
      title: "Custom Design",
      description: "Bring your vision to life with our bespoke jewelry creation service."
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Schedule a private viewing in our luxurious showroom environment."
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-gray-light pt-20">
      {/* Hero Section */}
      <div className="bg-white border-b border-luxury-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-luxury font-bold text-luxury-black mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're here to help you find the perfect piece or answer any questions about our collections. 
              Reach out to our team of jewelry experts.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={info.title}
              className="bg-white rounded-xl p-6 shadow-elegant hover-glow transition-all duration-500 text-center animate-luxury-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <info.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-luxury font-semibold text-luxury-black mb-3">
                {info.title}
              </h3>
              <div className="space-y-1 mb-4">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </div>
              <Button variant="ghost" className="hover-luxury text-sm">
                {info.action}
              </Button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-elegant">
            <h2 className="text-3xl font-luxury font-bold text-luxury-black mb-6">
              Send Us a Message
            </h2>
            <p className="text-muted-foreground mb-8">
              Have a question about our jewelry or need assistance? Fill out the form below and we'll get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    className="focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="product">Product Information</SelectItem>
                      <SelectItem value="custom">Custom Design</SelectItem>
                      <SelectItem value="appointment">Schedule Appointment</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                      <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us how we can help you..."
                  required
                  rows={5}
                  className="focus:ring-primary focus:border-primary"
                />
              </div>

              <Button type="submit" className="w-full btn-luxury text-lg py-3">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              We typically respond within 24 hours during business days.
            </p>
          </div>

          {/* Services & Map */}
          <div className="space-y-8">
            {/* Services */}
            <div className="bg-white rounded-xl p-8 shadow-elegant">
              <h3 className="text-2xl font-luxury font-bold text-luxury-black mb-6">
                Our Services
              </h3>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div 
                    key={service.title}
                    className="flex items-start space-x-4 animate-luxury-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <service.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-luxury-black mb-2">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl p-8 shadow-elegant">
              <h3 className="text-2xl font-luxury font-bold text-luxury-black mb-6">
                Find Our Boutique
              </h3>
              <div className="aspect-video bg-luxury-gray-light rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Interactive map would be displayed here
                  </p>
                  <Button variant="outline" className="hover-luxury">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-luxury-gray-light rounded-lg">
                <h4 className="font-semibold text-luxury-black mb-2">Parking Information</h4>
                <p className="text-sm text-muted-foreground">
                  Complimentary valet parking available for all appointments. 
                  Street parking and nearby parking garage also available.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-elegant">
          <h3 className="text-3xl font-luxury font-bold text-luxury-black mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-luxury-black mb-2">Do you offer custom design services?</h4>
                <p className="text-muted-foreground text-sm">
                  Yes, we specialize in creating bespoke jewelry pieces. Schedule a consultation with our designers to discuss your vision.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-luxury-black mb-2">What is your return policy?</h4>
                <p className="text-muted-foreground text-sm">
                  We offer a 30-day return policy for all items in original condition. Custom pieces are final sale unless defective.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-luxury-black mb-2">Do you offer financing options?</h4>
                <p className="text-muted-foreground text-sm">
                  Yes, we offer flexible financing options through our partners. Ask about our 0% interest plans for qualified customers.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-luxury-black mb-2">How long does custom design take?</h4>
                <p className="text-muted-foreground text-sm">
                  Custom pieces typically take 4-8 weeks depending on complexity. We'll provide a detailed timeline during your consultation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-luxury-black mb-2">Do you resize rings?</h4>
                <p className="text-muted-foreground text-sm">
                  Yes, we offer professional resizing services. Most rings can be resized within 1-2 sizes up or down.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-luxury-black mb-2">Is my jewelry insured during shipping?</h4>
                <p className="text-muted-foreground text-sm">
                  All shipments are fully insured and require signature confirmation. We use secure, discreet packaging for all deliveries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;