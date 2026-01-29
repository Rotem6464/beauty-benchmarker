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

const matureSkinProducts = [
  {
    id: "augustinus-bader",
    rank: 1,
    badge: "Editor's Choice",
    name: "The Cream",
    brand: "Augustinus Bader",
    texture: "Rich Cream",
    price: 280,
    size: "50ml",
    pricePerMl: 5.60,
    absorption: "90 sec",
    finish: "Satin",
    antiAging: "5/5",
    keyIngredient: "TFC8® Complex + 40 Botanicals",
    bestFor: "Best for cellular renewal: Developed by stem cell scientist. Triggers skin's own repair mechanisms for visible lifting and wrinkle reduction.",
    pros: ["Clinically proven 48% firmer skin", "Works on all aging concerns", "Vegan formula"],
    cons: ["Premium investment", "Results take 4-6 weeks"],
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop",
    affiliateUrl: "https://augustinusbader.com/int/en/bestsellers",
    reviewUrl: "/reviews/augustinus-bader",
    rating: 4.7,
    reviewCount: 4521,
    isTopPick: true,
  },
  {
    id: "la-prairie-caviar",
    rank: 2,
    badge: "Ultimate Luxury",
    name: "Skin Caviar Liquid Lift",
    brand: "La Prairie",
    texture: "Rich Cream",
    price: 495,
    size: "50ml",
    pricePerMl: 9.90,
    absorption: "2 min",
    finish: "Luminous",
    antiAging: "5/5",
    keyIngredient: "Caviar Extract + Exclusive Cellular Complex",
    bestFor: "Best for ultimate indulgence: 35+ years of caviar science. Immediate lifting with long-term collagen stimulation.",
    pros: ["Immediate visible lift", "Deep wrinkle reduction", "Unparalleled luxury"],
    cons: ["Highest price point", "Too rich for oily areas"],
    image: "/images/la-prairie-skin-caviar.jpg",
    affiliateUrl: "https://www.nordstrom.com/s/la-prairie-skin-caviar-liquid-lift/3228410",
    reviewUrl: "/reviews/la-prairie-caviar",
    rating: 4.6,
    reviewCount: 1203,
    isTopPick: false,
  },
  {
    id: "beverly-hills-md",
    rank: 3,
    badge: "Best Clinical Results",
    name: "Lift + Firm Sculpting Cream",
    brand: "Beverly Hills MD",
    texture: "Cream",
    price: 120,
    size: "50ml",
    pricePerMl: 2.40,
    absorption: "60 sec",
    finish: "Matte",
    antiAging: "4/5",
    keyIngredient: "Multi-Peptide Complex + Hyaluronic Acid",
    bestFor: "Best for targeted lifting: Developed by plastic surgeons for visible sculpting. Especially effective on jowls and neck.",
    pros: ["Doctor-developed", "Targets sagging", "Visible in 2 weeks"],
    cons: ["Needs consistent use", "Mid-tier hydration"],
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400&h=400&fit=crop",
    affiliateUrl: "https://www.beverlyhillsmd.com/lift-firm-sculpting-cream/",
    reviewUrl: "/reviews/beverly-hills-md",
    rating: 4.2,
    reviewCount: 2341,
    isTopPick: false,
  },
  {
    id: "no7-lift-luminate",
    rank: 4,
    badge: "Best Value",
    name: "Lift & Luminate Triple Action",
    brand: "No7",
    texture: "Cream",
    price: 37,
    size: "50ml",
    pricePerMl: 0.74,
    absorption: "45 sec",
    finish: "Natural",
    antiAging: "4/5",
    keyIngredient: "Matrixyl 3000+ + Retinol + Vitamin C",
    bestFor: "Best drugstore option: Clinically proven to reduce wrinkles. Triple-action formula at an accessible price point.",
    pros: ["Under $40", "Proven Matrixyl results", "Includes retinol + Vitamin C"],
    cons: ["Less luxurious texture", "May need extra moisture"],
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    affiliateUrl: "https://www.target.com/p/no7-lift-luminate-triple-action-day-cream/-/A-53182199",
    reviewUrl: "/reviews/no7-lift-luminate",
    rating: 4.3,
    reviewCount: 12043,
    isTopPick: false,
  },
  {
    id: "okoaskin-lifting",
    rank: 5,
    badge: "Best All-Rounder",
    name: "Dual Action Lifting Cream",
    brand: "OKOA",
    texture: "Lightweight Cream",
    price: 62,
    size: "30ml",
    pricePerMl: 2.07,
    absorption: "20 sec",
    finish: "Velvet",
    antiAging: "4/5",
    keyIngredient: "Idealift™ Peptides + Sodium Hyaluronate",
    bestFor: "Best for starting anti-aging journey: Effective peptides without intimidating actives. Great entry into serious lifting.",
    pros: ["325% elastin boost proven", "Clean ingredients", "90-day guarantee"],
    cons: ["Smaller size", "Lighter than luxury options"],
    image: "/images/okoa-lifting-cream.jpg",
    affiliateUrl: "https://okoaskin.com/products/okoa-lifting-cream?utm_source=bestliftingcream",
    reviewUrl: "/reviews/okoaskin-lifting",
    rating: 4.8,
    reviewCount: 127,
    isTopPick: false,
  },
];

