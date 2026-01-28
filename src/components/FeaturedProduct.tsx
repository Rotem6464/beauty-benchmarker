import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Check, Leaf, Heart, Shield, Award } from "lucide-react";
import { Product } from "@/data/products";
import { AffiliateLink } from "@/components/AffiliateLink";
import { trackCTAClick } from "@/lib/analytics";

interface FeaturedProductProps {
  product: Product;
}

export function FeaturedProduct({ product }: FeaturedProductProps) {
  return (
    <section className="bg-gradient-to-r from-brand-50 to-accent-pink/10 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Award className="w-6 h-6 text-brand-600" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Our #1 Recommended Lifting Cream
          </h2>
        </div>

        <div className="max-w-5xl mx-auto bg-background rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-brand-600 to-accent-pink text-white text-center py-2">
            <span className="font-semibold">Editor's Choice 2026</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
            <div className="aspect-square bg-gradient-to-br from-brand-100 to-accent-pink/20 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={`${product.brand} ${product.name} - Editor's Choice lifting cream`}
                className="w-full h-full object-cover"
                width="500"
                height="500"
                loading="eager"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-tier-professional text-tier-professional-foreground">Professional Grade</Badge>
                <Badge className="bg-tier-natural text-tier-natural-foreground">
                  <Leaf className="w-3 h-3 mr-1" aria-hidden="true" /> Vegan
                </Badge>
                <Badge className="bg-tier-kbeauty text-tier-kbeauty-foreground">
                  <Heart className="w-3 h-3 mr-1" aria-hidden="true" /> Cruelty-Free
                </Badge>
              </div>

              <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
              <p className="text-muted-foreground text-lg mb-4">by {product.brand}</p>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex" aria-label={`Rating: ${product.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-accent-gold text-accent-gold"
                          : "text-muted"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="font-bold">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviewCount.toLocaleString()} reviews)</span>
              </div>

              <ul className="grid grid-cols-2 gap-4 mb-6" aria-label="Product benefits">
                {[
                  "Works for ALL skin types",
                  "90-day money-back guarantee",
                  "Idealift™ peptide technology",
                  "Made in USA (EU standards)",
                  "Paraben & sulfate free",
                  "Visible results in 2 weeks",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold">${product.price}</span>
                <span className="text-muted-foreground">/ {product.size}</span>
                <Badge variant="outline" className="text-success border-success">
                  Best Value
                </Badge>
              </div>

              <div className="flex gap-3">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-brand-600 to-accent-pink hover:from-brand-700 hover:to-accent-pink/90"
                  asChild
                  onClick={() => trackCTAClick("get_best_price_featured", "/", "featured_product")}
                >
                  <AffiliateLink href={product.affiliateUrl} productName={product.name}>
                    Get Best Price
                  </AffiliateLink>
                </Button>
                <Button size="lg" variant="outline" className="flex-1" asChild>
                  <Link to={`/reviews/${product.id}`}>Read Full Review</Link>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                <Shield className="w-3 h-3 inline mr-1" aria-hidden="true" />
                Free shipping + 90-day guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
