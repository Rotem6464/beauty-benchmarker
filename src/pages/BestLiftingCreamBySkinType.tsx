import { SEOHead } from "@/components/SEOHead";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  ArrowRight, 
  Droplets, 
  Shield, 
  Sparkles,
  Sun,
  Zap,
  Check,
  HelpCircle
} from "lucide-react";
import { SITE_CONFIG, PAGE_SEO } from "@/lib/seo-config";

// Skin type data
const skinTypes = [
  {
    id: "oily",
    name: "Oily Skin",
    tagline: "Mattifying formulas that lift without shine",
    description: "If your T-zone gets shiny by midday, you produce excess sebum. You need oil-free, non-comedogenic lifting creams that mattify while firming.",
    icon: Sun,
    color: "teal",
    characteristics: ["Visible pores", "Shiny T-zone", "Prone to breakouts", "Makeup slides off"],
    bestIngredients: ["Niacinamide", "Salicylic Acid", "Lightweight Peptides", "Hyaluronic Acid"],
    avoidIngredients: ["Mineral Oil", "Coconut Oil", "Heavy Silicones", "Shea Butter"],
    url: "/best-lifting-cream-oily-skin",
    productCount: 12,
    topPick: "OKOA Dual Action Lifting Cream",
    isAvailable: true,
  },
  {
    id: "dry",
    name: "Dry Skin",
    tagline: "Rich, hydrating formulas for deep nourishment",
    description: "If your skin feels tight after cleansing and shows flaky patches, you need lifting creams with intense hydration and barrier-repair ingredients.",
    icon: Droplets,
    color: "blue",
    characteristics: ["Tight feeling", "Flaky patches", "Visible fine lines", "Dull complexion"],
    bestIngredients: ["Ceramides", "Squalane", "Hyaluronic Acid", "Shea Butter"],
    avoidIngredients: ["Alcohol Denat", "Fragrance", "Astringents", "Salicylic Acid"],
    url: "/best-lifting-cream-dry-skin",
    productCount: 15,
    topPick: "La Prairie Skin Caviar Liquid Lift",
    isAvailable: true,
  },
  {
    id: "sensitive",
    name: "Sensitive Skin",
    tagline: "Gentle, fragrance-free formulas that calm",
    description: "If your skin reacts easily to new products with redness or irritation, you need hypoallergenic lifting creams with soothing ingredients.",
    icon: Shield,
    color: "purple",
    characteristics: ["Reacts to products", "Redness prone", "Easily irritated", "Burning sensation"],
    bestIngredients: ["Centella Asiatica", "Aloe Vera", "Oat Extract", "Allantoin"],
    avoidIngredients: ["Fragrance", "Essential Oils", "Retinol", "AHAs/BHAs"],
    url: "/best-lifting-cream-sensitive-skin",
    productCount: 10,
    topPick: "Drunk Elephant Protini Polypeptide Cream",
    isAvailable: true,
  },
  {
    id: "mature",
    name: "Mature Skin",
    tagline: "Maximum anti-aging power for visible results",
    description: "If you're 50+ with deeper wrinkles and loss of elasticity, you need potent lifting creams with proven anti-aging actives and rich textures.",
    icon: Sparkles,
    color: "amber",
    characteristics: ["Deep wrinkles", "Loss of firmness", "Age spots", "Thin skin"],
    bestIngredients: ["Retinol", "Peptides", "Vitamin C", "Growth Factors"],
    avoidIngredients: ["Harsh Exfoliants", "Drying Alcohols", "Strong Acids"],
    url: "/best-lifting-cream-mature-skin",
    productCount: 18,
    topPick: "Augustinus Bader The Cream",
    isAvailable: true,
  },
  {
    id: "combination",
    name: "Combination Skin",
    tagline: "Balanced formulas for mixed skin needs",
    description: "If your T-zone is oily but cheeks are dry, you need lifting creams that balance hydration without over-moisturizing or mattifying too much.",
    icon: Zap,
    color: "green",
    characteristics: ["Oily T-zone", "Dry cheeks", "Normal chin", "Variable throughout day"],
    bestIngredients: ["Niacinamide", "Lightweight Hyaluronic Acid", "Gel-Cream Textures", "Adaptogens"],
    avoidIngredients: ["Heavy Oils", "Thick Creams", "Mattifying Powders"],
    url: "/best-lifting-cream-combination-skin",
    productCount: 14,
    topPick: "Round Lab Deep Collagen Firming Cream",
    isAvailable: true,
  },
];

