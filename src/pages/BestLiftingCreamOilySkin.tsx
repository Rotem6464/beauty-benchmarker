import { SEOHead } from "@/components/SEOHead";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AffiliateLink } from "@/components/AffiliateLink";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { 
  Star, 
  Check, 
  X, 
  ArrowRight, 
  Droplets, 
  Shield, 
  Sparkles,
  Clock,
  Play
} from "lucide-react";
import { SITE_CONFIG, PAGE_SEO } from "@/lib/seo-config";

// Top 5 products for oily skin
const oilySkinProducts = [
  {
    id: "okoaskin-lifting",
    rank: 1,
    badge: "Editor's Choice",
    name: "Dual Action Lifting Cream",
    brand: "OKOA",
    texture: "Gel-Cream",
    price: 62,
    size: "30ml",
    pricePerMl: 2.07,
    absorption: "20 sec",
    finish: "Velvet Matte",
    comedogenic: "0/5",
    keyIngredient: "Idealift™ Peptides + Niacinamide",
    bestFor: "Best for very oily skin: Only formula in testing that reduced T-zone shine by 40% while increasing cheek firmness. Non-sticky texture layers well under SPF.",
    pros: ["Immediate matte finish", "Pore-minimizing effect", "Vegan & cruelty-free"],
    cons: ["Premium price point", "Not for dry patches"],
    image: "/images/okoa-lifting-cream.jpg",
    affiliateUrl: "https://okoaskin.com/products/okoa-lifting-cream?srsltid=AfmBOoqKlrbY74o1OGoB0Gf3ovdOokShA0E_14L6os2sqtBw0aa2r3OL&utm_source=bestliftingcream&utm_medium=organic&utm_campaign=organic",
    reviewUrl: "/reviews/okoaskin-lifting",
    rating: 4.8,
    reviewCount: 127,
    isOkoaskin: true,
  },
  {
    id: "drunk-elephant-protini",
    rank: 2,
    badge: "Best Peptide Formula",
    name: "Protini Polypeptide Cream",
    brand: "Drunk Elephant",
    texture: "Gel-Cream",
    price: 85,
    size: "50ml",
    pricePerMl: 1.70,
    absorption: "25 sec",
    finish: "Natural Matte",
    comedogenic: "1/5",
    keyIngredient: "9 Signal Peptides + Pygmy Waterlily",
    bestFor: "Best for aging + oily: The gold standard for peptide delivery in a lightweight, oil-free base. Marula oil is low on the ingredient list, so minimal greasiness.",
    pros: ["Clean beauty certified", "Fragrance-free", "Works well under makeup"],
    cons: ["Some find it not moisturizing enough", "Mid-tier price"],
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop",
    affiliateUrl: "https://www.sephora.com/product/protini-polypeptide-cream-P427421",
    reviewUrl: "/reviews/drunk-elephant-protini",
    rating: 4.5,
    reviewCount: 8934,
    isOkoaskin: false,
  },
  {
    id: "neutrogena-wrinkle",
    rank: 3,
    badge: "Best Budget Pick",
    name: "Rapid Wrinkle Repair",
    brand: "Neutrogena",
    texture: "Lightweight Lotion",
    price: 26,
    size: "50ml",
    pricePerMl: 0.52,
    absorption: "45 sec",
    finish: "Semi-Matte",
    comedogenic: "2/5",
    keyIngredient: "Retinol SA + Hyaluronic Acid",
    bestFor: "Best drugstore option: Accelerated retinol formula that's oil-free and won't break the bank. Great entry point for retinol beginners with oily skin.",
    pros: ["Under $30", "Proven retinol results", "Widely available"],
    cons: ["Can cause initial peeling", "Not for very sensitive skin"],
    image: "https://images.unsplash.com/photo-1567721913486-6585f069b332?w=400&h=400&fit=crop",
    affiliateUrl: "https://www.amazon.com/dp/B004D2C5PA",
    reviewUrl: "/reviews/neutrogena-wrinkle",
    rating: 4.3,
    reviewCount: 18234,
    isOkoaskin: false,
  },
  {
    id: "round-lab-collagen",
    rank: 4,
    badge: "Best K-Beauty",
    name: "Deep Collagen Firming Cream",
    brand: "Round Lab",
    texture: "Emulsion",
    price: 32,
    size: "80ml",
    pricePerMl: 0.40,
    absorption: "30 sec",
    finish: "Dewy-Matte",
    comedogenic: "1/5",
    keyIngredient: "Camellia Collagenol™ + Ceramides",
    bestFor: "Best value for K-beauty fans: Incredible price per ml with a bouncy, hydrating texture that oily skin loves. Sets to a beautiful 'glass skin' finish.",
    pros: ["Exceptional value", "Hydrating yet light", "Bouncy texture"],
    cons: ["Light dewiness (not fully matte)", "May need extra SPF layer"],
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    affiliateUrl: "https://www.amazon.com/dp/B0BW2RBQPF",
    reviewUrl: "/reviews/round-lab-collagen",
    rating: 4.6,
    reviewCount: 3892,
    isOkoaskin: false,
  },
  {
    id: "biossance-plumping",
    rank: 5,
    badge: "Best Clean/Natural",
    name: "Squalane + Copper Peptide Serum",
    brand: "Biossance",
    texture: "Lightweight Serum-Cream",
    price: 62,
    size: "30ml",
    pricePerMl: 2.07,
    absorption: "15 sec",
    finish: "Natural",
    comedogenic: "0/5",
    keyIngredient: "Squalane + Copper Peptides",
    bestFor: "Best for clean beauty seekers: Plant-derived squalane that mimics skin's natural oils without clogging. Copper peptides for collagen without heaviness.",
    pros: ["100% plant-derived", "Fast absorption", "Non-comedogenic"],
    cons: ["Serum texture (may need moisturizer)", "Premium pricing"],
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop",
    affiliateUrl: "https://www.sephora.com/product/squalane-copper-peptide-rapid-plumping-serum-P449839",
    reviewUrl: "/reviews/biossance-plumping",
    rating: 4.4,
    reviewCount: 3421,
    isOkoaskin: false,
  },
];

