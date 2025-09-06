import { ArrowRight, Leaf, Recycle, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover 
              <span className="block">Sustainable</span>
              <span className="block text-accent">Living</span>
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-lg">
              Find eco-friendly products that make a difference. Shop sustainable, 
              live responsibly, and help create a better planet for future generations.
            </p>
            
            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Leaf className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium">100% Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Recycle className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium">Sustainably Sourced</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Sun className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium">Carbon Neutral</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-medium"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Eco-friendly products collection" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-medium">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-accent rounded-xl p-4 shadow-medium">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-foreground">50+</div>
                <div className="text-sm text-accent-foreground/70">Eco Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;