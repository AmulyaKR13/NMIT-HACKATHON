import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">EcoFinds</h3>
            <p className="text-white/80 mb-6">
              Your trusted marketplace for sustainable and eco-friendly products. 
              Together, let's build a greener future.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Categories</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Returns</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for eco-tips and exclusive offers.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@ecofinds.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="text-sm text-white/80">
              © 2024 EcoFinds. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;