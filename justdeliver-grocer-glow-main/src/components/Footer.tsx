import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-fresh">
                <span className="text-lg font-bold text-white">J</span>
              </div>
              <span className="text-xl font-bold">Justdeliver</span>
            </div>
            <p className="text-background/80">
              Fresh groceries delivered to your doorstep. Quality guaranteed, convenience delivered.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-background/80 hover:text-background transition-colors">About Us</a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">How It Works</a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">Careers</a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">Press</a>
            </div>
          </div>

          {/* Customer Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-background/80 hover:text-background transition-colors">Help Center</a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">Track Order</a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">Returns</a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">Contact Us</a>
            </div>
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm text-background/80">
                <Phone className="h-4 w-4" />
                <span>1-800-JUSTDELIVER</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/80">
                <Mail className="h-4 w-4" />
                <span>help@justdeliver.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-background/80 text-sm">
              Get the latest deals and fresh updates delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="fresh" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 Justdeliver. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};