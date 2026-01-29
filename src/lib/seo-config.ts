// SEO Configuration for BestLiftingCream.com
export const SITE_CONFIG = {
  name: "BestLiftingCream.com",
  url: "https://bestliftcream.com",
  description: "Compare 60+ lifting creams by skin type, climate, age, ingredients, and price. Expert-tested recommendations for firmer, younger-looking skin.",
  author: "BestLiftingCream.com Editorial Team",
  twitterHandle: "@BestLiftCream",
  defaultImage: "/og-image.png",
  locale: "en_US",
};

export interface PageSEO {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  schema?: object[];
}

export const PAGE_SEO: Record<string, PageSEO> = {
  home: {
    title: "Best Lifting Creams 2026 - Expert Reviews & Comparisons | BestLiftingCream.com",
    description: "Compare 60+ lifting creams by skin type, climate, age, ingredients, and price. Expert-tested recommendations for firmer, younger-looking skin.",
    path: "/",
  },
  bestLiftCreams: {
    title: "Best Lift Creams 2026 - Complete Comparison & Reviews",
    description: "Browse and compare all 60+ lifting creams tested by our experts. Filter by skin type, price, ingredients, and ethical values to find your perfect match.",
    path: "/best-lift-creams",
  },
  editorialMission: {
    title: "Our Editorial Mission - BestLiftingCream.com",
    description: "Learn about our commitment to independent, expert-driven skincare reviews. No paid reviews, full transparency, and science-backed testing methods.",
    path: "/editorial-mission",
  },
  howWeTest: {
    title: "How We Test Lifting Creams - Our Methodology",
    description: "Discover our rigorous 8-week testing protocol for lifting creams. Lab analysis, real-world testing, and dermatologist reviews for honest results.",
    path: "/how-we-test",
  },
  experts: {
    title: "Meet Our Expert Team - Dermatologists & Skincare Scientists",
    description: "Our team of board-certified dermatologists, cosmetic chemists, and skincare journalists with 50+ years combined experience testing products.",
    path: "/experts",
  },
  privacy: {
    title: "Privacy Policy - BestLiftingCream.com",
    description: "Read our privacy policy to understand how we collect, use, and protect your personal information when you visit BestLiftingCream.com.",
    path: "/privacy",
  },
  terms: {
    title: "Terms of Service - BestLiftingCream.com",
    description: "Terms and conditions for using BestLiftingCream.com. By accessing our site, you agree to these terms of service.",
    path: "/terms",
  },
  affiliateDisclosure: {
    title: "Affiliate Disclosure - BestLiftingCream.com",
    description: "Full disclosure of our affiliate relationships. We may earn commissions from qualifying purchases, but this never influences our independent reviews.",
    path: "/affiliate-disclosure",
  },
  contact: {
    title: "Contact Us - BestLiftingCream.com",
    description: "Get in touch with our editorial team. Questions, corrections, or feedback - we'd love to hear from you.",
    path: "/contact",
  },
  oilySkin: {
    title: "Best Lifting Cream for Oily Skin 2026 | Non-Comedogenic & Mattifying",
    description: "Tired of greasy lifting creams? We tested 60+ formulas on oily skin. Discover oil-free, non-comedogenic creams that firm skin without breakouts or shine.",
    path: "/best-lifting-cream-oily-skin",
  },
};

// Generate Organization Schema
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo.png`,
  sameAs: [
    "https://twitter.com/BestLiftCream",
    "https://www.facebook.com/BestLiftCream",
    "https://www.instagram.com/bestliftcream",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@bestliftcream.com",
    contactType: "customer service",
  },
});

// Generate WebSite Schema with SearchAction
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.url}/?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
});

// Generate BreadcrumbList Schema
export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Generate ItemList Schema for product listings
export const getItemListSchema = (products: { name: string; url: string; position: number }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((product) => ({
    "@type": "ListItem",
    position: product.position,
    name: product.name,
    url: product.url,
  })),
});

// Generate FAQPage Schema
export const getFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// All routes for sitemap generation
export const ALL_ROUTES = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/best-lift-creams", priority: 0.9, changefreq: "weekly" },
  { path: "/best-lifting-cream-oily-skin", priority: 0.9, changefreq: "weekly" },
  { path: "/editorial-mission", priority: 0.8, changefreq: "monthly" },
  { path: "/how-we-test", priority: 0.8, changefreq: "monthly" },
  { path: "/experts", priority: 0.7, changefreq: "monthly" },
  { path: "/privacy", priority: 0.3, changefreq: "yearly" },
  { path: "/terms", priority: 0.3, changefreq: "yearly" },
  { path: "/affiliate-disclosure", priority: 0.4, changefreq: "yearly" },
  { path: "/contact", priority: 0.5, changefreq: "yearly" },
];
