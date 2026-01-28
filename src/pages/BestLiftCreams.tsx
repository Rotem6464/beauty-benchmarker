import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { products } from "@/data/products";
import { Grid, List, SlidersHorizontal, Award } from "lucide-react";
import { 
  PAGE_SEO, 
  getOrganizationSchema, 
  getItemListSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  SITE_CONFIG 
} from "@/lib/seo-config";
import { initAnalytics } from "@/lib/analytics";

interface Filters {
  skinTypes: string[];
  climates: string[];
  ageGroups: string[];
  tiers: string[];
  values: string[];
  priceRange: [number, number];
}

const BestLiftCreams = () => {
  const [searchParams] = useSearchParams();
  
  // Parse URL query params for initial filter state
  const getInitialFilters = (): Filters => {
    const skinParam = searchParams.get("skin");
    const validSkinTypes = ["oily", "dry", "sensitive", "combination"];
    
    return {
      skinTypes: skinParam && validSkinTypes.includes(skinParam) ? [skinParam] : [],
      climates: [],
      ageGroups: [],
      tiers: [],
      values: [],
      priceRange: [0, 600],
    };
  };

  const [filters, setFilters] = useState<Filters>(getInitialFilters);
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  // Re-apply filters when URL changes
  useEffect(() => {
    const skinParam = searchParams.get("skin");
    const validSkinTypes = ["oily", "dry", "sensitive", "combination"];
    
    if (skinParam && validSkinTypes.includes(skinParam)) {
      setFilters(prev => ({
        ...prev,
        skinTypes: [skinParam],
      }));
    }
  }, [searchParams]);

  // Initialize analytics on mount
  useEffect(() => {
    initAnalytics();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }
      if (filters.skinTypes.length > 0) {
        const hasMatchingSkinType = filters.skinTypes.some((type) =>
          product.skinTypes.includes(type as any)
        );
        if (!hasMatchingSkinType) return false;
      }
      if (filters.climates.length > 0) {
        const hasMatchingClimate = filters.climates.some((climate) =>
          product.climates.includes(climate as any)
        );
        if (!hasMatchingClimate) return false;
      }
      if (filters.ageGroups.length > 0) {
        const hasMatchingAge = filters.ageGroups.some((age) =>
          product.ageGroups.includes(age as any)
        );
        if (!hasMatchingAge) return false;
      }
      if (filters.tiers.length > 0 && !filters.tiers.includes(product.tier)) {
        return false;
      }
      if (filters.values.length > 0) {
        if (filters.values.includes("vegan") && !product.isVegan) return false;
        if (filters.values.includes("crueltyFree") && !product.isCrueltyFree) return false;
        if (filters.values.includes("cleanBeauty") && !product.isCleanBeauty) return false;
      }
      return true;
    });
  }, [filters]);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (a.isOkoaskin) return -1;
    if (b.isOkoaskin) return 1;
    return b.rating - a.rating;
  });

  const activeFilterCount =
    filters.skinTypes.length +
    filters.climates.length +
    filters.ageGroups.length +
    filters.tiers.length +
    filters.values.length +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 600 ? 1 : 0);

  // Generate ItemList schema for products
  const itemListSchema = getItemListSchema(
    sortedProducts.slice(0, 10).map((product, index) => ({
      name: `${product.brand} ${product.name}`,
      url: `${SITE_CONFIG.url}/reviews/${product.id}`,
      position: index + 1,
    }))
  );

  // FAQ Schema
  const faqSchema = getFAQSchema([
    {
      question: "What is the best lifting cream for mature skin?",
      answer: "Based on our testing, the best lifting cream for mature skin (55+) is the Okoaskin Dual Action Lifting Cream, which uses Idealift™ peptides for visible firming results in 2 weeks.",
    },
    {
      question: "How do lifting creams work?",
      answer: "Lifting creams work by combining peptides, retinoids, and hydrating ingredients to stimulate collagen production, improve skin elasticity, and create a temporary tightening effect.",
    },
    {
      question: "Are expensive lifting creams worth it?",
      answer: "Not always. Our testing shows that some mid-range options ($80-150) perform as well as luxury alternatives. The key is ingredient quality and formulation, not price alone.",
    },
    {
      question: "What ingredients should I look for in a lifting cream?",
      answer: "Look for peptides (like Matrixyl or Argireline), retinoids, vitamin C, hyaluronic acid, and niacinamide. These ingredients are scientifically proven to improve skin firmness and reduce wrinkles.",
    },
  ]);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Best Lift Creams", url: `${SITE_CONFIG.url}/best-lift-creams` },
  ]);

  const schemas = [
    getOrganizationSchema(),
    itemListSchema,
    faqSchema,
    breadcrumbSchema,
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead page={PAGE_SEO.bestLiftCreams} schema={schemas} />
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-accent-pink text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Breadcrumbs
              items={[
                { label: "Best Lift Creams" },
              ]}
            />
            <div className="flex items-center gap-3 mb-4 mt-4">
              <Award className="w-8 h-8 text-accent-gold" aria-hidden="true" />
              <h1 className="text-3xl md:text-5xl font-bold">
                Best Lifting Creams 2026
              </h1>
            </div>
            <p className="text-xl text-brand-100 max-w-2xl">
              Compare {products.length}+ expert-tested lifting creams by skin type, climate, age, 
              ingredients, and price. Find your perfect match for firmer, younger-looking skin.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12" aria-labelledby="products-heading">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 id="products-heading" className="text-2xl font-bold">All Lifting Creams</h2>
                <p className="text-muted-foreground">
                  {sortedProducts.length} products found
                  {activeFilterCount > 0 && ` (${activeFilterCount} filters active)`}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="md:hidden" aria-label="Open filters">
                      <SlidersHorizontal className="w-4 h-4 mr-2" aria-hidden="true" />
                      Filters
                      {activeFilterCount > 0 && (
                        <span className="ml-2 bg-brand-600 text-background rounded-full w-5 h-5 text-xs flex items-center justify-center">
                          {activeFilterCount}
                        </span>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 overflow-y-auto">
                    <h2 className="text-xl font-bold mb-6">Filters</h2>
                    <FilterSidebar filters={filters} onFilterChange={setFilters} />
                  </SheetContent>
                </Sheet>

                <div className="flex border rounded-lg overflow-hidden" role="group" aria-label="View mode">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    aria-pressed={viewMode === "grid"}
                    aria-label="Grid view"
                  >
                    <Grid className="w-4 h-4" aria-hidden="true" />
                  </Button>
                  <Button
                    variant={viewMode === "table" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("table")}
                    aria-pressed={viewMode === "table"}
                    aria-label="Table view"
                  >
                    <List className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <aside className="hidden md:block w-64 flex-shrink-0" aria-label="Filters">
                <div className="sticky top-24 bg-muted rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4">Filters</h3>
                  <FilterSidebar filters={filters} onFilterChange={setFilters} />
                  {activeFilterCount > 0 && (
                    <Button
                      variant="outline"
                      className="w-full mt-4"
                      onClick={() =>
                        setFilters({
                          skinTypes: [],
                          climates: [],
                          ageGroups: [],
                          tiers: [],
                          values: [],
                          priceRange: [0, 600],
                        })
                      }
                    >
                      Clear All Filters
                    </Button>
                  )}
                </div>
              </aside>

              <div className="flex-1">
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProducts.map((product, index) => (
                      <ProductCard key={product.id} product={product} rank={index + 1} />
                    ))}
                  </div>
                ) : (
                  <ComparisonTable products={sortedProducts} />
                )}

                {sortedProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">No products match your filters.</p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() =>
                        setFilters({
                          skinTypes: [],
                          climates: [],
                          ageGroups: [],
                          tiers: [],
                          values: [],
                          priceRange: [0, 600],
                        })
                      }
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-muted/50" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <h2 id="faq-heading" className="text-3xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "What is the best lifting cream for mature skin?",
                  a: "Based on our testing, the best lifting cream for mature skin (55+) is the Okoaskin Dual Action Lifting Cream, which uses Idealift™ peptides for visible firming results in 2 weeks.",
                },
                {
                  q: "How do lifting creams work?",
                  a: "Lifting creams work by combining peptides, retinoids, and hydrating ingredients to stimulate collagen production, improve skin elasticity, and create a temporary tightening effect.",
                },
                {
                  q: "Are expensive lifting creams worth it?",
                  a: "Not always. Our testing shows that some mid-range options ($80-150) perform as well as luxury alternatives. The key is ingredient quality and formulation, not price alone.",
                },
                {
                  q: "What ingredients should I look for in a lifting cream?",
                  a: "Look for peptides (like Matrixyl or Argireline), retinoids, vitamin C, hyaluronic acid, and niacinamide. These ingredients are scientifically proven to improve skin firmness and reduce wrinkles.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-background rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-r from-brand-600 to-accent-pink text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Not Sure Which Lifting Cream is Right for You?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Learn about our rigorous testing methodology and meet the experts behind our recommendations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/how-we-test">How We Test</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/experts">Meet Our Experts</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default BestLiftCreams;
