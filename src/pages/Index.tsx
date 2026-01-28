import { useState, useMemo } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { ProductCard } from "@/components/ProductCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { products } from "@/data/products";
import { Grid, List, SlidersHorizontal } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <FeaturedProduct product={featuredProduct} />

      <section className="py-12" id="products">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">All Lifting Creams</h2>
              <p className="text-muted-foreground">
                {sortedProducts.length} products found
                {activeFilterCount > 0 && ` (${activeFilterCount} filters active)`}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="md:hidden">
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
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

              <div className="flex border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "table" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("table")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <aside className="hidden md:block w-64 flex-shrink-0">
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

            <main className="flex-1">
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
            </main>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
