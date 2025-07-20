import { Card, CardContent } from "@/components/ui/card";
import categoryProduce from "@/assets/category-produce.jpg";
import categoryDairy from "@/assets/category-dairy.jpg";
import categoryBakery from "@/assets/category-bakery.jpg";

const categories = [
  {
    id: 1,
    name: "Fresh Produce",
    description: "Fruits & Vegetables",
    image: categoryProduce,
    color: "bg-fresh-light",
  },
  {
    id: 2,
    name: "Dairy & Eggs",
    description: "Milk, Cheese & More",
    image: categoryDairy,
    color: "bg-blue-50",
  },
  {
    id: 3,
    name: "Bakery",
    description: "Fresh Bread & Pastries",
    image: categoryBakery,
    color: "bg-organic-light",
  },
  {
    id: 4,
    name: "Meat & Seafood",
    description: "Premium Quality",
    image: categoryProduce, // placeholder
    color: "bg-red-50",
  },
  {
    id: 5,
    name: "Pantry",
    description: "Essentials & Staples",
    image: categoryBakery, // placeholder
    color: "bg-yellow-50",
  },
  {
    id: 6,
    name: "Beverages",
    description: "Drinks & More",
    image: categoryDairy, // placeholder
    color: "bg-purple-50",
  },
];

export const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover fresh ingredients and everyday essentials organized by category
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer transition-transform hover:scale-105 hover:shadow-card border-0 bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.color} flex items-center justify-center overflow-hidden`}>
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};