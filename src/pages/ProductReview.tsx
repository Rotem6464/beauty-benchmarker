import { useParams, Navigate, Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { AffiliateLink } from "@/components/AffiliateLink";
import { trackCTAClick } from "@/lib/analytics";
import { 
  SITE_CONFIG, 
  getOrganizationSchema, 
  getBreadcrumbSchema 
} from "@/lib/seo-config";
import { 
  Star, 
  Check, 
  Leaf, 
  Heart, 
  Shield, 
  Award,
  ChevronRight,
  Clock,
  Users,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";

const ProductReview = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);

  // Redirect to best-lift-creams if product not found
  if (!product) {
    return <Navigate to="/best-lift-creams" replace />;
  }

  const tierColors: Record<string, string> = {
    luxury: "bg-tier-luxury text-tier-luxury-foreground",
    professional: "bg-tier-professional text-tier-professional-foreground",
    "mid-range": "bg-tier-midrange text-tier-midrange-foreground",
    budget: "bg-tier-budget text-tier-budget-foreground",
    "k-beauty": "bg-tier-kbeauty text-tier-kbeauty-foreground",
    natural: "bg-tier-natural text-tier-natural-foreground",
  };

  const pageSEO = {
    title: `${product.brand} ${product.name} Review 2026 - BestLiftingCream.com`,
    description: `In-depth review of ${product.brand} ${product.name}. ${product.rating}/5 rating from ${product.reviewCount.toLocaleString()} users. Key ingredient: ${product.primaryIngredient}. ${product.isOkoaskin ? "Editor's Choice" : ""} $${product.price}/${product.size}.`,
    path: `/reviews/${product.id}`,
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Best Lift Creams", url: `${SITE_CONFIG.url}/best-lift-creams` },
    { name: `${product.brand} ${product.name}`, url: `${SITE_CONFIG.url}/reviews/${product.id}` },
  ]);

  // Product Review schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.brand} ${product.name}`,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    description: `${product.name} by ${product.brand} - ${product.keyBenefits.join(", ")}`,
    image: product.image,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };

  const schemas = [getOrganizationSchema(), breadcrumbSchema, productSchema];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead page={pageSEO} schema={schemas} />
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-accent-pink text-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { label: "Best Lift Creams", href: "/best-lift-creams" },
                { label: `${product.brand} ${product.name}` },
              ]}
            />
          </div>
        </section>

        {/* Product Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {product.isOkoaskin && (
                <div className="bg-gradient-to-r from-brand-600 to-accent-pink text-white text-center py-2 rounded-t-xl mb-0">
                  <Award className="w-4 h-4 inline mr-2" aria-hidden="true" />
                  <span className="font-semibold">Editor's Choice 2026</span>
                </div>
              )}

              <div className="bg-muted/30 rounded-xl p-6 md:p-10">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="aspect-square bg-background rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={product.image}
                      alt={`${product.brand} ${product.name} lifting cream product photo`}
                      className="w-full h-full object-cover"
                      width="500"
                      height="500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className={tierColors[product.tier]}>{product.tier}</Badge>
                      {product.isVegan && (
                        <Badge className="bg-tier-natural text-tier-natural-foreground">
                          <Leaf className="w-3 h-3 mr-1" aria-hidden="true" /> Vegan
                        </Badge>
                      )}
                      {product.isCrueltyFree && (
                        <Badge className="bg-tier-kbeauty text-tier-kbeauty-foreground">
                          <Heart className="w-3 h-3 mr-1" aria-hidden="true" /> Cruelty-Free
                        </Badge>
                      )}
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
                    <p className="text-muted-foreground text-xl mb-4">by {product.brand}</p>

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
                      <span className="font-bold text-lg">{product.rating}</span>
                      <span className="text-muted-foreground">
                        ({product.reviewCount.toLocaleString()} reviews)
                      </span>
                    </div>

                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-4xl font-bold">${product.price}</span>
                      <span className="text-muted-foreground text-lg">/ {product.size}</span>
                      <span className="text-muted-foreground">
                        (${product.pricePerMl.toFixed(2)}/ml)
                      </span>
                    </div>

                    <Button
                      size="lg"
                      className={`w-full mb-4 ${
                        product.isOkoaskin
                          ? "bg-gradient-to-r from-brand-600 to-accent-pink hover:from-brand-700 hover:to-accent-pink/90"
                          : ""
                      }`}
                      asChild
                      onClick={() =>
                        trackCTAClick("check_price_review", `/reviews/${product.id}`, "hero")
                      }
                    >
                      <AffiliateLink href={product.affiliateUrl} productName={product.name}>
                        {product.isOkoaskin ? "Get Best Price" : "Check Price"}
                      </AffiliateLink>
                    </Button>

                    {product.isOkoaskin && (
                      <p className="text-xs text-muted-foreground text-center">
                        <Shield className="w-3 h-3 inline mr-1" aria-hidden="true" />
                        Free shipping + 90-day money-back guarantee
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Quick Facts</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-1">Primary Ingredient</p>
                  <p className="font-semibold text-brand-700">{product.primaryIngredient}</p>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-1">Texture</p>
                  <p className="font-semibold">{product.texture}</p>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-1">Origin</p>
                  <p className="font-semibold">{product.origin}</p>
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-1">Price per ml</p>
                  <p className="font-semibold">${product.pricePerMl.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {product.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 bg-muted/30 rounded-lg p-4">
                    <Check className="w-5 h-5 text-success flex-shrink-0" aria-hidden="true" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Best For */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Best For</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-brand-600" aria-hidden="true" />
                    Skin Types
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.skinTypes.map((type) => (
                      <Badge key={type} variant="outline" className="capitalize">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-brand-600" aria-hidden="true" />
                    Age Groups
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ageGroups.map((age) => (
                      <Badge key={age} variant="outline">
                        {age}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="bg-background rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-3">Climates</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.climates.map((climate) => (
                      <Badge key={climate} variant="outline" className="capitalize">
                        {climate}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Pros & Cons</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-success/10 rounded-lg p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2 text-success">
                    <ThumbsUp className="w-5 h-5" aria-hidden="true" />
                    Pros
                  </h3>
                  <ul className="space-y-2">
                    {product.keyBenefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" aria-hidden="true" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                    {product.isVegan && (
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" aria-hidden="true" />
                        <span>100% vegan formula</span>
                      </li>
                    )}
                    {product.isCrueltyFree && (
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" aria-hidden="true" />
                        <span>Cruelty-free certified</span>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="bg-destructive/10 rounded-lg p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2 text-destructive">
                    <ThumbsDown className="w-5 h-5" aria-hidden="true" />
                    Cons
                  </h3>
                  <ul className="space-y-2">
                    {product.tier === "luxury" && (
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Premium price point</span>
                      </li>
                    )}
                    {product.skinTypes.length < 4 && (
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Not suitable for all skin types</span>
                      </li>
                    )}
                    {!product.isVegan && (
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Contains animal-derived ingredients</span>
                      </li>
                    )}
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Results may vary by individual</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-brand-600 to-accent-pink text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Try {product.brand} {product.name}?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              {product.isOkoaskin
                ? "Get free shipping and a 90-day money-back guarantee when you order today."
                : `Shop ${product.brand} ${product.name} from authorized retailers.`}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                asChild
                onClick={() =>
                  trackCTAClick("check_price_cta", `/reviews/${product.id}`, "bottom_cta")
                }
              >
                <AffiliateLink href={product.affiliateUrl} productName={product.name}>
                  {product.isOkoaskin ? "Get Best Price" : "Check Price"}
                  <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </AffiliateLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/best-lift-creams">Compare All Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default ProductReview;
