import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Organic Bananas",
    price: 2.99,
    originalPrice: 3.49,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Organic",
    badgeColor: "bg-fresh text-white",
  },
  {
    id: 2,
    name: "Fresh Avocados",
    price: 4.99,
    rating: 4.9,
    reviews: 89,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Popular",
    badgeColor: "bg-organic text-white",
  },
  {
    id: 3,
    name: "Greek Yogurt",
    price: 5.49,
    originalPrice: 6.99,
    rating: 4.7,
    reviews: 203,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Sale",
    badgeColor: "bg-destructive text-destructive-foreground",
  },
  {
    id: 4,
    name: "Artisan Bread",
    price: 3.99,
    rating: 4.6,
    reviews: 67,
    image: "/placeholder.svg?height=200&width=200",
    badge: "Fresh",
    badgeColor: "bg-accent text-accent-foreground",
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground">
              Hand-picked favorites for quality and freshness
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-card transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <Badge className={`absolute top-3 left-3 ${product.badgeColor}`}>
                    {product.badge}
                  </Badge>
                  <Button 
                    size="icon" 
                    variant="fresh"
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <Button variant="fresh" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};