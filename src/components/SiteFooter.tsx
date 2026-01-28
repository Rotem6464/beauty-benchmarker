import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">BestLiftingCream.com</h3>
            <p className="text-muted text-sm">
              Your trusted source for lifting cream comparisons and reviews. Updated January 2026.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">By Skin Type</h4>
            <ul className="space-y-2 text-muted text-sm">
              <li><a href="#" className="hover:text-background transition-colors">Oily Skin</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Dry Skin</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Sensitive Skin</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Combination Skin</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">By Age</h4>
            <ul className="space-y-2 text-muted text-sm">
              <li><a href="#" className="hover:text-background transition-colors">30s</a></li>
              <li><a href="#" className="hover:text-background transition-colors">40s</a></li>
              <li><a href="#" className="hover:text-background transition-colors">50s</a></li>
              <li><a href="#" className="hover:text-background transition-colors">60+</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-muted text-sm">
              <li><Link to="/editorial-mission" className="hover:text-background transition-colors">Editorial Mission</Link></li>
              <li><Link to="/how-we-test" className="hover:text-background transition-colors">How We Test</Link></li>
              <li><Link to="/experts" className="hover:text-background transition-colors">Our Expert Team</Link></li>
              <li><a href="mailto:contact@bestliftingcream.com" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-muted/20 mt-8 pt-8 text-center text-muted text-sm">
          <p>Affiliate Disclosure: We may earn commissions from qualifying purchases.</p>
          <p className="mt-2">&copy; 2026 BestLiftingCream.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
