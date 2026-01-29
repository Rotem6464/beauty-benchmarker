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
import { Star, Check, X, ArrowRight, Droplets, Shield, Sparkles, Sun, Zap, Play } from "lucide-react";
import { SITE_CONFIG, PAGE_SEO } from "@/lib/seo-config";

const sensitiveSkinProducts = [
  {
    id: "drunk-elephant-protini",
    rank: 1,
    badge: "Editor's Choice",
    name: "Protini Polypeptide Cream",
    brand: "Drunk Elephant",
    texture: "Gel-Cream",
    price: 85,
    size: "50ml",
    pricePerMl: 1.70,
    absorption: "25 sec",
    finish: "Natural",
    irritation: "0/5",
    keyIngredient: "9 Signal Peptides + Pygmy Waterlily",
    bestFor: "Best for reactive skin: Fragrance-free, essential oil-free formula that's gentle enough for even rosacea-prone skin. Peptides lift without irritation.",
    pros: ["100% fragrance-free", "Clean beauty certified", "Sensitive-skin tested"],
    cons: ["Premium price", "May need extra moisture for very dry"],
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop",
    affiliateUrl: "https://www.sephora.com/product/protini-polypeptide-cream-P427421",
    reviewUrl: "/reviews/drunk-elephant-protini",
    rating: 4.5,
    reviewCount: 8934,
    isTopPick: true,
  },
  {
    id: "okoaskin-lifting",
    rank: 2,
    badge: "Best Clean Formula",
    name: "Dual Action Lifting Cream",
    brand: "OKOA",
    texture: "Lightweight Cream",
    price: 62,
    size: "30ml",
    pricePerMl: 2.07,
    absorption: "20 sec",
    finish: "Velvet",
    irritation: "0/5",
    keyIngredient: "Idealift™ + Aloe Vera + Green Tea",
    bestFor: "Best for sensitive + aging: Calming botanicals soothe while peptides firm. Aloe vera base is naturally anti-inflammatory.",
    pros: ["Soothing botanicals", "Vegan & cruelty-free", "90-day guarantee"],
    cons: ["Smaller size", "May need SPF layered"],
    image: "/images/okoa-lifting-cream.jpg",
    affiliateUrl: "https://okoaskin.com/products/okoa-lifting-cream?utm_source=bestliftingcream",
    reviewUrl: "/reviews/okoaskin-lifting",
    rating: 4.8,
    reviewCount: 127,
    isTopPick: false,
  },
  {
    id: "biossance-plumping",
    rank: 3,
    badge: "Best Plant-Based",
    name: "Squalane + Copper Peptide Serum",
    brand: "Biossance",
    texture: "Lightweight Serum",
    price: 62,
    size: "30ml",
    pricePerMl: 2.07,
    absorption: "15 sec",
    finish: "Natural",
    irritation: "0/5",
    keyIngredient: "Sugarcane Squalane + Copper Peptides",
    bestFor: "Best for ultra-sensitive: Minimal ingredient list with maximum efficacy. Squalane mimics skin's natural oils without any irritation.",
    pros: ["Minimal ingredients", "100% plant-derived", "Fast absorbing"],
    cons: ["Light texture needs layering", "Not for very dry"],
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop",
    affiliateUrl: "https://www.sephora.com/product/squalane-copper-peptide-rapid-plumping-serum-P449839",
    reviewUrl: "/reviews/biossance-plumping",
    rating: 4.4,
    reviewCount: 3421,
    isTopPick: false,
  },
  {
    id: "round-lab-collagen",
    rank: 4,
    badge: "Best K-Beauty Gentle",
    name: "Deep Collagen Firming Cream",
    brand: "Round Lab",
    texture: "Cream",
    price: 32,
    size: "80ml",
    pricePerMl: 0.40,
    absorption: "30 sec",
    finish: "Dewy",
    irritation: "1/5",
    keyIngredient: "Camellia Collagenol™ + Ceramides",
    bestFor: "Best budget-friendly option: K-beauty expertise in sensitive-friendly formula. Ceramides strengthen barrier while collagen firms.",
    pros: ["Incredible value", "Barrier-strengthening", "Gentle formula"],
    cons: ["Light fragrance", "Dewy finish may not suit all"],
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    affiliateUrl: "https://www.amazon.com/dp/B0BW2RBQPF",
    reviewUrl: "/reviews/round-lab-collagen",
    rating: 4.6,
    reviewCount: 3892,
    isTopPick: false,
  },
  {
    id: "augustinus-bader",
    rank: 5,
    badge: "Best Luxury Gentle",
    name: "The Cream",
    brand: "Augustinus Bader",
    texture: "Cream",
    price: 280,
    size: "50ml",
    pricePerMl: 5.60,
    absorption: "90 sec",
    finish: "Satin",
    irritation: "0/5",
    keyIngredient: "TFC8® + 40+ Botanicals",
    bestFor: "Best for investment seekers: Stem cell technology in a sensitive-safe formula. Triggers natural repair without harsh actives.",
    pros: ["Clinically proven", "No harsh actives", "Works on all concerns"],
    cons: ["Premium investment", "Subtle scent"],
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop",
    affiliateUrl: "https://augustinusbader.com/int/en/bestsellers",
    reviewUrl: "/reviews/augustinus-bader",
    rating: 4.7,
    reviewCount: 4521,
    isTopPick: false,
  },
];

