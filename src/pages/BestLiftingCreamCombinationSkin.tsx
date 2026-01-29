import { SEOHead } from "@/components/SEOHead";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AffiliateLink } from "@/components/AffiliateLink";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Star, Check, X, ArrowRight, Droplets, Shield, Sparkles, Sun, Play } from "lucide-react";
import { SITE_CONFIG, PAGE_SEO } from "@/lib/seo-config";

const combinationSkinProducts = [
  {
    id: "okoaskin-lifting",
    rank: 1,
    badge: "Editor's Choice",
    name: "Dual Action Lifting Cream",
    brand: "OKOA",
    texture: "Lightweight Cream",
    price: 62,
    size: "30ml",
    pricePerMl: 2.07,
    absorption: "20 sec",
    finish: "Velvet Matte",
    balance: "5/5",
    keyIngredient: "Idealift™ + Niacinamide + Aloe Vera",
    bestFor: "Best for true combination: Lightweight enough for oily T-zone, hydrating enough for dry cheeks. Niacinamide balances oil production across zones.",
    pros: ["Perfect balance for all zones", "Fast-absorbing", "Vegan & clean"],
    cons: ["30ml size", "May need extra moisture for very dry areas"],
    image: "/images/okoa-lifting-cream.jpg",
    affiliateUrl: "https://okoaskin.com/products/okoa-lifting-cream?utm_source=bestliftingcream",
    reviewUrl: "/reviews/okoaskin-lifting",
    rating: 4.8,
    reviewCount: 127,
    isTopPick: true,
  },
  {
    id: "drunk-elephant-protini",
    rank: 2,
    badge: "Best Peptide Blend",
    name: "Protini Polypeptide Cream",
    brand: "Drunk Elephant",
    texture: "Gel-Cream",
    price: 85,
    size: "50ml",
    pricePerMl: 1.70,
    absorption: "25 sec",
    finish: "Natural",
    balance: "5/5",
    keyIngredient: "9 Signal Peptides + Growth Factors",
    bestFor: "Best for aging combination skin: Protein-rich formula that adapts to different facial zones. Lightweight yet deeply nourishing.",
    pros: ["Adapts to skin needs", "Fragrance-free", "Clean beauty"],
    cons: ["Premium pricing", "May not be rich enough alone for very dry cheeks"],
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop",
    affiliateUrl: "https://www.sephora.com/product/protini-polypeptide-cream-P427421",
    reviewUrl: "/reviews/drunk-elephant-protini",
    rating: 4.5,
    reviewCount: 8934,
    isTopPick: false,
  },
  {
    id: "round-lab-collagen",
    rank: 3,
    badge: "Best K-Beauty Value",
    name: "Deep Collagen Firming Cream",
    brand: "Round Lab",
    texture: "Emulsion-Cream",
    price: 32,
    size: "80ml",
    pricePerMl: 0.40,
    absorption: "30 sec",
    finish: "Dewy-Natural",
    balance: "4/5",
    keyIngredient: "Camellia Collagenol™ + Ceramides",
    bestFor: "Best budget choice: Incredible value with K-beauty innovation. Bouncy texture that hydrates without overwhelming oily zones.",
    pros: ["Best price per ml", "Hydrating yet light", "Ceramide-rich"],
    cons: ["Dewier finish", "Very light for dry areas"],
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    affiliateUrl: "https://www.amazon.com/dp/B0BW2RBQPF",
    reviewUrl: "/reviews/round-lab-collagen",
    rating: 4.6,
    reviewCount: 3892,
    isTopPick: false,
  },
  {
    id: "no7-lift-luminate",
    rank: 4,
    badge: "Best Drugstore",
    name: "Lift & Luminate Triple Action",
    brand: "No7",
    texture: "Cream",
    price: 37,
    size: "50ml",
    pricePerMl: 0.74,
    absorption: "45 sec",
    finish: "Natural",
    balance: "4/5",
    keyIngredient: "Matrixyl 3000+ + Retinol",
    bestFor: "Best accessible option: Clinically proven formula at drugstore prices. Works well across different facial zones.",
    pros: ["Under $40", "Proven ingredients", "Widely available"],
    cons: ["Takes longer to absorb", "May feel rich on T-zone"],
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    affiliateUrl: "https://www.target.com/p/no7-lift-luminate-triple-action-day-cream/-/A-53182199",
    reviewUrl: "/reviews/no7-lift-luminate",
    rating: 4.3,
    reviewCount: 12043,
    isTopPick: false,
  },
  {
    id: "biossance-plumping",
    rank: 5,
    badge: "Best Lightweight",
    name: "Squalane + Copper Peptide",
    brand: "Biossance",
    texture: "Serum-Cream",
    price: 62,
    size: "30ml",
    pricePerMl: 2.07,
    absorption: "15 sec",
    finish: "Natural",
    balance: "4/5",
    keyIngredient: "Plant Squalane + Copper Peptides",
    bestFor: "Best for oily-leaning combination: Ultra-lightweight formula perfect for those with more oily than dry zones.",
    pros: ["Featherweight texture", "Plant-based", "Non-comedogenic"],
    cons: ["May need layering for dry areas", "Serum-like"],
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop",
    affiliateUrl: "https://www.sephora.com/product/squalane-copper-peptide-rapid-plumping-serum-P449839",
    reviewUrl: "/reviews/biossance-plumping",
    rating: 4.4,
    reviewCount: 3421,
    isTopPick: false,
  },
];

