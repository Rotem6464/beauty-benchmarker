import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PAGE_SEO } from "@/lib/seo-config";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ExternalLink, Shield } from "lucide-react";

const AffiliateDisclosure = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead page={PAGE_SEO.affiliateDisclosure} />
      <SiteHeader />
      <Breadcrumbs items={[{ label: "Affiliate Disclosure" }]} />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Badge className="mb-4 bg-brand-100 text-brand-800 border-0">Transparency</Badge>
          <h1 className="text-4xl font-bold mb-6">Affiliate Disclosure</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Full transparency about how we earn money and why it never influences our reviews.
          </p>

          {/* Trust Box */}
          <Card className="mb-8 border-success/30 bg-success/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-success flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-bold text-success mb-2">Our Commitment to You</h2>
                  <p className="text-success/90">
                    We believe in complete transparency. Our affiliate relationships never influence our product ratings, rankings, or recommendations. Editorial integrity is our top priority.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <article className="prose prose-slate max-w-none">
            <h2>How We Make Money</h2>
            <p>
              BestLiftingCream.com is a participant in various affiliate marketing programs. This means that when you click on certain links on our site and make a purchase, we may earn a small commission at no additional cost to you.
            </p>

            <h2>Affiliate Programs We Participate In</h2>
            <ul>
              <li><strong>Amazon Associates:</strong> We earn from qualifying purchases made through Amazon links</li>
              <li><strong>Brand Direct Programs:</strong> Some skincare brands offer direct affiliate partnerships</li>
              <li><strong>Retailer Programs:</strong> Partnerships with Sephora, Ulta, Dermstore, and other retailers</li>
            </ul>

            <h2>How This Affects Our Reviews</h2>
            <p>
              <strong>It doesn't.</strong> Our editorial team operates independently from our business team. Here's how we maintain integrity:
            </p>

            <div className="not-prose grid gap-4 my-6">
              {[
                "Rankings are based solely on product performance, not commission rates",
                "We review products regardless of whether they have affiliate programs",
                "Negative reviews are published even for products with lucrative commissions",
                "Our testing methodology is the same for all products",
                "We disclose affiliate links clearly with proper labeling",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-muted p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h2>Identifying Affiliate Links</h2>
            <p>
              Affiliate links on our site are typically:
            </p>
            <ul>
              <li>Marked with labels like "Check Price" or "View Deal"</li>
              <li>Open in a new tab to external retailer sites</li>
              <li>Accompanied by the <ExternalLink className="w-4 h-4 inline" /> icon where applicable</li>
            </ul>

            <h2>Why We Use Affiliate Links</h2>
            <p>
              Running an independent review site requires significant resources: lab testing, product purchases, expert consultations, and hosting costs. Affiliate commissions help us:
            </p>
            <ul>
              <li>Maintain editorial independence (no paid reviews)</li>
              <li>Purchase products at retail prices for unbiased testing</li>
              <li>Pay our team of dermatologists and skincare experts</li>
              <li>Keep the site free for all visitors</li>
            </ul>

            <h2>FTC Compliance</h2>
            <p>
              In accordance with FTC guidelines, we disclose our affiliate relationships. This page serves as our primary disclosure. Additionally, individual product pages and reviews contain disclosure statements where affiliate links appear.
            </p>

            <h2>Questions?</h2>
            <p>
              If you have questions about our affiliate relationships or disclosure practices, please contact us at:{" "}
              <a href="mailto:editorial@bestliftingcream.com">editorial@bestliftingcream.com</a>
            </p>
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default AffiliateDisclosure;