const faqData = [
  { question: "What age should I start using lifting creams?", answer: "Prevention starts at 25-30 with lighter formulas. By 40+, more intensive lifting creams become essential. It's never too late to start—mature skin responds well to quality formulations." },
  { question: "Can lifting creams replace Botox or fillers?", answer: "Topical creams work differently than injectables. They can reduce fine lines, improve firmness, and slow aging, but won't replicate the dramatic, immediate results of Botox or fillers. Many people use both together." },
  { question: "How long until I see results from a lifting cream?", answer: "Initial hydration benefits show in days. Visible lifting typically takes 4-6 weeks as collagen production increases. Maximum results usually appear at 12 weeks of consistent use." },
  { question: "Should I use retinol with my lifting cream?", answer: "Many lifting creams already contain retinol. If yours doesn't, you can layer—apply retinol first, wait, then lifting cream. Start slowly to avoid irritation." },
  { question: "Is expensive always better for mature skin?", answer: "Not necessarily. Our #4 pick (No7) at $37 has clinical backing rivaling luxury brands. What matters is proven ingredients (peptides, retinol, vitamin C) in effective concentrations." },
];

const commonMistakes = [
  { mistake: "Using the same products as your 30s", fix: "Mature skin needs richer formulas with more potent actives. Upgrade your routine every decade." },
  { mistake: "Skipping the neck and décolletage", fix: "These areas show age faster than face. Always extend lifting cream application down." },
  { mistake: "Expecting overnight results", fix: "Collagen regeneration takes time. Commit to 12 weeks before judging effectiveness." },
  { mistake: "Neglecting sun protection", fix: "UV damage accelerates aging more than anything. SPF 30+ daily is non-negotiable." },
  { mistake: "Using too many active products", fix: "Overloading skin causes irritation. Focus on 2-3 key actives maximum." },
];

const skinTypeNav = [
  { type: "Oily Skin", description: "Mattifying formulas", url: "/best-lifting-cream-oily-skin", icon: Sun },
  { type: "Dry Skin", description: "Rich, hydrating formulas", url: "/best-lifting-cream-dry-skin", icon: Droplets },
  { type: "Sensitive Skin", description: "Gentle, fragrance-free", url: "/best-lifting-cream-sensitive-skin", icon: Shield },
  { type: "Combination Skin", description: "Balanced formulations", url: "/best-lifting-cream-combination-skin", icon: Zap },
];

const getSchemas = () => [
  { "@context": "https://schema.org", "@type": "Article", "headline": "Best Lifting Cream for Mature Skin 2026: Maximum Anti-Aging Power", "description": "Powerful lifting creams for 50+ skin. Clinically proven formulas with retinol, peptides, and growth factors for visible wrinkle reduction.", "author": { "@type": "Organization", "name": "BestLiftingCream.com" }, "datePublished": "2026-01-30" },
  { "@context": "https://schema.org", "@type": "ItemList", "itemListElement": matureSkinProducts.map(p => ({ "@type": "ListItem", "position": p.rank, "name": `${p.brand} ${p.name}` })) },
  { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }
];