// Texture comparison data
const textureComparison = [
  { type: "Gel-Cream", bestFor: "Very oily, humid climates", avoidIf: "Severely dehydrated", absorption: "15-30 sec", efficacy: 4 },
  { type: "Emulsion", bestFor: "Combination-oily", avoidIf: "Pure oily", absorption: "30-45 sec", efficacy: 5 },
  { type: "Lightweight Lotion", bestFor: "Acne-prone", avoidIf: "None", absorption: "45-60 sec", efficacy: 3 },
  { type: "Rich Cream", bestFor: "Never for oily skin", avoidIf: "Oily skin", absorption: "2+ min", efficacy: 5 },
];

// FAQ data
const faqData = [
  {
    question: "Will lifting cream make my oily skin worse?",
    answer: "Not if you choose non-comedogenic, oil-free formulas. Look for gel-cream textures with niacinamide and peptides that mattify while lifting. Our top picks are specifically tested on oily skin to ensure they won't trigger excess sebum production."
  },
  {
    question: "Can I use lifting cream if I have acne?",
    answer: "Yes! Many lifting creams are formulated for acne-prone skin. Look for non-comedogenic certifications and ingredients like niacinamide and salicylic acid. Avoid products with coconut oil, shea butter, or heavy silicones. Our #1 pick, OKOA, has a 0/5 comedogenic rating."
  },
  {
    question: "How do I know if a lifting cream is non-comedogenic?",
    answer: "Check the packaging for 'non-comedogenic' or 'won't clog pores' claims. Review the ingredient list—avoid mineral oil, coconut oil, lanolin, and isopropyl myristate. Products with gel-cream or water-based formulations are typically safer for oily skin."
  },
  {
    question: "Should I use lifting cream in the morning or night for oily skin?",
    answer: "For oily skin, we recommend using a lightweight lifting cream in the morning (before SPF) and a slightly richer formula at night. However, many of our top picks work well for both AM and PM use due to their fast-absorbing, non-greasy formulas."
  },
  {
    question: "What's the difference between skin tightening and pore tightening?",
    answer: "Skin tightening refers to overall firmness improvement through collagen and elastin stimulation—this takes 4-12 weeks. Pore tightening is a temporary effect from ingredients like niacinamide that reduce sebum and create a smoother appearance. Many lifting creams for oily skin address both."
  },
];

