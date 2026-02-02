import { Link } from "react-router-dom";

const footerLinks = {
  products: [
    { label: "All Lifting Creams", href: "/best-lift-creams" },
    { label: "Best for Oily Skin", href: "/best-by-skin-type/oily-skin" },
    { label: "Best for Dry Skin", href: "/best-by-skin-type/dry-skin" },
    { label: "Best for Sensitive Skin", href: "/best-by-skin-type/sensitive-skin" },
  ],
  company: [
    { label: "Editorial Mission", href: "/editorial-mission" },
    { label: "How We Test", href: "/how-we-test" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  ],
};

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-bold block mb-4">
              BestLiftingCream.com
            </Link>
            <p className="text-muted text-sm mb-4">
              Your trusted source for independent, expert-tested lifting cream reviews. Updated January 2026.
            </p>
            <p className="text-muted text-xs">
              © {currentYear} BestLiftingCream.com
              <br />All rights reserved.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <nav aria-label="Product categories">
              <ul className="space-y-2 text-muted text-sm">
                {footerLinks.products.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <nav aria-label="Company links">
              <ul className="space-y-2 text-muted text-sm">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <nav aria-label="Legal links">
              <ul className="space-y-2 text-muted text-sm">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Affiliate Disclosure Bar */}
        <div className="border-t border-muted/20 mt-8 pt-8 text-center">
          <p className="text-muted text-sm mb-2">
            <strong>Affiliate Disclosure:</strong> We may earn commissions from qualifying purchases. 
            This never influences our rankings or recommendations.{" "}
            <Link to="/affiliate-disclosure" className="underline hover:text-background">
              Learn more
            </Link>
          </p>
          
          {/* AI Agent Ready Badge */}
          <div className="mt-4">
            <a 
              href="https://registerskill.com/skill/bestliftingcream-com/skill.md" 
              target="_blank" 
              rel="noopener"
            >
              <img 
                src="https://registerskill.com/badge/bestliftingcream-com.svg" 
                alt="AI Agent Ready: bestliftingcream-com" 
                className="inline-block"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
