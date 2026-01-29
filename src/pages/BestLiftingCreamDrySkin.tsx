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
  Sun,
  Zap,
  Play
} from "lucide-react";
import { SITE_CONFIG, PAGE_SEO } from "@/lib/seo-config";

const drySkinProducts = [
  {
    id: "la-prairie-caviar",
    rank: 1,
    badge: "Editor's Choice",
    name: "Skin Caviar Liquid Lift",
    brand: "La Prairie",
    texture: "Rich Cream",
    price: 495,
    size: "50ml",
    pricePerMl: 9.90,
    absorption: "2 min",
    finish: "Dewy Luminous",
    hydration: "5/5",
    keyIngredient: "Caviar Extract + Marine Nutrients",
    bestFor: "Best for very dry, mature skin: The gold standard in luxury hydration. Intensely nourishing formula that plumps and lifts while restoring moisture barrier.",
    pros: ["Unparalleled hydration", "Visible lifting effect", "Luxurious texture"],
    cons: ["Premium investment", "Too rich for humid climates"],
    image: "/images/la-prairie-skin-caviar.jpg",
    affiliateUrl: "https://www.nordstrom.com/s/la-prairie-skin-caviar-liquid-lift/3228410",
    reviewUrl: "/reviews/la-prairie-caviar",
    rating: 4.6,
    reviewCount: 1203,
    isTopPick: true,
  },
  {
    id: "augustinus-bader",
    rank: 2,
    badge: "Best Science-Backed",
    name: "The Cream",
    brand: "Augustinus Bader",
    texture: "Rich Cream",
    price: 280,
    size: "50ml",
    pricePerMl: 5.60,
    absorption: "90 sec",
    finish: "Satin",
    hydration: "5/5",
    keyIngredient: "TFC8® Complex + 40 Botanicals",
    bestFor: "Best for cellular renewal: Stem cell scientist-developed formula that triggers skin's own repair mechanisms while deeply hydrating.",
    pros: ["Clinically proven results", "Vegan formula", "Works on all concerns"],
    cons: ["High price point", "Subtle scent"],
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop",
    affiliateUrl: "https://augustinusbader.com/int/en/bestsellers",
    reviewUrl: "/reviews/augustinus-bader",
    rating: 4.7,
    reviewCount: 4521,
    isTopPick: false,
  },
  {
    id: "sulwhasoo-ginseng",
    rank: 3,
    badge: "Best K-Beauty Luxury",
    name: "Concentrated Ginseng Cream",
    brand: "Sulwhasoo",
    texture: "Rich Cream",
    price: 180,
    size: "60ml",
    pricePerMl: 3.00,
    absorption: "2 min",
    finish: "Radiant",
    hydration: "5/5",
    keyIngredient: "Ginseng Berry Extract + Korean Herbs",
    bestFor: "Best for traditional approach: 50+ years of ginseng research in a deeply nourishing formula. Exceptional for dry, aging skin seeking radiance.",
    pros: ["Potent ginseng benefits", "Beautiful packaging", "Luxurious ritual"],
    cons: ["Strong herbal scent", "Rich for some"],
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop",
    affiliateUrl: "https://www.sephora.com/product/concentrated-ginseng-renewing-cream-ex-P434626",
    reviewUrl: "/reviews/sulwhasoo-ginseng",
    rating: 4.6,
    reviewCount: 2103,
    isTopPick: false,
  },
  {
    id: "la-mer-creme",
    rank: 4,
    badge: "Cult Classic",
    name: "Crème de la Mer",
    brand: "La Mer",
    texture: "Rich Balm",
    price: 440,
    size: "60ml",
    pricePerMl: 7.33,
    absorption: "3 min",
    finish: "Dewy",
    hydration: "5/5",
    keyIngredient: "Miracle Broth + Sea Kelp",
    bestFor: "Best for extreme dryness: The iconic formula that started the luxury skincare revolution. Deeply restorative for parched, stressed skin.",
    pros: ["Legendary results", "Heals dry patches", "Cult following"],
    cons: ["Requires warming technique", "Not for oily skin"],
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop",
    affiliateUrl: "https://www.nordstrom.com/s/la-mer-creme-de-la-mer-moisturizing-cream/2857082",
    reviewUrl: "/reviews/la-mer-creme",
    rating: 4.3,
    reviewCount: 5621,
    isTopPick: false,
  },
  {
    id: "okoaskin-lifting",
    rank: 5,
    badge: "Best Value",
    name: "Dual Action Lifting Cream",
    brand: "OKOA",
    texture: "Lightweight Cream",
    price: 62,
    size: "30ml",
    pricePerMl: 2.07,
    absorption: "45 sec",
    finish: "Velvet",
    hydration: "4/5",
    keyIngredient: "Idealift™ + Sodium Hyaluronate",
    bestFor: "Best for dry skin on a budget: Proves you don't need to spend hundreds. Effective hydration with lifting peptides at an accessible price.",
    pros: ["Affordable luxury", "Vegan & cruelty-free", "90-day guarantee"],
    cons: ["Lighter than others", "30ml size"],
    image: "/images/okoa-lifting-cream.jpg",
    affiliateUrl: "https://okoaskin.com/products/okoa-lifting-cream?utm_source=bestliftingcream",
    reviewUrl: "/reviews/okoaskin-lifting",
    rating: 4.8,
    reviewCount: 127,
    isTopPick: false,
  },
];