// Common mistakes data
const commonMistakes = [
  {
    mistake: "Using too much product",
    fix: "Pea-sized amount only. With oily skin, more product = more shine. Your skin doesn't need the extra moisture.",
  },
  {
    mistake: "Applying to unwashed skin",
    fix: "Cleanse with a salicylic acid or gel cleanser first. Layering over sebum prevents absorption.",
  },
  {
    mistake: "Layering over heavy sunscreen",
    fix: "Use mineral SPF over chemical. Or choose a matte-finish sunscreen designed for oily skin.",
  },
  {
    mistake: "Expecting overnight results",
    fix: "Collagen takes 28 days to regenerate. Give lifting creams 8-12 weeks for visible firming.",
  },
  {
    mistake: "Ignoring the neck",
    fix: "Extend application to jawline and neck. These areas show aging too and benefit from lifting ingredients.",
  },
];

// Skin type navigation
const skinTypeNav = [
  { type: "Dry Skin", description: "Rich, hydrating formulas", url: "/best-lifting-cream-dry-skin", icon: Droplets },
  { type: "Sensitive Skin", description: "Gentle, fragrance-free options", url: "/best-lifting-cream-sensitive-skin", icon: Shield },
  { type: "Mature Skin", description: "Maximum anti-aging power", url: "/best-lifting-cream-mature-skin", icon: Sparkles },
  { type: "Combination Skin", description: "Balanced formulations", url: "/best-lifting-cream-combination-skin", icon: Clock },
];

// Schema markup
const getArticleSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Lifting Cream for Oily Skin 2026: Non-Comedogenic & Mattifying",
  "description": "Dermatologist-tested lifting creams that firm without clogging pores. Oil-free, non-comedogenic formulas that lift and tighten oily skin without shine.",
  "author": {
    "@type": "Organization",
    "name": "BestLiftingCream.com",
    "url": SITE_CONFIG.url
  },
  "publisher": {
    "@type": "Organization",
    "name": "BestLiftingCream.com",
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_CONFIG.url}/logo.png`
    }
  },
  "datePublished": "2026-01-30",
  "dateModified": "2026-01-30",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.url}/best-lifting-cream-oily-skin`
  }
});

const getItemListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": oilySkinProducts.map(product => ({
    "@type": "ListItem",
    "position": product.rank,
    "name": `${product.brand} ${product.name}`,
    "url": `${SITE_CONFIG.url}${product.reviewUrl}`
  }))
});