const faqData = [
  { question: "Can sensitive skin use anti-aging products?", answer: "Absolutely! The key is choosing fragrance-free, hypoallergenic formulas with gentle actives like peptides instead of harsh retinoids. Start slowly and patch test first." },
  { question: "What ingredients trigger sensitive skin reactions?", answer: "Common triggers include fragrance, essential oils, alcohol denat, certain preservatives (parabens, formaldehyde-releasers), and high-concentration acids. Everyone's triggers are different—patch testing is essential." },
  { question: "Should I use retinol if I have sensitive skin?", answer: "Traditional retinol can be too harsh. Look for encapsulated retinol, retinal, or bakuchiol (a gentler plant-based alternative). Start with lowest concentration, 1-2x/week." },
  { question: "How do I patch test a new lifting cream?", answer: "Apply a small amount behind your ear or on inner wrist. Wait 24-48 hours. If no reaction, try on a small area of your face for another 24 hours before full application." },
  { question: "Why does my skin react to 'natural' products?", answer: "Natural doesn't mean hypoallergenic. Many botanical ingredients and essential oils are potent allergens. Sensitive skin often does better with simple, synthetic formulations designed for reactivity." },
];

const commonMistakes = [
  { mistake: "Assuming 'natural' means safe", fix: "Look for 'hypoallergenic' and 'fragrance-free' instead. Many natural ingredients are common irritants." },
  { mistake: "Introducing multiple new products", fix: "One new product at a time, wait 2 weeks before adding another to identify any triggers." },
  { mistake: "Skipping patch testing", fix: "Always patch test behind ear for 48 hours before applying to face." },
  { mistake: "Over-cleansing the face", fix: "Cleanse once daily (evening) and just rinse with water in the morning to preserve barrier." },
  { mistake: "Using hot water on face", fix: "Lukewarm water only. Hot water strips natural oils and triggers inflammation." },
];

const skinTypeNav = [
  { type: "Oily Skin", description: "Mattifying, non-comedogenic formulas", url: "/best-lifting-cream-oily-skin", icon: Sun },
  { type: "Dry Skin", description: "Rich, hydrating formulas", url: "/best-lifting-cream-dry-skin", icon: Droplets },
  { type: "Mature Skin", description: "Maximum anti-aging power", url: "/best-lifting-cream-mature-skin", icon: Sparkles },
  { type: "Combination Skin", description: "Balanced formulations", url: "/best-lifting-cream-combination-skin", icon: Zap },
];

