import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PAGE_SEO } from "@/lib/seo-config";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead page={PAGE_SEO.terms} />
      <SiteHeader />
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto prose prose-slate">
          <h1>Terms of Service</h1>
          <p className="lead text-muted-foreground">
            Last updated: January 28, 2026
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using BestLiftingCream.com ("the Site"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our Site.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            BestLiftingCream.com provides product reviews, comparisons, and recommendations for lifting creams and skincare products. Our content is for informational purposes only and should not replace professional medical advice.
          </p>

          <h2>3. Affiliate Disclosure</h2>
          <p>
            We participate in affiliate marketing programs. When you click affiliate links and make purchases, we may earn commissions at no additional cost to you. This compensation does not influence our editorial opinions or product rankings. See our{" "}
            <a href="/affiliate-disclosure">Affiliate Disclosure</a> for full details.
          </p>

          <h2>4. Medical Disclaimer</h2>
          <p>
            Content on this Site is not intended as medical advice. Always consult with a dermatologist or healthcare provider before starting any new skincare regimen, especially if you have sensitive skin, allergies, or skin conditions.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this Site—including text, graphics, logos, and images—is the property of BestLiftingCream.com or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without written permission.
          </p>

          <h2>6. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Site for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of the Site</li>
            <li>Scrape or harvest content without permission</li>
          </ul>

          <h2>7. Third-Party Links</h2>
          <p>
            Our Site contains links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites. Clicking these links is at your own risk.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            BestLiftingCream.com is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the Site or reliance on its content.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the Site after changes constitutes acceptance of the new Terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of California, USA, without regard to conflict of law principles.
          </p>

          <h2>11. Contact</h2>
          <p>
            Questions about these Terms? Contact us at:{" "}
            <a href="mailto:legal@bestliftingcream.com">legal@bestliftingcream.com</a>
          </p>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
};

export default TermsOfService;
