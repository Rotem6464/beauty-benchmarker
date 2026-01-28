import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Award, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-accent-pink text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 border-0">
            Updated January 2026
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Perfect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink-light to-accent-gold">
              Lifting Cream
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Compare 60+ lifting creams by skin type, climate, age, ingredients, and price.
            Expert-tested recommendations for firmer, younger-looking skin.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" variant="hero">
              Find Your Match
            </Button>
            <Button size="lg" variant="heroOutline">
              View All Products
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-white/20 rounded-full p-3 mb-2">
                <Star className="w-6 h-6" />
              </div>
              <span className="font-bold text-2xl">60+</span>
              <span className="text-brand-200 text-sm">Products Tested</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 rounded-full p-3 mb-2">
                <Shield className="w-6 h-6" />
              </div>
              <span className="font-bold text-2xl">7</span>
              <span className="text-brand-200 text-sm">Filter Categories</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 rounded-full p-3 mb-2">
                <Award className="w-6 h-6" />
              </div>
              <span className="font-bold text-2xl">Expert</span>
              <span className="text-brand-200 text-sm">Reviewed</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 rounded-full p-3 mb-2">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="font-bold text-2xl">2026</span>
              <span className="text-brand-200 text-sm">Latest Data</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
