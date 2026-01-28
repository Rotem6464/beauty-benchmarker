import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PAGE_SEO } from "@/lib/seo-config";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead page={PAGE_SEO.privacy} />
      <SiteHeader />
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto prose prose-slate">
          <h1>Privacy Policy</h1>
          <p className="lead text-muted-foreground">
            Last updated: January 28, 2026
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            BestLiftingCream.com ("we," "our," or "us") collects information to provide and improve our services. This includes:
          </p>
          <ul>
            <li><strong>Usage Data:</strong> Pages visited, time spent, clicks, and navigation patterns</li>
            <li><strong>Device Information:</strong> Browser type, operating system, device type</li>
            <li><strong>Contact Information:</strong> Email address when you contact us voluntarily</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Analyze and improve our website content and user experience</li>
            <li>Understand which products and content are most helpful</li>
            <li>Respond to your inquiries and feedback</li>
            <li>Detect and prevent fraud or abuse</li>
          </ul>

          <h2>3. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies (Google Analytics) to understand how visitors interact with our site. You can control cookies through your browser settings.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            Our site contains affiliate links to third-party retailers. When you click these links, you leave our site and are subject to the privacy policies of those third parties. We receive referral commissions for qualifying purchases.
          </p>
          <p>Third-party services we use include:</p>
          <ul>
            <li>Google Analytics (analytics)</li>
            <li>Amazon Associates Program (affiliate)</li>
            <li>Various skincare brand affiliate programs</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We retain analytics data for up to 26 months. Contact form submissions are retained for up to 2 years unless you request deletion.
          </p>

          <h2>6. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of analytics tracking</li>
          </ul>

          <h2>7. Children's Privacy</h2>
          <p>
            Our site is not intended for children under 13. We do not knowingly collect data from children.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this policy periodically. Changes will be posted on this page with an updated revision date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            For privacy-related questions, contact us at:{" "}
            <a href="mailto:privacy@bestliftingcream.com">privacy@bestliftingcream.com</a>
          </p>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
};

export default PrivacyPolicy;
