import { useState, useMemo, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { ProductCard } from "@/components/ProductCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { products } from "@/data/products";
import { Grid, List, SlidersHorizontal } from "lucide-react";
import { 
  PAGE_SEO, 
  getOrganizationSchema, 
  getWebSiteSchema, 
  getItemListSchema,
  getFAQSchema,
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

const Index = () => {
  const [filters, setFilters] = useState<Filters>({
    skinTypes: [],
    climates: [],
    ageGroups: [],
    tiers: [],
    values: [],
    priceRange: [0, 600],
  });

  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  // Initialize analytics on mount
  useEffect(() => {
    initAnalytics();
  }, []);

  const featuredProduct = products.find((p) => p.isOkoaskin)!;

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

  // FAQ Schema for common questions
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
  ]);

  const schemas = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    itemListSchema,
    faqSchema,
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead page={PAGE_SEO.home} schema={schemas} />
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturedProduct product={featuredProduct} />

        <section className="py-12" id="products" aria-labelledby="products-heading">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 id="products-heading" className="text-3xl font-bold">All Lifting Creams</h2>
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
              ].map((faq, i) => (
                <div key={i} className="bg-background rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