const getSchemas = () => [
  { "@context": "https://schema.org", "@type": "Article", "headline": "Best Lifting Cream for Sensitive Skin 2026: Gentle & Fragrance-Free", "description": "Hypoallergenic lifting creams tested on reactive skin. Fragrance-free, gentle formulas that firm without irritation.", "author": { "@type": "Organization", "name": "BestLiftingCream.com" }, "datePublished": "2026-01-30" },
  { "@context": "https://schema.org", "@type": "ItemList", "itemListElement": sensitiveSkinProducts.map(p => ({ "@type": "ListItem", "position": p.rank, "name": `${p.brand} ${p.name}` })) },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home" }, { "@type": "ListItem", "position": 2, "name": "By Skin Type" }, { "@type": "ListItem", "position": 3, "name": "Sensitive Skin" }] },
  { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
];

export default function BestLiftingCreamSensitiveSkin() {
  const scrollToProducts = () => document.getElementById('top-products')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <SEOHead page={PAGE_SEO.sensitiveSkin} schema={getSchemas()} />
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="bg-purple-50 border-b border-purple-100 py-2 px-4 text-center sticky top-16 z-40">
          <Link to="/skin-type-quiz" className="text-sm text-purple-700 hover:text-purple-900 font-medium inline-flex items-center gap-1">
            Not sure if you have sensitive skin? Take our 30-second Quiz <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/best-lifting-cream-by-skin-type">By Skin Type</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Sensitive Skin</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <section className="grid lg:grid-cols-5 gap-8 mb-16">
            <div className="lg:col-span-3 flex flex-col justify-center">
              <p className="text-sm font-semibold tracking-widest text-purple-600 uppercase mb-3">HYPOALLERGENIC TESTED</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">Best Lifting Cream for Sensitive Skin 2026: Gentle Firming Formulas</h1>
              <p className="text-lg text-muted-foreground mb-6">Fragrance-free, hypoallergenic lifting creams that firm without irritation. Tested on reactive, rosacea-prone skin.</p>
              <Button onClick={scrollToProducts} size="lg" className="w-fit bg-purple-600 hover:bg-purple-700">Jump to Top 5 Products <ArrowRight className="w-4 h-4 ml-2" /></Button>
              <div className="flex flex-wrap gap-4 mt-8">
                <Badge variant="outline" className="px-3 py-1.5 border-purple-200 bg-purple-50 text-purple-700"><Shield className="w-4 h-4 mr-1.5" /> Allergy Tested</Badge>
                <Badge variant="outline" className="px-3 py-1.5 border-purple-200 bg-purple-50 text-purple-700"><Check className="w-4 h-4 mr-1.5" /> Fragrance-Free Options</Badge>
                <Badge variant="outline" className="px-3 py-1.5 border-purple-200 bg-purple-50 text-purple-700"><Sparkles className="w-4 h-4 mr-1.5" /> Dermatologist Tested</Badge>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative aspect-[9/16] max-w-[280px] mx-auto bg-muted rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-purple-600/40 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto mb-4"><Play className="w-8 h-8 text-white fill-white" /></div>
                    <p className="text-sm font-medium">Watch: Patch testing guide</p>
                  </div>
                </div>
                <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=280&h=500&fit=crop" alt="Gentle cream application" className="w-full h-full object-cover opacity-60" loading="lazy" />
              </div>
            </div>
          </section>

          <section className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Sensitive Skin Needs Specialized Care</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground"><strong className="text-foreground">The Problem:</strong> Sensitive skin has a weakened barrier that allows irritants in and moisture out, making it reactive to many anti-aging ingredients.</p>
              <p className="text-muted-foreground"><strong className="text-foreground">The Science:</strong> Your skin's nerve endings are closer to the surface, triggering inflammation from ingredients others tolerate fine.</p>
              <p className="text-muted-foreground"><strong className="text-foreground">The Solution:</strong> Minimal, fragrance-free formulas with gentle peptides and barrier-strengthening ingredients that calm while firming.</p>
            </div>
          </section>

          <section id="top-products" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold text-foreground mb-2">The 5 Best Lifting Creams for Sensitive Skin</h2>
            <p className="text-muted-foreground mb-8">Patch-tested and approved for reactive skin</p>
            <div className="space-y-6">
              {sensitiveSkinProducts.map((product) => (
                <Card key={product.id} className={`overflow-hidden ${product.isTopPick ? 'ring-2 ring-purple-500 shadow-purple-100' : ''}`}>
                  {product.isTopPick && <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white text-center py-1.5 text-sm font-semibold">#{product.rank} Editor's Choice</div>}
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
                              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">{product.texture}</Badge>
                              {!product.isTopPick && <Badge variant="outline">{product.badge}</Badge>}
                            </div>
                            <h3 className="text-xl font-bold">{product.brand} {product.name}</h3>
                            <p className="text-sm text-purple-700 font-medium">Key: {product.keyIngredient}</p>
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
                          <span><strong>Irritation Risk:</strong> {product.irritation}</span>
                        </div>
                        <p className="text-muted-foreground mb-4">{product.bestFor}</p>
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                          <div>{product.pros.map((pro, i) => <div key={i} className="flex items-start gap-2 text-sm mb-1"><Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>{pro}</span></div>)}</div>
                          <div>{product.cons.map((con, i) => <div key={i} className="flex items-start gap-2 text-sm mb-1"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /><span>{con}</span></div>)}</div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <Button variant="outline" asChild><Link to={product.reviewUrl}>Read Full Review</Link></Button>
                          <Button className={product.isTopPick ? 'bg-gradient-to-r from-purple-600 to-purple-500' : ''} asChild><AffiliateLink href={product.affiliateUrl} productName={product.name}>{product.isTopPick ? 'Get Best Price' : 'Check Price'}</AffiliateLink></Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">5 Mistakes Sensitive Skin Makes</h2>
            <div className="space-y-4">
              {commonMistakes.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid sm:grid-cols-2">
                      <div className="p-5 bg-red-50/50 border-r border-red-100"><div className="flex items-start gap-3"><span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">{index + 1}</span><div><p className="font-semibold text-red-700">Mistake:</p><p className="text-muted-foreground">{item.mistake}</p></div></div></div>
                      <div className="p-5 bg-purple-50/50"><div className="flex items-start gap-3"><Check className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" /><div><p className="font-semibold text-purple-700">Fix:</p><p className="text-muted-foreground">{item.fix}</p></div></div></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">FAQ: Sensitive Skin & Lifting Creams</h2>
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
                  <s.icon className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold mb-1 group-hover:text-purple-600">{s.type}</h3>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl p-8 md:p-12 text-center text-white mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Your Gentle Match</h2>
            <p className="text-purple-100 mb-6">Take our quiz to get personalized recommendations for your sensitive skin.</p>
            <Button size="lg" variant="hero" asChild><Link to="/skin-type-quiz">Start Assessment <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