// Quiz questions for skin type identification
const quizQuestions = [
  {
    question: "How does your skin feel 2 hours after washing your face?",
    options: [
      { answer: "Tight and dry", skinType: "dry" },
      { answer: "Shiny all over", skinType: "oily" },
      { answer: "Oily T-zone, dry cheeks", skinType: "combination" },
      { answer: "Comfortable, no issues", skinType: "normal" },
    ],
  },
  {
    question: "How does your skin react to new skincare products?",
    options: [
      { answer: "Often gets red or irritated", skinType: "sensitive" },
      { answer: "Breaks out easily", skinType: "oily" },
      { answer: "Absorbs well, no issues", skinType: "normal" },
      { answer: "Can feel drier initially", skinType: "dry" },
    ],
  },
  {
    question: "What's your biggest skin concern?",
    options: [
      { answer: "Excess shine and large pores", skinType: "oily" },
      { answer: "Flakiness and tightness", skinType: "dry" },
      { answer: "Redness and reactivity", skinType: "sensitive" },
      { answer: "Fine lines and loss of firmness", skinType: "mature" },
    ],
  },
];

// FAQ data
const faqData = [
  {
    question: "How do I know my skin type?",
    answer: "The easiest test: wash your face with a gentle cleanser, wait 2 hours without applying anything, then check. Oily skin will be shiny all over. Dry skin feels tight and may show flakes. Combination shows oil in the T-zone but dry cheeks. Sensitive skin may show redness or feel reactive."
  },
  {
    question: "Can my skin type change over time?",
    answer: "Yes! Skin type can change due to age (skin gets drier), hormones, climate, medications, and skincare routine. Many people find their oily skin becomes combination or normal in their 40s, while dry skin concerns increase with age."
  },
  {
    question: "Should I use different lifting creams for different areas of my face?",
    answer: "For combination skin, this can be helpful. Use a lighter gel-cream on your oily T-zone and a richer formula on dry cheeks. However, many modern formulas are designed to adapt to different areas of the face."
  },
  {
    question: "What if I have oily AND sensitive skin?",
    answer: "This combination is common! Look for oil-free, fragrance-free formulas with gentle ingredients like niacinamide. Avoid both heavy oils AND harsh astringents. Our oily skin guide includes sensitive-friendly options."
  },
  {
    question: "Do I need a different lifting cream for day vs night?",
    answer: "It depends on your skin type. Oily skin often does well with the same lightweight formula AM/PM. Dry and mature skin benefit from a lighter day cream (under SPF) and richer night cream. We cover day/night recommendations in each skin type guide."
  },
];

// Schema markup
const getArticleSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Lifting Cream by Skin Type 2026: Find Your Perfect Match",
  "description": "Discover the best lifting cream for your specific skin type. Expert guides for oily, dry, sensitive, mature, and combination skin with personalized recommendations.",
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
    "@id": `${SITE_CONFIG.url}/best-lifting-cream-by-skin-type`
  }
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

const getItemListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": skinTypes.map((type, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": `Best Lifting Cream for ${type.name}`,
    "url": `${SITE_CONFIG.url}${type.url}`
  }))
});