const faqData = [
  { question: "Should I use different products on different face zones?", answer: "You can, but a well-formulated combination skin product should work everywhere. If you do zone-treat, use lighter formulas on T-zone and richer ones on cheeks." },
  { question: "Is combination skin just oily skin with dry patches?", answer: "Not quite. True combination skin has genuinely different skin types in different areas—typically oily T-zone (forehead, nose, chin) and normal-to-dry cheeks. It's a distinct skin type." },
  { question: "Why does my T-zone get oilier with some lifting creams?", answer: "Heavy creams can trigger excess sebum production. Look for gel-creams or lightweight formulas with niacinamide, which regulates oil production while hydrating." },
  { question: "How do I know if a lifting cream works for combination skin?", answer: "It should absorb quickly without leaving the T-zone shiny, but still provide enough moisture that cheeks feel comfortable. Our top picks are specifically tested for this balance." },
  { question: "Should I moisturize my oily zones?", answer: "Yes! Skipping moisturizer on oily areas can trigger more oil production. Use a lightweight, oil-free formula even on your T-zone." },
];

const commonMistakes = [
  { mistake: "Using heavy cream everywhere", fix: "Apply lighter formulas on T-zone, richer ones only where needed (cheeks, under eyes)." },
  { mistake: "Over-mattifying the T-zone", fix: "This triggers rebound oiliness. Use balanced formulas, not harsh astringents." },
  { mistake: "Ignoring the cheeks' needs", fix: "Just because T-zone is oily doesn't mean cheeks don't need moisture and lifting." },
  { mistake: "Using two completely different routines", fix: "Find adaptable products that work on both zones—much more practical." },
  { mistake: "Thinking combination is 'normal' skin", fix: "Combination has specific needs. Products for 'normal' skin may not address zone differences." },
];

const skinTypeNav = [
  { type: "Oily Skin", description: "Mattifying formulas", url: "/best-lifting-cream-oily-skin", icon: Sun },
  { type: "Dry Skin", description: "Rich, hydrating formulas", url: "/best-lifting-cream-dry-skin", icon: Droplets },
  { type: "Sensitive Skin", description: "Gentle, fragrance-free", url: "/best-lifting-cream-sensitive-skin", icon: Shield },
  { type: "Mature Skin", description: "Maximum anti-aging", url: "/best-lifting-cream-mature-skin", icon: Sparkles },
];