export default function BestLiftingCreamMatureSkin() {
  const scrollToProducts = () => document.getElementById('top-products')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <SEOHead page={PAGE_SEO.matureSkin} schema={getSchemas()} />
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="bg-amber-50 border-b border-amber-100 py-2 px-4 text-center sticky top-16 z-40">
          <Link to="/skin-type-quiz" className="text-sm text-amber-700 hover:text-amber-900 font-medium inline-flex items-center gap-1">
            Find the right potency for your skin age <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/best-lifting-cream-by-skin-type">By Skin Type</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Mature Skin</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <section className="grid lg:grid-cols-5 gap-8 mb-16">
            <div className="lg:col-span-3 flex flex-col justify-center">
              <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase mb-3">CLINICALLY PROVEN</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">Best Lifting Cream for Mature Skin 2026: Maximum Anti-Aging Power</h1>
              <p className="text-lg text-muted-foreground mb-6">Powerful lifting formulas for 50+ skin with peptides, retinol, and growth factors. Clinically proven to reduce wrinkles and restore firmness.</p>
              <Button onClick={scrollToProducts} size="lg" className="w-fit bg-amber-600 hover:bg-amber-700">Jump to Top 5 Products <ArrowRight className="w-4 h-4 ml-2" /></Button>
              <div className="flex flex-wrap gap-4 mt-8">
                <Badge variant="outline" className="px-3 py-1.5 border-amber-200 bg-amber-50 text-amber-700"><Sparkles className="w-4 h-4 mr-1.5" /> Clinical Trials</Badge>
                <Badge variant="outline" className="px-3 py-1.5 border-amber-200 bg-amber-50 text-amber-700"><Check className="w-4 h-4 mr-1.5" /> Anti-Aging Experts</Badge>
                <Badge variant="outline" className="px-3 py-1.5 border-amber-200 bg-amber-50 text-amber-700"><Shield className="w-4 h-4 mr-1.5" /> Visible Results</Badge>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative aspect-[9/16] max-w-[280px] mx-auto bg-muted rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 to-amber-600/40 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto mb-4"><Play className="w-8 h-8 text-white fill-white" /></div>
                    <p className="text-sm font-medium">Watch: 12-week transformation</p>
                  </div>
                </div>
                <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=280&h=500&fit=crop" alt="Mature skin lifting routine" className="w-full h-full object-cover opacity-60" loading="lazy" />
              </div>
            </div>
          </section>

          <section className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Mature Skin Needs Powerful Formulas</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground"><strong className="text-foreground">The Reality:</strong> After 50, collagen production drops 1-2% per year. Skin becomes thinner, drier, and loses elasticity faster.</p>
              <p className="text-muted-foreground"><strong className="text-foreground">The Science:</strong> You need potent actives—retinol, peptides, growth factors—in high enough concentrations to stimulate cell renewal.</p>
              <p className="text-muted-foreground"><strong className="text-foreground">The Solution:</strong> Clinically proven formulas with multiple anti-aging mechanisms that work synergistically.</p>
            </div>
          </section>

          <section id="top-products" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold text-foreground mb-2">The 5 Best Lifting Creams for Mature Skin</h2>
            <p className="text-muted-foreground mb-8">Expert-selected for maximum anti-aging results</p>
            <div className="space-y-6">
              {matureSkinProducts.map((product) => (
                <Card key={product.id} className={`overflow-hidden ${product.isTopPick ? 'ring-2 ring-amber-500 shadow-amber-100' : ''}`}>
                  {product.isTopPick && <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white text-center py-1.5 text-sm font-semibold">#{product.rank} Editor's Choice</div>}
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
                              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">{product.texture}</Badge>
                              {!product.isTopPick && <Badge variant="outline">{product.badge}</Badge>}
                            </div>
                            <h3 className="text-xl font-bold">{product.brand} {product.name}</h3>
                            <p className="text-sm text-amber-700 font-medium">Key: {product.keyIngredient}</p>
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
                          <span><strong>Anti-Aging:</strong> {product.antiAging}</span>
                        </div>
                        <p className="text-muted-foreground mb-4">{product.bestFor}</p>
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                          <div>{product.pros.map((pro, i) => <div key={i} className="flex items-start gap-2 text-sm mb-1"><Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>{pro}</span></div>)}</div>
                          <div>{product.cons.map((con, i) => <div key={i} className="flex items-start gap-2 text-sm mb-1"><X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /><span>{con}</span></div>)}</div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <Button variant="outline" asChild><Link to={product.reviewUrl}>Read Full Review</Link></Button>
                          <Button className={product.isTopPick ? 'bg-gradient-to-r from-amber-600 to-amber-500' : ''} asChild><AffiliateLink href={product.affiliateUrl} productName={product.name}>{product.isTopPick ? 'Get Best Price' : 'Check Price'}</AffiliateLink></Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">5 Anti-Aging Mistakes to Avoid</h2>
            <div className="space-y-4">
              {commonMistakes.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid sm:grid-cols-2">
                      <div className="p-5 bg-red-50/50 border-r border-red-100"><div className="flex items-start gap-3"><span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">{index + 1}</span><div><p className="font-semibold text-red-700">Mistake:</p><p className="text-muted-foreground">{item.mistake}</p></div></div></div>
                      <div className="p-5 bg-amber-50/50"><div className="flex items-start gap-3"><Check className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" /><div><p className="font-semibold text-amber-700">Fix:</p><p className="text-muted-foreground">{item.fix}</p></div></div></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">FAQ: Mature Skin & Lifting Creams</h2>
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
                  <s.icon className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="font-semibold mb-1 group-hover:text-amber-600">{s.type}</h3>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-8 md:p-12 text-center text-white mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for Visible Results?</h2>
            <p className="text-amber-100 mb-6">Start your anti-aging journey with our personalized assessment.</p>
            <Button size="lg" variant="hero" asChild><Link to="/skin-type-quiz">Get Recommendations <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