const textureComparison = [
  { type: "Rich Cream", bestFor: "Very dry, cold climates", avoidIf: "Oily or humid", absorption: "2-3 min", efficacy: 5 },
  { type: "Balm", bestFor: "Extremely dry, cracked skin", avoidIf: "Any oiliness", absorption: "3+ min", efficacy: 5 },
  { type: "Cream", bestFor: "Normal-dry, year-round", avoidIf: "Very oily skin", absorption: "1-2 min", efficacy: 4 },
  { type: "Oil-Cream Hybrid", bestFor: "Dry, dehydrated skin", avoidIf: "Acne-prone", absorption: "90 sec", efficacy: 4 },
];

const faqData = [
  {
    question: "Why is my skin so dry even when I moisturize?",
    answer: "Your moisture barrier may be compromised. Look for lifting creams with ceramides, fatty acids, and cholesterol to rebuild the barrier. Avoid over-exfoliating and harsh cleansers that strip natural oils."
  },
  {
    question: "Can dry skin still get wrinkles faster?",
    answer: "Yes, dry skin shows fine lines earlier because dehydration makes skin less plump. This is why hydrating lifting creams are essential—they address both dryness AND aging simultaneously."
  },
  {
    question: "What ingredients should dry skin look for in lifting creams?",
    answer: "Prioritize ceramides, squalane, hyaluronic acid (multiple weights), shea butter, and peptides. These hydrate at different skin layers while stimulating collagen production."
  },
  {
    question: "Is thicker always better for dry skin?",
    answer: "Not necessarily. What matters is the quality of hydrating ingredients, not just thickness. A well-formulated medium cream can outperform a thick cream with poor ingredients."
  },
  {
    question: "Should I use facial oil with my lifting cream?",
    answer: "Layering works well for dry skin. Apply your lifting cream first, then seal with 2-3 drops of facial oil. This creates an occlusive layer that prevents moisture loss overnight."
  },
];

const commonMistakes = [
  { mistake: "Using water-based products only", fix: "Layer oil-based products on top to lock in hydration and prevent transepidermal water loss." },
  { mistake: "Hot showers before skincare", fix: "Hot water strips natural oils. Use lukewarm water and apply cream to slightly damp skin." },
  { mistake: "Skipping humidifier in winter", fix: "Indoor heating drops humidity. Run a humidifier at 40-50% to support your skin barrier." },
  { mistake: "Over-exfoliating to remove flakes", fix: "Gentle exfoliation 1x/week max. Daily exfoliation damages the moisture barrier further." },
  { mistake: "Applying cream to dry skin", fix: "Apply to damp skin within 60 seconds of cleansing. This seals in 10x more moisture." },
];

const skinTypeNav = [
  { type: "Oily Skin", description: "Mattifying, non-comedogenic formulas", url: "/best-lifting-cream-oily-skin", icon: Sun },
  { type: "Sensitive Skin", description: "Gentle, fragrance-free options", url: "/best-lifting-cream-sensitive-skin", icon: Shield },
  { type: "Mature Skin", description: "Maximum anti-aging power", url: "/best-lifting-cream-mature-skin", icon: Sparkles },
  { type: "Combination Skin", description: "Balanced formulations", url: "/best-lifting-cream-combination-skin", icon: Zap },
];

const getArticleSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Lifting Cream for Dry Skin 2026: Rich & Hydrating Formulas",
  "description": "Dermatologist-tested lifting creams for dry skin. Rich, hydrating formulas with ceramides and peptides that firm while deeply moisturizing.",
  "author": { "@type": "Organization", "name": "BestLiftingCream.com", "url": SITE_CONFIG.url },
  "publisher": { "@type": "Organization", "name": "BestLiftingCream.com", "logo": { "@type": "ImageObject", "url": `${SITE_CONFIG.url}/logo.png` } },
  "datePublished": "2026-01-30",
  "dateModified": "2026-01-30",
  "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_CONFIG.url}/best-lifting-cream-dry-skin` }
});

const getItemListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": drySkinProducts.map(product => ({
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
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_CONFIG.url}/` },
    { "@type": "ListItem", "position": 2, "name": "Best Lifting Cream by Skin Type", "item": `${SITE_CONFIG.url}/best-lifting-cream-by-skin-type` },
    { "@type": "ListItem", "position": 3, "name": "Best Lifting Cream for Dry Skin", "item": `${SITE_CONFIG.url}/best-lifting-cream-dry-skin` }
  ]
});

const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
});

export default function BestLiftingCreamDrySkin() {
  const scrollToProducts = () => {
    document.getElementById('top-products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead page={PAGE_SEO.drySkin} schema={[getArticleSchema(), getItemListSchema(), getBreadcrumbSchema(), getFAQSchema()]} />
      
      <div className="min-h-screen bg-background">
        <SiteHeader />
        
        <div className="bg-blue-50 border-b border-blue-100 py-2 px-4 text-center sticky top-16 z-40">
          <Link to="/skin-type-quiz" className="text-sm text-blue-700 hover:text-blue-900 font-medium inline-flex items-center gap-1">
            Not sure if you have dry skin? Take our 30-second Skin Type Quiz <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/best-lifting-cream-by-skin-type">By Skin Type</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Dry Skin</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero */}
          <section className="grid lg:grid-cols-5 gap-8 mb-16">
            <div className="lg:col-span-3 flex flex-col justify-center">
              <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-3">DEEPLY HYDRATING</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Best Lifting Cream for Dry Skin 2026: Rich Hydrating Formulas
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Luxuriously rich lifting creams that nourish parched skin while firming and lifting. Tested on dehydrated, flaky skin.
              </p>
              <Button onClick={scrollToProducts} size="lg" className="w-fit bg-blue-600 hover:bg-blue-700">
                Jump to Top 5 Products <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Badge variant="outline" className="px-3 py-1.5 border-blue-200 bg-blue-50 text-blue-700">
                  <Droplets className="w-4 h-4 mr-1.5" /> Barrier-Repair Tested
                </Badge>
                <Badge variant="outline" className="px-3 py-1.5 border-blue-200 bg-blue-50 text-blue-700">
                  <Check className="w-4 h-4 mr-1.5" /> 60+ Products Tested
                </Badge>
                <Badge variant="outline" className="px-3 py-1.5 border-blue-200 bg-blue-50 text-blue-700">
                  <Sparkles className="w-4 h-4 mr-1.5" /> Dermatologist Approved
                </Badge>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative aspect-[9/16] max-w-[280px] mx-auto bg-muted rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-600/40 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                    <p className="text-sm font-medium">Watch: Layering for dry skin</p>
                  </div>
                </div>
                <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=280&h=500&fit=crop" alt="Rich cream application on dry skin" className="w-full h-full object-cover opacity-60" loading="lazy" />
              </div>
            </div>
          </section>

          {/* Why Dry Skin Needs Special Care */}
          <section className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Dry Skin Needs Special Lifting Creams</h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground"><strong className="text-foreground">The Problem:</strong> Dry skin lacks natural oils and often has a compromised moisture barrier, making fine lines appear deeper and skin look dull.</p>
              <p className="text-muted-foreground"><strong className="text-foreground">The Science:</strong> Your skin needs lipids (ceramides, fatty acids) to hold water in. Without them, even the best lifting ingredients can't penetrate properly.</p>
              <p className="text-muted-foreground"><strong className="text-foreground">The Solution:</strong> Rich, barrier-repairing formulas that deliver both hydration AND lifting actives deep into the skin.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-background rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-blue-900">Texture Type</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-blue-900">Best For</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-blue-900">Avoid If</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-blue-900">Absorption</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-blue-900">Hydration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {textureComparison.map((row, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 font-medium">{row.type}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.bestFor}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.avoidIf}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.absorption}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} className={`w-4 h-4 ${i < row.efficacy ? 'fill-accent-gold text-accent-gold' : 'text-muted'}`} />))}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Products */}
          <section id="top-products" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold text-foreground mb-2">The 5 Best Lifting Creams for Dry Skin</h2>
            <p className="text-muted-foreground mb-8">Hands-on reviewed by our expert panel</p>

            <div className="space-y-6">
              {drySkinProducts.map((product) => (
                <Card key={product.id} className={`overflow-hidden ${product.isTopPick ? 'ring-2 ring-blue-500 shadow-blue-100' : ''}`}>
                  {product.isTopPick && (
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-1.5 text-sm font-semibold">
                      #{product.rank} Editor's Choice
                    </div>
                  )}
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-4 gap-0">
                      <div className="relative bg-muted p-4 flex items-center justify-center">
                        {!product.isTopPick && (
                          <div className="absolute top-3 left-3 bg-foreground text-background rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">#{product.rank}</div>
                        )}
                        <img src={product.image} alt={`${product.brand} ${product.name}`} className="w-full max-w-[200px] aspect-square object-cover rounded-lg" loading="lazy" />
                      </div>
                      <div className="md:col-span-3 p-6">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{product.texture}</Badge>
                              {!product.isTopPick && <Badge variant="outline" className="text-muted-foreground">{product.badge}</Badge>}
                            </div>
                            <h3 className="text-xl font-bold">{product.brand} {product.name}</h3>
                            <p className="text-sm text-blue-700 font-medium">Key: {product.keyIngredient}</p>
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
                        <div className="flex flex-wrap gap-4 text-sm mb-4 pb-4 border-b">
                          <span><strong>Absorption:</strong> {product.absorption}</span>
                          <span><strong>Finish:</strong> {product.finish}</span>
                          <span><strong>Hydration:</strong> {product.hydration}</span>
                        </div>
                        <p className="text-muted-foreground mb-4">{product.bestFor}</p>
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                          <div>{product.pros.map((pro, i) => (<div key={i} className="flex items-start gap-2 text-sm mb-1"><Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>{pro}</span></div>))}</div>
                          <div>{product.cons.map((con, i) => (<div key={i} className="flex items-start gap-2 text-sm mb-1"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /><span>{con}</span></div>))}</div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <Button variant="outline" asChild><Link to={product.reviewUrl}>Read Full Review</Link></Button>
                          <Button className={product.isTopPick ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600' : ''} asChild>
                            <AffiliateLink href={product.affiliateUrl} productName={product.name}>{product.isTopPick ? 'Get Best Price' : 'Check Price'}</AffiliateLink>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Ingredients */}
          <section className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Ingredients That Hydrate While Lifting</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center gap-2"><Check className="w-5 h-5" /> Essential for Dry Skin</h3>
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border border-blue-100">
                    <p className="font-semibold">Ceramides (1, 3, 6-II)</p>
                    <p className="text-sm text-muted-foreground">Rebuild moisture barrier and lock in hydration. Essential for dry skin recovery.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-blue-100">
                    <p className="font-semibold">Squalane</p>
                    <p className="text-sm text-muted-foreground">Mimics skin's natural oils. Non-comedogenic deep hydration.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-blue-100">
                    <p className="font-semibold">Shea Butter & Fatty Acids</p>
                    <p className="text-sm text-muted-foreground">Rich emollients that soften and nourish parched skin.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-600 flex items-center gap-2"><X className="w-5 h-5" /> Avoid for Dry Skin</h3>
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg border border-red-100">
                    <p className="font-semibold text-red-700">Alcohol Denat / Denatured Alcohol</p>
                    <p className="text-sm text-muted-foreground">Strips moisture and damages barrier. Never for dry skin.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-red-100">
                    <p className="font-semibold text-red-700">High-Concentration AHAs/BHAs</p>
                    <p className="text-sm text-muted-foreground">Can over-exfoliate already compromised skin. Use sparingly.</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-red-100">
                    <p className="font-semibold text-red-700">Fragrance (high concentrations)</p>
                    <p className="text-sm text-muted-foreground">Can irritate sensitive dry skin. Look for fragrance-free options.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">5 Mistakes People with Dry Skin Make</h2>
            <div className="space-y-4">
              {commonMistakes.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid sm:grid-cols-2">
                      <div className="p-5 bg-red-50/50 border-r border-red-100">
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">{index + 1}</span>
                          <div><p className="font-semibold text-red-700">Mistake:</p><p className="text-muted-foreground">{item.mistake}</p></div>
                        </div>
                      </div>
                      <div className="p-5 bg-blue-50/50">
                        <div className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                          <div><p className="font-semibold text-blue-700">Fix It:</p><p className="text-muted-foreground">{item.fix}</p></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions: Dry Skin & Lifting Creams</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-b border-border/50">
                  <AccordionTrigger className="text-left hover:no-underline py-4"><span className="font-medium">{faq.question}</span></AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Cross-Nav */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Explore Other Skin Types</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skinTypeNav.map((skinType) => (
                <Link key={skinType.type} to={skinType.url} className="block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border group">
                  <skinType.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">{skinType.type}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{skinType.description}</p>
                  <span className="text-sm text-blue-600 inline-flex items-center gap-1">View guide <ArrowRight className="w-3 h-3" /></span>
                </Link>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 md:p-12 text-center text-white mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Your Perfect Hydrating Match</h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">Not sure which rich formula is right for your dry skin? Take our quick assessment.</p>
            <Button size="lg" variant="hero" asChild><Link to="/skin-type-quiz">Start 30-Second Assessment <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
