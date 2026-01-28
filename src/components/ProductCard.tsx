import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, Leaf, Heart } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  rank?: number;
}

export function ProductCard({ product, rank }: ProductCardProps) {
  const tierColors: Record<string, string> = {
    luxury: "bg-tier-luxury text-tier-luxury-foreground",
    professional: "bg-tier-professional text-tier-professional-foreground",
    "mid-range": "bg-tier-midrange text-tier-midrange-foreground",
    budget: "bg-tier-budget text-tier-budget-foreground",
    "k-beauty": "bg-tier-kbeauty text-tier-kbeauty-foreground",
    natural: "bg-tier-natural text-tier-natural-foreground",
  };

  return (
    <Card className={`relative overflow-hidden transition-all hover:shadow-lg ${product.isOkoaskin ? 'ring-2 ring-brand-500 shadow-brand-100' : ''}`}>
      {product.isOkoaskin && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-brand-600 to-accent-pink text-white text-center py-1 text-sm font-semibold z-20">
          Editor's Choice
        </div>
      )}

      {rank && (
        <div className="absolute top-2 left-2 bg-foreground text-background rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm z-10" style={{ top: product.isOkoaskin ? '2.5rem' : '0.5rem' }}>
          #{rank}
        </div>
      )}

      <CardContent className={`p-4 ${product.isOkoaskin ? 'pt-10' : 'pt-4'}`}>
        <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
          <img
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        <div className="flex flex-wrap gap-1 mb-2">
          <Badge className={tierColors[product.tier]}>{product.tier}</Badge>
          {product.isVegan && (
            <Badge variant="outline" className="text-success border-success">
              <Leaf className="w-3 h-3 mr-1" /> Vegan
            </Badge>
          )}
          {product.isCrueltyFree && (
            <Badge variant="outline" className="text-accent-pink border-accent-pink">
              <Heart className="w-3 h-3 mr-1" /> CF
            </Badge>
          )}
        </div>

        <h3 className="font-semibold text-lg leading-tight mb-1">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-2">{product.brand}</p>

        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-accent-gold text-accent-gold" />
          <span className="font-medium">{product.rating}</span>
          <span className="text-muted-foreground text-sm">({product.reviewCount.toLocaleString()})</span>
        </div>

        <div className="mb-3">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">Key Ingredient</p>
          <p className="font-medium text-brand-700">{product.primaryIngredient}</p>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {product.keyBenefits.slice(0, 3).map((benefit, i) => (
            <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
              {benefit}
            </span>
          ))}
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold">${product.price}</span>
          <span className="text-muted-foreground text-sm">/ {product.size}</span>
          <span className="text-muted-foreground text-xs">(${product.pricePerMl.toFixed(2)}/ml)</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className={`w-full ${product.isOkoaskin ? 'bg-gradient-to-r from-brand-600 to-accent-pink hover:from-brand-700 hover:to-accent-pink/90' : ''}`}
          asChild
        >
          <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer">
            {product.isOkoaskin ? 'Get Best Price' : 'View Deal'}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