export default function BestLiftingCreamBySkinType() {
  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; light: string }> = {
      teal: { bg: "bg-teal-600", border: "border-teal-200", text: "text-teal-700", light: "bg-teal-50" },
      blue: { bg: "bg-blue-600", border: "border-blue-200", text: "text-blue-700", light: "bg-blue-50" },
      purple: { bg: "bg-purple-600", border: "border-purple-200", text: "text-purple-700", light: "bg-purple-50" },
      amber: { bg: "bg-amber-600", border: "border-amber-200", text: "text-amber-700", light: "bg-amber-50" },
      green: { bg: "bg-green-600", border: "border-green-200", text: "text-green-700", light: "bg-green-50" },
    };
    return colors[color] || colors.teal;
  };

  return (
    <>
      <SEOHead 
        page={PAGE_SEO.skinTypePillar} 
        schema={[getArticleSchema(), getBreadcrumbSchema(), getFAQSchema(), getItemListSchema()]} 
      />
      
      <div className="min-h-screen bg-background">
        <SiteHeader />

        <main className="container mx-auto px-4 py-8 max-w-6xl">
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
                <BreadcrumbPage>By Skin Type</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero Section */}
          <section className="text-center mb-16">
            <Badge className="mb-4 bg-brand-100 text-brand-700 hover:bg-brand-100">
              Personalized Recommendations
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Best Lifting Cream by Skin Type
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Not all lifting creams work for everyone. Find the perfect formula for YOUR skin type with our expert-tested recommendations.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>60+ Products Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>5 Skin Types Covered</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Dermatologist Reviewed</span>
              </div>
            </div>
          </section>

          {/* Skin Type Quick Selector */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Choose Your Skin Type</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skinTypes.map((skinType) => {
                const colors = getColorClasses(skinType.color);
                const IconComponent = skinType.icon;
                
                return (
                  <Card 
                    key={skinType.id} 
                    className={`overflow-hidden hover:shadow-lg transition-all ${skinType.isAvailable ? 'cursor-pointer' : 'opacity-75'} ${colors.border}`}
                  >
                    <CardContent className="p-0">
                      {/* Header */}
                      <div className={`${colors.light} p-6 border-b ${colors.border}`}>
                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          {skinType.isAvailable ? (
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                              Guide Available
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-muted-foreground">
                              Coming Soon
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-1">{skinType.name}</h3>
                        <p className={`text-sm ${colors.text}`}>{skinType.tagline}</p>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <p className="text-muted-foreground text-sm mb-4">
                          {skinType.description}
                        </p>

                        {/* Characteristics */}
                        <div className="mb-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                            Signs you have this type:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {skinType.characteristics.map((char, i) => (
                              <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                                {char}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Top Pick */}
                        <div className={`${colors.light} rounded-lg p-3 mb-4`}>
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                            Our Top Pick:
                          </p>
                          <p className={`font-medium ${colors.text}`}>{skinType.topPick}</p>
                        </div>

                        {/* CTA */}
                        {skinType.isAvailable ? (
                          <Button className={`w-full ${colors.bg} hover:opacity-90`} asChild>
                            <Link to={skinType.url}>
                              View {skinType.productCount} Products
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        ) : (
                          <Button className="w-full" variant="outline" disabled>
                            Coming Soon
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Not Sure Section */}
          <section className="mb-16 bg-gradient-to-r from-brand-50 to-accent-pink/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="w-6 h-6 text-brand-600" />
                  <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
                    Not Sure?
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Take Our Skin Type Quiz
                </h2>
                <p className="text-muted-foreground mb-6">
                  Answer 3 simple questions to discover your skin type and get personalized lifting cream recommendations tailored just for you.
                </p>
                <Button size="lg" asChild>
                  <Link to="/skin-type-quiz">
                    Start 30-Second Quiz
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              
              <div className="space-y-4">
                {quizQuestions.map((q, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-muted-foreground mb-1">Question {index + 1}</p>
                    <p className="font-medium">{q.question}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ingredient Guide */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              Quick Ingredient Guide by Skin Type
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Different skin types need different ingredients. Here's a quick reference to help you choose.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-background rounded-lg overflow-hidden shadow-sm border">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Skin Type</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-green-700">Look For</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-red-700">Avoid</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {skinTypes.map((type) => {
                    const colors = getColorClasses(type.color);
                    return (
                      <tr key={type.id} className="hover:bg-muted/30">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <type.icon className={`w-4 h-4 ${colors.text}`} />
                            <span className="font-medium">{type.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {type.bestIngredients.slice(0, 3).map((ing, i) => (
                              <span key={i} className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                {ing}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {type.avoidIngredients.slice(0, 3).map((ing, i) => (
                              <span key={i} className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                                {ing}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8">
              Frequently Asked Questions
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

          {/* Bottom CTA */}
          <section className="bg-gradient-to-r from-brand-600 to-accent-pink rounded-2xl p-8 md:p-12 text-center text-white mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Find Your Perfect Lifting Cream?
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Start with our most popular guide—best lifting creams for oily skin—or take the quiz to find your type.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="hero" asChild>
                <Link to="/best-lifting-cream-oily-skin">
                  View Oily Skin Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="heroOutline" asChild>
                <Link to="/skin-type-quiz">
                  Take Skin Type Quiz
                </Link>
              </Button>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