const getSchemas = () => [
  { "@context": "https://schema.org", "@type": "Article", "headline": "Best Lifting Cream for Combination Skin 2026: Balanced Formulas", "description": "Lifting creams that balance oily T-zone and dry cheeks. Adaptable formulas tested for combination skin with zone-specific results.", "author": { "@type": "Organization", "name": "BestLiftingCream.com" }, "datePublished": "2026-01-30" },
  { "@context": "https://schema.org", "@type": "ItemList", "itemListElement": combinationSkinProducts.map(p => ({ "@type": "ListItem", "position": p.rank, "name": `${p.brand} ${p.name}` })) },
  { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
];

export default function BestLiftingCreamCombinationSkin() {
  const scrollToProducts = () => document.getElementById('top-products')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <SEOHead page={PAGE_SEO.combinationSkin} schema={getSchemas()} />
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="bg-green-50 border-b border-green-100 py-2 px-4 text-center sticky top-16 z-40">
          <Link to="/skin-type-quiz" className="text-sm text-green-700 hover:text-green-900 font-medium inline-flex items-center gap-1">
            Oily T-zone + dry cheeks? Confirm your skin type <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/best-lifting-cream-by-skin-type">By Skin Type</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Combination Skin</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <section className="grid lg:grid-cols-5 gap-8 mb-16">
            <div className="lg:col-span-3 flex flex-col justify-center">
              <p className="text-sm font-semibold tracking-widest text-green-600 uppercase mb-3">ZONE-BALANCED</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">Best Lifting Cream for Combination Skin 2026: Balanced Formulas</h1>
              <p className="text-lg text-muted-foreground mb-6">Adaptable lifting creams that hydrate dry cheeks without making your T-zone greasy. Tested for zone-specific balance.</p>
              <Button onClick={scrollToProducts} size="lg" className="w-fit bg-green-600 hover:bg-green-700">Jump to Top 5 Products <ArrowRight className="w-4 h-4 ml-2" /></Button>
              <div className="flex flex-wrap gap-4 mt-8">
                <Badge variant="outline" className="px-3 py-1.5 border-green-200 bg-green-50 text-green-700"><Check className="w-4 h-4 mr-1.5" /> Zone-Tested</Badge>
                <Badge variant="outline" className="px-3 py-1.5 border-green-200 bg-green-50 text-green-700"><Droplets className="w-4 h-4 mr-1.5" /> Balanced Hydration</Badge>
                <Badge variant="outline" className="px-3 py-1.5 border-green-200 bg-green-50 text-green-700"><Sparkles className="w-4 h-4 mr-1.5" /> Adaptable Formulas</Badge>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative aspect-[9/16] max-w-[280px] mx-auto bg-muted rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-green-600/40 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto mb-4"><Play className="w-8 h-8 text-white fill-white" /></div>
                    <p className="text-sm font-medium">Watch: Zone application technique</p>
                  </div>
                </div>
                <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=280&h=500&fit=crop" alt="Combination skin application" className="w-full h-full object-cover opacity-60" loading="lazy" />
              </div>
            </div>
          </section>

          <section className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Understanding Combination Skin</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground"><strong className="text-foreground">The Challenge:</strong> Your face has two different skin types. Products for oily skin dry out your cheeks; products for dry skin make your T-zone greasy.</p>
              <p className="text-muted-foreground"><strong className="text-foreground">The Science:</strong> Your T-zone has more sebaceous glands, while cheeks have fewer. Hormones, climate, and aging affect this balance.</p>
              <p className="text-muted-foreground"><strong className="text-foreground">The Solution:</strong> Adaptable formulas with hydrating yet non-comedogenic ingredients that balance across all zones.</p>
            </div>
          </section>

          <section id="top-products" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold text-foreground mb-2">The 5 Best Lifting Creams for Combination Skin</h2>
            <p className="text-muted-foreground mb-8">Zone-tested for balanced results</p>
            <div className="space-y-6">
              {combinationSkinProducts.map((product) => (
                <Card key={product.id} className={`overflow-hidden ${product.isTopPick ? 'ring-2 ring-green-500 shadow-green-100' : ''}`}>
                  {product.isTopPick && <div className="bg-gradient-to-r from-green-600 to-green-500 text-white text-center py-1.5 text-sm font-semibold">#{product.rank} Editor's Choice</div>}
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-4 gap-0">
                      <div className="relative bg-muted p-4 flex items-center justify-center">
                        {!product.isTopPick && <div className="absolute top-3 left-3 bg-foreground text-background rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">#{product.rank}</div>}
                        <img src={product.image} alt={`${product.brand} ${product.name}`} className="w-full max-w-[200px] aspect-square object-cover rounded-lg" loading="lazy" />
                      </div>
                      <div className="md:col-span-3 p-6">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{product.texture}</Badge>
                              {!product.isTopPick && <Badge variant="outline">{product.badge}</Badge>}
                            </div>
                            <h3 className="text-xl font-bold">{product.brand} {product.name}</h3>
                            <p className="text-sm text-green-700 font-medium">Key: {product.keyIngredient}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 justify-end mb-1"><Star className="w-4 h-4 fill-accent-gold text-accent-gold" /><span className="font-medium">{product.rating}</span><span className="text-sm text-muted-foreground">({product.reviewCount.toLocaleString()})</span></div>
                            <p className="text-2xl font-bold">${product.price}</p>
                            <p className="text-sm text-muted-foreground">/ {product.size}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm mb-4 pb-4 border-b">
                          <span><strong>Absorption:</strong> {product.absorption}</span>
                          <span><strong>Finish:</strong> {product.finish}</span>
                          <span><strong>Balance:</strong> {product.balance}</span>
                        </div>
                        <p className="text-muted-foreground mb-4">{product.bestFor}</p>
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                          <div>{product.pros.map((pro, i) => <div key={i} className="flex items-start gap-2 text-sm mb-1"><Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>{pro}</span></div>)}</div>
                          <div>{product.cons.map((con, i) => <div key={i} className="flex items-start gap-2 text-sm mb-1"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /><span>{con}</span></div>)}</div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <Button variant="outline" asChild><Link to={product.reviewUrl}>Read Full Review</Link></Button>
                          <Button className={product.isTopPick ? 'bg-gradient-to-r from-green-600 to-green-500' : ''} asChild><AffiliateLink href={product.affiliateUrl} productName={product.name}>{product.isTopPick ? 'Get Best Price' : 'Check Price'}</AffiliateLink></Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">5 Combination Skin Mistakes</h2>
            <div className="space-y-4">
              {commonMistakes.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid sm:grid-cols-2">
                      <div className="p-5 bg-red-50/50 border-r border-red-100"><div className="flex items-start gap-3"><span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">{index + 1}</span><div><p className="font-semibold text-red-700">Mistake:</p><p className="text-muted-foreground">{item.mistake}</p></div></div></div>
                      <div className="p-5 bg-green-50/50"><div className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /><div><p className="font-semibold text-green-700">Fix:</p><p className="text-muted-foreground">{item.fix}</p></div></div></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">FAQ: Combination Skin</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}><AccordionTrigger className="text-left"><span className="font-medium">{faq.question}</span></AccordionTrigger><AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Explore Other Skin Types</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skinTypeNav.map((s) => (
                <Link key={s.type} to={s.url} className="block p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors group">
                  <s.icon className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-semibold mb-1 group-hover:text-green-600">{s.type}</h3>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 md:p-12 text-center text-white mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Your Balance</h2>
            <p className="text-green-100 mb-6">Get personalized recommendations for your combination skin.</p>
            <Button size="lg" variant="hero" asChild><Link to="/skin-type-quiz">Take Quiz <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