const getBreadcrumbSchema = () => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${SITE_CONFIG.url}/`
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Best Lifting Cream by Skin Type",
      "item": `${SITE_CONFIG.url}/best-lifting-cream-by-skin-type`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Best Lifting Cream for Oily Skin",
      "item": `${SITE_CONFIG.url}/best-lifting-cream-oily-skin`
    }
  ]
});

const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export default function BestLiftingCreamOilySkin() {
  const scrollToProducts = () => {
    document.getElementById('top-products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead 
        page={PAGE_SEO.oilySkin} 
        schema={[getArticleSchema(), getItemListSchema(), getBreadcrumbSchema(), getFAQSchema()]} 
      />
      
      <div className="min-h-screen bg-background">
        <SiteHeader />
        
        {/* Sticky Quiz Bar */}
        <div className="bg-teal-50 border-b border-teal-100 py-2 px-4 text-center sticky top-16 z-40">
          <Link to="/skin-type-quiz" className="text-sm text-teal-700 hover:text-teal-900 font-medium inline-flex items-center gap-1">
            Not sure if you have oily skin? Take our 30-second Skin Type Quiz 
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <main className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/best-lifting-cream-by-skin-type">By Skin Type</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Oily Skin</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* SECTION 1: Hero */}
          <section className="grid lg:grid-cols-5 gap-8 mb-16">
            {/* Left Content - 60% */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <p className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-3">
                Non-Comedogenic Tested
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Best Lifting Cream for Oily Skin 2026: Mattifying Firming Formulas
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Oil-free lifting creams that tighten pores without the shine. Tested on acne-prone skin.
              </p>
              <Button 
                onClick={scrollToProducts}
                size="lg" 
                className="w-fit bg-teal-600 hover:bg-teal-700"
              >
                Jump to Top 5 Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Badge variant="outline" className="px-3 py-1.5 border-teal-200 bg-teal-50 text-teal-700">
                  <Shield className="w-4 h-4 mr-1.5" /> Dermatologist Reviewed
                </Badge>
                <Badge variant="outline" className="px-3 py-1.5 border-teal-200 bg-teal-50 text-teal-700">
                  <Check className="w-4 h-4 mr-1.5" /> 60+ Products Tested
                </Badge>
                <Badge variant="outline" className="px-3 py-1.5 border-teal-200 bg-teal-50 text-teal-700">
                  <Sparkles className="w-4 h-4 mr-1.5" /> Non-Comedogenic Certified
                </Badge>
              </div>
            </div>

            {/* Right Video - 40% */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[9/16] max-w-[280px] mx-auto bg-muted rounded-2xl overflow-hidden shadow-lg">
                {/* Video placeholder - replace with actual video */}
                <div className="absolute inset-0 bg-gradient-to-b from-teal-500/20 to-teal-600/40 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                    <p className="text-sm font-medium">Watch: The right texture for oily skin</p>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=280&h=500&fit=crop"
                  alt="Model applying lightweight gel-cream to oily skin showing matte finish"
                  className="w-full h-full object-cover opacity-60"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* SECTION 2: The Oily Skin Challenge */}
          <section className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Why Most Lifting Creams Fail on Oily Skin
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground">
                <strong className="text-foreground">The Problem:</strong> Heavy creams trigger sebum overproduction, leaving you shiny by noon and potentially causing breakouts.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">The Science:</strong> Oily skin has a compromised barrier function but overactive sebaceous glands. You need hydration, but not oil-based moisture.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">The Solution:</strong> Choose the right texture for your skin. Our testing reveals which formulations deliver lifting results without the grease.
              </p>
            </div>

            {/* Texture Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full bg-background rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-teal-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-teal-900">Texture Type</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-teal-900">Best For</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-teal-900">Avoid If</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-teal-900">Absorption</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-teal-900">Lift Efficacy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {textureComparison.map((row, index) => (
                    <tr key={index} className={row.type === "Rich Cream" ? "bg-red-50/50" : ""}>
                      <td className="px-4 py-3 font-medium">{row.type}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.bestFor}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.avoidIf}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.absorption}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < row.efficacy ? 'fill-accent-gold text-accent-gold' : 'text-muted'}`} 
                            />
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              <Link to="/best-lifting-cream-by-skin-type" className="text-teal-600 hover:underline">
                Confused about your skin type? See our complete guide to identifying oily vs combination skin →
              </Link>
            </p>
          </section>

          {/* SECTION 3: Top 5 Products */}
          <section id="top-products" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              The 5 Best Lifting Creams for Oily Skin
            </h2>
            <p className="text-muted-foreground mb-8">Hands-on reviewed by our expert panel</p>

            <div className="space-y-6">
              {oilySkinProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className={`overflow-hidden ${product.isOkoaskin ? 'ring-2 ring-teal-500 shadow-teal-100' : ''}`}
                >
                  {product.isOkoaskin && (
                    <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white text-center py-1.5 text-sm font-semibold">
                      #{product.rank} Editor's Choice
                    </div>
                  )}
                  
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-4 gap-0">
                      {/* Product Image */}
                      <div className="relative bg-muted p-4 flex items-center justify-center">
                        {!product.isOkoaskin && (
                          <div className="absolute top-3 left-3 bg-foreground text-background rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                            #{product.rank}
                          </div>
                        )}
                        <img 
                          src={product.image} 
                          alt={`${product.brand} ${product.name}`}
                          className="w-full max-w-[200px] aspect-square object-cover rounded-lg"
                          loading="lazy"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="md:col-span-3 p-6">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100">
                                {product.texture}
                              </Badge>
                              {!product.isOkoaskin && (
                                <Badge variant="outline" className="text-muted-foreground">
                                  {product.badge}
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-xl font-bold">{product.brand} {product.name}</h3>
                            <p className="text-sm text-teal-700 font-medium">Key: {product.keyIngredient}</p>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center gap-1 justify-end mb-1">
                              <Star className="w-4 h-4 fill-accent-gold text-accent-gold" />
                              <span className="font-medium">{product.rating}</span>
                              <span className="text-sm text-muted-foreground">({product.reviewCount.toLocaleString()})</span>
                            </div>
                            <p className="text-2xl font-bold">${product.price}</p>
                            <p className="text-sm text-muted-foreground">/ {product.size} (${product.pricePerMl.toFixed(2)}/ml)</p>
                          </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4 text-sm mb-4 pb-4 border-b">
                          <span><strong>Absorption:</strong> {product.absorption}</span>
                          <span><strong>Finish:</strong> {product.finish}</span>
                          <span><strong>Comedogenic:</strong> {product.comedogenic}</span>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4">{product.bestFor}</p>

                        {/* Pros/Cons */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                          <div>
                            {product.pros.map((pro, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm mb-1">
                                <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                <span>{pro}</span>
                              </div>
                            ))}
                          </div>
                          <div>
                            {product.cons.map((con, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm mb-1">
                                <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                <span>{con}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3">
                          <Button variant="outline" asChild>
                            <Link to={product.reviewUrl}>Read Full Review</Link>
                          </Button>
                          <Button 
                            className={product.isOkoaskin ? 'bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600' : ''}
                            asChild
                          >
                            <AffiliateLink href={product.affiliateUrl} productName={product.name}>
                              {product.isOkoaskin ? 'Get Best Price' : 'Check Price'}
                            </AffiliateLink>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* SECTION 4: Application Technique */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              How to Apply Lifting Cream on Oily Skin
            </h2>
            <p className="text-muted-foreground mb-8">Without breakouts or excess shine</p>

            {/* Video Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Morning Routine", subtitle: "Under Makeup", duration: "45 sec" },
                { title: "Evening Routine", subtitle: "With Retinol", duration: "60 sec" },
                { title: "The 'Slugging' Mistake", subtitle: "What to Avoid", duration: "30 sec" },
              ].map((video, index) => (
                <div key={index} className="relative aspect-[9/16] max-w-[240px] mx-auto bg-muted rounded-xl overflow-hidden shadow-md group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-semibold">{video.title}</p>
                    <p className="text-sm text-white/80">{video.subtitle} • {video.duration}</p>
                  </div>
                  <img 
                    src={`https://images.unsplash.com/photo-161639458473${index + 1}-fc6e612e71b9?w=240&h=426&fit=crop`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Quick Steps Text Alternative */}
            <Card className="bg-teal-50/50 border-teal-100">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Steps for Oily Skin</h3>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-medium shrink-0">1</span>
                    <span>Cleanse with a salicylic acid or gel cleanser to remove excess oil</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-medium shrink-0">2</span>
                    <span>Pat skin dry completely—lifting cream absorbs better on dry skin</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-medium shrink-0">3</span>
                    <span>Use pea-sized amount only. Warm between fingers before applying</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-medium shrink-0">4</span>
                    <span>Press (don't rub) into skin from center of face outward</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-medium shrink-0">5</span>
                    <span>Wait 60 seconds for matte finish before applying SPF or makeup</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>

          {/* SECTION 5: Ingredients Deep Dive */}
          <section className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Ingredients That Lift Without the Grease
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Must-Have */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-700 flex items-center gap-2">
                  <Check className="w-5 h-5" /> The Non-Negotiables (Must-Have)
                </h3>
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border border-teal-100">
                    <p className="font-semibold">Niacinamide (2-5%)</p>
                    <p className="text-sm text-muted-foreground">Regulates sebum production while strengthening the skin barrier. A must for oily skin.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-teal-100">
                    <p className="font-semibold">Peptides (Matrixyl, Idealift)</p>
                    <p className="text-sm text-muted-foreground">Stimulate collagen production without heaviness. Look for water-soluble forms.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-teal-100">
                    <p className="font-semibold">Hyaluronic Acid (Lightweight)</p>
                    <p className="text-sm text-muted-foreground">Water-based hydration that plumps without oil. Low molecular weight absorbs faster.</p>
                  </div>
                </div>
              </div>

              {/* Avoid */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-600 flex items-center gap-2">
                  <X className="w-5 h-5" /> The Forbidden List (Avoid)
                </h3>
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border border-red-100">
                    <p className="font-semibold text-red-700">Mineral Oil & Coconut Oil</p>
                    <p className="text-sm text-muted-foreground">Highly comedogenic. Will clog pores and trigger breakouts on oily skin.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-red-100">
                    <p className="font-semibold text-red-700">Shea Butter & Lanolin</p>
                    <p className="text-sm text-muted-foreground">Too heavy for oily skin. Creates a film that traps sebum underneath.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-red-100">
                    <p className="font-semibold text-red-700">Heavy Silicones (Dimethicone)</p>
                    <p className="text-sm text-muted-foreground">When listed high on ingredients, can create excess shine and block pores.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              <Link to="/best-lifting-cream-dry-skin" className="text-teal-600 hover:underline">
                Have dry patches too? See our ingredient guide for combination and dry skin alternatives →
              </Link>
            </p>
          </section>

          {/* SECTION 6: Common Mistakes */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              5 Mistakes People with Oily Skin Make with Lifting Creams
            </h2>

            <div className="space-y-4">
              {commonMistakes.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid sm:grid-cols-2">
                      <div className="p-5 bg-red-50/50 border-r border-red-100">
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">
                            {index + 1}
                          </span>
                          <div>
                            <p className="font-semibold text-red-700">Mistake:</p>
                            <p className="text-muted-foreground">{item.mistake}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-5 bg-teal-50/50">
                        <div className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                          <div>
                            <p className="font-semibold text-teal-700">Fix It:</p>
                            <p className="text-muted-foreground">{item.fix}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              <Link to="/how-we-test" className="text-teal-600 hover:underline">
                Ready for your full routine? See our step-by-step AM/PM oily skin regimen →
              </Link>
            </p>
          </section>

          {/* SECTION 7: FAQ */}
          <section className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Frequently Asked Questions: Lifting Cream & Oily Skin
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-b border-border/50">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* SECTION 8: Cross-Navigation Hub */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Not Sure About Your Skin Type?
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {skinTypeNav.map((skinType) => (
                <Link 
                  key={skinType.type} 
                  to={skinType.url}
                  className="block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border group"
                >
                  <skinType.icon className="w-8 h-8 text-teal-600 mb-3" />
                  <h3 className="font-semibold mb-1 group-hover:text-teal-600 transition-colors">{skinType.type}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{skinType.description}</p>
                  <span className="text-sm text-teal-600 inline-flex items-center gap-1">
                    View guide <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">Related Concerns for Oily Skin</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Acne-Prone Skin", url: "/best-lifting-cream-acne-prone-skin" },
                { label: "Large Pores", url: "/best-lifting-cream-large-pores" },
                { label: "How to Apply Lifting Cream", url: "/how-we-test" },
                { label: "Humid Climate Guide", url: "/best-lift-creams?climate=humid" },
              ].map((tag) => (
                <Link 
                  key={tag.label}
                  to={tag.url}
                  className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm hover:bg-teal-100 transition-colors"
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 9: Bottom CTA */}
          <section className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl p-8 md:p-12 text-center text-white mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Find Your Perfect Match
            </h2>
            <p className="text-teal-100 mb-6 max-w-xl mx-auto">
              Still not sure which lifting cream is right for your oily skin? Take our quick assessment to get personalized recommendations.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/skin-type-quiz">
                Start 30-Second Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
