import { Button } from "@/components/ui/button";
import { Truck, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-groceries.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Fresh Groceries
                <span className="block text-primary">Delivered Fast</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                Get fresh groceries delivered to your doorstep in as little as 30 minutes. Quality guaranteed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Shopping
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Browse Categories
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Free Delivery</h3>
                  <p className="text-sm text-muted-foreground">On orders over $35</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">30 Min Delivery</h3>
                  <p className="text-sm text-muted-foreground">Lightning fast</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-organic/10">
                  <Shield className="h-5 w-5 text-organic" />
                </div>
                <div>
                  <h3 className="font-semibold">Quality Assured</h3>
                  <p className="text-sm text-muted-foreground">100% fresh guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="Fresh groceries" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card border">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-fresh">
                  <span className="text-white font-bold">30</span>
                </div>
                <div>
                  <p className="font-semibold">Minutes</p>
                  <p className="text-sm text-muted-foreground">Average delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};